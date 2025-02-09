import "./Menu.css"
import ArrowDown from '../../../assets/svg/arrow-down.svg'
import MenuButton from '../../UI/button/menuButton/MenuButton'

import { useState } from 'react'

interface Props {
    active: string;
    onChange: any;
}

export default function Menu({ active, onChange }: Props) {
    const [menuActive, isMenuActive] = useState<boolean>(false);

    function SwitchScroll(isIncluded : boolean)
    {
        isMenuActive(isIncluded)

        var element = document.getElementById("body");
        element?.classList.toggle("lock");
    }

    function OpenPage(name : string) {
        onChange(name)
        if (menuActive) {
            SwitchScroll(false)
        }
    }

    return (
        <nav>
            <ul className={menuActive ? "menu active" : "menu"}>

                <MenuButton active={active === "About"} onClick={() => OpenPage("About")}>
                    <span>About</span> {menuActive === true && <img src={ArrowDown} alt="arrow-down" />}
                </MenuButton>

                <MenuButton active={active === "Selected Works"} onClick={() => OpenPage("Selected Works")}>
                    <span>Selected Works</span> {menuActive === true && <img src={ArrowDown} alt="arrow-down" />}
                </MenuButton>

                <MenuButton active={active === "Side Projects"} onClick={() => OpenPage("Side Projects")}>
                    <span>Side Projects</span> {menuActive === true && <img src={ArrowDown} alt="arrow-down" />}
                </MenuButton>

                <span className='hidden'>
                    <hr className='separator' />
                </span>

                <MenuButton active={active === "LinkedIn"}>
                    <span>LinkedIn</span> {menuActive === true && <img src={ArrowDown} alt="arrow-down" />}
                </MenuButton>

                <MenuButton path='#about' active={active === "CV"}>
                    <span>CV</span> <img src={ArrowDown} alt="arrow-down" />
                </MenuButton>
            </ul>

            <ul className='burger-menu'>
                <span className={menuActive ? "hidden" : ""}>
                    <MenuButton isChanging={false} path='#about' active={active === "CV"}>CV <img src={ArrowDown} alt="arrow-down" /></MenuButton>
                </span>

                <hr className='separator' />

                <div className={menuActive ? "burger active" : "burger"} onClick={() => SwitchScroll(!menuActive)}>
                    <span></span>
                </div>
            </ul>
        </nav>
    )
}