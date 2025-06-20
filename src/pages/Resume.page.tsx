import PageHeader from "../components/UI/PageHeader";

import LinkButton from "../components/common/button/link-button/LinkButton";
import List from "../components/common/text/List";

export default function ResumePage() {
  return (
    <>
      <PageHeader
        title="Resume"
        desc={<>
            <p className="text-container">
              As a UX designer with over 4 years of experience, I specialize in
              creating user-centered digital experiences that are grounded in
              research and designed for impact. I’ve worked across
              cross-functional teams to deliver intuitive interfaces, optimize
              user journeys, and implement scalable design systems that support
              long-term product growth.
              <br /><br />
              I focus on turning user insights into actionable design solutions
              through UX research, usability testing, wireframing, and
              prototyping. I’ve collaborated with developers, product managers,
              and stakeholders to align business goals with user needs — from MVPs
              to iterative improvements.
            </p>

            <LinkButton
              path="https://drive.google.com/file/d/194s2tAYmmk6hoMVCgfuB7O-hd6_za8fW/view"
              download
            >
              Download Resume as PDF
            </LinkButton>
          </>
        }
      />

      <section className="section-layout container gap-32">
        <h2>Experience</h2>

        <List
          name="EPAM Systems"
          path="https://www.epam.com"
          desc="Experience Designer"
          date="Oct 2022 - Present"
        >
          <li>
            Led end-to-end UX/UI design for enterprise-scale web applications
            used by global organizations
          </li>
          <li>
            Designed and scaled a full product design system — including
            components, patterns, tokens, layout, accessibility rules, and
            documentation
          </li>
          <li>
            Balanced constraints of large design systems (e.g., SAP Fiori) with
            product-specific requirements, ensuring scalable, maintainable
            solutions
          </li>
          <li>
            Conducted research synthesis based on business inputs, stakeholder
            interviews, and system audits to define flows and user goals
          </li>
          <li>
            Analyzed stakeholder-provided data and product requirements to
            extract actionable insights
          </li>
          <li>
            Created high-fidelity prototypes in Figma to communicate design
            intent, support validation, and accelerate dev understanding
          </li>
          <li>
            Created and maintained documentation in onfluence, tracked progress
            in Jira, and used GitHub Issues to clarify design details for devs
          </li>
          <li>
            Collaborated closely with engineers during delivery, resolving edge
            cases and adjusting designs based on implementation constraints
          </li>
          <li>
            Proactively communicated with cross-functional teams, building trust
            and delivering solutions within fast-paced agile cycles
          </li>
        </List>

        <List
          name="The Rolling Scopes School"
          path="https://rs.school"
          desc="Product Designer"
          date="Mar 2022 - Feb 2023"
        >
          <li>
            Led the redesign of key platform flows, including mentor
            registration, test-taking, task submission, and scheduling interface
          </li>
          <li>
            Conducted user research through surveys, interviews, and informal
            field studies with students, mentors, and administrators
          </li>
          <li>
            Synthesized insights into actionable product decisions, aligning
            user needs with technical constraints
          </li>
          <li>
            Created CJMs and mapped detailed user flows to prioritize key
            features and accelerate alignment between teams
          </li>
          <li>
            Delivered high-fidelity mockups and interactive prototypes for core
            areas of the platform
          </li>
          <li>
            {" "}
            Facilitated usability testing and iterated designs to resolve
            confusion and meet accessibility needs
          </li>
          <li>
            Designed within an evolving open-source ecosystem, balancing limited
            engineering capacity with long-term scalability
          </li>
          <li>
            Used Miro and Google Forms to support collaborative research, flow
            definition, and decision tracking
          </li>
          <li>
            Tracked design tasks and clarifications using GitHub Issues to
            ensure smooth collaboration with developers
          </li>
        </List>

        <List
          name="Itexus"
          path="https://itexus.com"
          desc="UX/UI Designer"
          date="Mar 2022 - Feb 2023"
        >
          <li>
            Designed responsive mobile and web applications under the guidance
            of a UX Lead, focusing on visual clarity and usability
          </li>
          <li>
            Participated in redesign initiatives for existing platforms,
            modernizing UI and aligning flows with updated business logic
          </li>
          <li>
            Created clean, consistent interfaces from wireframes to
            high-fidelity mockups, adhering to brand and technical constraints
          </li>
          <li>
            Delivered UI for products from early concept through final developer
            handoff, supporting agile delivery cycles
          </li>
          <li>
            Maintained a strong focus on layout, spacing, hierarchy, and
            systematization across product surfaces
          </li>
          <li>
            Collaborated with developers to clarify interaction logic and
            resolve design questions during implementation
          </li>
        </List>

        <List
          name="Freelance"
          path="/"
          desc="UX/UI Designer"
          date="Mar 2022 - Feb 2023"
        >
          <li>
            Designed end-to-end solutions for early-stage startups and small
            teams across various industries
          </li>
          <li>
            Defined product structure, created wireframes, mockups, and
            developer-ready assets under tight timelines
          </li>
          <li>
            Led UX decisions in the absence of formal research, relying on
            market analysis and founder interviews
          </li>
          <li>
            Managed client communication, balancing design direction, scope
            clarity, and product goals independently
          </li>
        </List>
      </section>

      <section className="section-layout container gap-32">
        <h2>Technical skills</h2>
        <ul className="list text-box-large">
          <li>
            Figma: Advanced use of components, variants, auto layout, and design
            tokens; expert in building scalable design systems from scratch
          </li>
          <li>
            Prototyping: Interactive web and mobile flows using Figma
            prototyping features for user validation and developer clarity
          </li>
          <li>
            Design Systems: Designed and maintained full-scale design systems,
            UI patterns, accessibility guidelines, and documentation
          </li>
          <li>
            User Research: Experience with moderated user interviews, surveys,
            contextual inquiry, competitor audits, and domain-specific research
          </li>
          <li>
            Research Synthesis: Organized qualitative data through affinity
            mapping and thematic clustering to inform user flows and
            prioritization
          </li>
          <li>
            Documentation & Handoff: Created developer-ready specifications with
            text and visual assets; tracked implementation via GitHub Issues and
            Jira
          </li>
          <li>
            Collaboration Tools: Proficient in GitHub, Jira, and Confluence for
            managing design-dev workflows and aligning cross-functional teams
          </li>
          <li>
            Design Communication: Presenting and defending design decisions with
            cross-functional stakeholders
          </li>
          <li>
            Accessibility: Applied WCAG standards for inclusive design, with
            focus on contrast, keyboard access, and pattern usability
          </li>
        </ul>
      </section>

      <section className="section-layout container gap-32">
        <h2>Core competencies</h2>
        <p className="text-box-large">
          User-Centered Design | UX Strategy | Cross-Functional Collaboration |
          Design Systems Thinking | Rapid Prototyping | Problem Framing | Design
          Communication | Stakeholder Alignment | Research Synthesis | Design
          Decision-Making | Information Architecture | Rapid Ideation | Visual
          Consistency | Accessibility Awareness | Product Thinking | Attention
          to Detail | Continuous Improvement | Emotional Intelligence |
          Adaptability
        </p>
      </section>
    </>
  );
}
