import Sap from '../assets/svg/SAP.svg'

import HP1 from '../assets/png/HP/HP1.webp'
import HP2 from '../assets/png/HP/HP2.webp'
import HP3 from '../assets/png/HP/HP3.webp'
import HP4 from '../assets/png/HP/HP4.webp'
import HP5 from '../assets/png/HP/HP5.webp'
import HP6 from '../assets/png/HP/HP6.webp'
import HP7 from '../assets/png/HP/HP7.webp'

import Note from './UI/note/Note'
import Overview from './UI/overview/Overview'
import Breadcrumbs from './UI/breadcrumbs/Breadcrumbs'
import Image from './UI/Image/Image'

export default function HyperspacePortal() {
    return (
        <>
            <Breadcrumbs />
            <header>
                <div className="column-alignment">
                    <p>SAP’s internal CI/CD platform empowers over 50,000 engineers to efficiently deliver value to customers, supporting the shift from on-premise to cloud-native solutions. The Hyperspace Portal, the central entry point for developers, offers unified access to platform services, APIs, and tooling. It enables the efficient creation of cloud-native services and applications aligned with SAP’s global architecture standards, covering the entire development lifecycle—from setup to delivery and operations.</p>
                </div>
            </header>

            <Note />

            <Overview
                client={Sap}
                expertise='UX Designer, Fiori Expert'
                tools='Figma, Jira, Mural'
                year='2024'>
            </Overview>

            <section>
                <h2 className='title'>Project Overview</h2>

                <span className='paragraph'>
                    <p>
                        For most enhancements and interface updates, we followed a standard approach based on the design system guidelines. This meant:
                    </p>
                    <ul className='markers'>
                        <li>
                            <p>Mockups and designs were created by closely adhering to the established design system and best practices from previous projects.</p>
                        </li>
                        <li>
                            <p>After the design was finalized, it was handed off to the development team for implementation and release.</p>
                        </li>
                    </ul>
                    <p>
                        However, for more complex new features that required in-depth research and user-centered design, we followed the design sprint approach.
                    </p>
                </span>
                <div>

                </div>
            </section>

            <section>
                <h2 className='title'>Project Overview</h2>
                <div className="column-alignment">
                    <p>The design sprint was used for new features that required more exploration and attention. It is a structured, time-constrained process designed to accelerate decision-making and design development</p>
                    <br />

                    <article>
                        <h3 className='subtitle'>Map</h3>
                        <br />
                        <p>We began by mapping out the problem, gathering insights into the goals, user needs, and challenges. This phase helped us understand the scope and aligned the team on objectives.</p>
                    </article>

                    <Image imgPath={HP1} title='Take "How Might We", Voting' />

                    <article>
                        <h3 className='subtitle'>Sketch</h3>
                        <br />
                        <p>In this phase, ideas were generated through sketching and brainstorming possible solutions. This allowed the team to explore different approaches before moving to the next phase.</p>
                        <br />
                        <p>To find inspiration before creating our own solutions, we began with ”Lightning Demos”. This involved researching and analyzing existing products that addressed similar challenges. By reviewing best practices and innovative approaches, we gained insights that helped shape our own concepts.</p>
                    </article>

                    <Image imgPath={HP2} title='Lightning Demos' />

                    <span className='paragraph'>
                        <p>Next, we conducted a Crazy 8 exercise. Each team member sketched eight different ideas within a short timeframe to encourage rapid ideation and diverse thinking. These sketches focused on different ways to solve the problem, emphasizing creativity and out-of-the-box thinking.</p>
                        <p>After completing the sketches, we submitted them to the moderator for anonymous voting. This step ensured that ideas were evaluated fairly, without influence from authority or team dynamics. By removing bias, we encouraged objective decision-making and allowed the strongest ideas to emerge based on their merit rather than personal influence.</p>
                        <p>I think this stage was the most difficult for me, because I constantly kept in mind the limitations and patterns of the design system used and could not fully free my imagination and design skills.</p>

                        <br />
                        <article>
                            <h3 className='subtitle'>Decide</h3>
                            <br />
                            <p>After evaluating different solutions, the team decided on the best course of action and the direction to take. This decision was made through discussions and taking into account the limitations of the design system being used and whether we were willing to go for customization.</p>
                        </article>
                    </span>

                    <Image imgPath={HP3} title='Voting for individual features in each sketch solution' />

                    <span className='paragraph'>
                        <h3 className='subtitle'>Prototype</h3>
                        <p>I was responsible for building the prototype based on the team's discussions and key decisions. After an in-depth conversation with the Lead Designer and Project Owner, we aligned on our core vision and identified the key featuresthat were essential for testing. At the same time, we prioritized which elements could be postponed due to the limited timeframe of the design sprint.</p>
                        <p>Once the scope was defined, I created an interactive prototype that simulated real user interactions as closely as possible. The goal was to provide a realistic experience that would allow us to gather meaningful feedback during testing.</p>
                        <br />
                        <h3 className='subtitle'>Testing</h3>
                        <p>On our testing day, we bridge the gap between theory and reality, putting our hypotheses to the ultimate test through remote usability testing with real users. Guided by a moderator, we orchestrate a series of tasks designed to evaluate the efficacy of our new solution and its alignment with user expectations.</p>
                    </span>

                    <Image imgPath={HP4} title='Usability Testing Session' />

                    <span className='paragraph'>
                        <p>Task-Based Evaluation: With the user journey as our compass, we present participants with a series of tasks reflective of key flows within our solution. These tasks serve as litmus tests, illuminating how seamlessly users can navigate through our interface and accomplish their objectives.</p>
                        <p>Moderator-Led Usability Testing: A skilled moderator takes the helm, guiding participants through the testing process with clarity and empathy. Their role is to observe, listen, and probe, uncovering insights into user behaviour, pain points, and moments of delight.</p>
                        <p>Note Taking: As participants traverse our solution, a dedicated note-taker diligently records observations, interactions, and notable quotes. These meticulous notes serve as a rich repository of qualitative data, capturing the essence of user experiences in their own words.</p>
                    </span>

                    <Image imgPath={HP5} title='Notes from Sessions' />
                    <Image imgPath={HP6} title='Hypothesis per Sessions' />
                </div>
            </section>

            <section>
                <h2 className='title'>Post-Sprint Activities</h2>

                <div className="column-alignment">
                    <p>Once the design sprint concluded, we moved into the refinement and implementation phase. The post-sprint activities ensured a smooth transition from validated concepts to production-ready designs.</p>

                    <article className='paragraph'>
                        <br />
                        <h3 className='subtitle'>Polishing for Perfection</h3>
                        <p>I refined the mockups based on usability testing insights, ensuring that every interaction was smooth and intuitive. This included:</p>

                        <ul className='markers'>
                            <li><p>Fixing usability pain points discovered during testing</p></li>
                            <li><p>Enhancing visual consistency and aligning with design system standards</p></li>
                        </ul>
                    </article>

                    <article className='paragraph'>
                        <br />
                        <h3 className='subtitle'>Breaking Down Work for Development</h3>
                        <p>Given the complexity of the new sections, development was split into multiple sprints.</p>

                        <ul className='markers'>
                            <li><p>Provide detailed design documentation and assets</p></li>
                            <li><p>Answer questions and resolve implementation challenges</p></li>
                            <li><p>Iterate quickly based on technical constraints and new insights</p></li>
                        </ul>
                    </article>

                    <Image imgPath={HP7} title='Description of new features' />
                </div>
            </section>
        </>
    )
}