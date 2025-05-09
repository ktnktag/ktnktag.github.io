import classes from './Header.module.css'

import { NavLink } from 'react-router-dom'

import Logo from '../../assets/svg/Logo.svg'

export default function Header() {
    return <header className={classes.header}>
        <div className={classes.container}>
            <div className={classes.logo}>
                <NavLink to='/'><img src={Logo} alt="Logo" /></NavLink>
            </div>

            <ul className={classes.menu}>
                <li><NavLink to='/'>Projects</NavLink></li>
                <li><NavLink to='/'>Side activity</NavLink></li>
                <li><NavLink to='/about' className={({ isActive }) => isActive ? classes.active : ""}>About</NavLink></li>
                <li><NavLink to='/'>Resume</NavLink></li>
            </ul>

            <div className={classes.logo}></div>
        </div>
    </header>
}