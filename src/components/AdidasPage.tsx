import A1 from '../assets/png/AP/A1.png'
import A2 from '../assets/png/AP/A2.png'
import A3 from '../assets/png/AP/A3.png'
import A4 from '../assets/png/AP/A4.png'
import A5 from '../assets/png/AP/A5.png'
import A6 from '../assets/png/AP/A6.png'
import adidas from '../assets/svg/Adidas.svg'

import Image from './UI/Image/Image';
import Note from './UI/note/Note'
import Overview from './UI/overview/Overview'
import Breadcrumbs from './UI/breadcrumbs/Breadcrumbs'

export default function AdidasPage() {
    return (
        <>
            <Breadcrumbs></Breadcrumbs>
            <header>
                <div className="column-alignment">
                    <span className="paragraph">
                        <p>Completed in six weeks, our interdisciplinary team, comprising a Business Analyst (BA), Software Architect, and a UX designer, orchestrated a pivotal transition.</p>
                        <p>The primary focus was migrating the *NDA* app processes to SAP Fiori, a shift that involved the comprehensive replacement of the former platform.</p>
                        <p>Our mission extended beyond a mere migration, encompassing the expansion and enhancement of features to align with evolving business demands.</p>
                    </span>
                    <Image imgPath={A1}></Image>
                </div>
            </header>

            <Note></Note>

            <Overview client={adidas} expertise='UX Designer' tools='Figma, FigJam, Confluence' year='2023'></Overview>

            <section>
                <h2 className='title'>Work Process</h2>
                <div className='column-alignment'>
                    <span className="paragraph">
                        <p>Our work process for this project was meticulously crafted with short timelines and optimal efficiency at its core. We initiated the journey by gaining access to the existing platform for a comprehensive investigation. </p>
                        <p>Daily meetings with the client followed, each session focusing on a specific process, facilitating detailed discussions and requirement exploration. Post-meeting, a comprehensive list of required actions from each team member was compiled, creating a clear understanding and area of ​​responsibility for project. </p>
                    </span>

                    <Image imgPath={A2} title='Meeting minutes Confluence page'></Image>

                    <span className="paragraph">
                        <p>Rapid design solutions were then promptly developed after each meeting, with the following day dedicated to refining and adjusting proposed solutions based on collected feedback. Then we moved on to the next process.</p>
                        <p>This iterative approach ensured continuous refinement of the design solution, addressing restrictions and accommodating feedback throughout the process. The result was a streamlined and collaborative workflow that not only adhered to tight timelines but also contributed to the overall success of the project.</p>
                    </span>
                </div>
            </section>

            <section>
                <h2 className="title">Understanding the Landscape</h2>
                <div className='column-alignment'>
                    <article>
                        <h3 className='subtitle'>Initial Exploration</h3>
                        <p>Our journey commenced with a thorough exploration of the existing platform. Gaining access was the key to unlocking a comprehensive understanding of the system. This stage involved delving deep into the intricacies of the current setup, identifying pain points, highliting UX challenges, and pinpointing key questions that demanded clarification. This initial phase laid the groundwork for informed decision-making and strategic planning.</p>
                    </article>
                    <article>
                        <h3 className='subtitle'>Stakeholder Collaboration</h3>
                        <p>Our collaboration with stakeholders was far from a passive exchange. It was a dynamic process woven into the fabric of daily discussions. Each meeting focused on a specific process, allowing stakeholders to share firsthand perspectives and offer insights into existing workflows and user interaction challenges. </p>
                        <br />
                        <p>This included identifying features for update and expansion while scrutinizing elements that could be streamlined or removed. Through this collaborative process, we attained a holistic understanding of the project landscape, ensuring a robust foundation for the journey ahead.</p>
                    </article>
                    <Image imgPath={A3} title='Analysis of an existing platform for one process'></Image>
                    <span className='paragraph'>
                        <p>Rapid design solutions were then promptly developed after each meeting, with the following day dedicated to refining and adjusting proposed solutions based on collected feedback. Then we moved on to the next process.</p>
                        <p>This iterative approach ensured continuous refinement of the design solution, addressing restrictions and accommodating feedback throughout the process. The result was a streamlined and collaborative workflow that not only adhered to tight timelines but also contributed to the overall success of the project.</p>
                    </span>
                </div>
            </section>

            <section>
                <h2 className="title">Rapid Mock-up Development</h2>
                <div className='column-alignment'>
                    <p>In the pursuit of nimble and effective solutions, our approach to iterative rapid mock-up development was carefully structured</p>
                    <article>
                        <h3 className='subtitle'>Process Flows</h3>
                        <p>Engaged in a collaborative partnership with the Business Analyst (BA) to gain a comprehensive understanding of the current process flows, meticulously analyzing each step. Worked closely to ensure a thorough comprehension of the intricacies and nuances of the existing processes.</p>
                        <br />
                        <p>Efficiently translated new business requirements into a refined and updated set of process flows, aligning seamlessly with the evolving needs of the bussiness.</p>
                    </article>
                    <Image imgPath={A4} title='Part of the process flow for one process'></Image>

                    <article>
                        <h3 className='subtitle'>Mock-up Creation</h3>
                        <p>Generated swift and detailed mock-ups to visualize proposed solutions, expediting the development process. These mock-ups served as tangible representations of the envisioned solutions, aiding in the communication of ideas and fostering a shared understanding among team members and stakeholders.</p>
                        <br />
                        <p>Championed a responsive and iterative approach by conducting rapid iterations on the mock-ups based on feedback received from clients and team discussions. This agile methodology allowed for quick adaptations to evolving requirements and preferences, ensuring that the final solutions were not only aligned with client expectations but also responsive to changing project dynamics.</p>
                        <br />
                        <p>The daily discussions served as a platform for comprehensive reviews, where the team collectively identified areas for improvement and made informed decisions on refining the mock-ups. This iterative process played a crucial role in fine-tuning the proposed solutions, resulting in a more polished and effective end product.</p>
                    </article>
                    <Image imgPath={A5} title='Rapid mock-ups for one process'></Image>
                </div>
            </section>

            <section>
                <h2 className="title">Polishing for Perfection</h2>
                <div className='column-alignment'>
                    <p>Upon securing approvals for the design processes, the focus shifted to refining mock-ups. Each detail was meticulously examined and adjusted based on feedback, guaranteeing a polished and cohesive visual representation. The final touch involved translating refined mock-ups into interactive prototypes for a tangible, hands-on client experience.</p>
                    <Image imgPath={A6} title='Interactive Prototype for one process'></Image>
                </div>
            </section>

            <section>
                <h2 className="title">Result</h2>
                <div className='column-alignment'>
                    <p>The culmination of our strategic and efficient work process yielded exceptional outcomes for the project. The successful migration of the NDA app processes to SAP Fiori was marked by several key achievements</p>
                    <article>
                        <h3 className='subtitle'>Enhanced Features</h3>
                        <p>Beyond a mere migration, our team successfully expanded and enhanced features to align with evolving business demands. </p>
                    </article>
                    <article>
                        <h3 className='subtitle'>Collaborative Success</h3>
                        <p>The interdisciplinary collaboration of the Business Analyst, Software Architect, and UX designer proved to be a winning formula. The diverse expertise of each team member contributed to a holistic approach, resulting in a harmonious integration of technical robustness, functional efficiency, and user-centric design.</p>                    
                    </article>
                    <article>
                        <h3 className='subtitle'>Adaptability and Innovation</h3>
                        <p>The iterative design approach not only facilitated adaptability to changing requirements but also fostered ability to navigate challenges, address restrictions, and implement creative solutions.</p>
                    </article>
                </div>
            </section>
        </>
    )
}