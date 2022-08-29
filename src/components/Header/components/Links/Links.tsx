import './Links.scss';

import { Link } from 'react-router-dom';

export const Links = () => {
    return <div className='links'>
        <Link to={'/'} className="link">Product</Link>
        <Link to={'/'} className="link">Services</Link>
        <Link to={'/'} className="link">Article</Link>
        <Link to={'/'} className="link">About us</Link>
    </div>
}

export default Links;