import classes from './ArrowUp.module.css'

export default function ArrowUp() {
    return (
        <div className={classes.box}>
            <a className={classes.arrow} href="#top">
                <p className={classes.svg}></p>
            </a>
        </div>
    )
}