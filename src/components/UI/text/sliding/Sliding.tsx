import classes from "./Sliding.module.css";

type Props = {
    name: string,
    children: React.ReactNode,
}

export default function Sliding({name, children} : Props) {
    return <div className={classes.sliding}>
        <div>
            <p className={`${classes.title} eyebrow`}>{name}</p>
        </div>
        {children}
    </div>
}