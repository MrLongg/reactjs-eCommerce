import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowTrendUp,
    faBars,
    faBook,
    faChartSimple,
    faDollarSign,
    faStore,
    faSuitcase,
    faTimeline,
} from '@fortawesome/free-solid-svg-icons';
import { faComment, faEnvelope, faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Sidebar() {
    const navigate = useNavigate()

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('menu')}>
                    <h3 className={cx('title')}>Dashboard</h3>
                    <ul className={cx('list')}>
                        <li className={cx('item', 'active')} onClick={() => navigate('/')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faBars} />
                            Home
                        </li>
                        <li className={cx('item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faTimeline} />
                            Analytics
                        </li>
                        <li className={cx('item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faArrowTrendUp} />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className={cx('menu')}>
                    <h3 className={cx('title')}>Quick Menu</h3>
                    <ul className={cx('list')}>
                        <Link to="/users">
                            <li className={cx('item')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                                Users
                            </li>
                        </Link>
                        <Link to="/products">
                            <li className={cx('item')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faStore} />
                                Products
                            </li>
                        </Link>
                        <li className={cx('item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faDollarSign} />
                            Transactions
                        </li>
                        <li className={cx('item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faChartSimple} />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className={cx('menu')}>
                    <h3 className={cx('title')}>Notifications</h3>
                    <ul className={cx('list')}>
                        <li className={cx('item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />
                            Mail
                        </li>
                        <li className={cx('item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faComment} />
                            Feedback
                        </li>
                        <li className={cx('item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faMessage} />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className={cx('menu')}>
                    <h3 className={cx('title')}>Staff</h3>
                    <ul className={cx('list')}>
                        <li className={cx('item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faSuitcase} />
                            Manage
                        </li>
                        <li className={cx('item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faArrowTrendUp} />
                            Analytics
                        </li>
                        <li className={cx('item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faBook} />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
