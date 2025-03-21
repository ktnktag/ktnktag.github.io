import './Header.css'

import Menu from './Menu.tsx'
import Breadcrumbs from './Breadcrumbs.tsx'
import BurgerMenu from './BurgerMenu.tsx'

import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation();
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
    const [secondTab, setSecondTab] = useState<string>('');
    const [anchor, setAnchor] = useState<Element[]>(GetListTabs());
    
    const pathRef = useRef<string>('');
    const [path, setPath] = useState<string>(location.pathname);
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setSecondTab(entry.target.id);
            }
        })
    })


    // we get a list of sections for the second menu, their id and position
    function GetListTabs() {
        const tabs = document.querySelectorAll('section');
        const str: Element[] = [];
        tabs.forEach(element => { 
            str.push(element); 
        });
        return str;
    }

    // get page name using its path
    const getListPath = () => {
        let pathList = location.pathname?.split('/');
        pathList.splice(0, 1);
        return pathList
    }

    // when going to another page we clear all states
    useEffect(() => {
        window.scrollTo(0, 0);
        pathRef.current = '';

        setPath(location.pathname);
        setAnchor(GetListTabs());
        setSecondTab('Overview');
    }, [location.pathname])

    // track whether the menu is open or closed
    useEffect(() => {
        var element = document.getElementById("body");

        if (isMenuActive) {
            element?.classList.add("lock");
        }
        else {
            element?.classList.remove("lock");
        }
    }, [isMenuActive])

    useEffect(() => {
        anchor.map( item => sectionObserver.observe(item));
    }, [anchor])

    return (
        <header id="top" className='header'>
            <Menu SwitchScroll={setIsMenuActive} isActive={isMenuActive} />
            {(path?.indexOf('/', 5) !== -1 && !isMenuActive) && <Breadcrumbs
                list={getListPath()}
                path={pathRef.current}
                anchor={anchor}
                tab={secondTab}
                setTab={setSecondTab} />}
            {isMenuActive && <BurgerMenu setActive={setIsMenuActive} />}
        </header>
    )
}