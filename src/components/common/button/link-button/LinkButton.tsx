import classes from "./LinkButton.module.css";

import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  path: string;
  small?: boolean;
  download?: boolean;
};

export default function LinkButton({
  children,
  path,
  download,
  small = false,
}: Props) {
  return (
    <Link
      to={path}
      className={small ? classes.smallButton : classes.bigButton}
      download={download}
      target="_blank"
    >
      {children}
    </Link>
  );
}
