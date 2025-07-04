import headerImg from "../assets/webps/adidas/Header.webp";
import resultImg from "../assets/webps/adidas/Result.webp";
import reviewingImg from "../assets/webps/adidas/Reviewing.webp";
import mappingImg from "../assets/webps/adidas/Mapping.webp";
import visualisingImg from "../assets/webps/adidas/Visualising.webp";
import prototypingImg from "../assets/webps/adidas/Prototyping.webp";
import interactionsImg from "../assets/webps/adidas/Interactions.webp";

import SectionLayout from "../components/common/text/section-layout/SectionLayout";
import Result from "../components/common/text/Result";
import ProjectContainer from "../components/UI/ProjectContainer";

export default function AdidasPage() {
  return (
    <ProjectContainer
      title="Enhancing user experience during adidas' Fiori migration to support
            the TRANS4RM program and streamline global workflows"
      path="https://www.adidas-group.com/en/"
      img={headerImg}
    >
      <SectionLayout name="About the project">
        <div>
          <h2>Overview</h2>
          <p>
            As part of adidas' large-scale TRANS4RM program, this project aimed
            to migrate and redesign a group of legacy web applications into the
            SAP Fiori framework. These apps were part of a broader strategic
            transformation under the “Own the Game” initiative, replacing
            outdated platforms like SAP GUI and Bizagi with unified, modern, and
            mobile-adaptable interfaces. <br />
            The primary focus was on improving usability, aligning with Fiori
            standards, and supporting business needs across global markets — all
            within tight time constraints and in close collaboration with a
            cross-functional team.
          </p>
        </div>

        <div>
          <h2>Challenge</h2>
          <p>
            The project involved the design and delivery of eight internal web
            applications with varying levels of maturity — from redesigning
            legacy tools (SAP GUI, Bizagi, and outdated web apps) to building
            entirely new applications from scratch. This demanded flexibility,
            deep involvement in business processes, and the ability to make
            informed design decisions within a complex technical landscape.
          </p>

          <ul className="list">
            <p>Key challenges included:</p>
            <li>
              Navigating multiple legacy systems, each with unique constraints,
              while migrating them to a unified SAP Fiori framework — without
              over-customization and while preserving or enhancing existing
              functionality.
            </li>
            <li>
              Ensuring full alignment with the SAP Fiori design system and UX
              guidelines, while guaranteeing that interfaces remained viable
              within the SAP S/4HANA ecosystem.
            </li>
            <li>
              Designing solutions for highly complex business domains, such as
              order management, logistics, debt tracking, and factory
              operations, spanning multiple countries and stakeholder groups.
            </li>
            <li>
              Maintaining clear, ongoing collaboration with a cross-functional
              team of business analysts, software architects, developers, and QA
              specialists through daily syncs and iterative feedback loops.
            </li>
            <li>
              Executing a sequential rollout, with limited timeframes for each
              product (e.g., a six-week window for the PO Amendment tool),
              requiring rapid decision-making and prioritization.
            </li>
            <li>
              Delivering scalable, mobile-adaptive interfaces ready for global
              use under adidas' enterprise-wide TRANS4RMinitiative.
            </li>
          </ul>
        </div>

        <div>
          <h2>Approach</h2>
          <ul className="list">
            <p>
              Each application followed a modular, repeatable process customized
              to the specific domain, but grounded in consistent principles:
              stakeholder alignment, speed of delivery, and design accuracy.
            </p>
            <li>
              Initial analysis of legacy systems or raw business requirements
              for each application to uncover gaps and opportunities
            </li>
            <li>
              Daily focused sessions with stakeholders and the business analyst
              to discuss one business process at a time
            </li>
            <li>
              Rapid wireframing immediately after each session, followed by
              next-day refinements based on feedback
            </li>
            <li>
              Interactive prototyping in Figma to simulate real user scenarios
              and validate design directions early
            </li>
            <li>
              Design validation loops involving stakeholders, BA, and developers
              to ensure smooth handoff and mutual understanding
            </li>
            <li>
              Documentation and specifications maintained in Figma and
              Confluence for transparent collaboration
            </li>
            <li>
              Sequential delivery model — moving to the next app only after
              handoff of the previous one, allowing deep focus and knowledge
              transfer
            </li>
          </ul>
        </div>
      </SectionLayout>

      <section className="section-gap">
        <SectionLayout name="Result">
          <div className="grid-cols">
            <Result name="100%" isLarge>
              <ul className="list">
                <li>
                  alignment with SAP Fiori design guidelines, ensuring
                  consistency, scalability, and low technical overhead
                </li>
                <li>
                  applications delivered with handoff-ready design
                  specifications in Figma and documented in Confluence
                </li>
              </ul>
            </Result>
            <Result name="4 web applications">
              <p>
                Redesigned from legacy platforms (SAP GUI, Bizagi) with improved
                UX, streamlined workflows, and seamless Fiori integration for
                internal users
              </p>
            </Result>
            <Result name="4 web applications">
              <p>
                Successfully built from scratch to support new business
                processes in finance and logistics, designed for clarity and
                long-term flexibility
              </p>
            </Result>
            <Result name="60+">
              <p>
                Wireframes and mockups created across all 8 applications to
                support rapid iteration and stakeholder alignment
              </p>
            </Result>
            <Result name="30+">
              <p>
                Unique user flows and process variations visualized, prototyped,
                and validated across multiple roles and business units
              </p>
            </Result>
          </div>
        </SectionLayout>

        <img src={resultImg} className="img" alt="resultImg" />
      </section>

      <hr />

      <section className="section-gap">
        <SectionLayout name="Understanding Scope">
          <div>
            <h2>Reviewing Inputs and Defining Scope</h2>
            <p>
              Each design initiative began with an overview of relevant tickets
              in Jira. These tasks contained high-level goals, technical notes,
              and business priorities pre-defined by the BA or Product Owner. I
              used them to understand the feature scope, identify constraints,
              and outline what needed to be solved through design.
            </p>
            <p>
              Next, I explored documentation in Confluence — such as flowcharts,
              workshop summaries, or legacy system overviews. This helped
              uncover process logic, terminology, and integration points. I
              flagged outdated, missing, or conflicting information early in the
              cycle to avoid downstream blockers.
            </p>
          </div>
        </SectionLayout>

        <img
          src={reviewingImg}
          alt="reviewing Img"
          className="img-multiply img"
        />

        <SectionLayout>
          <p>
            If any parts of the flow remained unclear, I raised targeted
            questions directly with the Business Analyst or Architect. These
            covered edge cases, validation rules, and system behaviors under
            different scenarios. This step was crucial to ensure design
            decisions were based on accurate and shared understanding.
          </p>
        </SectionLayout>
      </section>

      <hr />

      <section className="section-gap">
        <SectionLayout name="Defining User Flows">
          <div>
            <h2>Mapping actions, states, and transitions</h2>
            <p>
              Once the logic was clarified, I mapped user flows for each core
              task. This included step-by-step interactions, user inputs, system
              responses, and business conditions across different roles. <br />
              These flows became the foundation for all further design work —
              aligning teams around what needed to be designed, how it worked,
              and why.
            </p>
          </div>
        </SectionLayout>

        <img src={mappingImg} className="img" alt="mappingImg" />
      </section>

      <hr />

      <section className="section-gap">
        <SectionLayout name="Visualising layout">
          <div>
            <h2>Wireframes, hierarchy, and interaction structure</h2>
            <p>
              I translated user flows into wireframes in Figma, using low
              fidelity to move fast. Wireframes helped test layout direction,
              establish information groupings, and plan interaction zones using
              SAP Fiori components.
              <br /> They enabled quick validation with the BA and team before
              investing time in high-fidelity design.
            </p>
          </div>
        </SectionLayout>

        <img src={visualisingImg} className="img" alt="visualisingImg" />
      </section>

      <hr />

      <section className="section-gap">
        <SectionLayout name="Prototyping Interactions">
          <div>
            <h2>Building clickable flows for real-world simulation</h2>
            <p>
              After layout approval, I built high-fidelity mockups and
              interactive Figma prototypes simulating actual user journeys.
              These included: field states, error handling, modals, and flow
              logic.
              <br /> Prototypes made reviews concrete, helped spot UX friction
              points early, and accelerated stakeholder buy-in.
            </p>
          </div>
        </SectionLayout>

        <img src={prototypingImg} className="img" alt="prototypingImg" />

        <SectionLayout>
          <div>
            <p>
              Designs were reviewed frequently — often daily — in short syncs
              with stakeholders, the BA, and developers. We discussed logic,
              field behavior, and alignment with real business cases.
              <br />
              Feedback was incorporated rapidly, making the process highly
              iterative, responsive, and collaborative across the team.
            </p>
            <p>
              Once approved, designs were cleaned up, annotated, and prepped for
              handoff. Throughout development, stayed available for
              clarifications, alternatives, and layout adjustments — ensuring
              the final implementation matched the design intent and business
              goals.
            </p>
          </div>
        </SectionLayout>

        <img src={interactionsImg} className="img" alt="interactions Img" />
      </section>
    </ProjectContainer>
  );
}
