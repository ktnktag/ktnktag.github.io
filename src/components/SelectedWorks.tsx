import SW1 from '../assets/png/SW/SW2.webp';
import SW2 from '../assets/png/SW/SW1.webp';
import SW3 from '../assets/png/SW/SW3.webp';
import SW4 from '../assets/png/SW/SW4.webp';
import SW5 from '../assets/png/SW/SW5.webp';
import SW6 from '../assets/png/SW/SW6.webp';
import SW7 from '../assets/png/SW/SW7.webp';
import SW8 from '../assets/png/SW/SW8.webp';

import Project from './UI/project/Project.tsx';
import Modal from './UI/modal/Modal.tsx';
import { IsCorrectCode, SetIsAuth } from '../api';
import { useState } from 'react';
import { useNavigate, useLocation} from "react-router-dom";

export default function SelectedWorks() {
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(location.state?.open || false);
    const navigate = useNavigate();

    const checkCode = (code: string, error: Function) => {
        if (IsCorrectCode(code)) {
            setIsModalOpen(false);
            SetIsAuth();
            navigate(location.state?.from?.pathname || '/SelectedWorks');
        }
        else {
            error("Incorrect password. Please try again.");
        }
    }

    return (
        <>
            <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} checkCode={checkCode} />
            <div>
                <div className='two-column'>
                    <Project
                        image={SW1}
                        title='Redesign and Developing for Internal CI/CD Platform'
                        company='SAP Company, 2024'
                        path='/Selected_Works/Internal_CI_CD_Platform'>
                        Developed new features to enhance user convenience and meet evolving needs. As a Fiori expert, ensured alignment with the design system, avoiding customization and maintaining a seamless user experience.
                    </Project>

                    <Project
                        image={SW2}
                        title='Design System for the Leading Global Tech Company Web-sites'
                        company='SAP Company, 2023 - 2025'
                        path='/Selected_Works/Design_System_development'>
                        Developed a comprehensive design system for web platforms, incorporating best practices inspired by SAP Fiori while ensuring flexibility and brand consistency. Created developer-friendly documentation to streamline adoption and implementation.
                    </Project>

                    <Project
                        image={SW3}
                        title='Seamless Migration from the Legacy Platform to SAP Fiori and Enhanced Features'
                        company='adidas, 2023'
                        path='/Selected_Works/Seamless_Migration_to_SAP_Fiori'>
                        Supported the migration of the NDA web platform to a more intuitive and scalable solution, ensuring consistency with Fiori-based principles. Participated in design iterations, and UX improvements.
                    </Project>

                    <Project
                        image={SW4}
                        title='Redesign and New Feature Development for Educational Platform'
                        company='Rolling Scope School, 2022'
                        soon={true}
                        path='/Selected_Works/Adidas'>
                        Redesigned the UX of an educational platform using an iterative approach to minimize disruption. Focused on enhancing usability while ensuring the learning process continued smoothly for users and developers.
                    </Project>
                </div>
            </div>

            <section id='writing'>
                <h2 className='title'>Writing</h2>
                <div className='two-column'>
                    <Project
                        image={SW5}
                        title='One More Survival Guide for Junior Experience  Designers'
                        path='https://medium.com/design-bootcamp/survival-guide-for-junior-ux-designers-9f8e5e8b670'
                        isLink={true}>
                        Getting into the world of design — is exciting and sometimes terrified. Not long ago, I was in your shoes and I hope my article help newbies be prepared for a new environment, not lose themselves and not burn out in the first months.
                    </Project>

                    <Project
                        image={SW6}
                        title='6 Lessons that I Learned as a Designer by UX-volunteering'
                        path='https://medium.com/design-bootcamp/6-lessons-that-i-learned-as-a-designer-by-ux-volunteering-d3d005d44e87'
                        isLink={true}>
                        Discover six pivotal lessons learned through UX volunteering that shaped my growth as a designer. Click to explore more!
                    </Project>
                </div>
            </section>

            <section id='speaking'>
                <h2 className='title'>Speaking</h2>
                <div className='two-column'>
                    <Project
                        image={SW7}
                        title='Website Redesign Workshop'
                        company='Minsk, Belarus, 2023'
                        path='/Selected_Works/Website_Redesign_Workshop'>
                        Redesigned the main page of an art exhibition website, focusing on enhancing visual appeal, improving user interaction, and optimizing the overall user experience.
                    </Project>

                    <Project
                        image={SW8}
                        title='Not POV, but REAL: you got into a real project'
                        company='Minsk, Belarus, 2024'
                        path='/Selected_Works/Workshop_for_Smart_Home'>
                        Designed a visually attractive and intuitive multi-screen mobile app for controlling a smart home, providing UX design newbies with real-world experience while meeting usability goals.
                    </Project>
                </div>
            </section>
        </>
    )
}