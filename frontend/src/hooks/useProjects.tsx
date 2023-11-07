import { useState, useEffect } from "react";
import axios from "axios";
import { BASEURL } from "src/config";
import { categories } from "src/config";
import {
    ProjectType,
    CategoryProps,
    CategorizedProjectsType
} from "../Views/Home/types";

const useProjects = () => {
    const [rawProjects, setRawProjects] = useState<ProjectType[]>([]);
    const [projects, setProjects] = useState<CategorizedProjectsType>({});
    const [topProject, setTopProject] = useState<ProjectType>();
    const sortProjects = (all_projects: ProjectType[]): ProjectType[] => {
        return all_projects.sort((a, b) => {
            let goal_reached_a = a["raised"] / a["project_info"]["goal"];
            let goal_reached_b = b["raised"] / b["project_info"]["goal"];

            if (goal_reached_a < goal_reached_b) {
                return -1;
            }
            if (goal_reached_a > goal_reached_b) {
                return 1;
            }
            return 0;
        });
    };

    const filterProjects = (
        unfilteredProjects: ProjectType[]
    ): CategorizedProjectsType => {
        let categorizedProjects: CategorizedProjectsType = {};
        let filteredProjects = categories.map((category) => {
            return {
                [category.category]: unfilteredProjects.filter((project) => {
                    return project.project_info.categories.includes(
                        category.category.toLowerCase()
                    );
                })
            };
        });
        for (const item of filteredProjects) {
            const key = Object.keys(item)[0];
            categorizedProjects[key] = item[key];
        }
        categorizedProjects["all"] = unfilteredProjects;
        return categorizedProjects;
    };
    const fetchProjects = async () => {
        const response = await axios.get(`${BASEURL}projects`);

        let filteredProjects = filterProjects(response.data);
        let sortedProjects = sortProjects(response.data).reverse();

        setTopProject(sortedProjects[0]);
        setRawProjects(response.data);
        setProjects(filteredProjects);
    };
    useEffect(() => {
        fetchProjects();
    }, []);

    return { projects, topProject, rawProjects };
};

export default useProjects;
