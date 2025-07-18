import headerImg from "../assets/webps/art/Header.webp";
import resultImg from "../assets/webps/art/Result.webp";
import resultImg1 from "../assets/webps/art/Result1.webp";
import resultImg2 from "../assets/webps/art/Result2.webp";
import resultImg3 from "../assets/webps/art/Result3.webp";

import SectionLayout from "../components/common/text/section-layout/SectionLayout";
import Result from "../components/common/text/Result";
import ProjectContainer from "../components/UI/ProjectContainer";
import Card from "../components/UI/card/Card";

import { cardsArt } from "../db/cards-list";

export default function ArtPage() {
  return (
    <ProjectContainer
      title="Collaborative Redesign Workshop: Art Exhibition Homepage"
      path="https://wearecommunity.io/redizain"
      img={headerImg}
      imgStyle="event-img"
    >
      <SectionLayout name="About the project">
        <div>
          <h2>Overview</h2>
          <p>
            As part of the <strong>Design Spot community</strong> initiative,
            this hands-on workshop brought together 13 designers of varying
            seniority to collaboratively redesign the homepage of an art
            exhibition website. The session promoted knowledge sharing, creative
            teamwork, and real-time problem solving.
          </p>
          <p>
            Participants were grouped into 4 teams, combining junior, mid-level,
            and senior designers. Over a two-hour design sprint in Figma, each
            team analyzed the existing website and proposed a redesign based on
            UX principles and visual storytelling.
          </p>
          <p>
            As a <strong>speaker and facilitator</strong>, I guided teams
            through the process — helping shape direction, surfacing UX gaps,
            and encouraging clarity in communication, without imposing a
            top-down design solution.
          </p>
        </div>

        <div>
          <h2>Challenge</h2>
          <p>
            Facilitating this fast-paced design workshop presented a unique set
            of challenges for me as a speaker. My role was to guide without
            leading — offering structure, UX insight, and design support, while
            allowing each team to define and defend their own creative vision.
          </p>
          <ul className="list">
            <p>I had to:</p>
            <li>
              Maintain neutrality, avoiding influence over visual direction or
              dominant decision-making
            </li>
            <li>
              Support less experienced designers without overshadowing their
              contributions
            </li>
            <li>
              Quickly identify gaps in logic or alignment and raise the right
              questions at the right time
            </li>
            <li>
              Keep all teams on schedule, ensuring smooth progress across
              multiple design phases
            </li>
            <li>
              Balance flexibility and structure, creating space for creativity
              while keeping outcomes achievable within strict time constraints
            </li>
          </ul>
        </div>
      </SectionLayout>

      <section className="section-gap">
        <SectionLayout name="Result">
          <div className="grid-cols">
            <Result name="4 live design presentations" isLarge>
              <p>
                Showcasing strong articulation of visual and UX decisions <br />
                Positive feedback from attendees highlighted the value of
                collaborative ideation, clear guidance, and the shared learning
                environment
              </p>
            </Result>
            <Result name="4 complete homepage">
              <p>
                redesigns delivered — each with a unique yet audience-relevant
                concept
              </p>
            </Result>
            <Result name="13 community members">
              <p>
                collaborated across experience levels, promoting mentorship and
                creative exchange
              </p>
            </Result>
          </div>
        </SectionLayout>

        <div className="grid-cols">
          <img
            src={resultImg}
            className="img grid-col-span-2"
            alt="result img"
          />

          <div className="grid-cols cols-3 grid-col-span-2">
            <img src={resultImg1} className="img" alt="result img 2" />
            <img src={resultImg2} className="img" alt="result img 3" />
            <img src={resultImg3} className="img" alt="result img 4" />
          </div>
        </div>
      </section>

      <hr />

      <section className="grid-cols">
        {cardsArt.map((item) => (
          <Card
            card={item}
            key={item.title}
          />
        ))}
      </section>
    </ProjectContainer>
  );
}
