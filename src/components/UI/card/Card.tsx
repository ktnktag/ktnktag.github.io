import classes from "./Card.module.css";

import { Link } from "react-router-dom";
import { default as Arrow } from "../../../assets/svg/ui/Arrow-r.svg?react";
import { type Card } from "../../../db/cards-list";

interface Props {
  card: Card;
}

const isExternalLink = (str: string): string =>
  str.includes("http") ? "_blank" : "";

export default function Card({
  card,
}: Props) {
  return (
    <article className={classes.container}>
      <Link to={card.path} target={isExternalLink(card.path)}>
        <div className={classes.cover}>
          <div className={classes.caption}>
            <p>{card.imgName}</p>
            <p>{card.company}</p>
          </div>
          <img className={classes.img} src={card.image} alt={card.title} />
        </div>

        <div className={classes.content}>
          <h3>{card.title}</h3>
          <p>{card.desc}</p>
          <p className={classes.link}>
            See the project <Arrow className={classes.moveRight} />
          </p>
        </div>
      </Link>
    </article>
  );
}
