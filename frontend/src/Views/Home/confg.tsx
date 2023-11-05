import PetsIcon from "@mui/icons-material/Pets";
import LanguageIcon from "@mui/icons-material/Language";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import SchoolIcon from "@mui/icons-material/School";

export const categories = [
    {
        category: "all",
        icon: <LanguageIcon />
    },
    {
        category: "education",
        icon: <SchoolIcon />
    },
    {
        category: "health",
        icon: <HealthAndSafetyIcon />
    },
    {
        category: "animals",
        icon: <PetsIcon />
    },
    {
        category: "children",
        icon: <ChildCareIcon />
    }
];
