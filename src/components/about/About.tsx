import './About.css'

import Photo from '../../assets/Lera.jpg'
import Arrow from '../../assets/arrow-up-right.svg'
function About() {
    return (
        <>
            <section className='welcome-box'>
                <p className='welcome'>Hello there! 👋 I’m valeria yakovchik,</p>
                <h1 className='title'>Experience Designer from Poland, working to create exceptional user experiences.</h1>
            </section>

            <section className='experience'>

                <div className='experience-list'>
                    <ul>
                        <li>
                            <h3>2022 — ✦</h3>
                            <p>Experience Designer<span className='gray'>, EPAM</span></p>
                        </li>
                        <li>
                            <h3>2022</h3>
                            <p>Product Designer<span className='gray'>, Rolling Scopes</span></p>
                        </li>
                        <li>
                            <h3>2022</h3>
                            <p>User Interface Designer<span className='gray'>, Itexus</span></p>
                        </li>
                        <li>
                            <h3>2021 — 2022</h3>
                            <p>Experience Designer<span className='gray'>, Freelance</span></p>
                        </li>
                    </ul>
                </div>

                <div className='experience-description'>

                    <article className='about'>
                        <h3>About</h3>
                        <span>
                            <p>Focused on UX design, prototyping and design systems; at the same time, my experience span across all stages of the product lifecycle.</p>
                            <p>Enthusiastic about assisting early-stage startups in establishing efficient processes, enhancing their products, and successfully launching. Simultaneously, I'm equally passionate about contributing to large-scale, long-standing products.</p>
                            <p>Experienced in independently leading design projects, whether as a solo designer or collaboratively within a team.</p>
                        </span>
                    </article>

                    <article className='skills'>
                        <h3>Skills</h3>
                        <p>UX Research, Prototyping, Wireframing, Quick Iterations, Interaction Design, Interviewing, Remote User Testing, User Flows, Mobile Design, Web Design, SAP Fiori UX, Design Systems, Design Tokens, Functional Specifications</p>
                    </article>

                    <footer className='socials'>
                        <h3>Socials</h3>
                        <ul>
                            <li>
                                <p className='link'>LinkedIn <img src={Arrow} alt="arrow-up-right" /></p>
                            </li>
                            <li>
                                <p className='link'>Dribbble <img src={Arrow} alt="arrow-up-right" /></p>
                            </li>
                            <li>
                                <p className='link'>Medium <img src={Arrow} alt="arrow-up-right" /></p>
                            </li>
                            <li>
                                <p className='link'>Behance <img src={Arrow} alt="arrow-up-right" /></p>
                            </li>

                            <li className='indent'>
                                <img src={Photo} alt="photo" className='photo' />
                            </li>

                            <li className='indent'>
                                <div className='email'>
                                    <span>
                                        <h3>Email</h3>
                                        <a href="mailto:valeria.yakovchik@gmail.com">valeria.yakovchik@gmail.com</a>
                                    </span>

                                    <span>
                                        <h3>Location</h3>
                                        <p>Warszawa, Polska</p>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </footer>
                </div>
            </section>
        </>
    )
}

export default About