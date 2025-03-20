import './Header.css'

import Menu from './Menu.tsx'
import Breadcrumbs from './Breadcrumbs.tsx'
import BurgerMenu from './BurgerMenu.tsx'

import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'

interface ITitle {
    name: string;
    element: Element;
}

export default function Header() {
    const location = useLocation();
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
    const [title, setTitle] = useState<ITitle[]>(GetListTabs());
    const [secondTab, setSecondTab] = useState<string>('');

    const pathRef = useRef<string>('');
    const [path, setPath] = useState<string>(location.pathname);

    // we get a list of sections for the second menu, their id and position
    function GetListTabs() {
        const tabs = document.querySelectorAll('section');
        const str: ITitle[] = [];
        tabs.forEach(element => {
            const test: ITitle = { name: element.id as string, element: element};
            str.push(test);
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
        setTitle(GetListTabs());
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

    return (
        <header id="top" className='header'>
            <Menu SwitchScroll={setIsMenuActive} isActive={isMenuActive} />
            {(path?.indexOf('/', 5) !== -1 && !isMenuActive) && <Breadcrumbs 
                                                                    list={getListPath()} 
                                                                    path={pathRef.current} 
                                                                    title={title} 
                                                                    tab={secondTab}
                                                                    setTab={setSecondTab}/>}
            {isMenuActive && <BurgerMenu setActive={setIsMenuActive} />}
        </header>
    )
}