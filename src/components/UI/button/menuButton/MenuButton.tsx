import './MenuButton.css'

interface Props {
    path: string;
    children: React.ReactNode;
};


function MenuButton({ path, children }: Props) {
    return (<li className='menu-button'>
        <a href={path} className='menu-button-text'>{children}</a>
    </li>)
}

export default MenuButton