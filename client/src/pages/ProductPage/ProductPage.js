import classNames from 'classnames/bind';
import styles from './ProductPage.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import Announcement from '../../components/Annoucement/Announcement';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { publicRequest } from '../../requestMethod';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'

const cx = classNames.bind(styles);

function ProductPage() {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get('/products/find/' + id);
                setProduct(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getProduct();
    }, [id]);

    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity, color, size }));
    };

    const state = useSelector(state => state.cart)
    console.log(state)

    return (
        <div className={cx('wrapper')}>
            <Navbar />
            <Announcement />
            <div className={cx('container')}>
                <div className={cx('img-container')}>
                    <img className={cx('img')} src={product.img} alt="" />
                </div>
                <div className={cx('info-container')}>
                    <h1 className={cx('title')}>{product.title}</h1>
                    <p className={cx('description')}>{product.desc}</p>
                    <span className={cx('price')}>$ {product.price}</span>
                    <div className={cx('filter-container')}>
                        <div className={cx('filter')}>
                            <span className={cx('filter-title')}>Color</span>
                            {product.color &&
                                product.color.map((c) => (
                                    <div
                                        style={{ backgroundColor: `${c}` }}
                                        className={cx('filter-color')}
                                        key={c}
                                        onClick={() => setColor(c)}
                                    ></div>
                                ))}
                        </div>
                        <div className={cx('filter')}>
                            <div className={cx('filter-title')}>Size</div>
                            <select className={cx('filter-size')} onChange={(e) => setSize(e.target.value)}>
                                {product.size &&
                                    product.size.map((s) => (
                                        <option className={cx('filter-size-option')} key={s}>
                                            {s}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    </div>
                    <div className={cx('add-container')}>
                        <div className={cx('amount-container')}>
                            <FontAwesomeIcon
                                icon={faMinus}
                                className={cx('icon')}
                                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                            />
                            <span className={cx('amount')}>{quantity}</span>
                            <FontAwesomeIcon
                                icon={faPlus}
                                className={cx('icon')}
                                onClick={() => setQuantity(quantity + 1)}
                            />
                        </div>
                        <button className={cx('add-product')} onClick={handleClick}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    );
}

export default ProductPage;
