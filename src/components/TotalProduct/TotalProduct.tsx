import './TotalProduct.scss';
import { useContext } from 'react';
import { Card } from '@components/Card/Card';
import { ProductsContext } from '../../App/App';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

/** Пропсы, которые принимает компонент TotalProduct*/
export type TotalProductProps = {
    /** Главный текст */
    title: string;
    /** Показывать ли количество элементов */
    isCount: boolean;
    /** Тип товаров */
    category?: string;
    /** Количество выводимых карт */
    count?: number;
    deletionItemId?: number
};

export const TotalProduct: React.FC<TotalProductProps> = ({ title, isCount = true, category = '', deletionItemId = -1 }) => {
    let products = useContext(ProductsContext).products;

    if (category.length > 0) {
        products = products.filter((product) => product.category == category && product.id != deletionItemId)
    }

    return (
        <div className='total-product'>
            <div className='title-container'>
                <div className='title'>
                    {title}
                </div>
                {isCount && <div className='count'>{products.length}</div>}
            </div>

            <div className='products-container'>
                {products.map(product =>
                    <Link to={`/product/${product.id}`} className="product">
                        <Card
                            image={product.image}
                            categoty={product.category}
                            title={product.title}
                            subtitle={product.description}
                            content={product.price}></Card>
                    </Link>)}
            </div>

        </div>
    );
}

export default TotalProduct;