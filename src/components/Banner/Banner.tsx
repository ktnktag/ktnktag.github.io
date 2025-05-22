import classes from './Banner.module.css'

import { Link } from 'react-router-dom';
import { default as Arrow } from '../../assets/svg/ui/Arrow-r.svg?react'

interface Props {
    children: React.ReactNode;
    image: string;
    title: string;
    path: string;
    imgName?: string;
    company?: string;
}

const isExternalLink = (str: string) : string => {

    if (str.includes("http")) {
        return "_blank";
    }

    return "";
}

export default function Banner({children, image, title, path, imgName, company} : Props) {
    return(
        <article className={classes.container}>
            <Link to={path} target={isExternalLink(path)}>
                <div className={classes.cover}>
                    <div className={classes.caption}>
                        <p>{imgName}</p>
                        <p>{company}</p>
                    </div>
                    <img className={classes.img} src={image} alt={title} />
                </div>

                <div className={classes.content}>
                    <h3> {title} </h3>
                    <p>{children}</p>
                    <p className={classes.link}>See the project <Arrow  className={classes.moveRight}/></p>
                </div>
            </Link>
        </article>
    )
}