import './Header.css'
import Logo from '../../assets/svg/Logo.svg'
import Menu from '../UI/menu/Menu.tsx'

interface Props {
    active: string;
    onChange: any;
}

export default function Header({ active, onChange }: Props) {
    return (
        <header id="top" className='header'>
            <div className='header-box'>
                <img src={Logo} alt="logo" className='logo' onClick={() => onChange("About")} />

                <Menu active={active} onChange={onChange}></Menu>
            </div>
        </header>
    )
}