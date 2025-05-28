import { createHashRouter, createRoutesFromElements, Route } from "react-router-dom";

import App from "../App.tsx";

import Projects from "../pages/Projects/Projects.tsx";
import About from "../pages/About/About.tsx";
import Home from "../pages/Home/Home.tsx";
import Resume from "../pages/Resume/Resume.tsx";
import SideActivity from "../pages/SideActivity/SideActivity.tsx";
import DesignSystem from "../pages/DesignSystem/DesignSystem.tsx";

import SignIn from "../pages/SignIn/SignIn.tsx";
import Error404 from "../pages/Eror404/Error404.tsx";

const router = createHashRouter(
    createRoutesFromElements(
        <Route path='/' errorElement={<Error404 />}>
            <Route path="/" element={<App />}>
                <Route index={true} path="/" element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="about" element={<About />} />
                <Route path="resume" element={<Resume />} />
                <Route path="side-activity" element={<SideActivity />} />
                
                <Route path="design-system" element={<DesignSystem />} />
            </Route>

            <Route path="/auth/sign-in" element={<SignIn />}/>
        </Route>
    )
)

export default router;