import './Header.css'

import Logo from '../../assets/Logo.svg'

import MenuButton from '../UI/button/menuButton/MenuButton'

function Header() {
    return (
        <header className='header'>
            <img src={Logo} alt="logo" className='logo'/>

            <nav>
                <ul className='menu'>
                    <MenuButton path='#'>About</MenuButton>
                    <MenuButton path='#'>Selected Works</MenuButton>
                    <MenuButton path='#'>Side Projects</MenuButton>
                    
                    <hr className='separator'/>

                    <MenuButton path='#'>LinkedIn</MenuButton>
                    <MenuButton path='#'>CV</MenuButton>
                </ul>
            </nav>
        </header>
    )
}

export default Header