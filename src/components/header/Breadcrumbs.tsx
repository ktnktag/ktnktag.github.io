import classes from './Breadcrumbs.module.css'

import { Link } from "react-router-dom"

interface ITitle {
    name: string;
    element: Element;
}

export default function Breadcrumbs({ list, path, title }: { list: string[], path: string, title: any }) {
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
                        title.map((item: ITitle) => {
                            return <label key={item.name} className={classes.radio} onClick={() => {
                                item.element.scrollIntoView();
                                setTimeout(() => {
                                    window.scrollBy(0, -150);
                                }, 700)
                            }}>
                                <input type="radio" name="radio" />
                                <p>{item.name}</p>
                            </label>
                        })
                    }
                </div>

                <div className={classes.dropList}>
                    <h1>{list[list?.length - 1]?.replace(/_/gi, ' ')}</h1>
                    <select name="drop" id="drop">
                        {
                            title.map((item: ITitle) => {
                                return <option key={item.name} value={item.name}>{item.name}</option>
                            })
                        }
                    </select>
                </div>
            </ul>
        </nav>
    )
}