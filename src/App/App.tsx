import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UIKit from './pages/UIKit';
import ProductPage from './pages/ProductPage';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import DetailProductPage from './pages/DetailProductPage';
import ProductType from 'src/types/ProductType';
import React from 'react';

const prods: ProductType[] = new Array();
export const ProductsContext = createContext<{ products: ProductType[] }>({
    products: prods
});

const Provider = ProductsContext.Provider;

function App() {

    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        const fetch = async () => {
            const result = await axios({
                method: 'get',
                url: 'https://fakestoreapi.com/products'
            })
            setProducts(result.data.map((raw: ProductType) => ({
                id: raw.id,
                image: raw.image,
                category: raw.category,
                title: raw.title,
                description: raw.description,
                price: `$${raw.price}`
            })));
            console.log("Data got!");
        }
        fetch();
    }, []);

    return (
        <Provider value={{ products }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProductPage />} />
                    <Route path="/uikit" element={<UIKit />} />
                    <Route path="/product">
                        <Route path=':id' element={<DetailProductPage />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
