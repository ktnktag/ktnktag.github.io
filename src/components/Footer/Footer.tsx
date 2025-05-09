import classes from './Footer.module.css'

import Logo from '../../assets/svg/Logo.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
    return <footer className={classes.footer}>
        <section className={classes.box}>
            <div className={classes.menu}>
                <ul className={classes.link}>
                    <li><Link to='/'><img src={Logo} alt="Logo" className={classes.logo}/></Link></li>
                    <li><Link to='/'>Projects</Link></li>
                    <li><Link to='/'>Side activity</Link></li>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/'>Resume</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                </ul>
                <ul className={classes.messeger}>
                    <li><Link to='/'></Link>web1</li>
                    <li><Link to='/'></Link>web2</li>
                    <li><Link to='/'></Link>web3</li>
                    <li><Link to='/'></Link>web4</li>
                    <li><Link to='/'></Link>web5</li>
                </ul>
            </div>

            <hr className={classes.separator}/>

            <p className={classes.text}>© 2025 Valeria Yakovchik. All right reserved.</p>
        </section>
    </footer>
}