import classes from './LinkButton.module.css'

import { Link } from "react-router-dom"

type Props = {
    path: string;
    children: React.ReactNode;
}

export default function LinkButton({path, children} : Props) {
    return <Link to={path} className={classes.button}>{children}</Link>
}