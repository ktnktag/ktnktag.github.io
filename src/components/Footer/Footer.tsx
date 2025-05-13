import classes from './Footer.module.css'

import Logo from '../../assets/svg/Logo.svg'
import { Link } from 'react-router-dom'
import LinkButton from '../UI/button/LinkButton/LinkButton'

import { default as In} from '../../assets/svg/In.svg?react'
import { default as Medium} from '../../assets/svg/Medium.svg?react'
import { default as Vec} from '../../assets/svg/Vec.svg?react'
import { default as Be } from '../../assets/svg/Be.svg?react'
import { default as Figma } from '../../assets/svg/Figma.svg?react'

export default function Footer() {
    return <footer className={classes.footer}>
        <div className={classes.box}>
            <div className={classes.menu}>
                <ul className={classes.link}>
                    <li><Link to='/'><img src={Logo} alt="Logo" className={classes.logo}/></Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/'>Side activity</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/resume'>Resume</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                </ul>
                <ul className={classes.messeger}>
                    <li><LinkButton small={true} path='https://www.linkedin.com/in/kto-nekto/'><In /></LinkButton></li>
                    <li><LinkButton small={true} path='https://medium.com/@kto.nekto'><Medium /></LinkButton></li>
                    <li><LinkButton small={true} path='https://dribbble.com/kto_nekto'><Vec /></LinkButton></li>
                    <li><LinkButton small={true} path='https://www.behance.net/kto_nekto'><Be /></LinkButton></li>
                    <li><LinkButton small={true} path='https://www.figma.com/@kto_nekto'><Figma /></LinkButton></li>
                </ul>
            </div>

            <hr className={classes.separator}/>

            <p className={classes.text}>© 2025 Valeria Yakovchik. All right reserved.</p>
        </div>
    </footer>
}