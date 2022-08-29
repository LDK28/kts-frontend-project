import './Header.scss';

import Links from './components/Links';
import Label from './components/Label';
import Icons from './components/Icons';
import Hamburger from './components/Hamburger';

export const Header = () => {

    return <header className='header'>
        <Label></Label>
        {window.innerWidth >= 1000 &&
            <>
                <Links></Links>
                <Icons></Icons>
            </>}
        {window.innerWidth < 1000 && <Hamburger></Hamburger>}
    </header>
}

export default Header;