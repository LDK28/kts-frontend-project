import './Loader.scss'

export enum LoaderSize {
    s = 's',
    m = 'm',
    l = 'l',
}

/** Пропсы, которые принимает компонент Loader */
export type LoaderProps = {
    /**
     * Идет ли загрузка.
     * По умолчанию - true, для удобства использования
     * Если false, то лоадер не должен отображаться
     */
    loading?: boolean;
    /**
     * Размер лоадера. При передаче данного пропса, должен добавляться css-класс loader_size-{size}
     * По умолчанию: размер - LoaderSize.m, css-класс - loader_size-m
     */
    size?: LoaderSize;
    /**
     * Дополнительные CSS-классы.
     */
    className?: string;
};

export const Loader: React.FC<LoaderProps> = ({ loading = true, size = LoaderSize.m, className = '' }) => {
    if (loading) {

        let classNames = require('classnames');
        let cssClasses: string = classNames(`loader_size-${size}`, className);

        return <div className={cssClasses}></div>
    }
    else { return null };
};

export default Loader;