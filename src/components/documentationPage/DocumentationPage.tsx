import DesignImage from '../../assets/png/DesignImage4.png'
import S1 from '../../assets/png/S1.png'
import S2 from '../../assets/png/S2.png'
import S3 from '../../assets/png/S3.png'
import S4 from '../../assets/png/S4.png'
import S5 from '../../assets/png/S5.png'
import S6 from '../../assets/png/S6.png'
import S7 from '../../assets/png/S7.png'
import S8 from '../../assets/png/S8.png'

import Note from "../UI/note/Note"
import Image from "../UI/Image/Image"

interface Props {
    onChange: any;
}

export default function DocumentationPage({ onChange }: Props) {
    return (
        <>
            <header>
                <h1 className='first-title'><a href="#" onClick={() => onChange("Selected Works")}>Selected Works</a> / <a href="#" onClick={() => onChange("Redesign Workshop")}>Design System for Global Tech Company</a> / <span> Documentation </span></h1>
                <div className="column-alignment">
                    <p>In our pursuit of developing a robust design system, we adhered to a fundamental principle: "Documentation, documentation, documentation." Our goal was to meticulously capture the life cycle of every reusable element featured across SAP websites, mobile screens, and large stand-alone displays. This entailed comprehensive record-keeping for all components and patterns, ranging from breadcrumbs and headers to inputs and buttons.</p>
                    <Image imgPath={DesignImage}></Image>
                </div>
            </header>

            <Note></Note>

            <section>
                <h2 className='title'>Specification structire</h2>

                <div className="column-alignment">
                    <p>In the component guidelines, you will find all the necessary information, including types, variants, sizes, and states of components. There are brief descriptions to help you quickly understand the basics.</p>
                    <Image imgPath={S1}></Image>

                    <p>Important elements such as the anatomy of the component, spacing, and typography rules are highlighted separately. This information is especially useful for developers, designers, and anyone who wants to rebuild components from scratch. The guidelines explain the rules for working with sizes and proportions, as well as recommendations for applying margins and spacing to create a harmonious interface.</p>

                    <div className='two-column'>
                        <Image imgPath={S2}></Image>
                        <Image imgPath={S3}></Image>
                    </div>

                    <p>Additionally, the guidelines go into detail about the different behaviors of components in various situations. This includes both default states and user interactions such as hover, focus, active, and inactive states. We also explain how components should adapt on different devices and screens, following the principles of responsive design.</p>

                    <div className='two-column'>
                        <Image imgPath={S4}></Image>
                        <Image imgPath={S5}></Image>
                    </div>

                    <p>A special section is dedicated to accessibility, where recommendations for improving the accessibility of components are provided. This includes using semantic markup, adding text for screen readers, and ensuring proper contrast and accessible controls.</p>
                    <Image imgPath={S6}></Image>
                    <p>The guidelines also present recommendations for our products aimed at ensuring consistency and usability. It explains how components should and should not be used to guarantee uniformity across different projects and platforms.</p>

                    <div className='two-column'>
                        <Image imgPath={S7}></Image>
                        <Image imgPath={S8}></Image>
                    </div>
                </div>
            </section>
        </>
    )
}