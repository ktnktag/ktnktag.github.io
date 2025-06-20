import classes from "./BlogPost.module.css";

import { default as Arrow } from "../../../../assets/svg/ui/Arrow.svg?react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  path: string;
  date: string;
  children: React.ReactNode;
};

export default function BlogPost({ title, path, date, children }: Props) {
  return (
    <li className={classes.container}>
      <Link to={path} className={classes.wrap}>
        <h3>
          {title} <Arrow className="arrow" />
        </h3>
      </Link>
      <p className={classes.date}>{date}</p>

      <p className={classes.text}>{children}</p>
    </li>
  );
}
