import Hamburger from './components/Hamburger';
import Icons from './components/Icons';
import Label from './components/Label';
import Links from './components/Links';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={`${styles.header}`}>
            <Label></Label>
            {window.innerWidth >= 1000 && (
                <>
                    <Links></Links>
                    <Icons></Icons>
                </>
            )}
            {window.innerWidth < 1000 && <Hamburger></Hamburger>}
        </header>
    );
};

export default Header;
