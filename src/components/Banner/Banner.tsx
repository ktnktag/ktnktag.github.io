import classes from './Banner.module.css'

import { Link } from 'react-router-dom';
import { default as Arrow } from '../../assets/svg/Arrow-r.svg?react'

interface Props {
    children: React.ReactNode;
    image: string;
    title: string;
    path: string;
    imgName?: string;
    company?: string;
    soon?: boolean;
    isLink?: boolean;
}

export default function Banner({children, image, title, path, imgName, company, soon, isLink} : Props) {
    return(
        <article className={classes.container}>
            <Link to={path} target={isLink ? "_blank" : ''}>
                <div className={classes.cover}>
                    <div className={classes.caption}>
                        <p>{imgName}</p>
                        <p>{company}</p>
                    </div>
                    <img className={classes.img} src={image} alt={title} />
                    {soon && <div className={classes.soon}><p>soon</p></div>}
                </div>

                <div className={classes.content}>
                    <h3 className={classes.title}> {title} </h3>
                    <p className={classes.text}>{children}</p>
                    <p className={`${classes.link}`}>See the project <Arrow  className={classes.moveRight}/></p>
                </div>
            </Link>
        </article>
    )
}