import DS4 from '../assets/png/DSP/DS4.webp'
import D1 from '../assets/png/DP/D1.webp'
import D2 from '../assets/png/DP/D2.webp'
import D3 from '../assets/png/DP/D3.webp'
import D4 from '../assets/png/DP/D4.webp'
import D5 from '../assets/png/DP/D5.webp'
import D6 from '../assets/png/DP/D6.webp'
import D7 from '../assets/png/DP/D7.webp'
import D8 from '../assets/png/DP/D8.webp'

import Note from "./UI/note/Note"
import Image from "./UI/Image/Image"

export default function DocumentationPage() {
    return (
        <>  
            <section id='Overview'>
                <div className="column-alignment">
                    <p>In our pursuit of developing a robust design system, we adhered to a fundamental principle: "Documentation, documentation, documentation." Our goal was to meticulously capture the life cycle of every reusable element featured across SAP websites, mobile screens, and large stand-alone displays. This entailed comprehensive record-keeping for all components and patterns, ranging from breadcrumbs and headers to inputs and buttons.</p>
                    <Image imgPath={DS4}></Image>
                </div>
            </section>

            <Note />

            <section id="Specification structire">
                <h2 className='title'>Specification structire</h2>

                <div className="column-alignment">
                    <p>In the component guidelines, you will find all the necessary information, including types, variants, sizes, and states of components. There are brief descriptions to help you quickly understand the basics.</p>
                    <Image imgPath={D1} />

                    <p>Important elements such as the anatomy of the component, spacing, and typography rules are highlighted separately. This information is especially useful for developers, designers, and anyone who wants to rebuild components from scratch. The guidelines explain the rules for working with sizes and proportions, as well as recommendations for applying margins and spacing to create a harmonious interface.</p>

                    <div className='two-column'>
                        <Image imgPath={D2} />
                        <Image imgPath={D3} />
                    </div>

                    <p>Additionally, the guidelines go into detail about the different behaviors of components in various situations. This includes both default states and user interactions such as hover, focus, active, and inactive states. We also explain how components should adapt on different devices and screens, following the principles of responsive design.</p>

                    <div className='two-column'>
                        <Image imgPath={D4} />
                        <Image imgPath={D5} />
                    </div>

                    <p>A special section is dedicated to accessibility, where recommendations for improving the accessibility of components are provided. This includes using semantic markup, adding text for screen readers, and ensuring proper contrast and accessible controls.</p>
                    <Image imgPath={D6} />
                    <p>The guidelines also present recommendations for our products aimed at ensuring consistency and usability. It explains how components should and should not be used to guarantee uniformity across different projects and platforms.</p>

                    <div className='two-column'>
                        <Image imgPath={D7} />
                        <Image imgPath={D8} />
                    </div>
                </div>
            </section>
        </>
    )
}