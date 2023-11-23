import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@mui/icons-material';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <h1 className={cx('logo')}>Longg.</h1>
                <p className={cx('description')}>
                    Id dolor nostrud Lorem nisi fugiat proident labore anim. Dolor consequat dolore et tempor laborum
                    aliquip velit do eiusmod eu aliqua do magna laborum. Eu proident consequat laborum id magna et
                    consequat cupidatat incididunt id Lorem minim. Et nulla fugiat ea dolore. Ipsum esse laborum nisi
                    magna ipsum ad. Amet nulla irure laboris officia qui officia eu veniam tempor velit.
                </p>
                <div className={cx('social-media')}>
                    <div className={cx('social-icon', 'facebook')}>
                        <Facebook />
                    </div>
                    <div className={cx('social-icon', 'twitter')}>
                        <Twitter />
                    </div>
                    <div className={cx('social-icon', 'instagram')}>
                        <Instagram />
                    </div>
                </div>
            </div>
            <div className={cx('center')}>
                <h3 className={cx('title')}>Useful Links</h3>
                <ul className={cx('list')}>
                    <li className={cx('list-item')}>Home</li>
                    <li className={cx('list-item')}>Cart</li>
                    <li className={cx('list-item')}>Man Fashion</li>
                    <li className={cx('list-item')}>Woman Fashion</li>
                    <li className={cx('list-item')}>Accessories</li>
                    <li className={cx('list-item')}>My Account</li>
                    <li className={cx('list-item')}>Order Tracking</li>
                    <li className={cx('list-item')}>Wishlist</li>
                    <li className={cx('list-item')}>Terms</li>
                </ul>
            </div>
            <div className={cx('right')}>
                <h3 className={cx('title')}>Contact</h3>
                <div className={cx('contact-item')}>
                    <Room className={cx('contact-icon')} />
                    622 Dixie Path, South Tobinchester 9823
                </div>
                <div className={cx('contact-item')}>
                    <Phone className={cx('contact-icon')} /> +1 235 23 18
                </div>
                <div className={cx('contact-item')}>
                    <MailOutline className={cx('contact-icon')} /> contact@gmail.com
                </div>
                <img className={cx('payment')} src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
            </div>
        </div>
    );
}

export default Footer;
