import img1 from '../assets/webp/Projects/Projects-1.webp'
import img2 from '../assets/webp/Projects/Projects-2.webp'
import img3 from '../assets/webp/Projects/Projects-3.webp'
import img4 from '../assets/webp/Projects/Projects-4.webp'
import img5 from '../assets/webp/Projects/Projects-5.webp'
import cursor from '../assets/svg/logos/Cursor.svg'

import Card from '../components/card/Card'

const cards = [
    {
        image: img1,
        imgName: "UX/UI Design",
        company: "TURBA, 2025",
        title: "From Demo to Product: Building an Interface for Real-Time AI Cluster Orchestration",
        path: "/",
        desc: "Delivered scalable UX/UI for a complex AI infrastructure tool. Balanced real-time requirements, technical constraints, and speed-to-market needs through rapid prototyping and structured handoff.",
    },
    {
        image: img2,
        imgName: "Design system",
        company: "SAP Company, 2023 - 2025",
        title: "Design System for the web resources of the leading global tech company",
        path: "/design-system",
        desc: "Developed a new comprehensive design system and developer documentation, designed to align with the existing product design system (used externally) without duplicating it — ensuring consistency while addressing distinct needs and integrations.",
    },
    {
        image: img3,
        imgName: "Product design",
        company: "SAP Company, 2024",
        title: "Expanding SAP's internal platform with user-centred feature design",
        path: "/hyperspace",
        desc: "Developed new features to enhance user convenience and meet evolving needs. As a Fiori expert, ensured alignment with the design system, avoiding customization and maintaining a seamless user experience.",
    },
    {
        image: img4,
        imgName: "Product design",
        company: "adidas, 2023",
        title: "Seamless Migration from the Legacy Platform to SAP Fiori and Enhanced Features",
        path: "/adidas",
        desc: "Supported the migration of the NDA web platform to a more intuitive and scalable solution, ensuring consistency with Fiori-based principles. Participated in design iterations, and UX improvements.",
    },
    {
        image: img5,
        imgName: "Product design",
        company: "Rolling Scope School, 2022",
        title: "Redesign and new Feature Development for Educational Platform",
        path: "/rs-school",
        desc: "Redesigned the UX of an educational platform using an iterative approach to minimize disruption. Focused on enhancing usability while ensuring the learning process continued smoothly for users and developers.",
    },
]

export default function Projects() {
    return <>
        <header className="hat">
            <div className="column-flex alignment g-32">
                <h1>Past projects <img src={cursor} alt='cursor' className='cursor' /></h1>
                <p className='text-box'>See how turned ideas into reality. Dive into the stories of successful product designs that make a difference.</p>
            </div>
        </header>

        <section className="section alignment">
            <div className='column-grid g-32'>
                {
                    cards.map(item =>
                        <Card path={item.path}
                            image={item.image}
                            imgName={item.imgName}
                            company={item.company}
                            title={item.title}
                            key={item.title}>
                            {item.desc}
                        </Card>)
                }
            </div>
        </section>
    </>
}