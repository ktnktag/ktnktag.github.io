import classes from "./NavButton.module.css"
import { default as Arrow } from "../../../../assets/svg/ui/Arrow.svg?react";

import { NavLink } from "react-router-dom";

type Props = {
    path: string,
    name: string,
    onClick: () => void,
}

export function NavButton({ path, name, onClick }: Props) {
    return <li className={classes.button}>
        <NavLink
            to={path}
            className={({ isActive }) => (isActive ? classes.active : "")}
            onClick={onClick}
        >
            <p>{name}</p>
            <p className={classes.helpers}>
                <span className={`${classes.current} eyebrow`}>current</span><Arrow className={classes.arrow}/>
            </p>
        </NavLink>
    </li>
}