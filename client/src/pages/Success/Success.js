import classNames from 'classnames/bind';
import styles from './Success.module.scss';

const cx = classNames.bind(styles);

function Success() {
    return <div className={cx('wrapper')}>Success Page</div>
}

export default Success