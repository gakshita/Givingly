import * as React from "react";
import { styled } from "@mui/material/styles";

import LinearProgress, {
    linearProgressClasses
} from "@mui/material/LinearProgress";
import appTheme from "../../theme";

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: appTheme.light.color.primary
    }
}));
