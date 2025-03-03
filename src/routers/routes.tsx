import { createHashRouter, createRoutesFromElements, Route } from "react-router-dom";

import App from "../App";
import About from "../components/about/About";
import SelectedWorks from '../components/SelectedWorks.tsx'
import SideProjects from '../components/SideProjects.tsx'
import DesignSystem from '../components/DesignSystem.tsx'
import HyperspacePortal from '../components/HyperspacePortal.tsx'
import DocumentationPage from '../components/DocumentationPage.tsx'
import ComponentPage from '../components/ComponentPage.tsx'
import AdidasPage from '../components/AdidasPage.tsx'
import RedesignWorkshop from "../components/RedesignWorkshop.tsx";
import SmartHome from "../components/SmartHome.tsx";

import Error404 from "./Error404.tsx";
import { RequireAuth } from "./RequireAuth.tsx";

const router = createHashRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />} errorElement={<Error404 />}>
            <Route index={true} path="/" element={<About />} />

            <Route path="/Selected_Works" element={<SelectedWorks />} />
            <Route path="/Selected_Works/Design_System" element={
                <RequireAuth>
                    <DesignSystem />
                </RequireAuth>} />
            <Route path="/Selected_Works/Design_System/Documentation" element={
                <RequireAuth>
                    <DocumentationPage />
                </RequireAuth>} />
            <Route path="/Selected_Works/Design_System/Components_and_Patterns" element={
                <RequireAuth>
                    <ComponentPage />
                </RequireAuth>} />

            <Route path="/Selected_Works/Internal_CI_CD_Platform" element={
                <RequireAuth>
                    <HyperspacePortal />
                </RequireAuth>} />
            <Route path="/Selected_Works/Seamless_Migration_to_SAP_Fiori" element={<AdidasPage />} />

            <Route path="/Side_Projects" element={<SideProjects />} />
            
            
            <Route path="/Selected_Works/Website_Redesign_Workshop" element={<RedesignWorkshop />} />
            <Route path="/Selected_Works/Workshop_for_Smart_Home" element={<SmartHome />} />
        </Route>
    )
)

export default router;