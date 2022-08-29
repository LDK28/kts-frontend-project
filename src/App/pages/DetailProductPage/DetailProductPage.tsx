import Header from '@components/Header';
import TotalProduct from '@components/TotalProduct';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailProduct from './components/DetailProduct';
import './DetailProductPage';

export const productContext = createContext({
    product: { image: '', title: '', description: '', category: '', price: 0 }
});
const Provider = productContext.Provider;

export const DetailProductPage = () => {
    const { id } = useParams();

    const [product, setProduct] = useState<{
        image: string,
        title: string,
        description: string,
        category: string,
        price: number
    }>({ image: '', title: '', description: '', category: '', price: 0 });

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
        <Provider value={{ product }}>
            <div>
                <Header></Header>
                <DetailProduct></DetailProduct>
                <TotalProduct title={'Related Items'} isCount={false} category={product.category} deletionItemId={id}></TotalProduct>
            </div>
        </Provider >
    );
}

export default DetailProductPage;