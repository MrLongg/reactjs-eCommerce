import classNames from 'classnames/bind';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product() {
    <div className={cx('wrapper')}></div>;
}

export default Product;
