import { Link } from "react-router-dom";

import { default as LinkSvh } from "../../assets/svg/ui/Link.svg?react"

import headerImg from "../../assets/webp/DesignSystem/Header.webp";
import resultImg from "../../assets/webp/DesignSystem/Result.webp";
import workProcess from "../../assets/webp/DesignSystem/WorkProcess.webp";
import componentsImg from "../../assets/webp/DesignSystem/Components1.webp";
import patternsImg from "../../assets/webp/DesignSystem/Result.webp";
import figmaVariablesImg from "../../assets/webp/DesignSystem/FigmaVariables.webp";
import standards from "../../assets/webp/DesignSystem/Standards.webp";
import documentation from "../../assets/webp/DesignSystem/Documentation.webp";
import designReview from "../../assets/webp/DesignSystem/DesignReview.webp"


export default function DesignSystem() {
    return (<>
        <header className="blog-header">
            <div className="alignment text-center">
                <Link to='https://www.sap.com/index.html'><LinkSvh /> https://www.sap.com/index.html</Link>
                <h1 className="text-box">Design System for the Leading Global Tech Company</h1>
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
                            <p>The design system project was a strategic initiative aimed at unifying visual language and interaction patterns across multiple products while maintaining scalability and adaptability. With fragmented components and inconsistent user experiences impacting product cohesion, the objective was to establish a comprehensive design framework that served as a single source of truth for all design assets.</p>
                        </span>

                        <span className="column-flex g-20">
                            <h2>Challenge</h2>
                            <p>Establish a scalable, consistent design system across multiple products and teams — in an environment with no centralized UI standards, minimal documentation, and growing complexity. Designers were working in silos, re-creating similar components with slight variations, which slowed down delivery and created a fragmented user experience. The challenge was to bring clarity and cohesion without disrupting ongoing product work or delaying feature releases.</p>
                        </span>

                        <span className="column-flex g-20">
                            <h2>Approach</h2>
                            <ul className="list">
                                <p>The primary challenge was to create a comprehensive component library that addressed the needs of multiple projects without fragmenting the design ecosystem. This required:</p>
                                <li><p>Scalability Across Projects: New components had to be designed to accommodate all current and anticipated project requirements, eliminating the need for custom, project-specific components and ensuring consistency across products.</p></li>
                                <li><p>Total Overhaul of Existing Components: The existing components were not only inconsistent but also incompatible with the new design system structure. This necessitated a complete redesign, integrating updated interaction patterns, accessibility considerations, and design tokens for theming and customization.</p></li>
                                <li><p>Rapid Development and Iteration: With a core structure to be delivered in just 13 weeks, the project demanded an accelerated workflow. Daily stand-ups were essential to align on requirements, review progress, incorporate feedback, approvals and creation of specifications — all in real time.</p></li>
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

                    <div className="column-grid-mini g-32 text-box">
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

                <img src={resultImg} alt="resultImg" />

            </section>

            <div className="alignment">
                <hr className="separator" />
            </div>

            <section className="alignment column-flex g-60">
                <div className="blog">
                    <div><p className="eyebrow">Work Process</p></div>
                    <div>
                        <span className="column-flex g-20 text-box">
                            <h2>Structured Sprint Workflow</h2>
                            <p>We organized the project into focused sprints, each covering specific sets of components, patterns, or templates. Each component was managed in its own Figma file for version control and clarity. This structure helped us scale efficiently across a multi-designer team and ensured smooth collaboration with stakeholders. </p>
                        </span>
                    </div>
                </div>

                <img src={workProcess} alt="workProcess" className="multiply-img" />

            </section>

            <div className="alignment">
                <hr className="separator" />
            </div>

            <section className="alignment column-flex g-60">
                <div className="blog">
                    <div>
                        <div><p className="eyebrow">components & Patterns</p></div>
                    </div>
                    <div className="column-flex g-20 text-box">
                        <h2>Design System</h2>
                        <p>We started by building atomic components like buttons, inputs, and checkboxes, then expanded into complex patterns such as forms, onboarding flows, and notifications. This step-by-step approach helped us ensure structural consistency before scaling into full user flows.</p>
                        <p>All components were designed for flexibility — optional elements like avatars or secondary buttons were built in, making it easy to adapt without detaching or duplicating. This reduced design debt and kept the system clean.</p>
                        <p>Responsiveness and RTL support were considered from the beginning. Components adapted across breakpoints, and layouts worked for both LTR and RTL languages, improving accessibility and global readiness.</p>
                        <p>While maintaining consistency, we allowed thoughtful variation where needed. Patterns could be adapted for specific product needs without breaking the system, making adoption easier across teams.</p>
                        <p>We continuously gathered feedback from other designers and developers, evolving patterns to reflect real-world use cases and improving system relevance over time.</p>
                    </div>
                </div>

                <div className="column-flex g-32">
                    <img src={componentsImg} alt="componentsImg" />
                    <img src={patternsImg} alt="patternsImg" />
                </div>

            </section>

            <div className="alignment">
                <hr className="separator" />
            </div>

            <section className="alignment column-flex g-60">
                <div className="blog">
                    <div>
                        <p className="eyebrow">Figma variables </p>
                    </div>
                    <div className="column-flex g-20 text-box">
                        <h2>Tokens as the Single Source of Truth</h2>
                        <p>We defined tokens for color, typography, spacing, radii, shadows, animations, and icon sizes — covering all key visual properties in both design and code.</p>
                        <p>Tokens served as the central reference for visual decisions — ensuring consistency, reducing ambiguity, and simplifying design-to-code translation.</p>

                        <ul className="list">
                            <p>Our system supported 4 visual themes via tokens:</p>
                            <li><p>Light</p></li>
                            <li><p>Dense</p></li>
                            <li><p>High Contrast Black</p></li>
                            <li><p>High Contrast White</p></li>
                            <p>This allowed us to meet both branding and accessibility needs with minimal effort.</p>
                        </ul>
                    </div>
                </div>

                <img src={figmaVariablesImg} alt="figmaVariablesImg" />
            </section>

            <div className="alignment"><hr className="separator" /></div>

            <section className="alignment column-flex g-60">
                <div className="blog">
                    <div><p className="eyebrow">a11y standards</p></div>

                    <div className="column-flex g-20 text-box">
                        <h2>Implementation of Accessibility Standards</h2>
                        <span>
                            <p>Accessibility was a cornerstone in the creation of our new design system. To ensure our product is usable by the widest possible audience, including people with disabilities, we adhered to internationally recognized WCAG 2.2 AA standards. Throughout the development process, we employed a rigorous testing protocol.</p>
                            <p>We utilized design plugins to verify compliance with AA contrast minimums during the design phase. Additionally, components underwent thorough testing in a test environment to ensure they met accessibility requirements before being released. This multi-layered approach ensured that accessibility considerations were integral to the design and development process, rather than an afterthought.</p>
                        </span>
                    </div>
                </div>

                <img src={standards} alt="standards" />

            </section>

            <div className="alignment">
                <hr className="separator" />
            </div>

            <section className="alignment column-flex g-60">
                <div className="blog">
                    <div><p className="eyebrow">Documentation</p></div>

                    <div className="column-flex g-20 text-box">
                        <h2>Living Documentation</h2>
                        <span>
                            <p>In our pursuit of building a robust design system, we followed a core principle:"Documentation, documentation, documentation.” Our goal was to precisely capture the life cycle of every reusable element used across SAP websites, mobile screens, and large standalone displays.</p>
                            <p>This included thorough documentation of all components and patterns — from breadcrumbs and headers to inputs, buttons, and layouts. Each item was accompanied by detailed specifications covering structure, states, behaviors, responsive behavior, and accessibility considerations.</p>
                            <p>By committing to structured, clear documentation, we ensured smooth collaboration between designers and developers, minimized ambiguity, and created a reliable source of truth for implementation and maintenance across platforms.</p>
                        </span>
                    </div>
                </div>

                <img src={documentation} alt="Documentation" />

            </section>

            <div className="alignment">
                <hr className="separator" />
            </div>

            <section className="alignment column-flex g-60">
                <div className="blog">
                    <div><p className="eyebrow">Design Review </p></div>
                    <div className="column-flex g-20 text-box">
                        <h2>Final Checks & QA Workflow</h2>
                        <p>After development, I reviewed each component in Storybook to check that it matched the designs from Figma — both in visuals and behavior. If something didn’t work or look right, I logged it in GitHub and worked with developers to fix it. I retested each component after updates.</p>
                        <p>Once everything worked as expected, I approved the pull request and marked the component as stable — ready for use in production.</p>
                    </div>
                </div>

                <img src={designReview} alt="designReview" />

            </section>

            <div className="alignment">
                <hr className="separator" />
            </div>

            <section className="alignment">
                <div className="blog">
                    <div><p className="eyebrow">Nowadays</p></div>
                    <div className="column-flex g-20 text-box">
                        <h2>Continuous Development and Iteration</h2>
                        <p>The design system is not a static asset — it continues to evolve and expand. Regular updates are released to address emerging project needs and incorporate user feedback from designers across multiple teams. <br />
                            A structured feedback loop has been established to gather insights on component usability, identify gaps in patterns, and refine interactions. This ongoing analysis enables the team to prioritize necessary adjustments, implement enhancements, and maintain alignment with evolving product requirements. <br />
                            By maintaining a continuous iteration cycle, the system remains relevant, adaptive, and capable of scaling to meet the demands of new projects and use cases.</p>
                    </div>
                </div>
            </section>
        </div>
    </>)
}