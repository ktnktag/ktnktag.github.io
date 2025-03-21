import './About.css'

import Photo from '../../assets/jpg/Lera.jpg'
import CursorImage from '../../assets/svg/Cursor.svg'
import { default as Arrow } from '../../assets/svg/Arrow.svg?react'


export default function About() {
    return (
        <>
            <header className='welcome-box'>
                <p className='welcome'>Hello there! 👋 I'm valeria yakovchik,</p>
                <h1 className='title'>Experience Designer from Poland, working to create exceptional user experiences.</h1>
                <div className='cursor_box'>
                    <span className='cursor'>
                        <img src={CursorImage} alt="cursor" />
                    </span>
                </div>
            </header>

            <div id="about" className='experience'>
                <div className='experience-list'>
                    <ul>
                        <li>
                            <h3 style={{marginBottom: 2}}>2022 — ✦</h3>
                            <p>Experience Designer<span className='gray'>, <a href="https://www.epam.com/">EPAM</a></span></p>
                        </li>
                        <li>
                            <h3 style={{marginBottom: 2}}>2022</h3>
                            <p>Product Designer<span className='gray'>, <a href="https://rs.school/">Rolling Scopes</a></span></p>
                        </li>
                        <li>
                            <h3 style={{marginBottom: 2}}>2022</h3>
                            <p>User Interface Designer<span className='gray'>, <a href="https://itexus.com/">Itexus</a></span></p>
                        </li>
                        <li>
                            <h3 style={{marginBottom: 2}}>2021 — 2022</h3>
                            <p>Experience Designer<span className='gray'>, Freelance</span></p>
                        </li>
                    </ul>
                </div>

                <div className='experience-description'>

                    <article className='about'>
                        <h3 style={{marginBottom: 4}}>About</h3>
                        <span>
                            <p>User experience designer with a strong focus on design systems, UX/UI design, and prototyping, ensuring consistency, scalability, and accessibility across digital products. I specialize in creating and maintaining design systems and tokens, working with both custom solutions and established frameworks like Fiori UI5 and Ant Design.</p>
                            <p>I have experience supporting early-stage startups in setting up efficient design processes and helping large-scale enterprise products maintain design integrity and usability. My approach is data-driven and iterative, combining UX research, prototyping, and close collaboration with developers and stakeholders to deliver user-centered, high-quality solutions.</p>
                            <p>I thrive in cross-functional teams, aligning design with business objectives, improving workflows, and optimizing handoff processes to streamline development. Whether working as a solo designer or within a team, I ensure that every design decision enhances the user experience and contributes to the product's success.</p>
                        </span>
                    </article>

                    <article className='skills'>
                        <h3 style={{marginBottom: 16}}>Skills</h3>

                        <div>
                        <ul className='list'>
                            <p>👨‍💻 Design & UX</p>
                            <li>UX research, prototyping, wireframing, user flows, usability testing</li>
                            <li>Interaction design, accessibility, quick iterations, mobile & web design</li>
                            <li>Information architecture, remote user testing, heuristics & cognitive principles</li>
                        </ul>

                        <ul className='list'>
                            <p>📐 Design Systems & Tokens</p>
                            <li>Creating and maintaining design systems for scalable products</li>
                            <li>Design tokens implementation and standardization</li>
                            <li>Component libraries, UI consistency, multi-platform design (web, mobile, enterprise)</li>
                            <li>Working with Fiori UI5, Ant Design, and custom design systems</li>
                        </ul>

                        <ul className='list'>
                            <p>🤝 Collaboration & Processes</p>
                            <li>Stakeholder collaboration: working with product managers, engineers, and business teams</li>
                            <li>Developer handoff: preparing design specifications, optimizing workflows</li>
                            <li>Cross-functional teamwork: bridging design and development, ensuring feasibility</li>
                            <li>Documentation & guidelines: writing functional specifications, improving design ops</li>
                        </ul>

                        <ul className='list'>
                            <p>🛠 Tools & Platforms</p>
                            <li>Figma (auto-layout, components, variables, prototyping, design tokens)</li>
                            <li>Design handoff tools (Figma Dev Mode, Storybook)</li>
                            <li>Collaboration & tracking (Jira, Confluence, Notion)</li>
                        </ul>
                        </div>
                    </article>

                    <footer className='socials'>
                        <h3 style={{marginBottom: 16}}>Socials</h3>
                        <ul>
                            <li>
                                <a href='https://www.linkedin.com/in/kto-nekto/'>LinkedIn <Arrow /></a>
                            </li>
                            <li>
                                <a href='https://dribbble.com/kto_nekto'>Dribbble <Arrow /></a>
                            </li>
                            <li>
                                <a href='https://medium.com/@kto.nekto'>Medium <Arrow /></a>
                            </li>
                            <li>
                                <a href='https://www.behance.net/kto_nekto'>Behance <Arrow /></a>
                            </li>

                            <li className='indent-photo'>
                                <img src={Photo} alt="photo" className='photo' />
                            </li>

                            <li className='indent-email'>
                                <div className='email'>
                                    <span>
                                        <h3>Email</h3>
                                        <a href="mailto:valeria.yakovchik@gmail.com">valeria.yakovchik@gmail.com</a>
                                    </span>

                                    <span>
                                        <h3>Location</h3>
                                        <p>Warsaw, Poland</p>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </footer>
                </div>
            </div >
        </>
    )
}