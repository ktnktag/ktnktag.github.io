import './SelectedWorks.css'

import PortalImage from '../../assets/png/Portal.png'
import SapImage from '../../assets/png/Content Placeholder.png'
import AdidasImage from '../../assets/png/Adidas.png'
import RSSchoolImage from '../../assets/png/RSSchool.png'
import HealthImage from '../../assets/png/Health.png'
import IMG1Image from '../../assets/png/IMG1.png'
import IMG2Image from '../../assets/png/IMG2.png'
import Speaking1 from '../../assets/png/Speaking1.png'
import Speaking2 from '../../assets/png/Speaking2.png'
import Project from '../UI/project/Project'

interface Props {
    onChange: any;
}

export default function SelectedWorks({ onChange }: Props) {
    return (
        <>
            <div>
                <div className='two-column'>
                    <Project
                        image={PortalImage}
                        title='Redesign and Developing for Internal CI/CD Platform'
                        company='Hyperspace Portal, SAP Company, 2024'
                        soon={true}
                        OpenPage={() => onChange("Hyperspace Portal")}>
                        Actively participated in the development and removal of legacy systems for the Hyperspace Portal, contributing to modernization efforts and conducting user research and testing to optimize functionality.
                    </Project>

                    <Project
                        image={SapImage}
                        title='Design System for the Leading Global Tech Company Web-sites'
                        company='SAP Company, 2023 - 2025'
                        OpenPage={() => onChange("Redesign Workshop")}>
                        Developing a new comprehensive design system and accompanying documentation for developers, aligning it with SAP Fiori Design System and integrating it with other SAP resources.
                    </Project>

                    <Project
                        image={AdidasImage}
                        title='Seamless Migration from the Legacy Platform to SAP Fiori and Enhanced Features'
                        company='adidas, 2023'>
                        Primary objective was to transition all processes for the *NDA* app to SAP Fiori, replacing the previous platform. This transition also included expanding and enhancing some features to deliver a better user experience and meet the evolving requirements and needs of the business.
                    </Project>

                    <Project
                        image={RSSchoolImage}
                        title='Redesign and New Feature Development for Educational Platform'
                        company='Rolling Scope School, 2022'
                        soon={true}>
                        Developing a new comprehensive design system and accompanying documentation for developers, aligning it with SAP Fiori Design System and integrating it with other SAP resources.
                    </Project>

                    <Project
                        image={HealthImage}
                        title='Fostering mental well-being through a single, all-in-one mobile app'
                        company='Mental Health Platform, 2021'
                        soon={true}>
                        Create an app that facilitates the process of finding and matching people with the right therapist, allowing users to track their mental health  and utilize self-help tools. Simultaneously, the app aimed to assist mental health professionals in connecting with clients and maintaining comprehensive treatment histories.
                    </Project>
                </div>
            </div>

            <section id='writing'>
                <h2 className='title'>Writing</h2>
                <div className='two-column'>
                    <Project
                        image={IMG1Image}
                        title='One More Survival Guide for Junior Experience  Designers ↗'
                        path='https://medium.com/design-bootcamp/survival-guide-for-junior-ux-designers-9f8e5e8b670'>
                        Getting into the world of design — is exciting and sometimes terrified. Not long ago, I was in your shoes and I hope my article help newbies be prepared for a new environment, not lose themselves and not burn out in the first months.
                    </Project>

                    <Project
                        image={IMG2Image}
                        title='6 Lessons that I Learned as a Designer by UX-volunteering ↗'
                        path='https://medium.com/design-bootcamp/6-lessons-that-i-learned-as-a-designer-by-ux-volunteering-d3d005d44e87'>
                        Discover six pivotal lessons learned through UX volunteering that shaped my growth as a designer. Click to explore more!
                    </Project>
                </div>
            </section>

            <section id='speaking'>
                <h2 className='title'>Speaking</h2>
                <div className='two-column'>
                    <Project
                        image={Speaking1}
                        title='Website Redesign Workshop'
                        company='Minsk, Belarus, 2023'>
                        The goal is to rethink and redesign the current design of the main page of the art exhibition website, enhance visual appeal, improve user interaction with the site and overall user experience.
                    </Project>

                    <Project
                        image={Speaking2}
                        title='Not POV, but REAL: you got into a real project'
                        company='Minsk, Belarus, 2024'>
                        Goals, first: to give newbies in ux design to feel what it’s like to work on a real project; the second is to create a visually attractive and intuitive multi-screen design for a mobile application designed to control a smart home.
                    </Project>
                </div>
            </section>
        </>
    )
}