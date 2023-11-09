import { useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Outlet } from "react-router-dom";
import Navbar from "@Components/Navbar";
import { LayoutStyle } from "./style";
import NewProject from "@Components/NewProject";
import Donation from "@Components/Donation";
import GlobalContextProvider from "./context/GlobalContext";
import { RefresherProvider } from "./context/Refresher";
const Layout = () => {
    const [currentTheme, setCurrentTheme] = useState("light");
    return (
        <ThemeProvider theme={theme[currentTheme as keyof typeof theme]}>
            <GlobalContextProvider>
                <RefresherProvider>
                    <>
                        <NewProject />
                        <Donation />

                        <LayoutStyle>
                            <Navbar />
                            <Outlet />
                        </LayoutStyle>
                    </>
                </RefresherProvider>
            </GlobalContextProvider>
        </ThemeProvider>
    );
};

export default Layout;
