import './style/Header.css'

import Menu from './Menu'
import Breadcrumbs from './Breadcrumbs'
import BurgerMenu from './BurgerMenu'

import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'

interface ITitle {
    name: string;
    y: number;
}

export default function Header() {
    const location = useLocation();
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
    const [title, setTitle] = useState<ITitle[]>(GetListTabs());

    const pathRef = useRef<string>('');
    const [path, setPath] = useState<string>(location.pathname);


    function SwitchScroll() {
        var element = document.getElementById("body");
        element?.classList.toggle("lock");
    }

    function GetListTabs() {
        const tabs = document.querySelectorAll('h2');
        const str: ITitle[] = [];
        tabs.forEach(element => {
            const test: ITitle = {name: element.textContent as string, y: element.offsetTop};
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
        setTitle(GetListTabs())
    }, [location.pathname])

    useEffect(() => {
        if (isMenuActive) {
            SwitchScroll()
        }
        else {
            SwitchScroll()
        }
    }, [isMenuActive])

    return (
        <header id="top" className='header'>
           <Menu SwitchScroll={setIsMenuActive} isActive={isMenuActive}/>
           {path?.indexOf('/', 5) !== -1  && <Breadcrumbs list={getListPath()} path={pathRef.current} title={title}/>}
           {isMenuActive && <BurgerMenu setActive={setIsMenuActive}/>}
        </header>
    )
}