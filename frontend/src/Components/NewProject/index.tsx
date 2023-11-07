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
        categories: ["education"]
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
    return completed ? (
        <div className="wrapper">
            {" "}
            <svg
                className="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
            >
                {" "}
                <circle
                    className="checkmark__circle"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                />{" "}
                <path
                    className="checkmark__check"
                    fill="none"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
            </svg>
            <h2>
                Project added <br />
                successfully!
            </h2>
        </div>
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
                                    <div className="category" key={index}>
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
