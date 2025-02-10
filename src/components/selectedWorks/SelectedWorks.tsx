import './SelectedWorks.css'

import PortalImage from '../../assets/png/Portal.png'
import SapImage from '../../assets/png/Content Placeholder.png'
import AdidasImage from '../../assets/png/Adidas.png'
import RSSchoolImage from '../../assets/png/RSSchool.png'
import HealthImage from '../../assets/png/Health.png'
import Project from './project/Project'

export default function SelectedWorks(){
    return(
        <>
            <section>
                <div className='content-box'>
                    <Project 
                        image={PortalImage} 
                        title='Redesign and Developing for Internal CI/CD Platform' 
                        company='Hyperspace Portal, SAP Company, 2024'>
                        Actively participated in the development and removal of legacy systems for the Hyperspace Portal, contributing to modernization efforts and conducting user research and testing to optimize functionality.  
                    </Project>

                    <Project 
                        image={SapImage} 
                        title='Design System for the Leading Global Tech Company Web-sites' 
                        company='SAP Company, 2023 - 2025'>
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
                        title='Redesign and New Feature Development  for Educational Platform' 
                        company='Rolling Scope School, 2022'>
                        Developing a new comprehensive design system and accompanying documentation for developers, aligning it with SAP Fiori Design System and integrating it with other SAP resources.  
                    </Project>

                    <Project 
                        image={HealthImage} 
                        title='Fostering mental well-being through a single, all-in-one mobile app' 
                        company='Mental Health Platform, 2021'>
                        Create an app that facilitates the process of finding and matching people with the right therapist, allowing users to track their mental health  and utilize self-help tools. Simultaneously, the app aimed to assist mental health professionals in connecting with clients and maintaining comprehensive treatment histories.  
                    </Project>
                </div> 
            </section>

            <section id='writing'>
                <h3 className='content-box-title'>Writing</h3>
                <div className='content-box'>

                </div>
            </section>

            <section id='writing'>
                <h3 className='content-box-title'>Writing</h3>
                <div className='content-box'>

                </div>
            </section>
        </>
    )
}