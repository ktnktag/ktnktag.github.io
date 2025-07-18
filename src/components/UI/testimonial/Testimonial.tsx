import classes from "./Testimonial.module.css";

type Props = {
  children: React.ReactNode;
  name: string;
  img?: string;
  profession?: string;
};

export default function Testimonial({
  children,
  name,
  img,
  profession,
}: Props) {
  return (
    <article className="testimonial-person">
      <div className={classes.header}>
        <img src={img} alt={name} className={classes.img} />
        <span>
          <h3>{name}</h3>
          <p className={classes.prof}>{profession}</p>
        </span>
      </div>

      <div className={classes.text}>{children}</div>
    </article>
  );
}
