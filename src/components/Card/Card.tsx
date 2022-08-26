import './Card.scss'

/** Пропсы, которые принимает компонент Card */
export type CardProps = {
    /** URL изображения */
    image: string;
    /** Категория карточки */
    categoty?: React.ReactNode;
    /** Заголовок карточки */
    title: React.ReactNode;
    /** Подзаголовок карточки */
    subtitle: React.ReactNode;
    /** Содержимое карточки (футер/боковая часть), может быть пустым */
    content?: React.ReactNode;
    /** Клик на карточку */
    onClick?: React.MouseEventHandler;
};

export const Card: React.FC<CardProps> = ({ image, categoty, title, subtitle, content, onClick }) => {

    return <li onClick={onClick} className="card">
        <img src={image} alt="" className="card-img" />
        {categoty && <div className="card-categoty">
            {categoty}
        </div>}
        <div className="card-title">
            {title}
        </div>
        <div className="card-subtitle">
            {subtitle}
        </div>
        {content && <div className="card-content">
            {content}
        </div>}
    </li>;
};