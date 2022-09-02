import { createContext, useEffect, useState } from 'react';

import Header from '@components/Header';
import TotalProduct from '@components/TotalProduct';
import axios from 'axios';

import { useParams } from 'react-router-dom';

import DetailProduct from './components/DetailProduct';
import './DetailProductPage';
import ProductType from 'src/types/ProductType';

export const productContext = createContext<ProductType>({
    id: 0,
    image: '',
    category: '',
    description: '',
    title: '',
    price: ''
});
const Provider = productContext.Provider;

export const DetailProductPage = () => {
    useEffect(() => window.scrollTo(0, 0));

    const { id } = useParams();

    const [product, setProduct] = useState<ProductType>({ id: 0, image: '', title: '', description: '', category: '', price: '0' });

    useEffect(() => {
        const fetch = async () => {
            const result = await axios({
                method: 'get',
                url: `https://fakestoreapi.com/products/${id}`
            })
            setProduct(result.data);
        }
        fetch();

    }, []);

    return (
        <Provider value={product}>
            <div>
                <Header></Header>
                <DetailProduct></DetailProduct>
                <TotalProduct title={'Related Items'} isCount={false} category={product.category} deletionItemId={Number(id)}></TotalProduct>
            </div>
        </Provider >
    );
}

export default DetailProductPage;