import PageHeader from "../components/UI/PageHeader";
import Card from "../components/UI/card/Card";
import { cardsSideActivity } from "../db/cards-list";

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
          {cardsSideActivity.map((item) => (
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
