import classes from "./Reasume.module.css";

import { Link } from 'react-router-dom';
import LinkButton from '../../components/UI/button/LinkButton/LinkButton';

import Cursor from '../../assets/svg/logos/Cursor.svg';
import { default as Arrow } from '../../assets/svg/ui/Arrow.svg?react';

export default function Resume() {
    return <>
        <header className="hat">
            <div className="column-flex alignment g-32">

                <h1>Resume <img src={Cursor} alt='cursor' className='cursor' /></h1>
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

            <ul className='list text-box-large'>
                <div className='head'>
                    <div>
                        <Link to="https://www.epam.com" target="_blank"><h4>EPAM Systems</h4><Arrow className='arrow'/></Link>
                        <p>Experience Designer</p>
                    </div>

                    <p>Oct 2022 - Present</p>
                </div>

                <li><p>Participated in the development and maintenance of a new design system, including the creation of components for various screen resolutions, RTL languages, and both dark and light themes with a focus on accessibility standards.</p></li>
                <li><p>Documented component guidelines and design tokens to ensure visual consistency and streamline the integration of components across the product.</p></li>
                <li><p>Collaborated with developers to align on technical constraints and implement design solutions based on the design system.</p></li>
                <li><p>Utilized GitHub and Jira for task tracking and communication with the development team, actively managing the backlog and prioritizing tasks.</p></li>
                <li><p>Conducted regular syncs with product managers and developers to align on ongoing tasks and project priorities.</p></li>
                <li><p>Created interactive prototypes in Figma and conducted pre-release testing to verify design implementation and adherence to UX patterns.</p></li>
                <li><p>Developed and documented user scenarios and personas to enhance navigation and interface structure.</p></li>
                <li><p>Participated in user research sessions and analyzed feedback to identify UX pain points and propose improvements.</p></li>
                <li><p>Worked on adaptive interface designs for mobile and desktop devices, ensuring a consistent user experience across platforms.</p></li>
            </ul>

            <ul className='list text-box-large'>
                <div className='head'>
                    <div>
                        <Link to='https://rs.school' target="_blank"><h4>The Rolling Scopes School</h4><Arrow className='arrow'/></Link>
                        <p>Product Designer</p>
                    </div>

                    <p>Mar 2022 - Feb 2023</p>
                </div>

                <li><p>Led the redesign and optimization of an existing educational platform, focusing on user-centric improvements and enhanced usability.</p></li>
                <li><p>Conducted comprehensive user research, including interviews, online surveys, and field studies, synthesizing findings into actionable insights.</p></li>
                <li><p>Developed customer journey maps (CJM), user flows, and interactive prototypes to align design solutions with user needs and business goals.</p></li>
                <li><p>Facilitated usability testing to validate design concepts and gather feedback for iterative improvements.</p></li>
                <li><p>Collaborated closely with developers to ensure accurate implementation of designs and maintain consistency across the platform.</p></li>
            </ul>

            <ul className='list text-box-large'>
                <div className='head'>
                    <div>
                        <Link to="https://itexus.com" target="_blank"><h4>Itexus</h4><Arrow className='arrow'/></Link>
                        <p>UX/UI Designer</p>
                    </div>

                    <p>Mar 2022 - Feb 2023</p>
                </div>

                <ul>
                    <li><p>Design Tools: Figma, FigJam, Sketch, Adobe XD, Zeplin</p></li>
                    <li><p>Prototyping: Figma</p></li>
                    <li><p>User Research: UX interviews, usability testing, surveys, domain research, competitor analysis</p></li>
                    <li><p>Design Systems: Component libraries, tokens, documentation, versioning</p></li>
                </ul>
            </ul>

            <ul className='list text-box-large'>
                <div className='head'>
                    <div>
                        <Link to={'/'}><h4>Freelance</h4><Arrow className='arrow'/></Link>
                        <p>UX/UI Designer</p>
                    </div>

                    <p>Mar 2022 - Feb 2023</p>
                </div>

                <ul>
                    <li><p>Design Tools: Figma, FigJam, Sketch, Adobe XD, Zeplin</p></li>
                    <li><p>Prototyping: Figma</p></li>
                </ul>
            </ul>
        </section>

        <section className="section alignment g-32">
            <h2>Technical skills</h2>
            <ul className='list text-box-large'>
                <li><p>Design Tools: Figma, FigJam, Sketch, Adobe XD, Zeplin</p></li>
                <li><p>Prototyping: Figma</p></li>
                <li><p>User Research: UX interviews, usability testing, surveys, domain research, competitor analysis</p></li>
                <li><p>Design Systems: Component libraries, tokens, documentation, versioning</p></li>
                <li><p>Wireframing & UI Design: Low-to high-fidelity wireframes, responsive UI, mobile-first design</p></li>
                <li><p>Handoff & Collaboration: Design specs, developer support, GitHub, Jira, Confluence</p></li>
                <li><p>Accessibility: WCAG basics, color contrast, keyboard navigation, inclusive patterns</p></li>
            </ul>
        </section>

        <section className="section alignment g-32">
            <h2>Core competencies</h2>
            <p className='text-box-large'>User-Centered Design | UX Strategy | Cross-Functional Collaboration | Design Systems Thinking | Rapid Prototyping | Problem Framing | Design Communication | Stakeholder Alignment | Research Synthesis | Design Decision-Making | Information Architecture | Rapid Ideation | Visual Consistency | Accessibility Awareness | Product Thinking | Attention to Detail | Continuous Improvement | Emotional Intelligence | Adaptability</p>
        </section>
    </>
}