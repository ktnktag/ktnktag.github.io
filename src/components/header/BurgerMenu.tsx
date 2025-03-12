import classes from './Style/BurgerMenu.module.css'

import { default as Arrow } from '../../assets/svg/Arrow.svg?react'
import { NavLink } from "react-router-dom"

export default function BurgerMenu({ setActive }: { setActive: Function }) {
    return (
        <div className={classes.menu} onClick={() => setActive(false)}>
            <ul className={classes.container}>
                <li className={classes.button}>
                    <NavLink onClick={() => setActive(false)} className={({ isActive }) => isActive ? classes.active : ''} to="/">
                        <p className={classes.text}>
                            <span className={classes.name}>About</span> <span className={classes.current}>Current</span> <Arrow className={classes.arrowRight} />
                        </p>
                    </NavLink>
                </li>

                <li className={classes.button}>
                    <NavLink onClick={() => setActive(false)} className={({ isActive }) => isActive ? classes.active : ''} to="/Selected_Works">
                        <p className={classes.text}>
                            <span className={classes.name}>Selected Works</span> <span className={classes.current}>Current</span> <Arrow className={classes.arrowRight} />
                        </p>
                    </NavLink>
                </li>

                <li className={classes.button}>
                    <NavLink onClick={() => setActive(false)} className={({ isActive }) => isActive ? classes.active : ''} to="/Side_Projects">
                        <p className={classes.text}>
                            <span className={classes.name}>Side Projects</span> <span className={classes.current}>Current</span> <Arrow className={classes.arrowRight} />
                        </p>
                    </NavLink>
                </li>

                <li className={classes.button}>
                    <a href="https://www.linkedin.com/in/kto-nekto/">
                        <p className={classes.text}>
                            <span className={classes.name}>LinkedIn</span> <Arrow className={classes.arrowRightUp} />
                        </p>
                    </a>
                </li>

                <li className={classes.button}>
                    <a href="#">
                        <p className={classes.text}>
                            <span className={classes.name}>CV</span>  <Arrow className={classes.arrowDown} />
                        </p>
                    </a>
                </li>
            </ul>

            <footer className={classes.footer}>
                <p>© 2025 Valeria Yakovchik</p>
            </footer>
        </div>
    )
}