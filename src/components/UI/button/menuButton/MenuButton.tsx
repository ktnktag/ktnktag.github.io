import './MenuButton.css'

interface Props {
    children: React.ReactNode;
    active: boolean;
    path?: string;
    onClick?: any;
};

function MenuButton({ children, active, path = '#', onClick }: Props) {
    return (<li className={active ? 'menu-button active' : 'menu-button'} onClick={() => onClick()}>
        <a href={path} className='menu-button-text'>{children}</a>
    </li>)
}

export default MenuButton