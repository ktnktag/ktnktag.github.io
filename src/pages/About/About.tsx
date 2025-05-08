import P1 from '../../assets/webp/About/Photo1.webp'
import P2 from '../../assets/webp/About/Photo2.webp'
import P3 from '../../assets/webp/About/Photo4.webp'
import P4 from '../../assets/webp/About/Photo3.webp'

import WritingItem from "../../components/WritingItem/WritingItem"
import LinkButton from "../../components/UI/LinkButton/LinkButton"
import Banner from '../../components/Banner/Banner'

export default function About() {
    return <>
        <header className="header">
            <div className="section">
                <div className="text-box">
                    <h1 className="title">About me</h1>
                    <p>I’m a UX designer passionate about building thoughtful product experiences — and equally passionate about sharing what I learn along the way. I write articles, speak at design events, and mentor growing designers. I believe that good design doesn’t stop at the screen — it also shapes teams, conversations, and communities.</p>
                </div>

                <div className="row-flex">
                    <img className="custom-img" src={P1} alt="" />
                    <img className="custom-img" src={P2} alt="" />
                    <img className="custom-img" src="" alt="" />
                </div>
            </div>
        </header>

        <section className="section">
            <div className="text-box">
                <h2 className="subtitle">Writing</h2>
                <p>Here I share lessons, thoughts, and observations from my personal experience as a designer. These texts reflect how I approach problems, learn through practice, and navigate the realities of building products and working in teams.</p>
            </div>

            <ul className="column-flex">
                <li>
                    <WritingItem
                        title="I hate my portfolio"
                        path="/"
                        date="Apr 23, 2025">
                        Today, I would like to talk about a common challenge that many designers face — creating and updating design portfolio. Portfolio is essential thing that presents your work to potential employers, and also to demonstrate your design process and how you approach different tasks. It is, in many ways, proof of your skills and professional level. This is understandable, expected, and absolutely fair.
                    </WritingItem>
                </li>
                <li>
                    <WritingItem
                        title="Survival guide for Junior UX designers"
                        path="/"
                        date="Apr 2, 2023">
                        Getting into the world of design — is exciting and sometimes terrifide. And, of course, there are already a lot of articles on the Internet which goal to help you on your journey as a designers, but I writed another one.Not long ago, I was in your shoes and these are things that I learned as a junior designer. I hope it help newbies be prepared for a new environment, not lose themselves and not burn out in the first months.
                    </WritingItem>
                </li>
                <li>
                    <WritingItem
                        title="6 lessons that I learned as a designer by UX-volunteering"
                        path="/"
                        date="Sep 6, 2022">
                        As a Junior UX designer, you may be wondering how you can get “real experience”. Volunteering is a great way to practice your UX skills, build your portfolio, and do something useful in the process.
                        Reflecting on my own journey, I found myself fortunate to join a volunteer project within the realm of free open-source initiatives at the outset of my career. Yet, the rewards of UX volunteering extend far beyond padding one’s resume. Through this enriching experience, I’ve gleaned invaluable lessons that have shaped my growth as a designer.
                    </WritingItem>
                </li>
            </ul>

            
            <LinkButton path="/">Read More on Medium</LinkButton>
        </section>

        <section className="section">
            <div className="text-box">
                <h2 className="subtitle">Speaking</h2>
                <p>I run talks and workshops where I share practical insights from design and product work. My goal is to make complex topics approachable and offer perspective grounded in real experience — whether for beginners or seasoned professionals.</p>
            </div>

            <div className="column-grid">
                <Banner
                    image={P3}
                    title='Revamping the First Impression: Art Exhibition Website Redesign'
                    path='/Selected_Works/Website_Redesign_Workshop'
                    imgName='Workshop'
                    company='Design spot, 2023'>
                    I led a redesign workshop dedicated to rethinking the main page of an art exhibition website. The focus was on improving visual hierarchy, refining layout structure, and enhancing user interaction to better reflect the artistic vision of the exhibition. The session combined design critique and collaborative discussion.
                </Banner>

                <Banner
                    image={P4}
                    title='Simulating Real-world Design Process: Smart Home Mobile Application'
                    path='/Selected_Works/Workshop_for_Smart_Home'
                    imgName='Workshop'
                    company='Design spot, 2024'>
                    Led a 4-hour workshop simulating a real product design workflow. Participants worked on a mobile app for smart home control, navigating typical constraints, collaboration dynamics, and fast-paced decision-making—while focusing on usability and visual clarity.
                </Banner>
            </div>
        </section>
    </>
}