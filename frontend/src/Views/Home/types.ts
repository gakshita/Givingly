export interface ICategoriesProps {
    projects: any;
}
export type ProjectType = {
    raised: number;
    project_info: {
        name: string;
        description: string;
        goal: number;
        categories: string[];
    };
};

export type CategorizedProjectsType = { [key: string]: ProjectType[] };

export type CategoryProps = {
    projects: CategorizedProjectsType;
};

export type ProjectOfTheWeekProps = {
    topProject: ProjectType | undefined;
};
