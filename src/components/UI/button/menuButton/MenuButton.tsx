import classes from './MenuButton.module.css'

interface Props {
    children: React.ReactNode;
    active: boolean;
    onClick?: any;
    isChanging?: boolean;
    path?: string;
};

function MenuButton({ children, active, onClick, isChanging = true, path = '#'}: Props) {
    return (
        <li 
            className={`${isChanging ? classes.changingButton : classes.button} ${active && classes.active}`} 
            onClick={() => onClick()}>

            <a 
                href={path}
                className={classes.text}>
                {children}
            </a>
        </li>
    )
}

export default MenuButton