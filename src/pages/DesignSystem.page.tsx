import headerImg from "../assets/webps/design-system/Header.webp";
import resultImg from "../assets/webps/design-system/Result.webp";
import workProcess from "../assets/webps/design-system/WorkProcess.webp";
import componentsImg from "../assets/webps/design-system/Components1.webp";
import patternsImg from "../assets/webps/design-system/Patterns.webp";
import figmaVariablesImg from "../assets/webps/design-system/FigmaVariables.webp";
import standards from "../assets/webps/design-system/Standards.webp";
import documentation from "../assets/webps/design-system/Documentation.webp";
import designReview from "../assets/webps/design-system/DesignReview.webp";

import SectionLayout from "../components/common/text/section-layout/SectionLayout";
import Result from "../components/common/text/Result";
import ProjectContainer from "../components/UI/ProjectContainer";

export default function DesignSystemPage() {
  return (
    <ProjectContainer
      title="Design System for the web resources of the leading global tech company"
      path="https://www.sap.com/index.html"
      style="text-box-large"
      img={headerImg}
    >
      <SectionLayout name="About the project">
        <div>
          <h2>Overview</h2>
          <p>
            The design system project was a strategic initiative aimed at
            unifying visual language and interaction patterns across multiple
            products while maintaining scalability and adaptability. With
            fragmented components and inconsistent user experiences impacting
            product cohesion, the objective was to establish a comprehensive
            design framework that served as a single source of truth for all
            design assets.
          </p>
        </div>

        <div>
          <h2>Challenge</h2>
          <p>
            Establish a scalable, consistent design system across multiple
            products and teams — in an environment with no centralized UI
            standards, minimal documentation, and growing complexity. Designers
            were working in silos, re-creating similar components with slight
            variations, which slowed down delivery and created a fragmented user
            experience. The challenge was to bring clarity and cohesion without
            disrupting ongoing product work or delaying feature releases.
          </p>
        </div>

        <div>
          <h2>Approach</h2>
          <ul className="list">
            <p>
              The primary challenge was to create a comprehensive component
              library that addressed the needs of multiple projects without
              fragmenting the design ecosystem. This required:
            </p>
            <li>
              Scalability Across Projects: New components had to be designed to
              accommodate all current and anticipated project requirements,
              eliminating the need for custom, project-specific components and
              ensuring consistency across products.
            </li>
            <li>
              Total Overhaul of Existing Components: The existing components
              were not only inconsistent but also incompatible with the new
              design system structure. This necessitated a complete redesign,
              integrating updated interaction patterns, accessibility
              considerations, and design tokens for theming and customization.
            </li>
            <li>
              Rapid Development and Iteration: With a core structure to be
              delivered in just 13 weeks, the project demanded an accelerated
              workflow. Daily stand-ups were essential to align on requirements,
              review progress, incorporate feedback, approvals and creation of
              specifications — all in real time.
            </li>
          </ul>
        </div>
      </SectionLayout>

      <section className="section-gap">
        <SectionLayout name="Result">
          <div className="grid-cols">
            <Result name="30+">
              <p>
                Reusable UI components created and documented — including
                inputs, buttons, checkboxes, dropdowns, and other atomic
                elements used across product teams.
              </p>
            </Result>
            <Result name="20+">
              <p>
                Interaction patterns defined — such as forms, onboarding flows,
                modals, error handling, and navigation structures, combining
                multiple components into consistent, functional experiences.
              </p>
            </Result>
            <Result name="4">
              <p>
                Visual themes implemented using design tokens: Light, Dark, High
                Contrast Black, and High Contrast White — providing
                accessibility and stylistic flexibility.
              </p>
            </Result>
            <Result name="150+">
              <p>
                Design tokens implemented to ensure consistency in spacing,
                typography, colors, and theming — enabling flexible
                customization, faster updates, and developer-friendly handoff.
              </p>
            </Result>
          </div>
        </SectionLayout>

        <img src={resultImg} alt="resultImg" />
      </section>

      <hr />

      <section className="section-gap">
        <SectionLayout name="Work Process">
          <div>
            <h2>Structured Sprint Workflow</h2>
            <p>
              We organized the project into focused sprints, each covering
              specific sets of components, patterns, or templates. Each
              component was managed in its own Figma file for version control
              and clarity. This structure helped us scale efficiently across a
              multi-designer team and ensured smooth collaboration with
              stakeholders.
            </p>
          </div>
        </SectionLayout>

        <img src={workProcess} alt="workProcess" className="img-multiply" />
      </section>

      <hr />

      <section className="section-gap">
        <SectionLayout name="components & Patterns">
          <div>
            <h2>Design System</h2>
            <p>
              We started by building atomic components like buttons, inputs, and
              checkboxes, then expanded into complex patterns such as forms,
              onboarding flows, and notifications. This step-by-step approach
              helped us ensure structural consistency before scaling into full
              user flows.
            </p>
            <p>
              All components were designed for flexibility — optional elements
              like avatars or secondary buttons were built in, making it easy to
              adapt without detaching or duplicating. This reduced design debt
              and kept the system clean.
            </p>
            <p>
              Responsiveness and RTL support were considered from the beginning.
              Components adapted across breakpoints, and layouts worked for both
              LTR and RTL languages, improving accessibility and global
              readiness.
            </p>
            <p>
              While maintaining consistency, we allowed thoughtful variation
              where needed. Patterns could be adapted for specific product needs
              without breaking the system, making adoption easier across teams.
            </p>
            <p>
              We continuously gathered feedback from other designers and
              developers, evolving patterns to reflect real-world use cases and
              improving system relevance over time.
            </p>
          </div>
        </SectionLayout>

        <div className="flex-column gap-32">
          <img src={componentsImg} alt="components Img" />
          <img src={patternsImg} alt="patterns Img" />
        </div>
      </section>

      <hr />

      <section className="section-gap">
        <SectionLayout name="Figma variables">
          <div>
            <h2>Tokens as the Single Source of Truth</h2>
            <p>
              We defined tokens for color, typography, spacing, radii, shadows,
              animations, and icon sizes — covering all key visual properties in
              both design and code.
            </p>
            <p>
              Tokens served as the central reference for visual decisions —
              ensuring consistency, reducing ambiguity, and simplifying
              design-to-code translation.
            </p>

            <ul className="list">
              <p>Our system supported 4 visual themes via tokens:</p>
              <li>Light</li>
              <li>Dense</li>
              <li>High Contrast Black</li>
              <li>High Contrast White</li>
              <p>
                This allowed us to meet both branding and accessibility needs
                with minimal effort.
              </p>
            </ul>
          </div>
        </SectionLayout>

        <img src={figmaVariablesImg} alt="figmaVariablesImg" />
      </section>

      <hr />

      <section className="section-gap">
        <SectionLayout name="a11y standards">
          <div>
            <h2>Implementation of Accessibility Standards</h2>
            <p>
              Accessibility was a cornerstone in the creation of our new design
              system. To ensure our product is usable by the widest possible
              audience, including people with disabilities, we adhered to
              internationally recognized WCAG 2.2 AA standards. Throughout the
              development process, we employed a rigorous testing protocol.
              <br />
              We utilized design plugins to verify compliance with AA contrast
              minimums during the design phase. Additionally, components
              underwent thorough testing in a test environment to ensure they
              met accessibility requirements before being released. This
              multi-layered approach ensured that accessibility considerations
              were integral to the design and development process, rather than
              an afterthought.
            </p>
          </div>
        </SectionLayout>

        <img src={standards} alt="standards" />
      </section>

      <hr />

      <section className="section-gap">
        <SectionLayout name="Documentation">
          <div>
            <h2>Living Documentation</h2>
            <div>
              <p>
                In our pursuit of building a robust design system, we followed a
                core principle:"Documentation, documentation, documentation.”
                Our goal was to precisely capture the life cycle of every
                reusable element used across SAP websites, mobile screens, and
                large standalone displays.
              </p>
              <p>
                This included thorough documentation of all components and
                patterns — from breadcrumbs and headers to inputs, buttons, and
                layouts. Each item was accompanied by detailed specifications
                covering structure, states, behaviors, responsive behavior, and
                accessibility considerations.
              </p>
              <p>
                By committing to structured, clear documentation, we ensured
                smooth collaboration between designers and developers, minimized
                ambiguity, and created a reliable source of truth for
                implementation and maintenance across platforms.
              </p>
            </div>
          </div>
        </SectionLayout>

        <img src={documentation} alt="Documentation" />
      </section>

      <hr />

      <section className="section-gap">
        <SectionLayout name="Design Review" isLight>
          <div>
            <h2>Final Checks & QA Workflow</h2>
            <p>
              After development, I reviewed each component in Storybook to check
              that it matched the designs from Figma — both in visuals and
              behavior. If something didn’t work or look right, I logged it in
              GitHub and worked with developers to fix it. I retested each
              component after updates.
            </p>
            <p>
              Once everything worked as expected, I approved the pull request
              and marked the component as stable — ready for use in production.
            </p>
          </div>
        </SectionLayout>

        <img src={designReview} alt="designReview" />
      </section>

      <hr />

      <SectionLayout name="Nowadays" isLight>
        <div>
          <h2>Continuous Development and Iteration</h2>
          <p>
            The design system is not a static asset — it continues to evolve and
            expand. Regular updates are released to address emerging project
            needs and incorporate user feedback from designers across multiple
            teams. <br />
            A structured feedback loop has been established to gather insights
            on component usability, identify gaps in patterns, and refine
            interactions. This ongoing analysis enables the team to prioritize
            necessary adjustments, implement enhancements, and maintain
            alignment with evolving product requirements. <br />
            By maintaining a continuous iteration cycle, the system remains
            relevant, adaptive, and capable of scaling to meet the demands of
            new projects and use cases.
          </p>
        </div>
      </SectionLayout>
    </ProjectContainer>
  );
}
