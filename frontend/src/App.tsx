// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { lazy, Suspense } from "react";
import LandingPage from "@Views/LandingPage";
import Home from "@Views/Home";
import Projects from "@Views/Projects";
import Project from "@Views/Project";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />

                <Route path="home" element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:id" element={<Project />} />
                <Route path="*" element={<h1>404</h1>} />
            </Route>
        </Routes>
    );
}

export default App;
