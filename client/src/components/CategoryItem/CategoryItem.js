import classNames from 'classnames/bind';
import styles from './CategoryItem.module.scss';

const cx = classNames.bind(styles);

function CategoryItem({ category }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('img')} src={category.img} alt="" />
            <div className={cx('info')}>
                <div className={cx('title')}>{category.title}</div>
                <button className={cx('button')}>SHOP NOW</button>
            </div>
        </div>
    );
}

export default CategoryItem;
