import Sap from '../assets/svg/SAP.svg'

import Note from './UI/note/Note'
import Overview from './UI/overview/Overview'
import Breadcrumbs from './UI/breadcrumbs/Breadcrumbs'

export default function HyperspacePortal() {
    return (
        <>
            <Breadcrumbs></Breadcrumbs>
            <header>
                <div className="column-alignment">
                    <p>SAP’s internal CI/CD platform empowers over 50,000 engineers to efficiently deliver value to customers, supporting the shift from on-premise to cloud-native solutions. The Hyperspace Portal, the central entry point for developers, offers unified access to platform services, APIs, and tooling. It enables the efficient creation of cloud-native services and applications aligned with SAP’s global architecture standards, covering the entire development lifecycle—from setup to delivery and operations.</p>
                </div>
            </header>

            <Note></Note>

            <Overview
                client={Sap}
                expertise='UX Designer, Fiori Expert'
                tools='Figma, Jira, Mural'
                year='2024'>
            </Overview>
        </>
    )
}