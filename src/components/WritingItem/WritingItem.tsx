import classes from './WritingItem.module.css'

import { default as Arrow } from '../../assets/svg/ui/Arrow.svg?react'
import { Link } from 'react-router-dom'

type Props = {
    title: string;
    path: string;
    date: string;
    children: React.ReactNode;
}

export default function WritingItem({ title, path, date, children }: Props) {
    return <article className={classes.container}>
        <Link to={path}>
            <h3>{title}</h3> <Arrow className='arrow' />
        </Link>
        <p className={classes.date}>{date}</p>

        <p className={classes.text}>{children}</p>
    </article>
}