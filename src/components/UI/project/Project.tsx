import classes from './Project.module.css'
import { default as Arrow } from '../../../assets/svg/Arrow.svg?react'

interface Props {
    children: React.ReactNode;
    image: string;
    title: string;
    path: string;
    company?: string;
    soon?: boolean;
    isLink?: boolean;
    checkPrivate?: Function
}

export default function Project({children, image, title, path, company, soon, isLink, checkPrivate} : Props) {
    const checkCode = () => {
        if (checkPrivate) {
            checkPrivate(path);
        }
    }

    return(
        <article onClick={() => checkCode()} className={classes.container}>
            <a className={isLink ? classes.link : ''} href={checkPrivate ? '#/SelectedWorks' : path}>
                <div className={classes.cover}>
                    <img className={classes.img} src={image} alt={title} />
                    {soon && <div className={classes.soon}><p>soon</p></div>}
                </div>
                <div className={classes.content}>
                    <h3 className={classes.title}> <span> {title} {isLink && <Arrow></Arrow>} </span> </h3>
                    {company && <h4 className={classes.company}>{company}</h4>}
                    <p className={classes.text}>{children}</p>
                </div>
            </a>
        </article>
    )
}