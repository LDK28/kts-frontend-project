import styles from './Links.module.scss';

import { Link } from 'react-router-dom';

export const Links = () => {
    return <div className={`${styles.links}`}>
        <Link to={'/'} className={`${styles.link} ${styles.choosen_link}`}>Product</Link>
        <Link to={'/'} className={`${styles.link}`}>Services</Link>
        <Link to={'/'} className={`${styles.link}`}>Article</Link>
        <Link to={'/'} className={`${styles.link}`}>About us</Link>
    </div>
}

export default Links;