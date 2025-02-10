import classes from './Project.module.css'

interface Props {
    children: React.ReactNode;
    image: string;
    title: string;
    company: string;
}

export default function Project({children, image, title, company} : Props) {
    return(
        <article className={classes.container}>
            <div className={classes.cover}>
                <img className={classes.img} src={image} alt={title} />
            </div>
            <div className={classes.content}>
                <h2 className={classes.title}>{title}</h2>
                <h3 className={classes.company}>{company}</h3>
                <p className={classes.text}>{children}</p>
            </div>
        </article>
    )
}