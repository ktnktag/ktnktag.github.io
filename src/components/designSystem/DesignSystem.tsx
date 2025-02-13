import './DesignSystem.css'

import DesignImage1 from '../../assets/png/DesignSystemImg1.png'
import DesignImage2 from '../../assets/png/DesignSystemImg2.png'
import DesignImage3 from '../../assets/png/DesignImage3.png'
import DesignImage4 from '../../assets/png/DesignImage4.png'
import DesignImage5 from '../../assets/png/DesignImage5.png'
import DI1 from '../../assets/png/DI1.png'
import DI2 from '../../assets/png/DI2.png'
import DI3 from '../../assets/png/DI3.png'

import Note from '../UI/note/Note'
import Overview from '../UI/overview/Overview'
import Token from '../UI/token/Token'
import Image from '../UI/Image/Image'
import Project from '../UI/project/Project'

export default function DesignSystem() {
    return (
        <>
            <section className='column-alignment'>
                <h1 className='first-title'>Selected Works / <span>Design System for Global Tech Company</span></h1>
                <span className='paragraph'>
                    <p>Embark on a journey through the development of a brand digital design system tailored for SAP, meticulously aligned with the esteemed SAP Fiori Design System.</p>
                    <p>With a primary focus on crafting a comprehensive design system supplemented by thorough developer documentation, our objective is to instill a unified visual identity seamlessly integrated with SAP's foundational resources. </p>
                </span>
                <Image imgPath={DesignImage1}></Image>
            </section>

            <Note></Note>
            <Overview
                client='SAP'
                expertise='UX Designer, Lead'
                deliverables='X, Design System, Documentation'
                tools='Figma, Frontify, GitHub'
                year='2023 - 2025'>
            </Overview>

            <section>
                <h2 className='title'>Work Process</h2>
                <div className='column-alignment'>
                    <p>Our work process for this project was designed with organization and efficiency in mind. We divided the project into sprints, each focused on a specific set of components, patterns, and templates. This approach allowed us to maintain clarity and manage the project effectively, even with multiple designers collaborating.</p>
                    <Image imgPath={DesignImage2} title='Figma environment organisation'></Image>
                    <span className='paragraph'>
                        <p>For each component, we created a dedicated Figma file. This practice ensured that we could closely monitor changes, iterations, and updates for each component individually.The separation of components into distinct files simplified navigation and management for both our design team and other project stakeholders.</p>
                        <p>We initiated the project by focusing on basic components and gradually progressed towards more complex ones. Following this approach allowed us to establish a solid foundation before delving into intricate design work. </p>
                        <p>As our project evolved, we transitioned from basic components to crafting patterns, which are complex components that encompass smaller ones. This approach provided a structured way to build upon the simpler elements and create comprehensive, sophisticated design solutions.</p>
                    </span>
                </div>
            </section>

            <section>
                <h2 className='title'>Design System</h2>
                <div className='column-alignment'>
                    <span className='paragraph'>
                        <p>A design system serves as the backbone of digital products, providing a structured collection of reusable components and clear standards. Its significance lies in fostering scalability, efficiency, and consistency in design, effectively bringing order to chaos. </p>
                        <p>While this project showcases some of the components I've developed for the design system, it's essential to recognize that a design system extends far beyond a mere component library. When constructed thoughtfully, it becomes the lifeblood of your products. </p>
                        <p>Dive into the following sections to explore the comprehensive framework I've meticulously crafted.</p>
                    </span>

                    <div className='two-column'>
                        <Project
                            image={DesignImage3}
                            title="Components and Patterns" >
                            Each component was meticulously designed, adhering strictly to our established design language.
                        </Project>

                        <Project
                            image={DesignImage4}
                            title="Documentation" >
                            Specifications provided an in-depth insight into the purpose, usage guidelines, and technical characteristics of every element.
                        </Project>
                    </div>
                </div>
            </section>

            <section>
                <h2 className='title'>Tokenization</h2>
                <div className="column-alignment">
                    <p>Design Tokens serve as the centralized repository for design decisions, housing essential elements distributed across design tools and coding languages. They encompass crucial aspects such as colors, typography, shadows, border radius, spacing, borders, animation, and icon sizing. These tokens act as the single source of truth, ensuring consistency and coherence throughout the design and development process.</p>
                    <Image imgPath={DesignImage5} title='Figma Variables'></Image>
                    <p>Creating design tokens involves a systematic approach to defining and organizing the values that make up your design system.</p>
                    <div className='column-alignment'>
                        <span className='n_3'>
                            <Token
                                value=' #188918'
                                global='Color/Green/7'
                                alias='Semantic/Success/Selection'
                                specific='ProgressBar/Positive/Bar'>
                            </Token>

                        </span>

                        <span className='n_3'>
                            <Token
                                value=' #223548'
                                global='Color/Grey/9'
                                alias='Core/Text'
                                specific='MessageStrip/Action/Text'>
                            </Token>
                        </span>

                        <Token
                            value=' #0070F2'
                            global='Color/Blue/7'
                            alias='Core/PrimarilyAction'
                            specific='Button/Standard/Background'>
                        </Token>
                    </div>
                    <span className='paragraph'>
                        <p>For some components like buttons was also created in dark mode, cause them used in dark background, despite the fact that now it not fully dark theme.  It allows to us prepare for the dark theme implementation without fully committing to it at the moment. This will save time and effort letter when create the dark theme become prioritized in the future.</p>
                        <p>It's a reasonable approach to avoid creating all the dark theme tokens prematurely to prevent redundant work in the future. Instead, we took these steps to prepare for the dark theme while minimizing the risk of double work.</p>
                        <p>Create Placeholder Tokens: Instead of creating all the dark theme tokens, establish placeholder variables for the dark theme components.</p>
                        <p>Implement Tokens as Needed: As you work on design components that will eventually be part of the dark theme, implement only the necessary tokens or Component specific token directly to Global Token. In this case all components still will be properly work in dark mode.</p>
                    </span>
                </div>
            </section>

            <section>
                <h2 className='title'>Design Review </h2>
                <div className="column-alignment">
                    <span className='paragraph'>
                        <p>A Design Review serves as a critical evaluation to ensure that the final product aligns with the creative vision and user experience crafted by the design team. It involves scrutinizing the developed project to verify that all graphic and technical components are displayed and function correctly.</p>
                        <p>In the collaborative process, developers examine Figma components and Documentation created by designers.</p>
                    </span>
                    <Image imgPath={DI1} title='GitHub Board with Tasks'></Image>
                    <span className='paragraph'>
                        <p>My role extends to verifying the consistency and functionality of components using Storybook. Any identified inconsistencies are documented through bug reports on GitHub, which are then addressed by the development team.</p>
                        <p>After fixes are applied, I conduct further testing and validation to ensure the integrity of the components. Once satisfied - I'm approving a pull requests, to merge it for updates and mark components as stable.</p>
                    </span>
                    <Image imgPath={DI2} title='Bug Report'></Image>
                </div>
            </section>

            <section>
                <h2 className='title'>Result</h2>
                <div className="column-alignment">
                    <p>The implementation of our new modern design system marks a significant transformation from the previous, outdated system, ushering in a host of benefits that elevate our product's user experience and streamline our development process.</p>

                    <p className='link'>Live web-site: <a href="https://www.sap.com/index.html">sap.com</a></p>

                    <article>
                        <h3 className='subtitle'>New Modern Design System</h3>
                        <p>This change breathes new life into our product, aligning it with contemporary design standards and user expectations. The modern design system not only enhances visual appeal but also improves usability, making our product more intuitive and engaging for users.</p>
                    </article>
                    <article>
                        <h3 className='subtitle'>Consistency and Coherence</h3>
                        <p>The new design system introduces a suite of predefined design assets and components that are consistently applied across our product. This consistency eliminates the need for creating separate components that vary from page to page, ensuring a polished and user-friendly experience. The adoption of the new design system by other websites within our company has further established a unified design language, reinforcing our brand identity and providing a seamless experience for users across different platforms.</p>
                    </article>
                    <span className='n_1'>
                        <Image imgPath={DI3} title='Library analysis'></Image>
                    </span>
                    <article>
                        <h3 className='subtitle'>Scalability and Flexibility</h3>
                        <p>Our design system serves as a robust foundation for future growth and adaptability. It facilitates consistent updates and maintenance, making it easier to respond to evolving user needs and business requirements. This scalability ensures that any new features or changes can be integrated smoothly, maintaining coherence across the entire product.</p>
                    </article>
                    <article>
                        <h3 className='subtitle'>Enhanced Focus on Accessibility</h3>
                        <p>The new design system places a strong emphasis on accessibility, ensuring that our product is usable by a wider range of people, including those with disabilities. By incorporating best practices for accessibility, we are committed to creating an inclusive product that offers a better experience for all users, regardless of their abilities.</p>
                    </article>
                    <p>In summary, the new design system not only modernizes our product’s appearance but also enhances its functionality and accessibility, laying the groundwork for a consistent, scalable, and inclusive user experience.</p>
                </div>
            </section>
        </>
    )
}