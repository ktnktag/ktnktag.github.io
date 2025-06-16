import headerImg from "../assets/webp/SmartHome/Header.webp";
import resultImg1 from "../assets/webp/SmartHome/Result1.webp";
import resultImg2 from "../assets/webp/SmartHome/Result2.webp";
import resultImg3 from "../assets/webp/SmartHome/Result3.webp";
import resultImg4 from "../assets/webp/SmartHome/Result4.webp";
import resultImg5 from "../assets/webp/SmartHome/Result5.webp";
import preparationImg1 from "../assets/webp/SmartHome/Preparation1.webp";
import preparationImg2 from "../assets/webp/SmartHome/Preparation2.webp";
import preparationImg3 from "../assets/webp/SmartHome/Preparation3.webp";

import Sliding from "../components/common/text/sliding/Sliding";
import Result from "../components/common/text/Result";
import ProjectContainer from "../components/UI/ProjectContainer";

export default function SmartHomePage() {
  return (
    <ProjectContainer
      title="Simulating Real-world Design Process: Smart Home Mobile Application"
      path="https://wearecommunity.io/ne-pov-a-ril"
      img={headerImg}
      imgStyle="event-img"
    >
      <Sliding name="About the project">
        <div className="column-flex g-40 text-box">
          <div className="column-flex g-20">
            <h2>Overview</h2>
            <p>
              This event was born from feedback gathered during previous
              workshops:{" "}
              <strong>
                junior designers expressed a need for greater creative freedom
              </strong>
              , especially around deciding which design stages to follow and how
              to structure their own process. They felt that strict, time-bound
              formats often limited exploration and reduced space for authentic
              decision-making.
            </p>
            <p>
              To address this, we designed a more open-ended challenge that
              simulated a real-world design engagement — one where designers had
              autonomy, ownership, and the responsibility to drive the process
              themselves.
            </p>
            <p>
              A total of 15 designers were divided into 5 teams, each blending
              junior, mid-level, and senior designers. Over the course of 3
              hours, they worked in a shared Figma file to design several key
              screens of a Smart Home mobile app for a fictional startup.
            </p>
            <p>
              As the <strong>acting stakeholder</strong>, I provided the
              essential project context — including a mood board, color palette,
              type system, and competitor examples — but deliberately stepped
              back from the design process. My only role was to respond to
              stakeholder-style questions, simulating a startup founder who’s
              available, but not actively involved in day-to-day
              decision-making.
            </p>
          </div>

          <div className="column-flex g-20">
            <h2>Challenge</h2>
            <ul className="list">
              <p>
                This event presented a very different kind of challenge for me:
              </p>
              <li>
                Play the role of the client, not the facilitator — staying
                focused on vision, not execution
              </li>
              <li>
                nswer only when asked, encouraging teams to drive their own
                process, interpret constraints, and think critically
              </li>
              <li>
                Avoid influencing decisions, even when I noticed UX issues or
                workflow inefficiencies
              </li>
              <li>
                Let teams self-regulate time, helping them learn to prioritize,
                scope, and negotiate internally
              </li>
              <li>
                Support realism: not everything is clear in real projects —
                teams had to manage ambiguity, incomplete input, and competing
                ideas
              </li>
            </ul>
            <p>
              The challenge was to strike the right balance: present but not
              prescriptive — ensuring the experience felt authentic and
              educational, while allowing teams to explore, debate, and make
              their own calls (and mistakes).
            </p>
          </div>
        </div>
      </Sliding>

      <section className="column-flex g-60">
        <Sliding name="Result">
          <div className="column-grid-mini g-32 text-box">
            <Result name="5 distinct mobile app" isLarge>
              <p>
                concepts delivered, each representing a unique vision and
                collaborative effort
              </p>
            </Result>
            <Result name="5 live presentations" isLarge>
              <p>
                showcasing clear rationale, visual identity decisions, and
                problem-solving strategies
              </p>
            </Result>
          </div>
        </Sliding>

        <div className="column-grid-mini g-32">
          <img src={resultImg1} className="img" alt="resultImg" />
          <img src={resultImg2} className="img" alt="resultImg" />

          <div className="column-grid-3 column-large g-32">
            <img src={resultImg3} className="img" alt="resultImg" />
            <img src={resultImg4} className="img" alt="resultImg" />
            <img src={resultImg5} className="img" alt="resultImg" />
          </div>
        </div>
      </section>

      <hr className="separator" />

      <section className="column-flex g-60">
        <Sliding name="Preparation">
          <div className="column-flex g-20 text-box">
            <h2>Framing the Challenge</h2>
            <p>
              To simulate a realistic client–design team interaction, I took on
              the role of a startup stakeholder rather than a facilitator or
              design lead. My preparation focused on equipping participants with
              just enough material to begin confidently — while leaving the
              process and decisions entirely in their hands.
            </p>
            <ul className="list">
              <p>I provided:</p>
              <li>
                A visual foundation: mood board, fonts, and color palette
                aligned with the envisioned brand
              </li>
              <li>
                Competitor research: key examples to analyze and reference
              </li>
              <li>
                High-level expectations for the Smart Home product — without
                specific screen requirements or strict user flows
              </li>
            </ul>
            <p>
              The goal was to create a setup that mirrored real startup
              dynamics, where design teams must navigate ambiguity, interpret
              open-ended briefs, ask clarifying questions, and make their own
              scoping decisions. I remained available only to answer questions
              on demand — simulating how a founder or client might engage in a
              real project.
            </p>
          </div>
        </Sliding>

        <div className="column-grid-mini g-32">
          <img
            src={preparationImg1}
            className="img column-large"
            alt="preparationImg1"
          />
          <img src={preparationImg2} className="img" alt="preparationImg2" />
          <img src={preparationImg3} className="img" alt="preparationImg3" />
        </div>
      </section>

      <hr className="separator" />

      <Sliding name="reflection">
        <div className="column-flex g-20 text-box">
          <h2>Personal Insight & Takeaways</h2>
          <p>
            To simulate a realistic client–design team interaction, I took on
            the role of a startup stakeholder rather than a facilitator or
            design lead. My preparation focused on equipping participants with
            just enough material to begin confidently — while leaving the
            process and decisions entirely in their hands.
          </p>
          <ul className="list">
            <p>
              One of the most important takeaways from this event was
              the delicate balance between freedom and focus. While participants
              were excited by the autonomy, several challenges emerged:
            </p>
            <li>
              Some teams over-invested in visual polish, losing sight of
              structure and prioritization
            </li>
            <li>
              Others became sidetracked by competitive pressure, leading to
              scattered ideas or low-impact features
            </li>
            <li>
              Without clear internal structure, decision-making was slow, and
              collaboration became inefficient
            </li>
            <li>
              The absence of defined checkpoints made it harder for teams to
              course-correct as they progressed
            </li>
          </ul>
          <p>
            This highlighted that while creative freedom is essential, it must
            be supported by strong internal process discipline. In future
            events, introducing lightweight structure — such as soft milestones,
            role assignment tips, or prioritization guidance — will help balance
            independence with productivity.
          </p>
        </div>
      </Sliding>
    </ProjectContainer>
  );
}
