import { Link } from "react-router-dom";
import { default as Arrow } from "../../../assets/svg/ui/Arrow.svg?react";

type Props = {
  name: string;
  path: string;
  date: string;
  desc: string;
  children: React.ReactNode;
};

export default function List({ name, path, date, desc, children }: Props) {
  return (
    <ul className="list text-box-large">
      <div className="head">
        <div>
          <Link to={path} target="_blank">
            <h4>{name}</h4>
            <Arrow className="arrow" />
          </Link>
          <p>{desc}</p>
        </div>

        <p>{date}</p>
      </div>

      {children}
    </ul>
  );
}
