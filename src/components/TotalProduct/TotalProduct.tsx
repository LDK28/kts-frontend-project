import './TotalProduct.scss';
import { useContext } from 'react';
import { Card } from '@components/Card/Card';
import { ProductsContext } from '../../App/App';

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
};

export const TotalProduct: React.FC<TotalProductProps> = ({ title, isCount = true, category = '' }) => {
    const productsContext = useContext(ProductsContext);
    let products = new Array();

    if (category.length > 0) {
        products = productsContext.products.filter((product) => product.category == category)
    }

    console.log(products);

    return (
        <div className='total-product'>
            <div className='title-container'>
                <div className='title'>
                    {title}
                </div>
                {isCount && <div className='count'>{productsContext.products.length}</div>}
            </div>

            <div className='products-container'>
                {products.map(product =>
                    <Card
                        image={product.image}
                        categoty={product.category}
                        title={product.title}
                        subtitle={product.description}
                        content={product.price}></Card>)}
            </div>

        </div>
    );
}

export default TotalProduct;