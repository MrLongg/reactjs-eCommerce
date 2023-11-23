import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import { popularProducts } from '../Data/Data';
import Product from '../Product/Product';

const cx = classNames.bind(styles);

function Products() {
    return (
        <div className={cx('wrapper')}>
            {popularProducts.map((item) => (
                <Product key={item.id} item={item} />
            ))}
        </div>
    );
}

export default Products;
