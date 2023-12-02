import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Chart from '../../components/Chart/Chart';
import { productData } from '../../dummyData';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Product() {
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
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className={cx('right')}>
                    <div className={cx('info-top')}>
                        <img
                            className={cx('img')}
                            src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                        <span className={cx('product-name')}>Apple Airpods Fake</span>
                    </div>
                    <div className={cx('info-bottom')}>
                        <div className={cx('info-item')}>
                            <span className={cx('info-key')}>ID: </span>
                            <span className={cx('info-value')}>123</span>
                        </div>
                        <div className={cx('info-item')}>
                            <span className={cx('info-key')}>Sales: </span>
                            <span className={cx('info-value')}>4123</span>
                        </div>
                        <div className={cx('info-item')}>
                            <span className={cx('info-key')}>Active: </span>
                            <span className={cx('info-value')}>Yes</span>
                        </div>
                        <div className={cx('info-item')}>
                            <span className={cx('info-key')}>In Stock: </span>
                            <span className={cx('info-value')}>None</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('bottom')}>
                <form className={cx('form')}>
                    <div className={cx('form-left')}>
                        <label>Product Name</label>
                        <input type='text' placeholder='Apple Airpods Fake' />
                        <label>In Stock</label>
                        <select name='inStock' id='idStock'>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name='active' id='active'>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className={cx('form-right')}>
                        <div className={cx('product-upload')}>
                            <img className={cx('upload-img')} src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg' alt='' />
                            <label for="file">
                                <FontAwesomeIcon icon={faUpload} />
                            </label>
                            <input type='file' id='file' style={{display: "none"}}/>
                        </div>
                    </div>
                    <button className={cx('update-button')}>Update</button>
                </form>
            </div>
        </div>
    );
}

export default Product;
