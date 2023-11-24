import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import Announcement from '../../components/Annoucement/Announcement';
import Footer from '../../components/Footer/Footer';
import { Add, Remove } from '@mui/icons-material';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('wrapper')}>
            <Navbar />
            <Announcement />
            <div className={cx('container')}>
                <h1 className={cx('cart-title')}>Your Cart</h1>
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
                                        <b>Size: </b> L
                                    </span>
                                </div>
                            </div>
                            <div className={cx('price-detail')}>
                                <div className={cx('product-amount-container')}>
                                    <Add />
                                    <div className={cx('product-amount')}>2</div>
                                    <Remove />
                                </div>
                                <div className={cx('product-prize')}>$ 30</div>
                            </div>
                        </div>

                        <hr className={cx('break-line')} />

                        <div className={cx('product')}>
                            <div className={cx('product-detail')}>
                                <img
                                    className={cx('product-img')}
                                    src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                                    alt=""
                                />
                                <div className={cx('details')}>
                                    <span className={cx('product-name')}>
                                        <b>Product:</b> HAKURA T-SHIRT
                                    </span>
                                    <span className={cx('product-id')}>
                                        <b>ID:</b> 88748347123
                                    </span>
                                    <span className={cx('product-color', 'gray')}></span>
                                    <span className={cx('product-size')}>
                                        <b>Size: </b> M
                                    </span>
                                </div>
                            </div>
                            <div className={cx('price-detail')}>
                                <div className={cx('product-amount-container')}>
                                    <Add />
                                    <div className={cx('product-amount')}>2</div>
                                    <Remove />
                                </div>
                                <div className={cx('product-prize')}>$ 20</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('summary')}>
                        <h1 className={cx('summary-title')}>ORDER SUMMARY</h1>
                        <div className={cx('summary-item')}>
                            <span className={cx('summary-item-text')}>Subtotal</span>
                            <span className={cx('summary-item-price')}>$ 80</span>
                        </div>
                        <div className={cx('summary-item')}>
                            <span className={cx('summary-item-text')}>Estimated Shipping: </span>
                            <span className={cx('summary-item-price')}>$ 5.90</span>
                        </div>
                        <div className={cx('summary-item')}>
                            <span className={cx('summary-item-text')}>Shipping Discount</span>
                            <span className={cx('summary-item-price')}>$ -5.90</span>
                        </div>
                        <div className={cx('summary-item', 'total')}>
                            <span className={cx('summary-item-text')}>Total</span>
                            <span className={cx('summary-item-price')}>$ 80</span>
                        </div>
                        <button className={cx('checkout-button')}>CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
