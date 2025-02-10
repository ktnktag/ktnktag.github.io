import classes from './ArrowUp.module.css'
import { default as Arrow } from '../../../../assets/svg/Arrow.svg?react'

export default function ArrowUp() {
    return (
        <div className={classes.box}>
            <a className={classes.arrow} href="#top">
                <Arrow  className={classes.svg}></Arrow>
            </a>
        </div>
    )
}