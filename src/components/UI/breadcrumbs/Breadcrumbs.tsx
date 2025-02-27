import classes from './Breadcrumbs.module.css'

import { useLocation, Link } from "react-router-dom"
import { useRef } from 'react';

export default function Breadcrumbs() {
    const pathRef = useRef<string>('');
    const location = useLocation();

    const getListPath = () => {
        let pathList = location.pathname?.split('/');
        pathList.splice(0, 1);
        return pathList
    }

    const list = getListPath()
    console.log(list);

    return <nav className={classes.box}>
        <ul className={classes.container}>
            {
                list?.map((item: string) =>
                    <li key={item} className={item !== list[list.length - 1] ? classes.link : classes.text}>
                        {item !== list[list.length - 1] && <Link to={pathRef.current += '/' + item}>{item.replace(/_/gi, ' ')}</Link>}
                        {item === list[list.length - 1] && <span>{item.replace(/_/gi, ' ')}</span>}
                    </li>
                )
            }
        </ul>
    </nav>
}