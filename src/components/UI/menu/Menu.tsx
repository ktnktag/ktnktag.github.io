import "./Menu.css"

import { default as Arrow } from '../../../assets/svg/Arrow.svg?react'
import { NavLink } from "react-router-dom"
import { useState } from 'react'

export default function Menu() {
    const [menuActive, setMenuActive] = useState<boolean>(false);

    function SwitchScroll(isIncluded: boolean) {
        if (!isIncluded && !menuActive) {
            return
        }

        setMenuActive(isIncluded)
        var element = document.getElementById("body");
        element?.classList.toggle("lock");
    }

    return (
        <nav>
            <ul className={menuActive ? "menu burger-active" : "menu"}>
                <NavLink onClick={() => SwitchScroll(false)} to="/" className="changingButton">
                    <p className="text">
                        <span>About</span>  <Arrow className="arrow-right show-arrow" />
                    </p>
                </NavLink>

                <NavLink onClick={() => SwitchScroll(false)} to="/Selected_Works" className="changingButton">
                    <p className="text">
                        <span>Selected Works</span> <Arrow className="arrow-right show-arrow" />
                    </p>
                </NavLink>

                <NavLink onClick={() => SwitchScroll(false)} to="/Side_Projects" className="changingButton">
                    <p className="text">
                        <span>Side Projects</span> <Arrow className="arrow-right show-arrow" />
                    </p>
                </NavLink>

                <hr className='separator hidden' />

                <a href="https://www.linkedin.com/in/kto-nekto/" className="changingButton">
                    <p className="text">
                        <span>LinkedIn</span> <Arrow className="small-arrow-right-up arrow-none" /> <Arrow className="arrow-right-up show-arrow" />
                    </p>
                </a>

                <a href="#" className="changingButton">
                    <p className="text">
                        <span>CV</span>  <Arrow className="arrow-down" />
                    </p>
                </a>
            </ul>

            <div className='burger-menu'>
                <span className={menuActive ? "hidden" : ""}>
                    <a href="#" className="button">
                        <p className="text">
                            <span>CV</span>  <Arrow className="arrow-down-litle" />
                        </p>
                    </a>
                </span>

                <hr className='separator' />

                <div className={menuActive ? "burger burger-active" : "burger"} onClick={() => SwitchScroll(!menuActive)}>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}