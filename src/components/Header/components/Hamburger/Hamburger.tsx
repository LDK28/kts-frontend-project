import './Hamburger.scss';

export const Hamburger = () => {
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" for="menu__toggle">
                <span></span>
            </label>
            <ul className="menu__box">
                <li><a className="menu__item" href="#">Product</a></li>
                <li><a className="menu__item" href="#">Services</a></li>
                <li><a className="menu__item" href="#">Article</a></li>
                <li><a className="menu__item" href="#">About us</a></li>
                <li><a className="menu__item" href="#">Bag</a></li>
                <li><a className="menu__item" href="#">Profile</a></li>
            </ul>
        </div>
    );
}

export default Hamburger;