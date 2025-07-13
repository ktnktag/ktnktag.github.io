import personalPhoto from "../assets/webps/home/PersonalPhoto.webp";
// import bannerImg from '../assets/webp/home/BannerImg.webp';

import SocialLinks from "../components/UI/SocialLinks";
import LinkButton from "../components/common/button/link-button/LinkButton";
import Card from "../components/UI/card/Card";
import Testimonial from "../components/UI/testimonial/Testimonial";
// import Banner from '../components/banner/Banner';
import PageHeader from "../components/UI/PageHeader";

import db from "../db/testimonial-list.json";
import { cardsHome } from "../db/cards-list";

export default function HomePage() {
  return (
    <>
      <PageHeader
        img={
          <img
            src={personalPhoto}
            alt="personal photo round"
            className="img-round"
          />
        }
        title="I'm Valeria, Experience Designer from Poland, working to create
            exceptional user experiences."
        desc={
          <>
            <p className="text-container-lg">
              From freelance projects to B2C and B2B product design, I've found
              my passion in user research, designing solutions, and testing them
              with real users. Ensuring that my designs solve problems and
              enhance lives is what truly drives me.
            </p>

            <SocialLinks />
          </>
        }
      />
      <section className="section-layout flex-column gap-40 container">
        <div className="text-container flex-column gap-20">
          <h2>Selected projects</h2>
          <p>
            Selected works representing a range of projects I've contributed to
            across different contexts and teams. This selection reflects diverse
            problem spaces and collaborative processes, with a consistent focus
            on clarity, usability, and meaningful outcomes.
          </p>
        </div>

        <div className="grid-cols">
          {cardsHome.map((item) => (
            <Card
              card={item}
              key={item.title}
            />
          ))}
        </div>
      </section>

      {/* <Banner
                name='Build It Better: A Step-by-Step Guide to Creating Your First Product'
                path='/sign-in'
                img={bannerImg}>
                This hands-on workbook walks you through every stage of product creation — from shaping your first concept to launching a functional MVP. Rooted in real-world experience, it’s designed to help you build not just faster, but smarter.
            </Banner> */}

      <section className="section-layout flex-column gap-40 container">
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
          {db.map((item) => (
            <Testimonial key={item.name} name={item.name} img={item.img} profession={item.profession}>
              <>
                {item.content.split("\n").map((line, i) =>
                  <p key={i + "l"}>{line}</p>
                )}
              </>
            </Testimonial>
          ))}
        </div>

        <LinkButton path="https://www.linkedin.com/in/kto-nekto/details/recommendations/?detailScreenTabIndex=0">
          Read More on LinkedIn
        </LinkButton>
      </section>
    </>
  );
}
