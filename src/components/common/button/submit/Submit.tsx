import classes from "./Submit.module.css";

import { default as Lock } from "../../../../assets/svg/ui/lock.svg?react";

export default function Submit() {
  return (
    <label className={classes.button}>
      <Lock />
      <input type="submit" value={"unlock"} />
    </label>
  );
}
