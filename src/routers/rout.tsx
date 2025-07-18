import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "../App.tsx";

import Projects from "../pages/Projects.page.tsx";
import About from "../pages/About.page.tsx";
import Home from "../pages/Home.page.tsx";
import Resume from "../pages/Resume.page.tsx";
import SideActivity from "../pages/SideActivity.page.tsx";
import Art from "../pages/Art.page.tsx";
import SmartHome from "../pages/SmartHome.page.tsx";

import DesignSystem from "../pages/DesignSystem.page.tsx";
import RSSchool from "../pages/RSSchool.page.tsx";
import Adidas from "../pages/Adidas.page.tsx";
import Hyperspace from "../pages/Hyperspace.page.tsx";
import Turba from "../pages/Turba.page.tsx";

import SignIn from "../pages/sign-in/SignIn.page.tsx";
import Error404 from "../pages/eror-404/Error404.page.tsx";
import { RequireAuth } from "./RequireAuth.tsx";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error404 />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="about" element={<About />} />
      <Route path="resume" element={<Resume />} />
      <Route path="side-activity" element={<SideActivity />} />

      <Route
        path="design-system"
        element={
          <RequireAuth>
            <DesignSystem />
          </RequireAuth>
        }
      />
      <Route path="rs-school" element={<RSSchool />} />
      <Route path="adidas" element={<Adidas />} />
      <Route
        path="hyperspace"
        element={
          <RequireAuth>
            <Hyperspace />
          </RequireAuth>
        }
      />
      <Route
        path="turba"
        element={
          <RequireAuth>
            <Turba />
          </RequireAuth>
        }
      />
      <Route path="art" element={<Art />} />
      <Route path="smart-home" element={<SmartHome />} />

      <Route path="sign-in" element={<SignIn />} />
    </Route>,
  ),
);

export default router;
