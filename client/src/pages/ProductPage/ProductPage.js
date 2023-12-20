import classNames from 'classnames/bind';
import styles from './ProductPage.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import Announcement from '../../components/Annoucement/Announcement';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import { Add, Remove } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { publicRequest } from '../../requestMethod';

const cx = classNames.bind(styles);

function ProductPage() {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [product, setProduct] = useState({});

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
                            {console.log(product.color)}
                            {product.color && product.color.map((c) => (
                                <div className={cx('filter-color', `${c}`)} key={c}></div>
                            ))}
                        </div>
                        <div className={cx('filter')}>
                            <div className={cx('filter-title')}>Size</div>
                            <select className={cx('filter-size')}>
                                {product.size && product.size.map((s) => (
                                    <option className={cx('filter-size-option')} key={s}>{s}</option>
                                ))}
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
