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

    const pathRef = useRef<string>('');
    const [path, setPath] = useState<string>(location.pathname);

    function GetListTabs() {
        const tabs = document.querySelectorAll('h2');
        const str: ITitle[] = [];
        tabs.forEach(element => {
            const test: ITitle = { name: element.textContent as string, element: element};
            console.log(element.getBoundingClientRect().y)
            str.push(test);
        });
        return str;
    }

    const getListPath = () => {
        let pathList = location.pathname?.split('/');
        pathList.splice(0, 1);
        return pathList
    }

    useEffect(() => {
        setPath(location.pathname);
        pathRef.current = '';
        setTitle(GetListTabs());
        window.scrollTo(0, 0);
    }, [location.pathname])

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
            {(path?.indexOf('/', 5) !== -1 && !isMenuActive) && <Breadcrumbs list={getListPath()} path={pathRef.current} title={title} />}
            {isMenuActive && <BurgerMenu setActive={setIsMenuActive} />}
        </header>
    )
}