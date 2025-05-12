import classes from './Footer.module.css'

import Logo from '../../assets/svg/Logo.svg'
import { Link } from 'react-router-dom'
import LinkButton from '../UI/button/LinkButton/LinkButton'

import In from '../../assets/svg/In.svg'
import Medium from '../../assets/svg/Medium.svg'
import Vec from '../../assets/svg/Vec.svg'
import Be from '../../assets/svg/Be.svg'
import Figma from '../../assets/svg/Figma.svg'

export default function Footer() {
    return <footer className={classes.footer}>
        <div className={classes.box}>
            <div className={classes.menu}>
                <ul className={classes.link}>
                    <li><Link to='/'><img src={Logo} alt="Logo" className={classes.logo}/></Link></li>
                    <li><Link to='/'>Projects</Link></li>
                    <li><Link to='/'>Side activity</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/resume'>Resume</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                </ul>
                <ul className={classes.messeger}>
                    <li><LinkButton small={true} path='https://www.linkedin.com/in/kto-nekto/'><img src={In} alt='In' /></LinkButton></li>
                    <li><LinkButton small={true} path='https://medium.com/@kto.nekto'><img src={Medium} alt='Medium' /></LinkButton></li>
                    <li><LinkButton small={true} path='https://dribbble.com/kto_nekto'><img src={Vec} alt="Vec" /></LinkButton></li>
                    <li><LinkButton small={true} path='https://www.behance.net/kto_nekto'><img src={Be} alt='Be' /></LinkButton></li>
                    <li><LinkButton small={true} path='https://www.figma.com/@kto_nekto'><img src={Figma} alt='Figma' /></LinkButton></li>
                </ul>
            </div>

            <hr className={classes.separator}/>

            <p className={classes.text}>© 2025 Valeria Yakovchik. All right reserved.</p>
        </div>
    </footer>
}