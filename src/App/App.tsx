import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UIKit from './pages/UIKit';
import ProductPage from './pages/ProductPage';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import DetailProductPage from './pages/DetailProductPage';

export const ProductsContext = createContext({
  products: new Array()
});

const Provider = ProductsContext.Provider;

function App() {

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios({
        method: 'get',
        url: 'https://fakestoreapi.com/products'
      })
      setProducts(result.data.map((raw: {
        id: any;
        image: string;
        category: string;
        title: string;
        description: string;
        price: string;
      }) => ({
        id: raw.id,
        image: raw.image,
        category: raw.category,
        title: raw.title,
        description: raw.description,
        price: `$${raw.price}`
      })));


    }
    fetch();

  }, []);


  return (
    <Provider value={{ products }}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/product/:id" element={<DetailProductPage />} />
          <Route path="/uikit" element={<UIKit />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
