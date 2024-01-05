import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { userRequest } from '../../requestMethod';

import Chart from '../../components/Chart/Chart';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useMemo, useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Product() {
    const location = useLocation();
    const productId = location.pathname.split('/')[2];
    const [pStats, setPStats] = useState([])

    const product = useSelector((state) => state.product.products.find((product) => product._id === productId));

    const MONTHS = useMemo(
        () => [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        []
    )

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get('orders/income?pid=' + productId)
                const list = res.data.sort((a, b) => {
                    return a._id - b._id
                })
                list.map((item) => 
                    setPStats((prev) => [
                        ...prev,
                        { name: MONTHS[item._id - 1], Sales: item.total }
                    ])
                )
            } catch (err) {
                console.log(err);
            }
        }
        getStats()
    }, [productId, MONTHS])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title-container')}>
                <h1 className={cx('title')}>Product</h1>
                <Link to="/newproduct">
                    <button className={cx('button')}>Create</button>
                </Link>
            </div>
            <div className={cx('top')}>
                <div className={cx('left')}>
                    <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className={cx('right')}>
                    <div className={cx('info-top')}>
                        <img className={cx('img')} src={product.img} alt="" />
                        <span className={cx('product-name')}>{product.title}</span>
                    </div>
                    <div className={cx('info-bottom')}>
                        <div className={cx('info-item')}>
                            <span className={cx('info-key')}>ID: </span>
                            <span className={cx('info-value')}>{product._id}</span>
                        </div>
                        <div className={cx('info-item')}>
                            <span className={cx('info-key')}>Sales: </span>
                            <span className={cx('info-value')}>4123</span>
                        </div>
                        <div className={cx('info-item')}>
                            <span className={cx('info-key')}>In Stock: </span>
                            <span className={cx('info-value')}>{product.inStock.toString()}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('bottom')}>
                <form className={cx('form')}>
                    <div className={cx('form-left')}>
                        <label>Product Name</label>
                        <input type="text" placeholder={product.title} />
                        <label>Product Description</label>
                        <input type="text" placeholder={product.desc} />
                        <label>Product Price</label>
                        <input type="text" placeholder={product.price} />
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className={cx('form-right')}>
                        <div className={cx('product-upload')}>
                            <img
                                className={cx('upload-img')}
                                src={product.img}
                                alt=""
                            />
                            <label for="file">
                                <FontAwesomeIcon icon={faUpload} />
                            </label>
                            <input type="file" id="file" style={{ display: 'none' }} />
                        </div>
                    </div>
                    <button className={cx('update-button')}>Update</button>
                </form>
            </div>
        </div>
    );
}

export default Product;
