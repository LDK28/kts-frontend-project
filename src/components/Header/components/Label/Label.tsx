import styles from './Label.module.scss';
import Logo from '@images/Logo.svg';

import { Link } from 'react-router-dom';

export const Label = () => {
    return (
        <Link to={'/'} className={`${styles.label}`}>
            <img src={Logo} className={`${styles.img}`} />
            <div className={`${styles.title}`}>
                Lalasia
            </div>
        </Link>
    );
}

export default Label;