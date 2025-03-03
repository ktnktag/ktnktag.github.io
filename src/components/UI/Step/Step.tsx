import classes from './Step.module.css'

export default function Step({ number, name }: { number: string, name: string }) {
    return (
        <div>
            <p className={classes.step}>STEP</p>
            <div className={classes.box}>
                <p className={classes.number}>{number}</p>
                <p className={classes.name}>{name}</p>
            </div>
        </div>
    )
}