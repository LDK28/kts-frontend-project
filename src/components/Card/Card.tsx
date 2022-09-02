import styles from './Card.module.scss';

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

export const Card: React.FC<CardProps> = ({
    image,
    categoty,
    title,
    subtitle,
    content,
    onClick,
}) => {
    return (
        <li onClick={onClick} className={`${styles.card}`}>
            <img src={image} className={`${styles.card_img}`} />

            {categoty && (
                <div className={`${styles.card_category}`}>{categoty}</div>
            )}

            <div className={`${styles.card_title}`}>{title}</div>

            <div className={`${styles.card_subtitle}`}>{subtitle}</div>

            {content && (
                <div className={`${styles.card_content}`}>{content}</div>
            )}
        </li>
    );
};

export default Card;
