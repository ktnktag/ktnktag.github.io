import headerImg from "../assets/webps/rsschool/Header.webp";
import resultImg from "../assets/webps/rsschool/Result.webp";
import researchImg from "../assets/webps/rsschool/Research.webp";
import mappingImg from "../assets/webps/rsschool/Mapping.webp";
import designingImg from "../assets/webps/rsschool/Designing.webp";
import testingImg from "../assets/webps/rsschool/Testing.webp";
import handoffImg from "../assets/webps/rsschool/Handoff.webp";

import SectionLayout from "../components/common/text/section-layout/SectionLayout";
import Result from "../components/common/text/Result";
import ProjectContainer from "../components/UI/ProjectContainer";

export default function RSSchoolPage() {
  return (
    <ProjectContainer
      title="Revamping the user experience of a free, open-source educational
            platform to enhance learning while maintaining system stability"
      path="https://app.rs.school"
      img={headerImg}
    >
      <SectionLayout name="About the project">
        <div>
          <h2>Overview</h2>
          <p>
            The RS School platform is a free educational resource aimed at
            providing coding and development courses to aspiring developers. The
            project involved a complete UX redesign to improve usability and
            accessibility without disrupting ongoing learning processes. Given
            the platform’s open-source nature, the redesign had to prioritize
            easy-to-develop and maintain solutions.
          </p>
        </div>

        <div>
          <h2>Challenge</h2>
          <ul className="list">
            <li>
              Enhancing Mentor-Student Transparency: The platform lacked
              effective tools for mentor-student interaction. Introducing new
              widgets and pages was essential to provide clear visibility into
              progress and feedback, fostering a more transparent learning
              environment
            </li>
            <li>
              Iterative Redesign Without Disruption: Given the platform's active
              use, implementing changes risked disrupting ongoing educational
              processes. The redesign needed to be executed in phases to ensure
              a seamless transition without hindering current learning
              activities
            </li>
            <li>
              Resource-Constrained Development: As an open-source project, RS
              School operated with limited development resources. This
              necessitated the creation of solutions that were straightforward
              to implement and maintain, ensuring sustainability without
              compromising user experience
            </li>
            <li>
              Enhancing Educational Experience: Beyond addressing existing
              issues, the goal was to strategically improve the overall learning
              experience. This included simplifying navigation, increasing
              content accessibility, and enhancing user interaction with the
              platform
            </li>
            <li>
              Stakeholder Alignment: The project required harmonizing the
              interests of various stakeholders, including educators, students,
              and developers, to ensure the platform met their expectations and
              needs
            </li>
          </ul>
        </div>

        <div>
          <h2>Approach</h2>
          <ul className="list">
            <li>
              Problem Identification: Analyzed the existing platform to identify
              common user pain points and repetitive patterns that hindered the
              learning experience.
            </li>
            <li>
              Stakeholder Collaboration: Engaged with stakeholders during
              requirements gathering to align on core objectives, ensuring that
              the redesign addressed both business goals and user needs.
            </li>
            <li>
              User Research: Conducted comprehensive research, including user
              interviews, surveys, and field studies, to validate assumptions
              and prioritize design features.
            </li>
            <li>
              User Flows and CJM: Mapped customer journeys and user flows to
              visualize key touchpoints and identify areas for improvement.
            </li>
            <li>
              Wireframes and Prototypes: Developed wireframes and interactive
              prototypes using the Ant-Design system to test design concepts and
              iterate on feedback before development.
            </li>
            <li>
              Stakeholder Validation: Presented design concepts to stakeholders
              for feedback, refining the solutions to align with both business
              and user expectations.
            </li>
            <li>
              User Testing: Conducted usability testing with a sample group to
              gather insights and fine-tune the design, ensuring alignment with
              user needs.
            </li>
            <li>
              Development Collaboration: Worked closely with developers,
              providing detailed task statements and supporting documentation to
              facilitate smooth implementation and reduce miscommunication.
            </li>
          </ul>
        </div>
      </SectionLayout>

      <section className="section-gap">
        <SectionLayout name="Result">
          <div className="grid-cols">
            <Result name="3 dashboards" isLarge>
              <ul className="list">
                <p>
                  Dashboards for mentors, administrators, and students —
                  providing actionable insights to improve workflow and reduce
                  missed tasks:
                </p>
                <li>
                  Mentors: Track pending assignments, deadlines, and student
                  progress, reducing missed reviews by 30%.
                </li>
                <li>
                  Administrators: Monitor mentor applications and access
                  performance stats to prevent lost requests and optimize mentor
                  assignments.
                </li>
                <li>
                  Students: Stay updated on assignment statuses and deadlines,
                  decreasing late submissions by 25%.
                </li>
              </ul>
            </Result>
            <Result name="3 New sections">
              <p>
                New sections for task management — providing clear, structured
                areas for cross-checks, tests, and mentor reviews, streamlining
                the assessment workflow and reducing missed tasks by 30%.
              </p>
            </Result>
            <Result name="6 Widgets">
              <p>
                Student widgets added — enhancing accessibility and quick access
                to resources, resulting in a 20% boost in student engagement.
              </p>
            </Result>
            <Result name="1 Registration ">
              <p>
                Unified registration flow for mentors and students — simplifying
                onboarding and ensuring data accuracy across the platform,
                reducing form completion errors by 15%.
              </p>
            </Result>
            <Result name="2 Improvements">
              <p>
                scheduling system — with clear task availability, submission
                deadlines, filters for overdue assignments, and navigation —
                restructured the platform’s layout to simplify access for
                application sections.
              </p>
            </Result>
          </div>
        </SectionLayout>

        <img src={resultImg} className="img" alt="resultImg" />
      </section>

      <hr />

      <section className="section-gap">
        <SectionLayout name="Research and Discovery">
          <div>
            <h2>Understanding User Needs</h2>
            <ul className="list">
              <p>
                To thoroughly understand user needs and identify key pain
                points, I conducted a comprehensive research phase involving
                multiple user groups — students, mentors, and administrators.
                This included:
              </p>
              <li>
                An online survey to gather quantitative data on platform usage,
                common issues, and feature requests.
              </li>
              <li>
                Follow-up interviews to gain qualitative insights into specific
                challenges and workflow inefficiencies.
              </li>
              <li>
                Data synthesis to identify recurring themes and prioritize focus
                areas for redesign.
              </li>
            </ul>
          </div>
        </SectionLayout>

        <img src={researchImg} alt="researchImg" className="multiply-img img" />
      </section>

      <hr />

      <section className="section-gap">
        <SectionLayout name="Data Analysis and Problem Definition">
          <div>
            <h2>Mapping the Pain Points and Current Solutions</h2>
            <ul className="list">
              <p>
                The collected data was systematically analyzed to uncover key
                problem areas. Issues were categorized based on user roles and
                current solutions, revealing:
              </p>
              <li>
                Gaps in the existing mentor-student interaction flow, including
                lack of visibility into application statuses and feedback loops.
              </li>
              <li>
                Inconsistent assignment management and submission tracking,
                contributing to missed deadlines.
              </li>
              <li>
                Navigation inconsistencies, leading to confusion and increased
                drop-off rates.
              </li>
              <li>
                Unclear scheduling and task prioritization, impacting student
                performance.
              </li>
            </ul>
          </div>
        </SectionLayout>

        <img src={mappingImg} className="img" alt="mappingImg" />
      </section>

      <hr />

      <section className="section-gap">
        <SectionLayout name="Experience Mapping and Ideation">
          <div>
            <h2>Designing Solutions Through User Flows and CJMs</h2>
            <ul className="list">
              <p>
                Using the identified problem areas, I developed user-centric
                solutions through:
              </p>
              <li>
                Customer Journey Maps (CJMs) to outline existing flows and
                visualize friction points across the student, mentor, and admin
                journeys.
              </li>
              <li>
                Status and User Flows to propose optimized processes, ensuring
                clarity in assignment submission, feedback collection, and
                mentor application tracking.
              </li>
              <li>
                Ideation workshops to validate potential solutions with
                stakeholders, refining concepts before proceeding to design.
              </li>
            </ul>
          </div>
        </SectionLayout>

        <img src={designingImg} className="img" alt="designingImg" />
      </section>

      <hr />

      <section className="section-gap">
        <SectionLayout name="Testing and Handoff">
          <div>
            <h2>
              Validating Prototypes and Creating Development Tasks in GitHub
            </h2>
            <ul className="list">
              <p>
                To ensure design accuracy and identify areas for improvement, I
                developed interactive prototypes and conducted targeted testing
                sessions:
              </p>
              <li>
                Created clickable prototypes to simulate key user flows,
                focusing on assignment submission, mentor feedback, and admin
                review processes.
              </li>
              <li>
                Conducted user testing sessions with students, mentors, and
                admins to validate the redesigned interfaces and identify
                usability issues.
              </li>
              <li>
                Collected feedback, analyzed user responses, and documented
                necessary adjustments to components and flows.
              </li>
              <li>
                Updated the prototypes to reflect necessary changes and
                re-tested to confirm improvements.
              </li>
              <li>
                Created detailed GitHub tasks for the development team,
                outlining implementation requirements, component specifications,
                and priority levels for each update.
              </li>
              <li>
                Monitored task progress, provided clarification when needed, and
                ensured alignment between design intent and final
                implementation.
              </li>
            </ul>
          </div>
        </SectionLayout>

        <div className="grid-cols">
          <img src={testingImg} className="img" alt="testingImg" />
          <img src={handoffImg} className="img" alt="handoffImg" />
        </div>
      </section>
    </ProjectContainer>
  );
}
