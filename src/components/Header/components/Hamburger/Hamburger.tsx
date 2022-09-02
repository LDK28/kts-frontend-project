import styles from './Hamburger.module.scss';

export const Hamburger = () => {
    return (
        <div className={`${styles.hamburger_menu}`}>
            <input id={`${styles.menu__toggle}`} type='checkbox' />
            <label
                className={`${styles.menu__btn}`}
                htmlFor={`${styles.menu__toggle}`}
            >
                <span></span>
            </label>
            <ul className={`${styles.menu__box}`}>
                <li>
                    <a className={`${styles.menu__item}`} href='#'>
                        Product
                    </a>
                </li>
                <li>
                    <a className={`${styles.menu__item}`} href='#'>
                        Services
                    </a>
                </li>
                <li>
                    <a className={`${styles.menu__item}`} href='#'>
                        Article
                    </a>
                </li>
                <li>
                    <a className={`${styles.menu__item}`} href='#'>
                        About us
                    </a>
                </li>
                <li>
                    <a className={`${styles.menu__item}`} href='#'>
                        Bag
                    </a>
                </li>
                <li>
                    <a className={`${styles.menu__item}`} href='#'>
                        Profile
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Hamburger;
