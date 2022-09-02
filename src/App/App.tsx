import { createContext, useEffect, useState } from 'react';

import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductType from 'src/types/ProductType';

import DetailProductPage from './pages/DetailProductPage';
import ProductPage from './pages/ProductPage';
import UIKit from './pages/UIKit';

const prods: ProductType[] = new Array();
export const ProductsContext = createContext<{ products: ProductType[] }>({
    products: prods,
});

const Provider = ProductsContext.Provider;

const App = () => {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        const fetch = async () => {
            const result = await axios({
                method: 'get',
                url: 'https://fakestoreapi.com/products',
            });
            setProducts(
                result.data.map((raw: ProductType) => ({
                    id: raw.id,
                    image: raw.image,
                    category: raw.category,
                    title: raw.title,
                    description: raw.description,
                    price: `$${raw.price}`,
                }))
            );
        };
        fetch();
    }, []);

    return (
        <Provider value={{ products }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ProductPage />} />
                    <Route path='/uikit' element={<UIKit />} />
                    <Route path='/product'>
                        <Route path=':id' element={<DetailProductPage />} />
                    </Route>
                    <Route path='*' element={<Navigate to='/' replace />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
