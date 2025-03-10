import classes from './Breadcrumbs.module.css'

import { Link } from "react-router-dom"

interface Test {
    name: string;
    y: number;
}

export default function Breadcrumbs({ list, path }: { list: string[], path: string }) {
    function getListTabs() {
        const tabs = document.querySelectorAll('h2');
        const str: Test[] = [];
        tabs.forEach(element => {
            const test: Test = {name: element.textContent as string, y: element.offsetTop};
            str.push(test);
        });
        return str;
    }

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
                        getListTabs().map((item) => {
                            return <div key={item.name} className={classes.radio} onClick={() => {window.scrollTo(0, item.y)}}>
                                <input id={item.name} type="radio" name="radio"/>
                                <label htmlFor={item.name}>{item.name}</label>
                            </div>
                        })
                    }
                </div>
            </ul>
        </nav>
    )
}