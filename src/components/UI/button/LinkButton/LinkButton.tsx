import classes from './LinkButton.module.css'

import { Link } from "react-router-dom"

type Props = {
    children: React.ReactNode;
    path: string;
    small?: boolean;
}

export default function LinkButton({children, path, small = false} : Props) {
    return <Link to={path} className={ small ? classes.smallButton : classes.bigButton} target="_blank">{children}</Link>
}