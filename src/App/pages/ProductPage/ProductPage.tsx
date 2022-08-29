import Header from '@components/Header';
import Search from './components/Search';
import Title from './components/Title';
import TotalProduct from '@components/TotalProduct';
import './ProductPage.scss';

export const ProductPage = () => {
    return (
        <div className='product-page'>
            <Header></Header>
            <Title></Title>
            <Search></Search>
            <TotalProduct title={'Total Product'} isCount={true}></TotalProduct>
        </div>
    );
}

export default ProductPage;