import headerImg from "../assets/webp/Hyperspace/Header.webp";
import resultImg from "../assets/webp/Hyperspace/Result.webp";

import Sliding from "../components/UI/text/sliding/Sliding";
import Result from "../components/UI/text/Result";

export default function Hyperspace() {
    return (<>
        <header className="blog-header">
            <div className="alignment text-center">
                <h1 className="text-box-lx2">Expanding SAP's internal platform with user-centred feature design</h1>
            </div>
            <img src={headerImg} alt="header" />
        </header>

        <div className="wrapper">
            <section className="alignment column-flex g-40">
                <Sliding name="About the project">
                    <div className="column-flex g-40 text-box">
                        <span className="column-flex g-20">
                            <h2>Overview</h2>
                            <p>As part of SAP's Developer Experience Solutions team, this project focused on designing and delivering two complex new feature sections for an internal CI/CD platform used by over 50,000 engineers. These features were aimed at improving developer workflows and supporting SAP's long-term shift from on-premise to cloud-native engineering.</p>
                            <p>While many updates on the platform follow a standard pattern using the SAP design system, this initiative required a user-centred, sprint-based design process to introduce entirely new functionality — all while maintaining strict alignment with SAP Fiori and supporting scalability across internal teams.</p>
                        </span>

                        <span className="column-flex g-20">
                            <h2>Challenge</h2>
                            <p>The project focused on introducing new functional sections into SAP's internal CI/CD platform: one related to backlog management, and another involving project-level configuration and settings. These additions were part of a broader effort to retire legacy UI and bring the platform into alignment with the SAP Fiori design system.</p>
                            
                            <ul className="list">
                                <p>Each section presented distinct challenges:</p>
                                <li>The first feature aimed to modernize an existing workflow by redesigning it within the Fiori framework, replacing outdated layouts and logic with improved usability and structure.</li>
                                <li>The second feature was developed through a design sprint to define a new user workflow from scratch — extending the platform's capabilities in how teams manage and share project-level data.</li>
                            </ul>

                            <ul className="list">
                                <p>Across both tracks, we faced two key constraints:</p>
                                <li>Strict alignment with the SAP Fiori design system, with a strong preference to avoid custom components in order to reduce complexity, cost, and future maintenance</li>
                                <li>Tight delivery timelines, which required clear scope definition, fast iteration, and close collaboration between design, product, and engineering</li>
                            </ul>
                            <p>The challenge was to deliver functional, user-friendly, and future-ready designs that remained scalable and flexible — without exceeding the boundaries of the design system or delaying development.</p>
                        </span>

                        <span className="column-flex g-20">
                            <h2>Approach</h2>
                            <ul className="list">
                                <li>Early alignment with the Lead Designer and Product Owner to define scope, prioritize functionality, and avoid over-customization</li>
                                <li>Component-first thinking, reusing and adapting SAP Fiori elements wherever possible to reduce complexity and support consistency</li>
                                <li>Interactive prototyping to simulate real-world user flows and support feedback collection</li>
                                <li>Continuous collaboration with engineering and product throughout refinement and handoff — ensuring that designs were both feasible and well-documented</li>
                            </ul>

                            <p>This allowed us to move efficiently from definition to delivery, ensuring that all features were grounded in business needs, technically viable, and user-friendly.</p>
                        </span>
                    </div>
                </Sliding>
            </section>

            <section className="alignment column-flex g-60">
                <Sliding name="Result">
                    <div className="column-grid-mini g-32 text-box">
                        <Result name="100%" isLarge={true}>
                            <ul className="list">
                                <li>Alignment with SAP Fiori design guidelines in initial implementation, ensuring consistency and scalability</li>
                                <li>Production-ready handoff, including final mockups, specs, and behavior documentation</li>
                            </ul>
                        </Result>
                        <Result name="2 new feature sections" isLarge={true}>
                            <p>Were designed from scratch and released into platform, improving backlog and project workflows, enhancing usability, and replacing legacy UI for thousands of engineers.</p>
                        </Result>
                        <Result name="6 user interviews">
                            <p>Internal user interviews conducted during the design sprint to validate needs and expectations</p>
                        </Result>
                        <Result name="5 usability tests">
                            <p>5 remote usability test sessions run with real users to evaluate and refine key flows before implementation</p>
                        </Result>
                    </div>
                </Sliding>

                <img src={resultImg} className="img" alt="resultImg" />
            </section >

            <div className="alignment">
                <hr className="separator" />
            </div>

        </div >
    </>)
}
//187