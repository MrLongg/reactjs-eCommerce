import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import { popularProducts } from '../../data/Data';
import Product from '../Product/Product';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function Products({ category, filter, sort }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    category
                        ? `http://127.0.0.1:5000/api/products?category=${category}`
                        : 'http://127.0.0.1:5000/api/products',
                );
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getProducts();
    }, [category]);

    useEffect(() => {
        category &&
            setFilteredProducts(
                products.filter((item) => Object.entries(filter).every(([key, value]) => item[key].includes(value))),
            );
    }, [products, category, filter]);

    useEffect(() => {
        if (sort === 'newest') {
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
        } else if (sort === 'asc') {
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
        } else {
            setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
        }
    }, [sort]);

    return (
        <div className={cx('wrapper')}>
            {category
                ? filteredProducts.map((item) => <Product key={item.id} item={item} />)
                : products.slice(0, 8).map((item) => <Product key={item.id} item={item} />)}
        </div>
    );
}

export default Products;
