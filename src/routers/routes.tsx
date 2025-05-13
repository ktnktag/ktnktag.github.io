import { createHashRouter, createRoutesFromElements, Route } from "react-router-dom";

import App from "../App";
import Projects from "../pages/Projects/Projects.tsx";
import About from "../pages/About/About.tsx";
import Home from "../pages/Home/Home.tsx";
import Resume from "../pages/Resume/Resume.tsx";

import Error404 from "./Error404.tsx";

const router = createHashRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />} errorElement={<Error404 />}>
            <Route index={true} path="/" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />}/>
        </Route>
    )
)

export default router;