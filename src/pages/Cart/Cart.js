import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import Announcement from '../../components/Annoucement/Announcement';
import Footer from '../../components/Footer/Footer';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('wrapper')}>
            <Navbar />
            <Announcement />
            <div className={cx('container')}>
                <h1 className={cx('title')}>Your Cart</h1>
                <div className={cx('top')}>
                    <button className={cx('top-button')}>CONTINUE SHOPPING</button>
                    <div className={cx('top-texts')}>
                        <span className={cx('top-text')}>Shopping bag (2)</span>
                        <span className={cx('top-text')}>Your wishlist</span>
                    </div>
                    <button className={cx('top-button', 'filled')}>CHECKOUT NOW</button>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('info')}>
                        <div className={cx('product')}>
                            <div className={cx('product-detail')}>
                                <img
                                    className={cx('product-img')}
                                    src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                                    alt=""
                                />
                                <div className={cx('details')}>
                                    <span className={cx('product-name')}>
                                        <b>Product:</b> JESSIE THUNDER SHOES
                                    </span>
                                    <span className={cx('product-id')}>
                                        <b>ID:</b> 9823861235
                                    </span>
                                    <span className={cx('product-color', 'black')}></span>
                                    <span className={cx('product-size')}>
                                        <b>Size: </b> 37.5
                                    </span>
                                </div>
                            </div>
                            <div className={cx('price-detail')}>Price</div>
                        </div>
                    </div>
                    <div className={cx('summary')}>sumaary</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
