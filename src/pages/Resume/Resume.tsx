import classes from "./Reasume.module.css";

import cursor from '../../assets/svg/logos/Cursor.svg';

import LinkButton from '../../components/UI/button/LinkButton/LinkButton';
import List from "../../components/UI/text/List";

export default function Resume() {
    return <>
        <header className="hat">
            <div className="column-flex alignment g-32">

                <h1>Resume <img src={cursor} alt='cursor' className='cursor' /></h1>
                <p className='text-box'>As a UX designer with over 4 years of experience, I specialize in creating user-centered digital experiences that are grounded in research and designed for impact. I’ve worked across cross-functional teams to deliver intuitive interfaces, optimize user journeys, and implement scalable design systems that support long-term product growth.</p>
                <p className='text-box'>I focus on turning user insights into actionable design solutions through UX research, usability testing, wireframing, and prototyping. I’ve collaborated with developers, product managers, and stakeholders to align business goals with user needs — from MVPs to iterative improvements.</p>
                <ul className={classes.buttonBox}>
                    <LinkButton path='/'>Download Resume as PDF</LinkButton>
                    <LinkButton path='/'>Download Resume as DOC</LinkButton>
                </ul>
            </div>
        </header>

        <section className="section alignment g-32">
            <h2>Experience</h2>

            <List name="EPAM Systems"
                path="https://www.epam.com"
                desc="Experience Designer"
                date="Oct 2022 - Present">

                <li>Participated in the development and maintenance of a new design system, including the creation of components for various screen resolutions, RTL languages, and both dark and light themes with a focus on accessibility standards.</li>
                <li>Documented component guidelines and design tokens to ensure visual consistency and streamline the integration of components across the product.</li>
                <li>Collaborated with developers to align on technical constraints and implement design solutions based on the design system.</li>
                <li>Utilized GitHub and Jira for task tracking and communication with the development team, actively managing the backlog and prioritizing tasks.</li>
                <li>Conducted regular syncs with product managers and developers to align on ongoing tasks and project priorities.</li>
                <li>Created interactive prototypes in Figma and conducted pre-release testing to verify design implementation and adherence to UX patterns.</li>
                <li>Developed and documented user scenarios and personas to enhance navigation and interface structure.</li>
                <li>Participated in user research sessions and analyzed feedback to identify UX pain points and propose improvements.</li>
                <li>Worked on adaptive interface designs for mobile and desktop devices, ensuring a consistent user experience across platforms.</li>
            </List>

            <List name="The Rolling Scopes School"
                path="https://rs.school"
                desc="Product Designer"
                date="Mar 2022 - Feb 2023">

                <li>Led the redesign and optimization of an existing educational platform, focusing on user-centric improvements and enhanced usability.</li>
                <li>Conducted comprehensive user research, including interviews, online surveys, and field studies, synthesizing findings into actionable insights.</li>
                <li>Developed customer journey maps (CJM), user flows, and interactive prototypes to align design solutions with user needs and business goals.</li>
                <li>Facilitated usability testing to validate design concepts and gather feedback for iterative improvements.</li>
                <li>Collaborated closely with developers to ensure accurate implementation of designs and maintain consistency across the platform.</li>
            </List>

            <List name="Itexus"
                path="https://itexus.com"
                desc="UX/UI Designer"
                date="Mar 2022 - Feb 2023">

                <li>Design Tools: Figma, FigJam, Sketch, Adobe XD, Zeplin</li>
                <li>Prototyping: Figma</li>
                <li>User Research: UX interviews, usability testing, surveys, domain research, competitor analysis</li>
                <li>Design Systems: Component libraries, tokens, documentation, versioning</li>
            </List>

            <List name="Freelance"
                path="/"
                desc="UX/UI Designer"
                date="Mar 2022 - Feb 2023">

                <li>Design Tools: Figma, FigJam, Sketch, Adobe XD, Zeplin</li>
                <li>Prototyping: Figma</li>
            </List>
        </section>

        <section className="section alignment g-32">
            <h2>Technical skills</h2>
            <ul className='list text-box-large'>
                <li>Design Tools: Figma, FigJam, Sketch, Adobe XD, Zeplin</li>
                <li>Prototyping: Figma</li>
                <li>User Research: UX interviews, usability testing, surveys, domain research, competitor analysis</li>
                <li>Design Systems: Component libraries, tokens, documentation, versioning</li>
                <li>Wireframing & UI Design: Low-to high-fidelity wireframes, responsive UI, mobile-first design</li>
                <li>Handoff & Collaboration: Design specs, developer support, GitHub, Jira, Confluence</li>
                <li>Accessibility: WCAG basics, color contrast, keyboard navigation, inclusive patterns</li>
            </ul>
        </section>

        <section className="section alignment g-32">
            <h2>Core competencies</h2>
            <p className='text-box-large'>User-Centered Design | UX Strategy | Cross-Functional Collaboration | Design Systems Thinking | Rapid Prototyping | Problem Framing | Design Communication | Stakeholder Alignment | Research Synthesis | Design Decision-Making | Information Architecture | Rapid Ideation | Visual Consistency | Accessibility Awareness | Product Thinking | Attention to Detail | Continuous Improvement | Emotional Intelligence | Adaptability</p>
        </section>
    </>
}