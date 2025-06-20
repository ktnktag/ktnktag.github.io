import headerImg from "../assets/webps/hyperspace/Header.webp";
import resultImg from "../assets/webps/hyperspace/Result.webp";
import phase1 from "../assets/webps/hyperspace/Phase1.webp";
import phase2 from "../assets/webps/hyperspace/Phase2.webp";
import phase3 from "../assets/webps/hyperspace/Phase3.webp";
import phase5 from "../assets/webps/hyperspace/Phase5.webp";
import sprint from "../assets/webps/hyperspace/Sprint.webp";

import SectionLayout from "../components/common/text/section-layout/SectionLayout";
import Result from "../components/common/text/Result";
import ProjectContainer from "../components/UI/ProjectContainer";

export default function HyperspacePage() {
  return (
    <ProjectContainer
      title="Expanding SAP's internal platform with user-centred feature design"
      img={headerImg}
    >
      <SectionLayout name="About the project">
          <div>
            <h2>Overview</h2>
            <p>
              As part of SAP's Developer Experience Solutions team, this project
              focused on designing and delivering two complex new feature
              sections for an internal CI/CD platform used by over 50,000
              engineers. These features were aimed at improving developer
              workflows and supporting SAP's long-term shift from on-premise to
              cloud-native engineering.
            </p>
            <p>
              While many updates on the platform follow a standard pattern using
              the SAP design system, this initiative required a user-centred,
              sprint-based design process to introduce entirely new
              functionality — all while maintaining strict alignment with SAP
              Fiori and supporting scalability across internal teams.
            </p>
          </div>

          <div>
            <h2>Challenge</h2>
            <p>
              The project focused on introducing new functional sections into
              SAP's internal CI/CD platform: one related to backlog management,
              and another involving project-level configuration and settings.
              These additions were part of a broader effort to retire legacy UI
              and bring the platform into alignment with the SAP Fiori design
              system.
            </p>

            <ul className="list">
              <p>Each section presented distinct challenges:</p>
              <li>
                The first feature aimed to modernize an existing workflow by
                redesigning it within the Fiori framework, replacing outdated
                layouts and logic with improved usability and structure.
              </li>
              <li>
                The second feature was developed through a design sprint to
                define a new user workflow from scratch — extending the
                platform's capabilities in how teams manage and share
                project-level data.
              </li>
            </ul>

            <ul className="list">
              <p>Across both tracks, we faced two key constraints:</p>
              <li>
                Strict alignment with the SAP Fiori design system, with a strong
                preference to avoid custom components in order to reduce
                complexity, cost, and future maintenance
              </li>
              <li>
                Tight delivery timelines, which required clear scope definition,
                fast iteration, and close collaboration between design, product,
                and engineering
              </li>
            </ul>
            <p>
              The challenge was to deliver functional, user-friendly, and
              future-ready designs that remained scalable and flexible — without
              exceeding the boundaries of the design system or delaying
              development.
            </p>
          </div>

          <div>
            <h2>Approach</h2>
            <ul className="list">
              <li>
                Early alignment with the Lead Designer and Product Owner to
                define scope, prioritize functionality, and avoid
                over-customization
              </li>
              <li>
                Component-first thinking, reusing and adapting SAP Fiori
                elements wherever possible to reduce complexity and support
                consistency
              </li>
              <li>
                Interactive prototyping to simulate real-world user flows and
                support feedback collection
              </li>
              <li>
                Continuous collaboration with engineering and product throughout
                refinement and handoff — ensuring that designs were both
                feasible and well-documented
              </li>
            </ul>

            <p>
              This allowed us to move efficiently from definition to delivery,
              ensuring that all features were grounded in business needs,
              technically viable, and user-friendly.
            </p>
          </div>
      </SectionLayout>

      <section className="section-gap">
        <SectionLayout name="Result">
          <div className="grid-cols">
            <Result name="100%" isLarge>
              <ul className="list">
                <li>
                  Alignment with SAP Fiori design guidelines in initial
                  implementation, ensuring consistency and scalability
                </li>
                <li>
                  Production-ready handoff, including final mockups, specs, and
                  behavior documentation
                </li>
              </ul>
            </Result>
            <Result name="2 new feature sections" isLarge>
              <p>
                Were designed from scratch and released into platform, improving
                backlog and project workflows, enhancing usability, and
                replacing legacy UI for thousands of engineers.
              </p>
            </Result>
            <Result name="6 user interviews">
              <p>
                Internal user interviews conducted during the design sprint to
                validate needs and expectations
              </p>
            </Result>
            <Result name="5 usability tests">
              <p>
                5 remote usability test sessions run with real users to evaluate
                and refine key flows before implementation
              </p>
            </Result>
          </div>
        </SectionLayout>

        <img src={resultImg} className="img" alt="resultImg" />
      </section>

      <hr />

      <section className="section-gap">
        <SectionLayout name="Phase 1 – Map">
          <div>
            <h2>Understanding the Problem and Setting Direction</h2>
            <p>
              We began by mapping out the challenge — identifying user needs,
              business goals, and pain points. This step helped the team build a
              shared understanding of the problem space and align on the
              objectives for the sprint.
            </p>
          </div>
        </SectionLayout>

        <img src={phase1} className="img" alt="Phase1Img" />
      </section>

      <hr />

      <section className="section-gap">
        <SectionLayout name="Phase 2 – Sketch">
          <div>
            <h2>Generating Ideas and Exploring Alternatives</h2>
            <p>
              This phase focused on generating and expanding possible directions
              before narrowing in on a final concept. We began with{" "}
              <strong>Lightning Demos</strong>, reviewing existing products and
              interfaces that tackled similar challenges. This helped us surface
              best practices and gather references that could inform our design
              decisions — especially around structure, interaction patterns, and
              data handling.
            </p>
            <p>
              Next, we ran a <strong>Crazy 8s exercise</strong> — a fast-paced
              sketching activity where each team member created eight distinct
              ideasin under 8 minutes. This pushed us to explore a wide range of
              possible solutions, from simple variations to unconventional
              flows. The intent wasn’t perfection, but volume and variety,
              encouraging lateral thinking.
              <br /> After sketching, all ideas were submitted to the moderator
              for anonymous voting. This ensured that selection wasn’t biased by
              team roles or personalities, letting the strongest solutions
              surface on merit alone.
            </p>
            <p>
              <i>
                Personally, this stage was the most creatively demanding —
                balancing open ideation with the real constraints of SAP Fiori.
                I had to constantly assess which concepts were feasible within
                the design system and where limited customization might be
                justified. It was a valuable push-and-pull between creativity
                and system compliance.
              </i>
            </p>
          </div>
        </SectionLayout>

        <img src={phase2} className="img" alt="Phase2Img" />
      </section>

      <hr />

      <section className="section-gap">
        <SectionLayout name="Phase 3 – Decide">
          <div>
            <h2>Aligning on the Most Promising Direction</h2>
            <p>
              The team reviewed the top-voted ideas and collaboratively decided
              on a solution direction. Discussions focused on feasibility,
              alignment with the design system, and whether we were willing to
              introduce minor customizations to meet user needs.
            </p>
          </div>
        </SectionLayout>

        <img src={phase3} className="img" alt="Phase4Img" />
      </section>

      <hr />

      <SectionLayout name="Phase 4 – Prototype">
        <div>
          <h2>Building a Realistic Interaction Model</h2>
          <p>
            I was responsible for building the prototype based on the team's
            discussions and key decisions. After an in-depth conversation with
            the Lead Designer and Project Owner, we aligned on our core vision
            and identified the key features that were essential for testing. At
            the same time, we prioritized which elements could be postponed due
            to the limited timeframe of the design sprint.
          </p>
          <p>
            Once the scope was defined, I created an interactive prototype that
            simulated real user interactions as closely as possible. The goal
            was to provide a realistic experience that would allow us to gather
            meaningful feedback during testing.
          </p>
        </div>
      </SectionLayout>

      <hr />

      <section className="section-gap">
        <SectionLayout name="Phase 5 – Test">
          <div>
            <h2>Validating the Concept Through Real User Feedback</h2>
            <ul className="list">
              <p>
                To validate our solution, we conducted remote moderated
                usability testing with internal SAP users.
              </p>
              <li>
                Task-Based Testing: Participants were asked to complete specific
                tasks that reflected real-world usage scenarios.
              </li>
              <li>
                Moderator-Led Sessions: Moderator guided users, prompting them
                to think aloud and share reactions in real time.
              </li>
              <li>
                Live Note-Taking: A dedicated observer captured pain points,
                quotes, and behavioral patterns to inform refinements.
              </li>
              <p>
                This phase helped us bridge the gap between concept and reality,
                uncovering actionable insights that informed the final iteration
                of the design.
              </p>
            </ul>
          </div>
        </SectionLayout>

        <img src={phase5} className="img" alt="Phase5Img" />
      </section>

      <hr />

      <section className="section-gap">
        <SectionLayout name="Post-Sprint Activities">
          <div>
            <h2>Refining and Supporting Implementation</h2>
            <p>
              Once the design sprint was complete, we entered the refinement and
              implementation phase. I updated the mockups based on usability
              testing insights, focusing on interaction clarity, simplification,
              and alignment with the Fiori design system.
            </p>
            <p>
              Instead of creating separate documentation, I embedded all
              relevant logic, field behavior, and interaction rules directly
              into the design file using contextual annotations.
            </p>
          </div>
        </SectionLayout>

        <img src={sprint} className="img" alt="sprintImg" />

        <SectionLayout>
          <ul className="list">
            <p>
              Given the complexity of the new sections, development was split
              into multiple sprints. I supported the implementation by:
            </p>
            <li>Structuring the design file for easy handoff</li>
            <li>Answering questions in real time during dev handovers</li>
            <li>
              Quickly adjusting layouts and logic based on technical feedback
            </li>
            <li>
              Ensuring consistent visual behavior across use cases and data
              states
            </li>
            <p>
              This approach kept the process fast, transparent, and closely
              aligned between design and development—without the need for extra
              documentation layers.
            </p>
          </ul>
        </SectionLayout>
      </section>
    </ProjectContainer>
  );
}
