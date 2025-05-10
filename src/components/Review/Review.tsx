import classes from './Review.module.css'

type Props = {
    children: React.ReactNode;
    img?: string;
    name: string;
    profession: string;
}

export default function Review({children, img, name, profession} : Props) {
    return <article className={classes.container}>
        <div className={classes.header}>
            <img src={img} alt={name} className={classes.img}/>

            <span>
                <h3>{name}</h3>
                <p className={classes.prof}>{profession}</p>
            </span>
        </div>

        <p className={classes.text}>{children}</p>
    </article>
}