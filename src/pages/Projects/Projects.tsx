import Banner from '../../components/Banner/Banner'

import Im1 from '../../assets/webp/Projects/Projects-1.webp'
import Im2 from '../../assets/webp/Projects/Projects-2.webp'
import Im3 from '../../assets/webp/Projects/Projects-3.webp'
import Im4 from '../../assets/webp/Projects/Projects-4.webp'

import Cursor from '../../assets/svg/Cursor.svg'

export default function Projects() {
    return <>
        <header className="header">
            <div className="box alignment g-32">

                <h1 className="title">Past projects <img src={Cursor} alt='cursor' className='cursor' /></h1>
                <p className='text-box'>See how turned ideas into reality. Dive into the stories of successful product designs that make a difference.</p>

            </div>
        </header>

        <section className="section alignment">
            <div className='column-grid g-32'>
                <Banner
                    image={Im1}
                    title='Design System for the Leading Global Tech Company'
                    path='/'
                    imgName='Design system'
                    company='SAP Company, 2023 - 2025'>
                    Developed a new comprehensive design system and developer documentation, designed to align with the existing product design system (used externally) without duplicating it — ensuring consistency while addressing distinct needs and integrations.
                </Banner>

                <Banner
                    image={Im3}
                    title='Redesign and Developing for Internal Platform'
                    path='/'
                    imgName='Product design'
                    company='SAP Company, 2024'>
                    Developed new features to enhance user convenience and meet evolving needs. As a Fiori expert, ensured alignment with the design system, avoiding customization and maintaining a seamless user experience.
                </Banner>

                <Banner
                    image={Im2}
                    title='Seamless Migration from the Legacy Platform to SAP Fiori and Enhanced Features'
                    path='/'
                    imgName='Product design'
                    company='adidas, 2023'>
                    Supported the migration of the NDA web platform to a more intuitive and scalable solution, ensuring consistency with Fiori-based principles. Participated in design iterations, and UX improvements.
                </Banner>

                <Banner
                    image={Im4}
                    title='Redesign and new Feature Development for Educational Platform'
                    path='/'
                    imgName='Product design'
                    company='Rolling Scope School, 2022'>
                    Redesigned the UX of an educational platform using an iterative approach to minimize disruption. Focused on enhancing usability while ensuring the learning process continued smoothly for users and developers.
                </Banner>
            </div>
        </section>
    </>
}