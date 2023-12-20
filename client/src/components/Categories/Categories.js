import classNames from 'classnames/bind';
import styles from './Categories.module.scss';
import { categories } from '../../data/Data';
import CategoryItem from '../CategoryItem/CategoryItem';

const cx = classNames.bind(styles);

function Categories() {
    return (
        <div className={cx('wrapper')}>
            {categories.map((category) => (
                <CategoryItem key={category.id} item={category} />
            ))}
        </div>
    );
}

export default Categories;
