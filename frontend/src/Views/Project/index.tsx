import { Container, ProjectBox } from "./style";
import useProjects from "../../hooks/useProjects";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { BorderLinearProgress } from "@Components/Progressbar";
import { timeDifference } from "src/utils/relativeTime";
import { intlFormatDistance } from "date-fns";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Button from "@Components/Buttons";
import { useDonationModal } from "src/context/GlobalContext";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
const Project: React.FC = () => {
    const location = useLocation();
    const { rawProjects: projects } = useProjects();
    const [project, setProject] = useState<any>();
    const projectId = parseInt(location.pathname.split("/")[2]);
    const { showModal, setShowModal } = useDonationModal();

    useEffect(() => {
        if (!projects) return;
        setProject(projects.filter((proj) => proj.p_id == projectId)[0]);
    }, [projectId, projects]);

    return (
        <Container>
            {" "}
            {project && (
                <ProjectBox>
                    <div className="proj-img">
                        <img
                            src={`/${project.project_info.categories[0]}.svg`}
                            alt="project"
                        />
                    </div>
                    <div className="right">
                        <h2 className="title">{project.project_info.name}</h2>
                        <div className="creator">{project.creator}</div>
                        <hr />
                        <div className="flex">
                            <div className="desc">
                                <label>About project</label>
                                <div className="desc-text">
                                    {project.project_info.description}
                                </div>
                            </div>
                            <hr />

                            <div className="stats">
                                <div className="numbers">
                                    <div className="stat">
                                        <div className="label">Raised:</div>
                                        <div className="value">
                                            ${project.raised}{" "}
                                        </div>
                                    </div>
                                    <div className="stat colored">
                                        <div className="label">Goal:</div>
                                        <div className="value">
                                            ${project.project_info.goal}{" "}
                                        </div>
                                    </div>
                                </div>
                                <BorderLinearProgress
                                    variant="determinate"
                                    value={
                                        (project.raised * 100) /
                                        project.project_info.goal
                                    }
                                />
                                <div className="date">
                                    <CalendarMonthIcon className="" />{" "}
                                    <div className="days">
                                        {" "}
                                        {intlFormatDistance(
                                            project.expiration * 1000,
                                            new Date()
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        {project.raised === project.project_info.goal ? (
                            <div className="goal-reached">
                                <SentimentVerySatisfiedIcon className="smiley" />
                                Goal Reached
                            </div>
                        ) : (
                            <Button
                                disabled={
                                    project.raised === project.project_info.goal
                                }
                                text="Fund this Project"
                                width="50%"
                                className="btn"
                                func={() => setShowModal(true)}
                            />
                        )}
                    </div>
                </ProjectBox>
            )}
        </Container>
    );
};

export default Project;
