import img1 from "../assets/webps/side-activity/SideImg1.webp";

import PageHeader from "../components/UI/PageHeader";
import Card from "../components/UI/card/Card";

export default function SideActivityPage() {
  return (
    <>
      <PageHeader
        title="Side activity"
        desc={
          <p className="text-container">
            See how turned ideas into reality. Dive into the stories of
            successful product designs that make a difference.
          </p>
        }
      />

      <section className="section-layout container">
        <div className="grid-cols">
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
