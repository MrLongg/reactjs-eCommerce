import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import Announcement from '../../components/Annoucement/Announcement';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Cart() {
    const cart = useSelector((state) => state.cart);
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
                        {cart.products.map((product) => (
                            <div className={cx('product')}>
                                <div className={cx('product-detail')}>
                                    <img className={cx('product-img')} src={product.img} alt="" />
                                    <div className={cx('details')}>
                                        <span className={cx('product-name')}>
                                            <b>Product:</b> {product.title}
                                        </span>
                                        <span className={cx('product-id')}>
                                            <b>ID:</b> {product._id}
                                        </span>
                                        <span
                                            className={cx('product-color')}
                                            style={{ backgroundColor: `${product.color}` }}
                                        >
                                            {product.color}
                                        </span>
                                        <span className={cx('product-size')}>
                                            <b>Size: </b> {product.size}
                                        </span>
                                    </div>
                                </div>
                                <div className={cx('price-detail')}>
                                    <div className={cx('product-amount-container')}>
                                        <FontAwesomeIcon icon={faMinus} className={cx('icon')} />
                                        <div className={cx('product-amount')}>{product.quantity}</div>
                                        <FontAwesomeIcon icon={faPlus} className={cx('icon')} />
                                    </div>
                                    <div className={cx('product-prize')}>$ {product.price * product.quantity}</div>
                                </div>
                            </div>
                        ))}
                        <hr className={cx('break-line')} />
                    </div>
                    <div className={cx('summary')}>
                        <h1 className={cx('summary-title')}>ORDER SUMMARY</h1>
                        <div className={cx('summary-item')}>
                            <span className={cx('summary-item-text')}>Subtotal</span>
                            <span className={cx('summary-item-price')}>$ {cart.total}</span>
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
                            <span className={cx('summary-item-price')}>$ {cart.total}</span>
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
