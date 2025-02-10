import "./Menu.css"
import MenuButton from '../../UI/button/menuButton/MenuButton'

import { default as Arrow } from '../../../assets/svg/Arrow.svg?react'
import { useState } from 'react'

interface Props {
    active: string;
    onChange: any;
}

export default function Menu({ active, onChange }: Props) {
    const [menuActive, isMenuActive] = useState<boolean>(false);

    function SwitchScroll(isIncluded: boolean) {
        isMenuActive(isIncluded)

        var element = document.getElementById("body");
        element?.classList.toggle("lock");
    }

    function OpenPage(name: string) {
        onChange(name)
        if (menuActive) {
            SwitchScroll(false)
        }
    }

    return (
        <nav>
            <ul className={menuActive ? "menu active" : "menu"}>

                <MenuButton active={active === "About"} onClick={() => OpenPage("About")}>
                    <span>About</span>  <Arrow className="arrow-right show-arrow"></Arrow>
                </MenuButton>

                <MenuButton active={active === "Selected Works"} onClick={() => OpenPage("Selected Works")}>
                    <span>Selected Works</span> <Arrow className="arrow-right show-arrow"></Arrow>
                </MenuButton>

                <MenuButton active={active === "Side Projects"} onClick={() => OpenPage("Side Projects")}>
                    <span>Side Projects</span>  <Arrow className="arrow-right show-arrow"></Arrow>
                </MenuButton>

                <span className='hidden'>
                    <hr className='separator' />
                </span>

                <MenuButton path="https://www.linkedin.com/in/kto-nekto/" active={active === "LinkedIn"}>
                    <span>LinkedIn</span>  <Arrow className="arrow-right-up show-arrow"></Arrow>
                </MenuButton>

                <MenuButton path='#about' active={active === "CV"}>
                    <span>CV</span>  <Arrow className="arrow-down"></Arrow>
                </MenuButton>
            </ul>

            <ul className='burger-menu'>
                <span className={menuActive ? "hidden" : ""}>
                    <MenuButton isChanging={false} path='#about' active={active === "CV"}>
                        CV  <Arrow className="arrow-down-litle"></Arrow>
                    </MenuButton>
                </span>

                <hr className='separator' />

                <div className={menuActive ? "burger active" : "burger"} onClick={() => SwitchScroll(!menuActive)}>
                    <span></span>
                </div>
            </ul>
        </nav>
    )
}