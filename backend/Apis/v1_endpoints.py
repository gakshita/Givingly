import json
import logging
import time
from contextvars import ContextVar
from typing import Awaitable, Callable, List, Optional, TypeVar, Union
import razorpay

import redis.asyncio as redis
from pipe import select

from fastapi import APIRouter, Depends, FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi_cache.backends.redis import RedisBackend

from lib.settings import settings
from pydantic import BaseModel, Field, NonNegativeInt, PositiveInt
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from tortoise import connections
from models import Project, Project_Pydantic, Donation, Donation_Pydantic


def get_cache() -> RedisBackend:
    redis_url = f"redis://{settings.REDISUSER}:{settings.REDISPASSWORD}@{settings.REDISHOST}:{settings.REDISPORT}"
    try:
        red = redis.from_url(redis_url, encoding="utf-8", decode_responses=True)
    except Exception:
        raise Exception(
            "Redis connection failed, ensure redis is running on the default port 6379"
        )
    return RedisBackend(red)


cache: RedisBackend = get_cache()


logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

router = APIRouter()


def _(content, status_code=200):
    return JSONResponse(
        content=content,
        status_code=status_code,
    )


limiter = Limiter(
    key_func=get_remote_address,
    default_limits=["1/minute"],
)
custom_rate_limit = "30/10second"

# HELPER
def serialize(data):
    return list(data | select(lambda x: x.dict()))


@router.get("/")
async def ping():
    return _({"message": "PONG"})


@router.get("/projects")
async def get_projects():
    projects = await Project_Pydantic.from_queryset(Project.all())
    if projects is None:
        projects = []

    return _(serialize(projects))


@router.get("/donations")
async def get_donations():
    donations = await Donation_Pydantic.from_queryset(Donation.all())
    if donations is None:
        donations = []

    return _(serialize(donations))


from typing_extensions import Dict, TypedDict


class ProjectInfo(TypedDict):
    name: str
    description: str
    goal: int
    categories: List[str]


class ProjectInput(BaseModel):
    creator: str
    expiration: int
    project_info: ProjectInfo


@router.post("/create/project")
async def create_project(
    project: ProjectInput,
):
    logger.info(project.project_info)
    project = await Project.create(
        creator=project.creator,
        expiration=project.expiration,
        project_info=project.project_info,
        raised=0,
    )
    result = await Project_Pydantic.from_tortoise_orm(project)
    return _(result.dict())


@router.post("/payment/create/order")
async def create_order(amount, currency, receipt):
    client = razorpay.Client(auth=(settings.RAZORPAY_KEY, settings.RAZORPAY_SECRET))
    DATA = {
        "amount": amount,
        "currency": currency,
        "receipt": receipt,
        "notes": {"key1": "value3", "key2": "value2"},
    }
    res = client.order.create(data=DATA)
    return _(res)
