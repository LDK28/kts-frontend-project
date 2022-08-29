import Button from '@components/Button';
import { Card } from '@components/Card/Card';
import { useContext } from 'react';
import { productContext } from '../../DetailProductPage';
import './DetailProduct.scss';

export const DetailProduct = () => {
    const { product } = useContext(productContext);

    return (
        <div className='detail-product'>
            <img src={product.image} className='img' />
            <div className='text'>
                <div className='title'>{product.title}</div>
                <div className='category'>{product.category}</div>
                <div className='color-title'>Color</div>
                <div className='colors'>
                    <div className='colors-black'></div>
                    <div className='colors-green'></div>
                    <div className='colors-gold'></div>
                    <div className='colors-gray'></div>
                </div>
                <div className='description'>{product.description}</div>
                <div className='price'>{`$${product.price}`}</div>
                <div className='buttons'>
                    <Button className='buy'>Buy Now</Button>
                    <Button className='chart'>Add to Chart</Button>
                </div>
            </div>
        </div>
    );
}

export default DetailProduct;