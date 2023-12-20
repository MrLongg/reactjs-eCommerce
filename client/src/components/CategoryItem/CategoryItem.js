import classNames from 'classnames/bind';
import styles from './CategoryItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CategoryItem({ item }) {
    return (
        <div className={cx('wrapper')}>
            <Link to={`/products/${item.category}`}>
                <img className={cx('img')} src={item.img} alt="" />
                <div className={cx('info')}>
                    <div className={cx('title')}>{item.title}</div>
                    <button className={cx('button')}>SHOP NOW</button>
                </div>
            </Link>
        </div>
    );
}

export default CategoryItem;
