import classes from './Token.module.css'

import { Children } from 'react';

interface Props {
    value: string;
    global: string;
    alias: string;
    specific: string;
}

export default function Token({value, global, alias, specific} : Props) {
    return(
        <ul className={classes.list}>
            <li className={classes.item}> <span style={{background: `${value}`}} className={classes.color}></span> <p>{value}</p></li>
            <li className={classes.item}> <span style={{background: `${value}`}} className={classes.color}></span> <p>{global}</p></li>
            <li className={classes.item}> <span style={{background: `${value}`}} className={classes.color}></span> <p>{alias}</p></li>
            <li className={classes.item}> <span style={{background: `${value}`}} className={classes.color}></span> <p>{specific}</p></li>

            <li><p className={classes.name}>Value</p></li>
            <li><p className={classes.name}>Global Token</p></li>
            <li><p className={classes.name}>Alias token</p></li>
            <li><p className={classes.name}>Component specific token</p></li>
        </ul>
    )
}