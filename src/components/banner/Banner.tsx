import classes from './Banner.module.css'

import { Link } from 'react-router-dom'
import { default as Arrow } from '../../assets/svg/ui/Arrow-r.svg?react'

type Props = {
    img: string,
    name: string,
    path: string,
    children: React.ReactNode,
}

export default function Banner({img, name, path, children} : Props) {
    return (
        <section className={classes.container}>
            <div className={classes.left}>
                <div className={classes.box}>
                    <div className={classes.wrapper}>
                        <span className={classes.textBox}>
                            <h2 className={classes.title}>{name}</h2>
                            <p className={classes.text}>{children}</p>
                            <Link to={path}><p className={classes.link}>See the project <Arrow  className={classes.moveRight}/></p></Link>
                        </span>
                    </div>
                </div>
            </div>
            <div className={classes.right}>
                <img src={img} alt={name} />
            </div>
        </section>
    )
}