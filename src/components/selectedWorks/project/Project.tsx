import classes from './Project.module.css'

interface Props {
    children: React.ReactNode;
    image: string;
    title: string;
    company?: string;
    soon?: boolean;
    path?: string;
}

export default function Project({children, image, title, company, soon, path} : Props) {
    return(
        <article className={classes.container}>
            <a className={path !== undefined ? classes.link : ''} href={ path === undefined ? '#' : path}>
                <div className={classes.cover}>
                    <img className={classes.img} src={image} alt={title} />
                    {soon !== undefined && <div className={classes.soon}><p>soon</p></div>}
                </div>
                <div className={classes.content}>
                    <h3 className={classes.title}>{title}</h3>
                    {company !== undefined && <h4 className={classes.company}>{company}</h4>}
                    <p className={classes.text}>{children}</p>
                </div>
            </a>
        </article>
    )
}