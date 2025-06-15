import img1 from "../assets/webp/SideActivity/SideImg1.webp";
import cursor from "../assets/svg/logos/Cursor.svg";

import Card from "../components/UI/card/Card";

export default function SideActivity() {
  return (
    <>
      <header className="hat">
        <div className="column-flex alignment g-32">
          <h1>
            Side activity <img src={cursor} alt="cursor" className="cursor" />
          </h1>
          <p className="text-box">
            See how turned ideas into reality. Dive into the stories of
            successful product designs that make a difference.
          </p>
        </div>
      </header>

      <section className="section alignment">
        <div className="column-grid g-32">
          <Card
            image={img1}
            title="Daily UI challege"
            path="/"
            imgName="UI design"
            company="Daily UI challenge, 2025"
          >
            Developed a new comprehensive design system and developer
            documentation, designed to align with the existing product design
            system (used externally) without duplicating it — ensuring
            consistency while addressing distinct needs and integrations.
          </Card>
        </div>
      </section>
    </>
  );
}
