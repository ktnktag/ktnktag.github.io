import classes from './Footer.module.css'

import Logo from '../../assets/svg/logos/Logo.svg'
import { Link } from 'react-router-dom'
import LinkButton from '../UI/button/LinkButton/LinkButton'

import { default as In } from '../../assets/svg/socials/In.svg?react'
import { default as Medium } from '../../assets/svg/socials/Medium.svg?react'
import { default as Vec } from '../../assets/svg/socials/Vec.svg?react'
import { default as Be } from '../../assets/svg/socials/Be.svg?react'
import { default as Figma } from '../../assets/svg/socials/Figma.svg?react'

export default function Footer() {
    return <footer className={classes.footer}>
        <div className='alignment column-flex'>
            <nav className={classes.menu}>
                <div className={classes.page}>
                    <Link to='/'><img src={Logo} alt="Logo" className={classes.logo} /></Link>

                    <ul className={classes.link}>
                        <li><Link to='/projects'>Projects</Link></li>
                        {/* <li><Link to='/side-activity'>Side activity</Link></li> */}
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/resume'>Resume</Link></li>
                    </ul>
                </div>

                <ul className={classes.messeger}>
                    <li><LinkButton small={true} path='https://www.linkedin.com/in/kto-nekto/'><In /></LinkButton></li>
                    <li><LinkButton small={true} path='https://medium.com/@kto.nekto'><Medium /></LinkButton></li>
                    <li><LinkButton small={true} path='https://dribbble.com/kto_nekto'><Vec /></LinkButton></li>
                    <li><LinkButton small={true} path='https://www.behance.net/kto_nekto'><Be /></LinkButton></li>
                    <li><LinkButton small={true} path='https://www.figma.com/@kto_nekto'><Figma /></LinkButton></li>
                </ul>
            </nav>

            <hr className="separator" />

            <p className={classes.text}>© 2025 Valeria Yakovchik. All right reserved.</p>
        </div>
    </footer>
}