import Logo from '../../assets/svg/Logo.svg'

import { default as Burger } from '../../assets/svg/Burger.svg?react'
import { default as X } from '../../assets/svg/XBurger.svg?react'
import { default as Arrow } from '../../assets/svg/Arrow.svg?react'
import { NavLink} from "react-router-dom"

export default function Menu({ SwitchScroll, isActive }: {SwitchScroll: Function, isActive: boolean}) {
    return (
        <nav className='menu'>
            <a href="#">
                <img src={Logo} alt="logo" className='logo' />
            </a>

            <ul className="pages">
                <li>
                    <NavLink onClick={() => SwitchScroll(false)} to="/" className="button">
                        <p className="text">
                            <span>About</span>
                        </p>
                    </NavLink>
                </li>

                <li>
                    <NavLink onClick={() => SwitchScroll(false)} to="/Selected_Works" className="button">
                        <p className="text">
                            <span>Selected Works</span>
                        </p>
                    </NavLink>
                </li>

                <li>
                    <NavLink onClick={() => SwitchScroll(false)} to="/Side_Projects" className="button">
                        <p className="text">
                            <span>Side Projects</span>
                        </p>
                    </NavLink>
                </li>
            </ul>

            <ul className='anchor'>
                <hr className='separator' />
                <li>
                    <a href="https://www.linkedin.com/in/kto-nekto/" className="button">
                        <p className="text">
                            <span>LinkedIn</span> <Arrow className="arrow-right-up" />
                        </p>
                    </a>
                </li>
                <li>
                    <a href="#" className="button">
                        <p className="text">
                            <span>CV</span>  <Arrow className="arrow-down" />
                        </p>
                    </a>
                </li>
            </ul>

            <div className='burger'>
                <hr className='separator' />
                <p onClick={() => SwitchScroll(!isActive)}>
                    {isActive ? <X /> : <Burger />}
                </p>
            </div>
        </nav>
    )
}