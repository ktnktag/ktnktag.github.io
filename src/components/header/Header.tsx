import './Header.css'
import Logo from '../../assets/Logo.svg'
import MenuButton from '../UI/button/menuButton/MenuButton'

interface Props
{
    active: string;
    onChange: any;
}

function Header({ active, onChange} : Props) {
    return (
        <header className='header'>
            <img src={Logo} alt="logo" className='logo' onClick={() => onChange("About")}/>

            <nav>
                <ul className='menu'>
                    <MenuButton active={active === "About"} onClick={() => onChange("About")}>About</MenuButton>
                    <MenuButton active={active === "Selected Works"} onClick={() => onChange("Selected Works")}>Selected Works</MenuButton>
                    <MenuButton active={active === "Side Projects"} onClick={() => onChange("Side Projects")}>Side Projects</MenuButton>

                    <hr className='separator' />

                    <MenuButton active={active === "LinkedIn"}>LinkedIn</MenuButton>
                    <MenuButton active={active === "CV"}>CV</MenuButton>
                </ul>
            </nav>
        </header>
    )
}

export default Header