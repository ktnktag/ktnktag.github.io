import classes from './Breadcrumbs.module.css'

import { Link } from "react-router-dom"
import { useState } from 'react';
import ChevronDown from '../../assets/svg/ChevronDown.svg'

interface IProps {
    list: string[];
    path: string;
    title: Element[];
    tab: string;
    setTab: Function;
}

export default function Breadcrumbs({ list, path, title, tab, setTab }: IProps) {
    const [isActiveDropMenu, setIsActiveDropMenu] = useState<boolean>(false);

    return (
        <nav className={classes.box}>
            <ul className={classes.container}>
                <div className={classes.breadcrumbs}>
                    {
                        list?.map((item: string) =>
                            <li key={item} className={item !== list[list.length - 1] ? classes.link : classes.text}>

                                {item !== list[list.length - 1] && <Link to={path += '/' + item}>{item.replace(/_/gi, ' ')}</Link>}
                                {item === list[list.length - 1] && <span>{item.replace(/_/gi, ' ')}</span>}
                            </li>
                        )
                    }
                </div>

                <div className={classes.tabs}>
                    <h1>{list[list?.length - 1]?.replace(/_/gi, ' ')}</h1>

                    <hr className={classes.separator} />

                    {
                        title.map((item) => {
                            return <div key={item.id} className={classes.radio} onClick={() => {
                                window.scrollBy(0, item.getBoundingClientRect().top - 120);
                                setTab(item.id);
                            }}>
                                <p className={item.id === tab ? `${classes.radioText} ${classes.checked}` : classes.radioText}>{item.id}</p>
                            </div>
                        })
                    }
                </div>

                <div className={classes.dropList} onClick={() => setIsActiveDropMenu(!isActiveDropMenu)}>
                    <div>
                        <h1>{list[list?.length - 1]?.replace(/_/gi, ' ')}</h1>
                        <p className={classes.radioText}>{tab}</p>
                    </div>

                    <div>
                        <img src={ChevronDown} alt="ChevronDown" />
                    </div>
                </div>

                <ul className={isActiveDropMenu ? `${classes.dropListMenu} ${classes.active}` : classes.dropListMenu}>
                    {
                        title.map((item) => {
                            return <li className={classes.radioText} onClick={() => {
                                window.scrollBy(0, item.getBoundingClientRect().top - 120);
                                setIsActiveDropMenu(false);
                                setTab(item.id);
                            }}>{item.id}</li>
                        })
                    }
                </ul>

            </ul>
        </nav>
    )
}