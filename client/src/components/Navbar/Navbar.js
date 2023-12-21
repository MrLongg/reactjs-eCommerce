import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Navbar() {
    const quantity = useSelector((state) => state.cart.quantity);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <div className={cx('language')}>EN</div>
                    <div className={cx('search-container')}>
                        <input className={cx('input')} />
                        <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                    </div>
                </div>
                <div className={cx('center')}>
                    <Link to="/">
                        <h1 className={cx('logo')}>Longg.</h1>
                    </Link>
                </div>
                <div className={cx('right')}>
                    <div className={cx('menu-item')}>REGISTER</div>
                    <div className={cx('menu-item')}>LOG IN</div>
                    <Link to='/cart'>
                        <div className={cx('menu-item')}>
                            <FontAwesomeIcon className={cx('cart-icon')} icon={faCartShopping} />
                        </div>
                    </Link>
                    <div className={cx('badge')}>{quantity}</div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
