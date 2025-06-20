import personalPhoto from "../assets/webps/home/PersonalPhoto.webp";
import im1 from "../assets/webps/projects/Projects-2.webp";
import im2 from "../assets/webps/projects/Projects-5.webp";
// import bannerImg from '../assets/webp/home/BannerImg.webp';

import SocialLinks from "../components/UI/SocialLinks";
import LinkButton from "../components/common/button/link-button/LinkButton";
import Card from "../components/UI/card/Card";
import Testimonial from "../components/UI/testimonial/Testimonial";
// import Banner from '../components/banner/Banner';
import PageHeader from "../components/UI/PageHeader";

export default function HomePage() {
  return (
    <>
      <PageHeader
        img={<img src={personalPhoto} alt="personal photo round" className="img-round" />}
        title="I'm Valeria, Experience Designer from Poland, working to create
            exceptional user experiences."
        desc={
          <>
            <p className="text-container-lg">
              From freelance projects to B2C and B2B product design, I've found my
              passion in user research, designing solutions, and testing them with
              real users. Ensuring that my designs solve problems and enhance
              lives is what truly drives me.
            </p>

            <SocialLinks />
          </>}
      />

      <div className="page-section container">
        <section className="flex-column gap-40">
          <div className="text-container flex-column gap-20">
            <h2>Selected projects</h2>
            <p>
              Selected works representing a range of projects I've contributed
              to across different contexts and teams. This selection reflects
              diverse problem spaces and collaborative processes, with a
              consistent focus on clarity, usability, and meaningful outcomes.
            </p>
          </div>

          <div className="grid-cols">
            <Card
              image={im1}
              title="Design System for the Leading Global Tech Company"
              path="/design-system"
              imgName="Design system"
              company="SAP Company, 2023 - 2025"
            >
              Developed a new comprehensive design system and developer
              documentation, designed to align with the existing product design
              system (used externally) without duplicating it — ensuring
              consistency while addressing distinct needs and integrations.
            </Card>

            <Card
              image={im2}
              title="Redesign and new Feature Development for Educational Platform"
              path="/rs-school"
              imgName="Product design"
              company="Rolling Scope School, 2022"
            >
              Redesigned the UX of an educational platform using an iterative
              approach to minimize disruption. Focused on enhancing usability
              while ensuring the learning process continued smoothly for users
              and developers.
            </Card>
          </div>
        </section>

        {/* <Banner
                name='Build It Better: A Step-by-Step Guide to Creating Your First Product'
                path='/sign-in'
                img={bannerImg}>
                This hands-on workbook walks you through every stage of product creation — from shaping your first concept to launching a functional MVP. Rooted in real-world experience, it’s designed to help you build not just faster, but smarter.
            </Banner> */}

        <section className="flex-column gap-40">
          <div className="text-container flex-column gap-20">
            <h2>Testimonials</h2>
            <p>
              Discover what it's like to work together — through the eyes of
              designers, product managers, and engineers I’ve collaborated with.
              Their words reflect not just the outcomes we achieved, but the
              relationships we built along the way.
            </p>
          </div>

          <div className="grid-cols">
            <Testimonial
              name="Anna Malysheva"
              img="https://media.licdn.com/dms/image/v2/D4D03AQFLv2zmb-YTnw/profile-displayphoto-shrink_100_100/B4DZT2che9HYAU-/0/1739301460453?e=1755734400&v=beta&t=E-hZGHjMEdiARfpbsrqKMfleSkSCeNqPZffNHeZTmWY"
              profession="Senior Software Engineer, 7 years in EAS | ReactJS, Node.js, AWS | GenAI"
            >
              I had the pleasure of working closely with Valeria on a
              cross-functional project, and she made the collaboration between
              design and engineering incredibly smooth.
              <br />
              <br />
              She built a robust, scalable design system with clear,
              developer-friendly documentation that made implementation
              efficient and intuitive. On top of that, she was always proactive,
              quick to clarify open questions, and genuinely supportive — making
              her an ideal partner in fast-paced environments.
              <br />
              <br />
              Working with Valeria meant less back-and-forth, fewer blockers,
              and more time spent delivering quality. She’s a true force
              multiplier for any cross-functional team. I’d jump at the chance
              to work with her again and highly recommend her to any team.
            </Testimonial>

            <Testimonial
              name="Herman Bykov"
              img="https://media.licdn.com/dms/image/v2/C5103AQHhTQLJz_YyaA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516714305988?e=1755734400&v=beta&t=9HfapILK_-dtNIDaBpkAPcIb7GpOVd3lKEfUfnzytY4"
              profession="Senior Business Analyst at EPAM Systems"
            >
              I had the chance to work with Valeria during a major site-wide
              redesign initiative and it's been a total pleasure to collaborate
              with her. The number of topics we've covered over a long period of
              time has to be in the dozens, and here's my summary: <br />
              * Great designer with a great eye for detail <br />
              * She has intimate knowledge of Figma and she's helped me
              countless times to get better at it <br />
              * Her deliverables are top notch and, just as her work in general,
              are very consistent, and consistency is one of the best
              commendations I can give to a professional <br />
              * Always delivers on time, can easily be relied upon <br />
              * She's always open to communication and can clearly explain her
              train of thought, she's attentive to feedback, always open to a
              constructive discussion on complex topics (e.g. accessibility),
              and tries to approach designs from every angle, ensuring they meet
              business requirements while also being feasible for the
              development team. <br />
              * Great person, easy to talk to, great to work with! <br />
            </Testimonial>
          </div>

          <LinkButton path="https://www.linkedin.com/in/kto-nekto/details/recommendations/?detailScreenTabIndex=0">
            Read More on LinkedIn
          </LinkButton>
        </section>
      </div>
    </>
  );
}
