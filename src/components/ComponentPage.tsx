import C1 from '../assets/png/CP/C1.webp'
import C2 from '../assets/png/CP/C2.webp'
import C3 from '../assets/png/CP/C3.webp'
import C4 from '../assets/png/CP/C4.webp'
import C5 from '../assets/png/CP/C5.webp'
import C6 from '../assets/png/CP/C6.webp'
import C7 from '../assets/png/CP/C7.webp'
import C8 from '../assets/png/CP/C8.webp'
import C9 from '../assets/png/CP/C9.webp'
import C10 from '../assets/png/CP/C10.webp'
import C11 from '../assets/png/CP/C11.webp'
import C12 from '../assets/png/CP/C12.webp'
import C13 from '../assets/png/CP/C13.webp'
import C14 from '../assets/png/CP/C14.webp'
import C15 from '../assets/png/CP/C15.webp'
import C16 from '../assets/png/CP/C16.webp'
import C17 from '../assets/png/CP/C17.webp'
import C18 from '../assets/png/CP/C18.webp'
import C19 from '../assets/png/CP/C19.webp'
import C20 from '../assets/png/CP/C20.webp'
import C21 from '../assets/png/CP/C21.webp'

import Note from "./UI/note/Note"
import Image from './UI/Image/Image'

export default function ComponentPage() {
    return (
        <>
            <header>
                <div className="column-alignment">
                    <p>A design system is a collection of reusable UI elements that product teams use and build on to create a consistent user experience across digital products.</p>
                    <Image imgPath={C1} />
                </div>
            </header>

            <Note />

            <section>
                <h2 className='title'>The foundation</h2>
                <div className='column-alignment'>
                    <span className='paragraph'>
                        <p>Just as a house requires a solid foundation, design systems rely on their own fundamental groundwork. At the core of our project lies the spacing and grid system, forming the cornerstone of our design framework. </p>
                        <p>Dive into the following sections to explore the comprehensive framework I've meticulously crafted.</p>
                    </span>

                    <div className="triple-column">
                        <Image imgPath={C2} />
                        <Image imgPath={C3} />
                        <Image imgPath={C4} />
                    </div>
                </div>
            </section>


            <section>
                <h2 className='title'>Components</h2>
                <div className='column-alignment'>
                    <div className="triple-column">
                        <Image imgPath={C5} />
                        <Image imgPath={C6} />
                        <Image imgPath={C7} />
                    </div>

                    <span className='paragraph'>
                        <p>Our approach to component development was rooted in flexibility, preserving the capacity to cover a multitude of use cases without the need for detach or adjustment. Some attributes remained concealed to allow for potential future expansions, accommodating features like additional buttons, optional avatars, or placeholders etc. not initially present in the prior design system.</p>
                        <p>Recognising the importance of accommodating both LTR and RTL languages and script directions, we thoughtfully designed all components also for RTL languages. This foresight eliminates the need for manual adaptation, guaranteeing a seamless transition for future use and efficient component deployment.</p>
                    </span>

                    <div className="triple-column">
                        <Image imgPath={C8} />
                        <Image imgPath={C9} />
                        <Image imgPath={C10} />
                    </div>

                    <span className='paragraph'>
                        <p>Within our meticulous design process, we also acknowledged the some components needed to be adapted for several breackpoints: where layout of component changed depends on screen sizes, or whe sizes of the part inside components or font changed. </p>
                        <p>This approach enabled us to ensure that our design system remained responsive and consistently met user expectations, regardless of the viewing device or screen size. It offered the flexibility to seamlessly adjust to different layout requirements and maintain visual and functional integrity.</p>
                    </span>

                    <div className="triple-column">
                        <Image imgPath={C11} />
                        <Image imgPath={C12} />
                        <Image imgPath={C13} />
                    </div>
                </div>
            </section>

            <section>
                <h2 className='title'>Patterns</h2>
                <div className='column-alignment'>
                    <p>But no one canceled the phrase “I am a designer, I know what is best and I want it differently.” Therefore, the Brand Digital Design System is made as flexible as possible, with the ability to adapt components and patterns, but it also continues to evolve and develop, including based on feedback from other designers from other projects (who use our design system), marketing and developers.</p>

                    <Image imgPath={C14} />
                    <Image imgPath={C15} />
                    <Image imgPath={C16} />

                    <p>You can check out the live demo on our website for Filters, Contact etc.</p>

                    <Image imgPath={C17} />
                </div>
            </section>

            <section>
                <h2 className='title'>Implementation of Accessibility Standards</h2>
                <div className='column-alignment'>
                    <span className='paragraph'>
                        <p>Accessibility was a cornerstone in the creation of our new design system. To ensure our product is usable by the widest possible audience, including people with disabilities, we adhered to internationally recognized WCAG 2.2 AA standards. Throughout the development process, we employed a rigorous testing protocol.</p>
                        <p>We utilized design plugins to verify compliance with AA contrast minimums during the design phase. Additionally, components underwent thorough testing in a test environment to ensure they met accessibility requirements before being released. This multi-layered approach ensured that accessibility considerations were integral to the design and development process, rather than an afterthought.</p>
                    </span>

                    <Image imgPath={C18} />
                </div>
            </section>

            <section>
                <h2 className='title'>Theming in the Design System</h2>
                <div className='column-alignment'>
                    <span className='paragraph'>
                        <p>Our design system supports four themes: Light, Dark, High Contrast Light, and High Contrast Dark. The development process began with the Light theme, for which we created design tokens and released most components. This foundation made it straightforward to develop the additional themes, as we could focus primarily on accessibility considerations.</p>
                        <p>Creating accessible themes involves more than just selecting colors; it requires evaluating the contrast ratio between color pairs to ensure they meet accessibility standards. No single color is inherently accessible; it’s the combination of colors that determines accessibility. By checking contrast ratios and incorporating them into Figma variables, we ensured that each theme adheres to accessibility guidelines.</p>
                    </span>

                    <Image imgPath={C19} />
                    <Image imgPath={C20} />
                    <Image imgPath={C21} />
                </div>
            </section>
        </>
    )
}