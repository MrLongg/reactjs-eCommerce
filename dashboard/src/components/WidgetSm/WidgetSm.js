import classNames from 'classnames/bind';
import styles from './WidgetSm.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function WidgetSm() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>New join members</span>
            <ul className={cx('list')}>
                <li className={cx('item')}>
                    <img
                        className={cx('img')}
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className={cx('user')}>
                        <span className={cx('username')}>Anna Keller</span>
                        <span className={cx('job')}>Software Engineer</span>
                    </div>
                    <button className={cx('button')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faEye} />
                        Display
                    </button>
                </li>
                <li className={cx('item')}>
                    <img
                        className={cx('img')}
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className={cx('user')}>
                        <span className={cx('username')}>Anna Keller</span>
                        <span className={cx('job')}>Software Engineer</span>
                    </div>
                    <button className={cx('button')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faEye} />
                        Display
                    </button>
                </li>
                <li className={cx('item')}>
                    <img
                        className={cx('img')}
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className={cx('user')}>
                        <span className={cx('username')}>Anna Keller</span>
                        <span className={cx('job')}>Software Engineer</span>
                    </div>
                    <button className={cx('button')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faEye} />
                        Display
                    </button>
                </li>
                <li className={cx('item')}>
                    <img
                        className={cx('img')}
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className={cx('user')}>
                        <span className={cx('username')}>Anna Keller</span>
                        <span className={cx('job')}>Software Engineer</span>
                    </div>
                    <button className={cx('button')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faEye} />
                        Display
                    </button>
                </li>
                <li className={cx('item')}>
                    <img
                        className={cx('img')}
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className={cx('user')}>
                        <span className={cx('username')}>Anna Keller</span>
                        <span className={cx('job')}>Software Engineer</span>
                    </div>
                    <button className={cx('button')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faEye} />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default WidgetSm;
