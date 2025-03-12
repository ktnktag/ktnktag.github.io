import classes from './Style/Breadcrumbs.module.css'

import { Link } from "react-router-dom"

interface ITitle {
    name: string;
    y: number;
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
                            return <label key={item.name} className={classes.radio} onClick={() => {window.scrollTo(0, item.y)}}>
                                <input type="radio" name="radio"/>
                                <p>{item.name}</p>
                            </label>
                        })
                    }
                </div>
            </ul>
        </nav>
    )
}