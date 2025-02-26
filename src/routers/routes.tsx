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

import Error404 from "../Error404.tsx";

const router = createHashRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />} errorElement={<Error404 />}>
            <Route index={true} path="/" element={<About />}/>

            <Route path="/SelectedWorks" element={<SelectedWorks />} />
            <Route path="/SelectedWorks/DesignSystem" element={<DesignSystem />} />
            <Route path="/SelectedWorks/DesignSystem/Documentation" element={<DocumentationPage/>} />
            <Route path="/SelectedWorks/DesignSystem/Component" element={<ComponentPage/>} />

            <Route path="/SelectedWorks/HyperspacePortal" element={<HyperspacePortal />} />
            <Route path="/SelectedWorks/Adidas" element={<AdidasPage/>} />
            

            <Route path="/SideProjects" element={<SideProjects />} />
        </Route>
    )
)

export default router;