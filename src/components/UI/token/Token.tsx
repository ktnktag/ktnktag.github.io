import classes from './Token.module.css'
interface Props {
    value: string;
    global: string;
    alias: string;
    specific: string;
}

export default function Token({ value, global, alias, specific }: Props) {
    return (
        <ul className={classes.list}>
            <li className={classes.item}>
                <span style={{ background: `${value}` }} className={classes.color}></span>
                <p className={classes.text}>{value}</p>
            </li>
            <li className={classes.item}>
                <span style={{ background: `${value}` }} className={classes.color}></span>
                <p  className={classes.text}>{global}</p>
            </li>
            <li className={classes.item}>
                <span style={{ background: `${value}` }} className={classes.color}></span>
                <p  className={classes.text}>{alias}</p>
            </li>
            <li className={classes.item}>
                <span style={{ background: `${value}` }} className={classes.color}></span>
                <p  className={classes.last}>{specific}</p>
            </li>

            <li className={classes.name}>Value</li>
            <li className={classes.name}>Global Token</li>
            <li className={classes.name}>Alias token</li>
            <li className={classes.name}>Component specific token</li>
        </ul>
    )
}