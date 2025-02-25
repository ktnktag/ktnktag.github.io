import './Header.css'
import Logo from '../../assets/svg/Logo.svg'
import Menu from '../UI/menu/Menu.tsx'

export default function Header() {
    return (
        <header id="top" className='header'>
            <div className='header-box'>
                <a href="#">
                    <img src={Logo} alt="logo" className='logo'/>
                </a>

                <Menu></Menu>
            </div>
        </header>
    )
}