import imgTurba from "../assets/webps/projects/Projects-1.webp";
import imgDesignSystem from "../assets/webps/projects/Projects-2.webp";
import imgHyperspace from "../assets/webps/projects/Projects-3.webp";
import imgAdidas from "../assets/webps/projects/Projects-4.webp";
import imgRsschool from "../assets/webps/projects/Projects-5.webp";

import imgUIChallege from "../assets/webps/side-activity/SideImg1.webp";

import imgArt from "../assets/webps/about/Photo4.webp";
import imgWorkshop from "../assets/webps/about/Photo5.webp";

import im1 from "../assets/webps/projects/Projects-2.webp";
import im2 from "../assets/webps/art/Card.webp";

export type Card = {
    image: string;
    imgName?: string;
    company?: string;
    title: string;
    path: string;
    desc: string;
}

export const cardsProject: Card[] = [
    {
        image: imgTurba,
        imgName: "UX/UI Design",
        company: "TURBA AI, 2025",
        title: "From Demo to Product: Building an Interface for Real-Time AI Cluster Orchestration",
        path: "/turba",
        desc: "Delivered scalable UX/UI for a complex AI infrastructure tool. Balanced real-time requirements, technical constraints, and speed-to-market needs through rapid prototyping and structured handoff.",
    },
    {
        image: imgDesignSystem,
        imgName: "Design system",
        company: "SAP Company, 2023 - 2025",
        title: "Design System for the web resources of the leading global tech company",
        path: "/design-system",
        desc: "Developed a new comprehensive design system and developer documentation, designed to align with the existing product design system (used externally) without duplicating it — ensuring consistency while addressing distinct needs and integrations.",
    },
    {
        image: imgHyperspace,
        imgName: "ux design",
        company: "SAP Company, 2024",
        title: "Expanding SAP's internal platform with user-centred feature design",
        path: "/hyperspace",
        desc: "Developed new features to enhance user convenience and meet evolving needs. As a Fiori expert, ensured alignment with the design system, avoiding customization and maintaining a seamless user experience.",
    },
    {
        image: imgAdidas,
        imgName: "ux design",
        company: "adidas, 2023",
        title: "Seamless Migration from the Legacy Platform to SAP Fiori and Enhanced Features",
        path: "/adidas",
        desc: "Supported the migration of the NDA web platform to a more intuitive and scalable solution, ensuring consistency with Fiori-based principles. Participated in design iterations, and UX improvements.",
    },
    {
        image: imgRsschool,
        imgName: "Product design",
        company: "Rolling Scope School, 2022",
        title: "Redesign and new Feature Development for Educational Platform",
        path: "/rs-school",
        desc: "Redesigned the UX of an educational platform using an iterative approach to minimize disruption. Focused on enhancing usability while ensuring the learning process continued smoothly for users and developers.",
    },
];

export const cardsSideActivity: Card[] = [
    {
        image: imgUIChallege,
        imgName: "UI design",
        company: "Daily UI challenge, 2025",
        title: "Daily UI challege",
        path: "/",
        desc: "Developed a new comprehensive design system and developer documentation, designed to align with the existing product design system (used externally) without duplicating it — ensuring consistency while addressing distinct needs and integrations.",
    },
];

export const cardsHome: Card[] = [
    {
        image: imgDesignSystem,
        imgName: "Design system",
        company: "SAP Company, 2023 - 2025",
        title: "Design System for the web resources of the leading global tech company",
        path: "/design-system",
        desc: "Developed a new comprehensive design system and developer documentation, designed to align with the existing product design system (used externally) without duplicating it — ensuring consistency while addressing distinct needs and integrations.",
    },
    {
        image: imgRsschool,
        imgName: "Product design",
        company: "Rolling Scope School, 2022",
        title: "Redesign and new Feature Development for Educational Platform",
        path: "/rs-school",
        desc: "Redesigned the UX of an educational platform using an iterative approach to minimize disruption. Focused on enhancing usability while ensuring the learning process continued smoothly for users and developers.",
    },
]

export const cardsEvent: Card[] = [
    {
        image: imgArt,
        imgName: "Workshop",
        company: "Design spot, 2023",
        title: "Revamping the First Impression: Art Exhibition Website Redesign",
        path: "/art",
        desc: "I led a redesign workshop dedicated to rethinking the main page of an art exhibition website. The focus was on improving visual hierarchy, refining layout structure, and enhancing user interaction to better reflect the artistic vision of the exhibition. The session combined design critique and collaborative discussion.",
    },
    {
        image: imgWorkshop,
        imgName: "Workshop",
        company: "Design spot, 2024",
        title: "Simulating Real-world Design Process: Smart Home Mobile Application",
        path: "/smart-home",
        desc: "Led a 4-hour workshop simulating a real product design workflow. Participants worked on a mobile app for smart home control, navigating typical constraints, collaboration dynamics, and fast-paced decision-making—while focusing on usability and visual clarity.",
    },
];

export const cardsArt: Card[] = [
    {
        image: im1,
        imgName: "Video",
        company: "Youtube",
        title: "Video of the redesign process on YouTube",
        path: "https://www.youtube.com/watch?v=0hOSCefcnLI",
        desc: "Watch the redesigning process and drop your thoughts in the comments about which version you fancy the most!",
    },
    {
        image: im2,
        imgName: "Article",
        company: "LinkedIn",
        title: "Short article About Event on LinkedIn",
        path: "https://www.linkedin.com/pulse/community-workshop-minsk-lets-see-how-designspot-community/?trackingId=HJIKDn8zQgO4qvMNm9GbCg%3D%3D",
        desc: "On Wednesday, October 12, we tried a new community event format: Website Redesign Workshop!",
    },
];