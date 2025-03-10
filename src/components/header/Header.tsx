import './Header.css'
import Menu from './Menu'
import Breadcrumbs from './Breadcrumbs'


import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation();
    const pathRef = useRef<string>('');
    const [path, setPath] = useState<string>(location.pathname);

    const getListPath = () => {
        let pathList = location.pathname?.split('/');
        pathList.splice(0, 1);
        return pathList
    }

    useEffect(() => {
        setPath(location.pathname);
        pathRef.current = '';
    }, [location.pathname])

    return (
        <header id="top" className='header'>
           <Menu />
           {path?.indexOf('/', 5) !== -1  && <Breadcrumbs list={getListPath()} path={pathRef.current}/>}
        </header>
    )
}