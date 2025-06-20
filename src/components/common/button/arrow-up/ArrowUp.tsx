import classes from "./ArrowUp.module.css";
import { default as Arrow } from "../../../../assets/svg/ui/Arrow.svg?react";

export default function ArrowUp() {
  return (
    <div className={classes.container}>
      <a
        className={classes.arrow}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Arrow className={classes.icon} />
      </a>
    </div>
  );
}
