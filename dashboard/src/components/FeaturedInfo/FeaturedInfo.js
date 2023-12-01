import classNames from 'classnames/bind';
import styles from './FeaturedInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function FeaturedInfo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('item')}>
                <span className={cx('title')}>Revanue</span>
                <div className={cx('money-container')}>
                    <span className={cx('money')}>$2,415</span>
                    <span className={cx('money-rate')}>
                        -11.4
                        <FontAwesomeIcon className={cx('icon', 'negative')} icon={faArrowDown} />
                    </span>
                </div>
                <span className={cx('sub')}>Compare to last month</span>
            </div>
            <div className={cx('item')}>
                <span className={cx('title')}>Sales</span>
                <div className={cx('money-container')}>
                    <span className={cx('money')}>$4,415</span>
                    <span className={cx('money-rate')}>
                        -1.4
                        <FontAwesomeIcon className={cx('icon', 'negative')} icon={faArrowDown} />
                    </span>
                </div>
                <span className={cx('sub')}>Compare to last month</span>
            </div>
            <div className={cx('item')}>
                <span className={cx('title')}>Cost</span>
                <div className={cx('money-container')}>
                    <span className={cx('money')}>$2,225</span>
                    <span className={cx('money-rate')}>
                        +2.4
                        <FontAwesomeIcon className={cx('icon')} icon={faArrowUp} />
                    </span>
                </div>
                <span className={cx('sub')}>Compare to last month</span>
            </div>
        </div>
    );
}

export default FeaturedInfo;
