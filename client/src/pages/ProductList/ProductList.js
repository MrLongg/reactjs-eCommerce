import classNames from 'classnames/bind';
import styles from './ProductList.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import Announcement from '../../components/Annoucement/Announcement';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import Products from '../../components/Products/Products';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ProductList() {
    const location = useLocation()
    const category = location.pathname.split("/")[2]
    const [filter, setFilter] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFilter = (e) => {
        const value = e.target.value
        setFilter({
            ...filter,
            [e.target.name]: value
        })
    }

    console.log(filter);

    return (
        <div className={cx('wrapper')}>
            <Navbar />
            <Announcement />
            <h1 className={cx('title')}>{category[0].toUpperCase() + category.slice(1)}</h1>
            <div className={cx('filter-container')}>
                <div className={cx('filter')}>
                    <span className={cx('filter-text')}>Filter Products:</span>
                    <select className={cx('selection')} name='color' onChange={handleFilter}>
                        <option className={cx('select-option')}>Color</option>
                        <option className={cx('select-option')}>White</option>
                        <option className={cx('select-option')}>Black</option>
                        <option className={cx('select-option')}>Red</option>
                        <option className={cx('select-option')}>Blue</option>
                        <option className={cx('select-option')}>Yellow</option>
                        <option className={cx('select-option')}>Green</option>
                    </select>
                    <select className={cx('selection')} name='size' onChange={handleFilter}>
                        <option className={cx('select-option')}>Size</option>
                        <option className={cx('select-option')}>XS</option>
                        <option className={cx('select-option')}>S</option>
                        <option className={cx('select-option')}>M</option>
                        <option className={cx('select-option')}>L</option>
                        <option className={cx('select-option')}>XL</option>
                    </select>
                </div>
                <div className={cx('filter')}>
                    <span className={cx('filter-text')}>Sort Products:</span>
                    <select className={cx('selection')} onChange={e => setSort(e.target.value)}>
                        <option className={cx('select-option')} value="newest">Newest</option>
                        <option className={cx('select-option')} value="asc">Price (asc)</option>
                        <option className={cx('select-option')} value="desc">Price (desc)</option>
                    </select>
                </div>
            </div>
            <Products category={category} filter={filter} sort={sort}/>
            <Newsletter />
            <Footer />
        </div>
    );
}

export default ProductList;
