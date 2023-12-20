import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Product({ item }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('circle')}></div>
            <img className={cx('img')} src={item.img} alt="" />
            <div className={cx('info')}>
                <div className={cx('icon')}>
                    <ShoppingCartOutlined />
                </div>
                <Link to={`/product/${item._id}`}>
                    <div className={cx('icon')}>
                        <SearchOutlined />
                    </div>
                </Link>
                <div className={cx('icon')}>
                    <FavoriteBorderOutlined />
                </div>
            </div>
        </div>
    );
}

export default Product;
