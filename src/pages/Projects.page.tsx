import Card from "../components/UI/card/Card";
import PageHeader from "../components/UI/PageHeader";
import { cardsProject } from "../db/cards-list";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Past projects"
        desc={
          <p className="text-container">
            See how turned ideas into reality. Dive into the stories of
            successful product designs that make a difference.
          </p>
        }
      />

      <section className="section-layout container">
        <div className="grid-cols">
          {cardsProject.map((item) => (
            <Card
              card={item}
              key={item.title}
            />
          ))}
        </div>
      </section>
    </>
  );
}
