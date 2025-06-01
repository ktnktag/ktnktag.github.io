import { Link } from "react-router-dom";

import { default as LinkSvh } from "../../assets/svg/ui/Link.svg?react"

import headerImg from "../../assets/webp/RSSchool/Header.webp";
import resultImg from "../../assets/webp/RSSchool/Result.webp";
import researchImg from "../../assets/webp/RSSchool/Research.webp"
import mappingImg from "../../assets/webp/RSSchool/Mapping.webp";
import designingImg from "../../assets/webp/RSSchool/Designing.webp";
import testingImg from "../../assets/webp/RSSchool/Testing.webp";
import handoffImg from "../../assets/webp/RSSchool/Handoff.webp";


export default function RSSchool() {
    return (<>
        <header className="blog-header">
            <div className="alignment text-center">
                <Link to='https://app.rs.school'><LinkSvh /> https://app.rs.school</Link>
                <h1 className="text-box-lx2">Revamping the user experience of a free, open-source educational platform to enhance learning while maintaining system stability</h1>
            </div>
            <img src={headerImg} alt="header" />
        </header>

        <div className="wrapper">
            <section className="alignment column-flex g-40">
                <div className="blog">
                    <div><p className="eyebrow">About the project</p></div>
                    <div className="column-flex g-40 text-box">
                        <span className="column-flex g-20">
                            <h2>Overview</h2>
                            <p>The RS School platform is a free educational resource aimed at providing coding and development courses to aspiring developers. The project involved a complete UX redesign to improve usability and accessibility without disrupting ongoing learning processes. Given the platform’s open-source nature, the redesign had to prioritize easy-to-develop and maintain solutions.</p>
                        </span>

                        <span className="column-flex g-20">
                            <h2>Challenge</h2>
                            <ul className="list">
                                <li><p>Enhancing Mentor-Student Transparency: The platform lacked effective tools for mentor-student interaction. Introducing new widgets and pages was essential to provide clear visibility into progress and feedback, fostering a more transparent learning environment.</p></li>
                                <li><p>Iterative Redesign Without Disruption: Given the platform's active use, implementing changes risked disrupting ongoing educational processes. The redesign needed to be executed in phases to ensure a seamless transition without hindering current learning activities.</p></li>
                                <li><p>Resource-Constrained Development: As an open-source project, RS School operated with limited development resources. This necessitated the creation of solutions that were straightforward to implement and maintain, ensuring sustainability without compromising user experience.</p></li>
                                <li><p>Enhancing Educational Experience: Beyond addressing existing issues, the goal was to strategically improve the overall learning experience. This included simplifying navigation, increasing content accessibility, and enhancing user interaction with the platform.</p></li>
                                <li><p>Stakeholder Alignment: The project required harmonizing the interests of various stakeholders, including educators, students, and developers, to ensure the platform met their expectations and needs.</p></li>
                            </ul>
                        </span>

                        <span className="column-flex g-20">
                            <h2>Approach</h2>
                            <ul className="list">
                                <li><p>Problem Identification: Analyzed the existing platform to identify common user pain points and repetitive patterns that hindered the learning experience.</p></li>
                                <li><p>Stakeholder Collaboration: Engaged with stakeholders during requirements gathering to align on core objectives, ensuring that the redesign addressed both business goals and user needs.</p></li>
                                <li><p>User Research: Conducted comprehensive research, including user interviews, surveys, and field studies, to validate assumptions and prioritize design features.</p></li>
                                <li><p>User Flows and CJM: Mapped customer journeys and user flows to visualize key touchpoints and identify areas for improvement.</p></li>
                                <li><p>Wireframes and Prototypes: Developed wireframes and interactive prototypes using the Ant-Design system to test design concepts and iterate on feedback before development.</p></li>
                                <li><p>Stakeholder Validation: Presented design concepts to stakeholders for feedback, refining the solutions to align with both business and user expectations.</p></li>
                                <li><p>User Testing: Conducted usability testing with a sample group to gather insights and fine-tune the design, ensuring alignment with user needs.</p></li>
                                <li><p>Development Collaboration: Worked closely with developers, providing detailed task statements and supporting documentation to facilitate smooth implementation and reduce miscommunication.</p></li>
                            </ul>
                        </span>
                    </div>
                </div>
            </section>

            <div className="alignment">
                <hr className="separator" />
            </div>

            <section className="alignment column-flex g-60">
                <div className="blog">
                    <div><p className="eyebrow">Result</p></div>

                    <div className="column-grid-large g-32 text-box">
                        <span className="testimonial" >
                            <h3>3 dashboards</h3>
                            <ul className="list">
                                <p>Dashboards for mentors, administrators, and students — providing actionable insights to improve workflow and reduce missed tasks:</p>
                                <li><p>Mentors: Track pending assignments, deadlines, and student progress, reducing missed reviews by 30%.</p></li>
                                <li><p>Administrators: Monitor mentor applications and access performance stats to prevent lost requests and optimize mentor assignments.</p></li>
                                <li><p>Students: Stay updated on assignment statuses and deadlines, decreasing late submissions by 25%.</p></li>
                            </ul>
                        </span>
                        <span className="testimonial">
                            <h3>30+</h3>
                            <p>Reusable UI components created and documented — including inputs, buttons, checkboxes, dropdowns, and other atomic elements used across product teams.</p>
                        </span>
                        <span className="testimonial">
                            <h3>20+</h3>
                            <p>Interaction patterns defined — such as forms, onboarding flows, modals, error handling, and navigation structures, combining multiple components into consistent, functional experiences.</p>
                        </span>
                        <span className="testimonial">
                            <h3>4</h3>
                            <p>Visual themes implemented using design tokens: Light, Dark, High Contrast Black, and High Contrast White — providing accessibility and stylistic flexibility.</p>
                        </span>
                        <span className="testimonial">
                            <h3>150+</h3>
                            <p>Design tokens implemented to ensure consistency in spacing, typography, colors, and theming — enabling flexible customization, faster updates, and developer-friendly handoff.</p>
                        </span>
                    </div>
                </div>

                <img src={resultImg} className="img" alt="resultImg" />

            </section >

            <div className="alignment">
                <hr className="separator" />
            </div>

            <section className="alignment column-flex g-60">
                <div className="blog">
                    <div><p className="eyebrow">Research and Discovery</p></div>
                    <div>
                        <span className="column-flex g-20 text-box">
                            <h2>Understanding User Needs</h2>
                            <ul className="list">
                                <p>To thoroughly understand user needs and identify key pain points, I conducted a comprehensive research phase involving multiple user groups — students, mentors, and administrators. This included:</p>
                                <li><p>An online survey to gather quantitative data on platform usage, common issues, and feature requests.</p></li>
                                <li><p>Follow-up interviews to gain qualitative insights into specific challenges and workflow inefficiencies.</p></li>
                                <li><p>Data synthesis to identify recurring themes and prioritize focus areas for redesign.</p></li>
                            </ul>
                        </span>
                    </div>
                </div>

                <img src={researchImg} alt="researchImg" className="multiply-img img" />

            </section>

            <div className="alignment">
                <hr className="separator" />
            </div>

            <section className="alignment column-flex g-60">
                <div className="blog">
                    <div>
                        <div><p className="eyebrow">Data Analysis and Problem Definition</p></div>
                    </div>
                    <div className="column-flex g-20 text-box">
                        <h2>Mapping the Pain Points and Current Solutions</h2>
                        <ul className="list">
                            <p>The collected data was systematically analyzed to uncover key problem areas. Issues were categorized based on user roles and current solutions, revealing:</p>
                            <li><p>Gaps in the existing mentor-student interaction flow, including lack of visibility into application statuses and feedback loops.</p></li>
                            <li><p>Inconsistent assignment management and submission tracking, contributing to missed deadlines.</p></li>
                            <li><p>Navigation inconsistencies, leading to confusion and increased drop-off rates.</p></li>
                            <li><p>Unclear scheduling and task prioritization, impacting student performance.</p></li>
                        </ul>
                    </div>
                </div>

                <img src={mappingImg} className="img" alt="mappingImg" />
            </section>

            <div className="alignment">
                <hr className="separator" />
            </div>

            <section className="alignment column-flex g-60">
                <div className="blog">
                    <div>
                        <p className="eyebrow">Experience Mapping and Ideation</p>
                    </div>
                    <div className="column-flex g-20 text-box">
                        <h2>Designing Solutions Through User Flows and CJMs</h2>
                        <ul className="list">
                            <p>Using the identified problem areas, I developed user-centric solutions through:</p>
                            <li><p>Customer Journey Maps (CJMs) to outline existing flows and visualize friction points across the student, mentor, and admin journeys.</p></li>
                            <li><p>Status and User Flows to propose optimized processes, ensuring clarity in assignment submission, feedback collection, and mentor application tracking.</p></li>
                            <li><p>Ideation workshops to validate potential solutions with stakeholders, refining concepts before proceeding to design.</p></li>
                        </ul>
                    </div>
                </div>

                <img src={designingImg} className="img" alt="designingImg" />
            </section>

            <div className="alignment"><hr className="separator" /></div>

            <section className="alignment column-flex g-60">
                <div className="blog">
                    <div><p className="eyebrow">Testing and Handoff</p></div>

                    <div className="column-flex g-20 text-box">
                        <h2>Validating Prototypes and Creating Development Tasks in GitHub</h2>
                        <ul className="list">
                            <p>To ensure design accuracy and identify areas for improvement, I developed interactive prototypes and conducted targeted testing sessions:</p>
                            <li><p>Created clickable prototypes to simulate key user flows, focusing on assignment submission, mentor feedback, and admin review processes.</p></li>
                            <li><p>Conducted user testing sessions with students, mentors, and admins to validate the redesigned interfaces and identify usability issues.</p></li>
                            <li><p>Collected feedback, analyzed user responses, and documented necessary adjustments to components and flows.</p></li>
                            <li><p>Updated the prototypes to reflect necessary changes and re-tested to confirm improvements.</p></li>
                            <li><p>Created detailed GitHub tasks for the development team, outlining implementation requirements, component specifications, and priority levels for each update.</p></li>
                            <li><p>Monitored task progress, provided clarification when needed, and ensured alignment between design intent and final implementation.</p></li>
                        </ul>
                    </div>
                </div>

                <div className="column-grid g-32">
                    <img src={testingImg} className="img" style={{backgroundColor: "#ffdb1f"}} alt="testingImg" />
                    <img src={handoffImg} className="img" alt="handoffImg" />
                </div>
            </section>
        </div >
    </>)
}