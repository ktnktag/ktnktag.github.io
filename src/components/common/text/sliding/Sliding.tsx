import classes from "./Sliding.module.css";

type Props = {
  name?: string;
  children: React.ReactNode;
  isLight?: boolean;
};

export default function Sliding({ name, children, isLight = false }: Props) {
  return (
    <div className={classes.sliding}>
      <div>
        <p
          className={`${classes.title} eyebrow ${isLight ? classes.light : ""}`}
        >
          {name}
        </p>
      </div>
      {children}
    </div>
  );
}
