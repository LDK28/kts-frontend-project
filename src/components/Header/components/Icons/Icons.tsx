import styles from './Icons.module.scss';
import Bag from '@images/bag-2.svg';
import User from '@images/user.svg';

import { Link } from 'react-router-dom';

export const Icons = () => {
    return <div className={`${styles.icons}`}>
        <Link to={'/'} className="bag">
            <img src={Bag} className={`${styles.bag_img}`} />
        </Link>
        <Link to={'/'} className="user">
            <img src={User} className={`${styles.user_img}`} />
        </Link>
    </div>
}

export default Icons;