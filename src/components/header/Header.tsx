import classes from './Header.module.css'

import { NavLink } from 'react-router-dom'

import Logo from '../../assets/svg/logos/Logo.svg'

export default function Header() {
    return <header className='header-menu  header-fix'>
        <nav className={`${classes.container} alignment`}>
            <div className={classes.logo}>
                <NavLink to='/'><img src={Logo} alt="Logo" /></NavLink>
            </div>

            <ul className={classes.menu}>
                <li><NavLink to='/projects' className={({ isActive }) => isActive ? classes.active : ""}>Projects</NavLink></li>
                {/* <li><NavLink to='/side-activity' className={({ isActive }) => isActive ? classes.active : ""}>Side activity</NavLink></li> */}
                <li><NavLink to='/about' className={({ isActive }) => isActive ? classes.active : ""}>About</NavLink></li>
                <li><NavLink to='/resume' className={({ isActive }) => isActive ? classes.active : ""}>Resume</NavLink></li>
            </ul>

            <div className={classes.logo}></div>
        </nav>
    </header>
}