import { useState } from "react";

import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Outlet } from "react-router-dom";
import Navbar from "@Components/Navbar";
import { LayoutStyle } from "./style";
const Layout = () => {
    const [currentTheme, setCurrentTheme] = useState("light");
    return (
        <ThemeProvider theme={theme[currentTheme as keyof typeof theme]}>
            <LayoutStyle>
                <Navbar />
                <Outlet />
            </LayoutStyle>
        </ThemeProvider>
    );
};

export default Layout;
