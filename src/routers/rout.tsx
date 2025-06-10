import { createHashRouter, createRoutesFromElements, Route } from "react-router-dom";

import App from "../App.tsx";

import Projects from "../pages/Projects.tsx";
import About from "../pages/About.tsx";
import Home from "../pages/Home.tsx";
import Resume from "../pages/Resume/Resume.tsx";
import SideActivity from "../pages/SideActivity.tsx";

import DesignSystem from "../pages/DesignSystem.tsx";
import RSSchool from "../pages/RSSchool.tsx";
import Adidas from "../pages/Adidas.tsx";
import Hyperspace from "../pages/Hyperspace.tsx";

import SignIn from "../pages/SignIn/SignIn.tsx";
import Error404 from "../pages/Eror404/Error404.tsx";
import { RequireAuth } from "./RequireAuth.tsx";

const router = createHashRouter(
    createRoutesFromElements(
        <Route path='/' errorElement={<Error404 />}>
            <Route path="/" element={<App />}>
                <Route index={true} path="/" element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="about" element={<About />} />
                <Route path="resume" element={<Resume />} />
                <Route path="side-activity" element={<SideActivity />} />
                
                <Route path="design-system" element={<RequireAuth><DesignSystem /></RequireAuth>} />
                <Route path="rs-school" element={<RSSchool />} />
                <Route path="adidas" element={<Adidas />} />
                <Route path="hyperspace" element={ <RequireAuth><Hyperspace /></RequireAuth>} />
            </Route>

            <Route path="sign-in" element={<SignIn />}/>
        </Route>
    )
)

export default router;