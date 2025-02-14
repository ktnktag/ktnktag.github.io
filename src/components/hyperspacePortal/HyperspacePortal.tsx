import Note from '../UI/note/Note'
import Overview from '../UI/overview/Overview'
import Image from '../UI/Image/Image'

export default function HyperspacePortal() {
    return (
        <>
            <section className='column-alignment'>
                <h1 className='first-title'>Selected Works / <span>Internal CI/CD Platform</span></h1>
                <span className='paragraph'>
                    <p>The Hyperspace Portal - the central entry point for all developers at SAP. It provides the perfect environment to build cloud-native services and business applications on top of the Business Technology Platform (BTP).</p>
                    <p>With unified access to platform services, APIs, and essential tooling, developers can efficiently create applications that adhere to industry best practices and align with SAP's global architecture standards. Covering the entire lifecycle from setup to delivery and operations, the Hyperspace Portal streamlines the development process, enabling fast and efficient application development.</p>
                </span>
                {/* <Image imgPath={}></Image> */}
            </section>
        </>
    )
}