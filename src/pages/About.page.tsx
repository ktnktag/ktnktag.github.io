import img1 from "../assets/webps/about/Photo1.webp";
import img2 from "../assets/webps/about/Photo2.webp";
import img3 from "../assets/webps/about/Photo3.webp";
import img4 from "../assets/webps/about/Photo4.webp";
import img5 from "../assets/webps/about/Photo5.webp";

import PageHeader from "../components/UI/PageHeader";
import BlogPost from "../components/common/text/blogPost/BlogPost";
import LinkButton from "../components/common/button/link-button/LinkButton";
import Card from "../components/UI/card/Card";
import db from "../db/blog-list.json";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About me"
        desc={
          <p className="text-container">
            I'm a UX designer passionate about building thoughtful product
            experiences — and equally passionate about sharing what I learn
            along the way. I write articles, speak at design events, and mentor
            growing designers. I believe that good design doesn't stop at the
            screen — it also shapes teams, conversations, and communities.
          </p>
        }
        content={
          <div className="img-container">
            <img className="img" src={img1} alt="photo 1" />
            <img className="img" src={img2} alt="photo 2" />
            <img className="img" src={img3} alt="photo 3" />
          </div>
        }
      />

      <section className="section-layout container gap-40">
        <div className="text-container flex-column gap-20">
          <h2>Writing</h2>
          <p>
            Here I share lessons, thoughts, and observations from my personal
            experience as a designer. These texts reflect how I approach
            problems, learn through practice, and navigate the realities of
            building products and working in teams.
          </p>
        </div>

        <ul className="flex-column gap-32">
          {db.map((item) => (
            <BlogPost
              key={item.title}
              path={item.path}
              title={item.title}
              date={item.date}
            >
              {item.content}
            </BlogPost>
          ))}
        </ul>

        <LinkButton path="https://medium.com/@kto.nekto">
          Read More on Medium
        </LinkButton>
      </section>

      <section className="section-layout container gap-40">
        <div className="text-container flex-column gap-20">
          <h2>Speaking</h2>
          <p>
            I run talks and workshops where I share practical insights from
            design and product work. My goal is to make complex topics
            approachable and offer perspective grounded in real experience —
            whether for beginners or seasoned professionals.
          </p>
        </div>

        <div className="grid-cols">
          <Card
            image={img4}
            title="Revamping the First Impression: Art Exhibition Website Redesign"
            path="/art"
            imgName="Workshop"
            company="Design spot, 2023"
          >
            I led a redesign workshop dedicated to rethinking the main page of
            an art exhibition website. The focus was on improving visual
            hierarchy, refining layout structure, and enhancing user interaction
            to better reflect the artistic vision of the exhibition. The session
            combined design critique and collaborative discussion.
          </Card>

          <Card
            image={img5}
            title="Simulating Real-world Design Process: Smart Home Mobile Application"
            path="/smart-home"
            imgName="Workshop"
            company="Design spot, 2024"
          >
            Led a 4-hour workshop simulating a real product design workflow.
            Participants worked on a mobile app for smart home control,
            navigating typical constraints, collaboration dynamics, and
            fast-paced decision-making—while focusing on usability and visual
            clarity.
          </Card>
        </div>
      </section>
    </>
  );
}
