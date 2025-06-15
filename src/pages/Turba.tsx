import headerImg from "../assets/webp/Turba/Header.webp";
import resultImg1 from "../assets/webp/Turba/Result1.webp";
import resultImg2 from "../assets/webp/Turba/Result2.webp";
import resultImg3 from "../assets/webp/Turba/Result3.webp";
import visionImg from "../assets/webp/Turba/Vision.webp";
import exploratoryImg from "../assets/webp/Turba/Exploratory.webp";
import validationImg from "../assets/webp/Turba/Validation.webp";

import Sliding from "../components/common/text/sliding/Sliding";
import Result from "../components/common/text/Result";
import BrandedLink from "../components/common/button/BrandedLink";

export default function Turba() {
  return (
    <>
      <header className="blog-header">
        <div className="alignment text-center">
          <BrandedLink path="https://www.turba.ai" />
          <h1 className="text-box-lx2">
            From Demo to Product: Building an Interface for Real-Time AI Cluster
            Orchestration
          </h1>
        </div>
        <img src={headerImg} alt="header" />
      </header>

      <div className="wrapper">
        <section className="alignment column-flex g-40">
          <Sliding name="About the project">
            <div className="column-flex g-40 text-box">
              <div className="column-flex g-20">
                <h2>Overview</h2>
                <p>
                  Turba is an emerging AI infrastructure company focused on
                  accelerating and simplifying how organizations deploy and
                  manage machine learning workloads at scale. Their mission is
                  to bridge the gap between raw computational power and
                  accessible tooling — enabling data teams to work faster,
                  smarter, and more efficiently.
                </p>
                <p>
                  The project began as a high-impact initiative to create an
                  interactive demo showcasing real-time AI workload deployment
                  on GPU-powered infrastructure. Initially developed for
                  stakeholder presentations and internal storytelling, the
                  solution evolved into a robust product foundation designed to
                  support large-scale model orchestration, trace simulation, and
                  performance benchmarking — all within a dynamic, scalable
                  environment.
                </p>
              </div>

              <div className="column-flex g-20">
                <h2>Challenge</h2>
                <p>
                  The project began under intense time pressure: the team had
                  just four weeks to deliver an interactive demo showcasing
                  GPU-based AI workload orchestration. The initial version
                  needed to simulate complex infrastructure behavior in real
                  time while remaining visually polished and presentation-ready
                  — a rare blend of technical depth and storytelling clarity.
                </p>

                <ul className="list">
                  <p>
                    Once the demo was delivered, the focus shifted to developing
                    the first working iteration of a real product. This stage
                    introduced a new set of challenges:
                  </p>
                  <li>
                    The platform domain — involving GPU clusters, job traces,
                    scheduling algorithms, and model inference pipelines — was
                    highly technical and unfamiliar, demanding rapid onboarding
                    and deep contextual understanding.
                  </li>
                  <li>
                    The first product release operated under strict time and
                    scope constraints, prioritizing functionality and speed over
                    customization.
                  </li>
                  <li>
                    We leveraged an open-source design system (shadcn/ui) that,
                    while helpful for speed, lacked key components needed for
                    enterprise-grade complexity, forcing us to creatively extend
                    its patterns without overengineering.
                  </li>
                  <li>
                    The team had to balance early-stage product acceleration
                    with architectural decisions that would allow for future
                    scaling and flexibility.
                  </li>
                  <li>
                    Cross-functional alignment was critical — translating
                    backend logic and infrastructure behaviors into simple,
                    clear UI representations for both internal and external
                    users.
                  </li>
                </ul>

                <p>
                  This combination of urgency, technical domain complexity, and
                  limited UI infrastructure shaped every design decision in the
                  early stages of the product's evolution.
                </p>
              </div>

              <div className="column-flex g-20">
                <h2>Approach</h2>
                <ul className="list">
                  <p>
                    Each application followed a modular, repeatable process
                    customized to the specific domain, but grounded in
                    consistent principles: stakeholder alignment, speed of
                    delivery, and design accuracy.
                  </p>
                  <li>
                    Initial analysis of legacy systems or raw business
                    requirements for each application to uncover gaps and
                    opportunities
                  </li>
                  <li>
                    Daily focused sessions with stakeholders and the business
                    analyst to discuss one business process at a time
                  </li>
                  <li>
                    Rapid wireframing immediately after each session, followed
                    by next-day refinements based on feedback
                  </li>
                  <li>
                    Interactive prototyping in Figma to simulate real user
                    scenarios and validate design directions early
                  </li>
                  <li>
                    Design validation loops involving stakeholders, BA, and
                    developers to ensure smooth handoff and mutual understanding
                  </li>
                  <li>
                    Documentation and specifications maintained in Figma and
                    Confluence for transparent collaboration
                  </li>
                  <li>
                    Sequential delivery model — moving to the next app only
                    after handoff of the previous one, allowing deep focus and
                    knowledge transfer
                  </li>
                </ul>
              </div>
            </div>
          </Sliding>
        </section>

        <section className="alignment column-flex g-60">
          <Sliding name="Result">
            <div className="column-grid-mini g-32 text-box">
              <Result name="2 of 4 core user flows">
                <p>
                  fully designed and documented before handoff — including
                  multiple flows per role covering key platform functionality
                </p>
              </Result>
              <Result name="6+ feedback sessions">
                <p>
                  and decision logs captured and documented throughout the
                  design cycle — including weekly stakeholder reviews, open
                  questions, design trade-offs, and alignment decisions.
                </p>
              </Result>
              <Result name="70+ high-fidelity screens">
                <p>
                  designed to support advanced AI infrastructure workflows with
                  scalable, role-based UI patterns.
                </p>
              </Result>
              <Result name="6+ interactive prototypes">
                <p>
                  delivered, including Demo, early iterations, validation
                  versions, and refined pre-handoff prototypes
                </p>
              </Result>
            </div>
          </Sliding>

          <div className="column-grid-mini g-32">
            <img
              src={resultImg1}
              className="img column-large"
              alt="resultImg"
            />
            <img src={resultImg2} className="img" alt="resultImg2" />
            <img src={resultImg3} className="img" alt="resultImg3" />
          </div>
        </section>

        <div className="alignment">
          <hr className="separator" />
        </div>

        <section className="alignment column-flex g-60">
          <Sliding name="Vision & Scope Alignment">
            <div className="column-flex g-20 text-box">
              <h2>From ambiguity to direction</h2>
              <p>
                The project began with an introductory session aimed at
                outlining the product’s long-term goals and immediate
                priorities. The team presented a loosely structured Miro board,
                filled with fragmented diagrams, isolated feature ideas, and
                technical notes.
              </p>
              <p>
                While the technical vision was well-articulated — covering
                backend capabilities, infrastructure logic, and orchestration
                layers — the user experience direction was virtually
                non-existent. There was no defined flow, layout structure, or
                clarity around how end users would interact with the system.
              </p>
            </div>
          </Sliding>

          <img src={visionImg} className="img" alt="sprintImg" />

          <Sliding>
            <p>
              As a designer, the biggest challenge at this stage was to
              translate backend-oriented requirements into a coherent product
              vision and to start shaping a UI that could make technical
              complexity accessible, usable, and scalable. This required intense
              discovery, asking the right questions, and gradually turning a
              technically solid concept into a human-centered experience.
            </p>
          </Sliding>
        </section>

        <div className="alignment">
          <hr className="separator" />
        </div>

        <section className="alignment column-flex g-60">
          <Sliding name="Exploratory Wireframing">
            <div className="column-flex g-20 text-box">
              <h2>Rapid structure through low fidelity</h2>
              <p>
                Initial low-fidelity wireframes were created to map out
                potential flows and layouts. These helped surface open questions
                early and facilitated fast feedback loops without the overhead
                of detailed UI decisions.
              </p>
            </div>
          </Sliding>
          <img src={exploratoryImg} className="img" alt="sprintImg" />
        </section>

        <div className="alignment">
          <hr className="separator" />
        </div>

        <section className="alignment column-flex g-60">
          <Sliding name="Design & Prototyping">
            <div className="column-flex g-20 text-box">
              <h2>From structure to clarity</h2>

              <p>
                Once core user flows were aligned, we moved into the
                high-fidelity phase. Screens were built using scalable UI
                components and layout patterns that could support the platform’s
                long-term growth. Designs were grounded in role-based logic,
                dynamic content behavior, and complex infrastructure
                dependencies.
              </p>

              <p>
                A series of interactive Figma prototypes were created to
                simulate real user interactions. These prototypes helped surface
                design gaps, improve clarity, and minimize ambiguity before
                development. They also allowed for hands-on internal validation
                — enabling faster feedback cycles and early technical alignment.
                Each iteration brought the product closer to a balance between
                usability and backend feasibility.
              </p>
            </div>
          </Sliding>
        </section>

        <div className="alignment">
          <hr className="separator" />
        </div>

        <section className="alignment column-flex g-60">
          <Sliding name="Validation & Documentation">
            <div className="column-flex g-20 text-box">
              <h2>Clarifying complexity through feedback and structure</h2>
              <p>
                Design validation went beyond interactive Figma prototypes on
                Designer’s demo. Since not all stakeholders were comfortable
                navigating prototypes, all flows were mirrored in Miro —
                allowing reviewers to follow directional arrows, understand full
                journeys, and leave comments directly on sticky notes. This
                ensured alignment across technical and non-technical
                participants, and helped surface blind spots early in the
                process.
              </p>
              <ul className="list">
                <p>
                  In parallel, I maintained a structured Jira board, where
                  design-specific tasks were tracked alongside open questions
                  and dependencies. This included:
                </p>
                <li>what needed refinement before handoff,</li>
                <li>
                  what required backend clarification (e.g. which
                  recommendations were critical enough to block model or cluster
                  execution),
                </li>
                <li>
                  and what was non-blocking for the MVP but required attention
                  before release.
                </li>
                <p>
                  This combination of visual clarity, task ownership, and
                  traceable documentation created a shared understanding across
                  roles and ensured nothing fell through the cracks.
                </p>
              </ul>
            </div>
          </Sliding>

          <img src={validationImg} className="img" alt="sprintImg" />
        </section>
      </div>
    </>
  );
}
