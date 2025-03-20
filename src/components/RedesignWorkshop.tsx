import RW1 from '../assets/png/RW/RW1.webp'
import RW2 from '../assets/png/RW/RW2.webp'
import RW3 from '../assets/png/RW/RW3.webp'
import SW7 from '../assets/png/SW/SW7.webp'

import Image from "./UI/Image/Image"
import Project from "./UI/project/Project"

export default function RedesignWorkshop() {
    return (<>
        <section id='Overview'>
            <div className='banner'>
                <h1 className='title'>Community workshop in Minsk: let's see how it was</h1>
                <p className='description'>The main goal of our meeting was to transform the main page of the art exhibition site and discuss the resulting work.</p>
                <p className='year'>October 12, 2023</p>
            </div>

            <Image imgPath={RW1} />
        </section>

        <section id='Process'>
            <h2 className='title'>Process</h2>
            <div className='column-alignment'>
                <span className='paragraph'>
                    <p>The 13 participants were organized into 4 teams, carefully curated to include a mix of senior or mid-level designers alongside less experienced juniors. Collaborating seamlessly, each team spent 2 hours immersed in a shared Figma space, diligently redesigning a pre-prepared page for art exhibition home page.</p>
                    <p>Following the intense collaboration, a representative from each team stepped forward to present the updated design, showcasing the collective efforts and creative solutions generated during the session.</p>
                </span>
                <div className='two-column'>
                    <Image imgPath={RW2} />
                    <Image imgPath={RW3} />
                </div>
            </div>
        </section>

        <section id='Task'>
            <h2 className='title'>Task</h2>
            <div className='paragraph'>
                <p className='weight-text'>Task 1: Research and Analysis</p>
                <ul className='markers'>
                    <li><p>Analyze the current home page to understand its layout, content, and functionality.</p></li>
                    <li><p>Identify strengths such as clear navigation, engaging visuals, or informative content.</p></li>
                    <li><p>Recognize weaknesses like cluttered layout, slow loading times, or unclear messaging.</p></li>
                    <li><p>Consider the target audience, understanding their demographics, interests, and expectations from an art exhibition website.</p></li>
                </ul>

                <p className='weight-text'>Task 2: Creating a Common Concept</p>
                <ul className='markers'>
                    <li><p>Collaborate with the team to establish a unified vision for the redesign.</p></li>
                    <li><p>Discuss key changes needed to enhance visual appeal and user experience.</p></li>
                    <li><p>Determine improvements in layout, content organization, and overall aesthetics.</p></li>
                    <li><p>Align the concept with the expectations and preferences of the target audience.</p></li>
                </ul>

                <p className='weight-text'>Task 3: Design Detail</p>
                <ul className='markers'>
                    <li><p>Choose a color palette that reflects the ambiance of an art exhibition, considering mood and emotions.</p></li>
                    <li><p>Select readable fonts that complement the content and maintain consistency throughout the design.</p></li>
                    <li><p>Arrange elements thoughtfully to improve visual hierarchy, balance, and user flow.</p></li>
                    <li><p>Incorporate visual accents such as images, graphics, or interactive elements to draw attention and engage users.</p></li>
                </ul>

                <p className='weight-text'>Task 4: Presentation of the Result</p>
                <ul className='markers'>
                    <li><p>Prepare a concise presentation highlighting the main changes and improvements made in the redesign.</p></li>
                    <li><p>Clearly articulate the rationale behind design decisions, emphasizing user-centricity and alignment with project goals.</p></li>
                    <li><p>Demonstrate how the redesign addresses identified weaknesses and enhances the overall user experience.</p></li>
                    <li><p>Encourage feedback and discussion from the team to ensure everyone is aligned and committed to the proposed changes.</p></li>
                </ul>
            </div>
        </section>

        <section id='As a Speaker'>
            <h2 className='title'>As a Speaker</h2>
            <p>As a speaker, my role is to provide guidance and support without imposing my own vision on the team. It's crucial to facilitate productive discussions and encourage creativity while ensuring that any inconsistencies or gaps in the design process are addressed. My participation aims to enhance collaboration and align the team's efforts towards achieving the project goals effectively.</p>
        </section>

        <section id='Result'>
            <h2 className="title">Result</h2>
            <div className='column-alignment'>
                <p>Despite the challenges encountered, each team successfully navigated their tasks, showcasing the power of teamwork, creativity, and effective design principles. Stay tuned for the upcoming presentations where we'll unveil the results of our collective efforts!</p>

                <div className='two-column'>
                    <Project
                        image={SW7}
                        isLink={true}
                        title='Video of the redesign process on YouTube'
                        path='https://www.youtube.com/watch?v=0hOSCefcnLI&ab_channel=DesignSpot'>
                        Watch the redesigning process and drop your thoughts in the comments about which version you fancy the most!
                    </Project>

                    <Project
                        image={RW1}
                        isLink={true}
                        title='Short article About Event on LinkedIn'
                        path='https://www.linkedin.com/pulse/community-workshop-minsk-lets-see-how-designspot-community/?trackingId=2EvERWy4QeWCvzo6dUfrTw%3D%3D'>
                        On Wednesday, October 12, we tried a new community event format: Website Redesign Workshop!
                    </Project>
                </div>
            </div>
        </section>
    </>)
}