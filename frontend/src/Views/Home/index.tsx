import {
    Container,
    ProjectBox,
    SmallProjectBox,
    CategoryContainer,
    Flex
} from "./style";
import { BorderLinearProgress } from "@Components/Progressbar";
import { useState } from "react";
import useProjects from "../../hooks/useProjects";
import { categories } from "src/config";
import { ProjectType, CategoryProps, ProjectOfTheWeekProps } from "./types";

const Categories: React.FC<CategoryProps> = ({ projects }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    return (
        <div>
            <h1>Categories</h1>
            <Flex>
                {categories.map((category, index) => {
                    return (
                        <CategoryContainer
                            key={index}
                            onClick={() =>
                                setSelectedCategory(category.category)
                            }
                        >
                            <div
                                className={`${
                                    selectedCategory === category.category &&
                                    "selected"
                                }`}
                            >
                                {category.icon}
                            </div>
                            <div className="label">{category.category}</div>
                        </CategoryContainer>
                    );
                })}
            </Flex>
            <Flex className="projects">
                {projects[selectedCategory] &&
                projects[selectedCategory].length > 0 ? (
                    projects[selectedCategory].map(
                        (project: ProjectType, index: number) => {
                            return (
                                <SmallProjectBox key={index}>
                                    <div className="proj-img">
                                        <img
                                            src={`/${project.project_info.categories[0]}.svg`}
                                            alt="project"
                                        />
                                    </div>
                                    <div className="right">
                                        <h3 className="title">
                                            {project.project_info.name}
                                        </h3>
                                        <div className="stats">
                                            <BorderLinearProgress
                                                variant="determinate"
                                                value={
                                                    (project.raised * 100) /
                                                    project.project_info.goal
                                                }
                                            />
                                            <div className="numbers">
                                                <div className="stat">
                                                    <div className="label">
                                                        Raised:
                                                    </div>
                                                    <div className="value">
                                                        ${project.raised}{" "}
                                                    </div>
                                                </div>
                                                <div className="stat">
                                                    <div className="label">
                                                        Goal:
                                                    </div>
                                                    <div className="value">
                                                        $
                                                        {
                                                            project.project_info
                                                                .goal
                                                        }{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SmallProjectBox>
                            );
                        }
                    )
                ) : (
                    <SmallProjectBox>
                        <div className="empty">No Projects</div>
                    </SmallProjectBox>
                )}
            </Flex>
        </div>
    );
};

const ProjectOfTheWeek: React.FC<ProjectOfTheWeekProps> = ({ topProject }) => {
    return (
        <div>
            <h1>Project of the week</h1>
            {topProject && (
                <ProjectBox>
                    <div className="proj-img">
                        <img
                            src={`/${topProject.project_info.categories[0]}.svg`}
                            alt="project"
                        />
                    </div>
                    <div className="right">
                        <h2 className="title">
                            {topProject.project_info.name}
                        </h2>
                        <div className="desc">
                            {topProject.project_info.description}
                        </div>
                        <div className="stats">
                            <BorderLinearProgress
                                variant="determinate"
                                value={
                                    (topProject.raised * 100) /
                                    topProject.project_info.goal
                                }
                            />
                            <div className="numbers">
                                <div className="stat">
                                    <div className="label">Raised:</div>
                                    <div className="value">
                                        ${topProject.raised}{" "}
                                    </div>
                                </div>
                                <div className="stat">
                                    <div className="label">Goal:</div>
                                    <div className="value">
                                        ${topProject.project_info.goal}{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ProjectBox>
            )}
        </div>
    );
};

const Home: React.FC = () => {
    const { projects, topProject } = useProjects();
    return (
        <Container>
            <div className="main">
                <ProjectOfTheWeek topProject={topProject} />
                <hr />
                <Categories projects={projects} />
            </div>
        </Container>
    );
};

export default Home;
