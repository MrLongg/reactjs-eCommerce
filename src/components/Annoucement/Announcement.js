import classNames from 'classnames/bind';
import styles from './Announcement.module.scss';

const cx = classNames.bind(styles);

function Announcement() {
    return <div className={cx('wrapper')}>Super Deal Free Shipping all World</div>;
}

export default Announcement;
