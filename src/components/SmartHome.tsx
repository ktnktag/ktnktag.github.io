import SH1 from '../assets/png/SH/SH1.webp'
import SH2 from '../assets/png/SH/SH2.webp'
import SH3 from '../assets/png/SH/SH3.webp'
import SH4 from '../assets/png/SH/SH4.webp'
import SH5 from '../assets/png/SH/SH5.webp'
import SH6 from '../assets/png/SH/SH6.webp'

import Image from './UI/Image/Image'

export default function SmartHome() {
    return (<>
        <section id='Overview'>
            <div className='banner'>
                <h1 className='title'>Not POV, but REAL: you got into a real project</h1>
                <p className='description'>We met at on the offline workshop, work in small groups and created a design for the smart home management application.</p>
                <p className='year'>January 3, 2024</p>
            </div>

            <Image imgPath={SH1} />
        </section>

        <section id='Process'>
            <h2 className='title'>Process</h2>
            <div className='column-alignment'>
                <span className='paragraph'>
                    <p>The 15 participants were organized into 5 teams, carefully curated to include a mix of senior or mid-level designers alongside less experienced juniors.</p>
                    <p>Over the course of 3 hours, these teams collaborated fervently within a shared Figma space, crafting designs for several screens of a Smart Home mobile app. Following this intense creative process, each team designated one representative to present their designs and elucidate on their solutions, showcasing the collective ingenuity and collaborative effort invested in the session.</p>
                </span>
                <div className='two-column'>
                    <Image imgPath={SH2} />
                    <Image imgPath={SH3} />
                </div>
            </div>
        </section>

        <section id='Task'>
            <h2 className='title'>Task</h2>
            <div className='column-alignment'>
                <span className='paragraph'>
                    <p>For this workshom my role was as stakeholder of the startup, my responsibility was to provide essential resources such as color palettes, fonts, competitor analysis, and a mood board for preferred UI aesthetics.</p>
                    <p>However, my role was not to intervene as a designer or moderator, but rather to act solely as a customer, answering questions as they arose. The objective was to immerse participants in a project mirroring real-world scenarios, fostering independence, negotiation skills, and discernment in prioritizing tasks.</p>
                </span>
                <div className='triple-column'>
                    <Image imgPath={SH4} />
                    <Image imgPath={SH5} />
                    <Image imgPath={SH6} />
                </div>
            </div>
        </section>

        <section id='Result'>
            <h2 className='title'>Result</h2>
            <p>The event yielded the creation of 5 distinct and innovative mobile applications, each reflecting the unique perspectives and creative prowess of its respective team.</p>
        </section>

        <section id='Insights'>
            <h2 className='title'>Insights</h2>
            <p>Key insights gleaned from the event underscored the importance of establishing a clear structure and adhering to time boundaries. Some participants delved too deeply into intricate details, while others veered off track, creating unnecessary artifacts or attempting to outshine their peers. Without a stringent structure, achieving consensus among designers proved challenging. Moving forward, structuring similar events with defined timelines and objectives will be pivotal in optimizing productivity and fostering effective collaboration.</p>
        </section>
    </>)
}