import './Label.scss';
import Logo from '@images/Logo.svg';

import { Link } from 'react-router-dom';

export const Label = () => {
    return (
        <Link to={'/'} className="label">
            <img src={Logo} className='img' />
            <div className='title'>
                Lalasia
            </div>
        </Link>
    );
}

export default Label;