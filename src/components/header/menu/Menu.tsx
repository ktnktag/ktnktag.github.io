import "./Menu.css"
import ArrowDown from '../../../assets/svg/arrow-down.svg'
import ArrowRight from '../../../assets/svg/arrow-right.svg'
import ArrowUpRight from '../../../assets/svg/arrow-up-right.svg'
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
                    <span>About</span> <img className="show-arow" src={ArrowRight} alt="arrow-right" />
                </MenuButton>

                <MenuButton active={active === "Selected Works"} onClick={() => OpenPage("Selected Works")}>
                    <span>Selected Works</span> <img className="show-arow" src={ArrowRight} alt="arrow-right" />
                </MenuButton>

                <MenuButton active={active === "Side Projects"} onClick={() => OpenPage("Side Projects")}>
                    <span>Side Projects</span> <img className="show-arow" src={ArrowRight} alt="arrow-right" />
                </MenuButton>

                <span className='hidden'>
                    <hr className='separator' />
                </span>

                <MenuButton path="https://www.linkedin.com/in/kto-nekto/" active={active === "LinkedIn"}>
                    <span>LinkedIn</span> <img className="show-arow" src={ArrowUpRight} alt="arrow-up-right" />
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