import classNames from 'classnames/bind';
import styles from './ProductPage.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import Announcement from '../../components/Annoucement/Announcement';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import { Add, Remove } from '@mui/icons-material';

const cx = classNames.bind(styles);

function ProductPage() {
    return (
        <div className={cx('wrapper')}>
            <Navbar />
            <Announcement />
            <div className={cx('container')}>
                <div className={cx('img-container')}>
                    <img className={cx('img')} src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
                </div>
                <div className={cx('info-container')}>
                    <h1 className={cx('title')}>Denim Jumpsuit</h1>
                    <p className={cx('description')}>
                        Duis reprehenderit velit quis quis non. Adipisicing ea minim ut voluptate amet ex ea proident
                        velit adipisicing ullamco do Lorem veniam. Officia nostrud cillum aute aliqua ut excepteur
                        consectetur labore deserunt ea velit. Mollit nulla eiusmod reprehenderit in. Mollit laboris
                        exercitation ipsum quis commodo nisi eu velit ipsum nisi.
                    </p>
                    <span className={cx('price')}>$ 20</span>
                    <div className={cx('filter-container')}>
                        <div className={cx('filter')}>
                            <span className={cx('filter-title')}>Color</span>
                            <div className={cx('filter-color', 'black')}></div>
                            <div className={cx('filter-color', 'darkblue')}></div>
                            <div className={cx('filter-color', 'gray')}></div>
                        </div>
                        <div className={cx('filter')}>
                            <div className={cx('filter-title')}>Size</div>
                            <select className={cx('filter-size')}>
                                <option className={cx('filter-size-option')}>XS</option>
                                <option className={cx('filter-size-option')}>S</option>
                                <option className={cx('filter-size-option')}>M</option>
                                <option className={cx('filter-size-option')}>L</option>
                                <option className={cx('filter-size-option')}>XL</option>
                            </select>
                        </div>
                    </div>
                    <div className={cx('add-container')}>
                        <div className={cx('amount-container')}>
                            <Remove />
                            <span className={cx('amount')}>1</span>
                            <Add />
                        </div>
                        <button className={cx('add-product')}>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    );
}

export default ProductPage;
