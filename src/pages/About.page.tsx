import img1 from "../assets/webp/About/Photo1.webp";
import img2 from "../assets/webp/About/Photo2.webp";
import img3 from "../assets/webp/About/Photo3.webp";
import img4 from "../assets/webp/About/Photo4.webp";
import img5 from "../assets/webp/About/Photo5.webp";

import cursor from "../assets/svg/logos/Cursor.svg";

import BlogPost from "../components/common/text/blogPost/BlogPost";
import LinkButton from "../components/common/button/link-button/LinkButton";
import Card from "../components/UI/card/Card";

export default function AboutPage() {
  return (
    <>
      <header className="hat">
        <div className="column-flex alignment g-60">
          <div className="text-box column-flex g-32">
            <h1>
              About me <img src={cursor} alt="cursor" className="cursor" />
            </h1>
            <p>
              I'm a UX designer passionate about building thoughtful product
              experiences — and equally passionate about sharing what I learn
              along the way. I write articles, speak at design events, and
              mentor growing designers. I believe that good design doesn't stop
              at the screen — it also shapes teams, conversations, and
              communities.
            </p>
          </div>

          <div className="row-flex g-32">
            <img className="custom-img" src={img1} alt="photo 1" />
            <img className="custom-img" src={img2} alt="photo 2" />
            <img className="custom-img" src={img3} alt="photo 3" />
          </div>
        </div>
      </header>

      <section className="section alignment g-40">
        <div className="text-box column-flex g-20">
          <h2>Writing</h2>
          <p>
            Here I share lessons, thoughts, and observations from my personal
            experience as a designer. These texts reflect how I approach
            problems, learn through practice, and navigate the realities of
            building products and working in teams.
          </p>
        </div>

        <ul className="column-flex g-32">
          <li>
            <BlogPost
              title="I hate my portfolio"
              path="https://medium.com/design-bootcamp/i-hate-my-portfolio-d9f6f1d18574"
              date="Apr 23, 2025"
            >
              Today, I would like to talk about a common challenge that many
              designers face — creating and updating design portfolio. Portfolio
              is essential thing that presents your work to potential employers,
              and also to demonstrate your design process and how you approach
              different tasks. It is, in many ways, proof of your skills and
              professional level. This is understandable, expected, and
              absolutely fair.
            </BlogPost>
          </li>
          <li>
            <BlogPost
              title="Survival guide for Junior UX designers"
              path="https://medium.com/design-bootcamp/survival-guide-for-junior-ux-designers-9f8e5e8b670"
              date="Apr 2, 2023"
            >
              Getting into the world of design — is exciting and sometimes
              terrifide. And, of course, there are already a lot of articles on
              the Internet which goal to help you on your journey as a
              designers, but I writed another one.Not long ago, I was in your
              shoes and these are things that I learned as a junior designer. I
              hope it help newbies be prepared for a new environment, not lose
              themselves and not burn out in the first months.
            </BlogPost>
          </li>
          <li>
            <BlogPost
              title="6 lessons that I learned as a designer by UX-volunteering"
              path="https://medium.com/design-bootcamp/survival-guide-for-junior-ux-designers-9f8e5e8b670"
              date="Sep 6, 2022"
            >
              As a Junior UX designer, you may be wondering how you can get
              “real experience”. Volunteering is a great way to practice your UX
              skills, build your portfolio, and do something useful in the
              process. Reflecting on my own journey, I found myself fortunate to
              join a volunteer project within the realm of free open-source
              initiatives at the outset of my career. Yet, the rewards of UX
              volunteering extend far beyond padding one's resume. Through this
              enriching experience, I've gleaned invaluable lessons that have
              shaped my growth as a designer.
            </BlogPost>
          </li>
        </ul>

        <LinkButton path="https://medium.com/@kto.nekto">
          Read More on Medium
        </LinkButton>
      </section>

      <section className="section alignment g-40">
        <div className="text-box column-flex g-20">
          <h2>Speaking</h2>
          <p>
            I run talks and workshops where I share practical insights from
            design and product work. My goal is to make complex topics
            approachable and offer perspective grounded in real experience —
            whether for beginners or seasoned professionals.
          </p>
        </div>

        <div className="column-grid g-32">
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
            path="/art"
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
