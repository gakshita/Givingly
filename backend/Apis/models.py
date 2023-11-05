from tortoise import fields
from tortoise.contrib.pydantic.creator import pydantic_model_creator
from tortoise.models import Model

import jsonfield


class Project(Model):
    p_id = fields.IntField(pk=True)
    creator = fields.CharField(
        max_length=500,
    )
    raised = fields.IntField(defaul=0)
    expiration = fields.BigIntField()
    project_info = fields.JSONField()


class Donation(Model):
    donar = fields.CharField(
        max_length=500,
    )
    project_id = fields.IntField()
    contribution = fields.IntField()
    timestamp = fields.BigIntField()


Project_Pydantic = pydantic_model_creator(Project, name="Project")
Donation_Pydantic = pydantic_model_creator(Donation, name="Donation")
