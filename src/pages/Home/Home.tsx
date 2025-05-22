import LinkButton from '../../components/UI/button/LinkButton/LinkButton'
import Card from '../../components/card/Card'
import Testimonial from '../../components/testimonial/Testimonial'
// import Banner from '../../components/banner/Banner'

import { default as In } from '../../assets/svg/socials/In.svg?react'
import { default as Medium } from '../../assets/svg/socials/Medium.svg?react'
import { default as Vec } from '../../assets/svg/socials/Vec.svg?react'
import { default as Be } from '../../assets/svg/socials/Be.svg?react'
import { default as Figma } from '../../assets/svg/socials/Figma.svg?react'

import PersonalPhoto from '../../assets/webp/Home/PersonalPhoto.webp'
import Im1 from '../../assets/webp/Projects/Projects-1.webp'
import Im2 from '../../assets/webp/Projects/Projects-4.webp'
// import BannerImg from '../../assets/webp/Home/BannerImg.webp'

import Cursor from '../../assets/svg/logos/Cursor.svg'

export default function Home() {
    return <>
        <header className="header">
            <div className="box alignment g-32">
                <img src={PersonalPhoto} alt="round-img" className="round-img" />

                <h1 className="title">I'm Valeria, Experience Designer from Poland, working to create exceptional user experiences. <img src={Cursor} alt='cursor' className='cursor' /></h1>
                <p className='text-box-large'>From freelance projects to B2C and B2B product design, I've found my passion in user research, designing solutions, and testing them with real users. Ensuring that my designs solve problems and enhance lives is what truly drives me.</p>

                <ul className='row-flex g-16'>
                    <li><LinkButton small={true} path='https://www.linkedin.com/in/kto-nekto/'><In /></LinkButton></li>
                    <li><LinkButton small={true} path='https://medium.com/@kto.nekto'><Medium /></LinkButton></li>
                    <li><LinkButton small={true} path='https://dribbble.com/kto_nekto'><Vec /></LinkButton></li>
                    <li><LinkButton small={true} path='https://www.behance.net/kto_nekto'><Be /></LinkButton></li>
                    <li><LinkButton small={true} path='https://www.figma.com/@kto_nekto'><Figma /></LinkButton></li>
                </ul>
            </div>
        </header>

        <section className="section alignment g-40">
            <div className="text-boxc column-flex g-20">
                <h2 className="subtitle">Selected projects</h2>
                <p>Selected works representing a range of projects I've contributed to across different contexts and teams. This selection reflects diverse problem spaces and collaborative processes, with a consistent focus on clarity, usability, and meaningful outcomes.</p>
            </div>

            <div className="column-grid g-32">
                <Card
                    image={Im1}
                    title='Design System for the Leading Global Tech Company'
                    path='/Selected_Works/Website_Redesign_Workshop'
                    imgName='Design system'
                    company='SAP Company, 2023 - 2025'>
                    Developed a new comprehensive design system and developer documentation, designed to align with the existing product design system (used externally) without duplicating it — ensuring consistency while addressing distinct needs and integrations.
                </Card>

                <Card
                    image={Im2}
                    title='Redesign and new Feature Development for Educational Platform'
                    path='/Selected_Works/Workshop_for_Smart_Home'
                    imgName='Product design'
                    company='Rolling Scope School, 2022'>
                    Redesigned the UX of an educational platform using an iterative approach to minimize disruption. Focused on enhancing usability while ensuring the learning process continued smoothly for users and developers.
                </Card>
            </div>
        </section>

        {/* <Banner name='Build It Better: A Step-by-Step Guide to Creating Your First Product' path='/' img={BannerImg}>This hands-on workbook walks you through every stage of product creation — from shaping your first concept to launching a functional MVP. Rooted in real-world experience, it’s designed to help you build not just faster, but smarter.</Banner> */}

        <section className="section alignment g-40">
            <div className="text-box column-flex g-20">
                <h2 className="subtitle">Testimonials</h2>
                <p>Discover what it's like to work together — through the eyes of designers, product managers, and engineers I’ve collaborated with. Their words reflect not just the outcomes we achieved, but the relationships we built along the way.</p>
            </div>

            <div className='column-grid g-32'>
                <Testimonial name='Palina Sachak'
                    profession='UX Designer'>
                    I have been working closely with Valeria, we were working with a big design team and we were customer-faacing designers. I was deeply impressed while working with Valeria, I can confidently say that she is an exceptionally responsible and detail-oriented professional, she is perfect at both hard skills and soft skills.Valeria is very dedicated to her work, ensuring that every task is completed with precision and care. Her attention to detail is remarkable, allowing her to catch potential issues before they arise and ensuring high-quality outcomes in all her projects. I can say that Valeria has high understanding of design rules and principles, which makes her pixel perfect designs look stunning. She has very diverse experince
                </Testimonial>

                <Testimonial name='Tatiana Rudzko'
                    profession='Product Designer | UX/UI design | 4+ years of experience'>
                    With Valery we worked during few months.
                    I can say that she is the most hardworking person I've ever me, it was a pleasure to work with her.
                </Testimonial>
            </div>

            <LinkButton path='https://www.linkedin.com/in/kto-nekto/'>Read More on LinkedIn</LinkButton>
        </section>
    </>
}