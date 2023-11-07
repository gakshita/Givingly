import Button from "@Components/Buttons";
import { Container } from "./style";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CustomModal from "@Components/Modal";
import { useProjectModal } from "src/context/GlobalContext";
import { useState } from "react";
import axios from "axios";
import { BASEURL } from "src/config";
import { CircularProgress } from "@mui/material";
import { categories } from "src/config";
import Completed from "@Components/Completed";

type InputType = {
    creator: string;
    expiration: string;
    project_info: {
        name: string;
        description: string;
        goal: number;
        categories: string[];
    };
};
const initialState: InputType = {
    creator: "akshita",
    expiration: "",
    project_info: {
        name: "",
        description: "",
        goal: 100,
        categories: []
    }
};
const ProjectForm = () => {
    const [inputs, setInputs] = useState<InputType>(initialState);
    const [completed, setCompleted] = useState(false);
    const [processing, setProcessing] = useState(false);

    const onSubmit = async () => {
        setProcessing(true);
        const res = await axios.post(`${BASEURL}create/project`, {
            ...inputs,
            expiration: Date.parse(inputs.expiration) / 1e3
        });

        setCompleted(true);
        setProcessing(false);
    };
    const addSubtractCategory = (category: string) => {
        if (inputs.project_info.categories.includes(category)) {
            setInputs({
                ...inputs,
                project_info: {
                    ...inputs.project_info,
                    categories: inputs.project_info.categories.filter(
                        (c) => c !== category
                    )
                }
            });
        } else {
            setInputs({
                ...inputs,
                project_info: {
                    ...inputs.project_info,
                    categories: [...inputs.project_info.categories, category]
                }
            });
        }
    };
    return completed ? (
        <Completed
            text={
                <>
                    Project added <br />
                    successfully!
                </>
            }
        />
    ) : (
        <div>
            <h1>
                Kick-off <br /> your project
            </h1>
            <div className="form">
                <div className="left">
                    <div className="detail">
                        <label>Name of your project</label>
                        <input
                            className="input"
                            type="text"
                            placeholder="Build a cat shelter"
                            value={inputs.project_info["name"]}
                            onChange={(e) =>
                                setInputs({
                                    ...inputs,
                                    project_info: {
                                        ...inputs.project_info,
                                        name: e.target.value
                                    }
                                })
                            }
                        ></input>
                    </div>
                    <div className="detail">
                        <label>Add your goal</label>
                        <div className="flex">
                            <span className="currency">$</span>
                            <input
                                className="input goal"
                                type="text"
                                placeholder={"100"}
                                value={inputs.project_info["goal"]}
                                onChange={(e) =>
                                    setInputs({
                                        ...inputs,
                                        project_info: {
                                            ...inputs.project_info,
                                            goal: parseInt(e.target.value)
                                        }
                                    })
                                }
                            ></input>
                        </div>
                    </div>
                    <div className="detail">
                        <label>Add your timeline</label>
                        <input
                            className="input"
                            type="date"
                            value={inputs.expiration}
                            onChange={(e) =>
                                setInputs({
                                    ...inputs,
                                    expiration: e.target.value
                                })
                            }
                        ></input>
                    </div>
                </div>
                <hr />
                <div className="right">
                    <div className="detail">
                        <label>About your project</label>
                        <textarea
                            className="input"
                            rows={4}
                            placeholder="So many cats, so little homes."
                            value={inputs.project_info["description"]}
                            onChange={(e) =>
                                setInputs({
                                    ...inputs,
                                    project_info: {
                                        ...inputs.project_info,
                                        description: e.target.value
                                    }
                                })
                            }
                        />
                    </div>
                    <div className="detail">
                        <label>Categories</label>
                        <div className="categories">
                            {categories.map((category, index) => {
                                return (
                                    <div
                                        className={`category ${
                                            inputs.project_info.categories.includes(
                                                category.category
                                            ) && "selected"
                                        }`}
                                        key={index}
                                        onClick={() =>
                                            addSubtractCategory(
                                                category.category
                                            )
                                        }
                                    >
                                        {category.category}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Button
                func={() => onSubmit()}
                text={
                    processing ? (
                        <CircularProgress className="loader" size={"22px"} />
                    ) : (
                        "Upload Project"
                    )
                }
                width="100%"
            ></Button>
        </div>
    );
};
export default function NewProject() {
    const { showModal, setShowModal } = useProjectModal();
    return (
        <CustomModal showModal={showModal} setShowModal={setShowModal}>
            <Container>
                <ArrowBackIosIcon
                    onClick={() => setShowModal(false)}
                    className="back-btn"
                />

                <ProjectForm />
            </Container>
        </CustomModal>
    );
}
