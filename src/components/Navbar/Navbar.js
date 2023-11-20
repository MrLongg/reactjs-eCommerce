import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <div className={cx('language')}>EN</div>
                    <div className={cx('search-container')}>
                        <input className={cx('input')} />
                        <Search className={cx('search-icon')} />
                    </div>
                </div>
                <div className={cx('center')}>
                    <h1 className={cx('logo')}>Longg.</h1>
                </div>
                <div className={cx('right')}>
                    <div className={cx('menu-item')}>REGISTER</div>
                    <div className={cx('menu-item')}>LOG IN</div>
                    <div className={cx('menu-item')}>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
