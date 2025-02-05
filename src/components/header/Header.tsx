import './Header.css'
import Logo from '../../assets/svg/Logo.svg'
import ArrowDown from '../../assets/svg/arrow-down.svg'
import MenuButton from '../UI/button/menuButton/MenuButton'

interface Props
{
    active: string;
    onChange: any;
}

function Header({ active, onChange} : Props) {
    return (
        <header id="top" className='header'>
            <div className='header-box'>
                <img src={Logo} alt="logo" className='logo' onClick={() => onChange("About")}/>

                <nav>
                    <ul className='menu'>
                        <MenuButton active={active === "About"} onClick={() => onChange("About")}>About</MenuButton>
                        <MenuButton active={active === "Selected Works"} onClick={() => onChange("Selected Works")}>Selected Works</MenuButton>
                        <MenuButton active={active === "Side Projects"} onClick={() => onChange("Side Projects")}>Side Projects</MenuButton>

                        <hr className='separator' />

                        <MenuButton active={active === "LinkedIn"}>LinkedIn</MenuButton>
                        <MenuButton path='#about' active={active === "CV"}>CV <img src={ArrowDown} alt="arrow-down" /></MenuButton>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header