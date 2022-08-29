import './Icons.scss';
import Bag from '@images/bag-2.svg';
import User from '@images/user.svg';

import { Link } from 'react-router-dom';

export const Icons = () => {
    return <div className='icons'>
        <Link to={'/'} className="bag">
            <img src={Bag} className='bag-img' />
        </Link>
        <Link to={'/'} className="user">
            <img src={User} className='user-img' />
        </Link>
    </div>
}

export default Icons;