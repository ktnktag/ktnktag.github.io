import './Header.css'
import Menu from './Menu'
import Breadcrumbs from './Breadcrumbs'


import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'

interface ITitle {
    name: string;
    y: number;
}

export default function Header() {
    const location = useLocation();
    const [title, setTitle] = useState<ITitle[]>(getListTabs());
    const pathRef = useRef<string>('');
    const [path, setPath] = useState<string>(location.pathname);

    const getListPath = () => {
        let pathList = location.pathname?.split('/');
        pathList.splice(0, 1);
        return pathList
    }

    function getListTabs() {
        const tabs = document.querySelectorAll('h2');
        const str: ITitle[] = [];
        tabs.forEach(element => {
            const test: ITitle = {name: element.textContent as string, y: element.offsetTop};
            str.push(test);
        });
        return str;
    }

    useEffect(() => {
        setPath(location.pathname);
        pathRef.current = '';
        setTitle(getListTabs())
    }, [location.pathname])



    return (
        <header id="top" className='header'>
           <Menu />
           {path?.indexOf('/', 5) !== -1  && <Breadcrumbs list={getListPath()} path={pathRef.current} title={title}/>}
        </header>
    )
}