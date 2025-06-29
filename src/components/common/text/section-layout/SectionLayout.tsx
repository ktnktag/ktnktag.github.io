import classes from "./SectionLayout.module.css";

type Props = {
  name?: string;
  children: React.ReactNode;
  isLight?: boolean;
};

export default function SectionLayout({
  name,
  children,
  isLight = false,
}: Props) {
  return (
    <div className={classes.container}>
      <div>
        <p
          className={`${classes.title} eyebrow ${isLight ? classes.light : ""}`}
        >
          {name}
        </p>
      </div>
      <div className={`text-container flex-column ${classes.content}`}>
        {children}
      </div>
    </div>
  );
}
