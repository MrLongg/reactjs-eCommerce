import classNames from 'classnames/bind';
import styles from './User.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faLocationDot, faPhone, faUpload } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function User() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title-container')}>
                <h1 className={cx('title')}>Edit User</h1>
                <Link to="/newUser">
                    <button className={cx('button')}>Create</button>
                </Link>
            </div>
            <div className={cx('user-container')}>
                <div className={cx('show')}>
                    <div className={cx('top')}>
                        <img
                            className={cx('img')}
                            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                        <div className={cx('top-title')}>
                            <span className={cx('show-username')}>Anna Becker</span>
                            <span className={cx('show-job')}>Software Engineer</span>
                        </div>
                    </div>
                    <div className={cx('bottom')}>
                        <span className={cx('show-details')}>Account Details</span>
                        <div className={cx('show-info')}>
                            <FontAwesomeIcon icon={faInfo} className={cx('icon')} />
                            <span className={cx('show-info-details')}>annabeck99</span>
                        </div>
                        <div className={cx('show-info')}>
                            <FontAwesomeIcon icon={faCalendar} className={cx('icon')} />
                            <span className={cx('show-info-details')}>10.12.1999</span>
                        </div>
                        <span className={cx('show-details')}>Contact Details</span>
                        <div className={cx('show-info')}>
                            <FontAwesomeIcon icon={faPhone} className={cx('icon')} />
                            <span className={cx('show-info-details')}>+1 123 456 67</span>
                        </div>
                        <div className={cx('show-info')}>
                            <FontAwesomeIcon icon={faEnvelope} className={cx('icon')} />
                            <span className={cx('show-info-details')}>annabeck99@gmail.com</span>
                        </div>
                        <div className={cx('show-info')}>
                            <FontAwesomeIcon icon={faLocationDot} className={cx('icon')} />
                            <span className={cx('show-info-details')}>New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className={cx('update')}>
                    <span className={cx('update-title')}>Edit</span>
                    <form className={cx('update-form')}>
                        <div className={cx('left')}>
                            <div className={cx('item')}>
                                <label>Username</label>
                                <input className={cx('input')} type="text" placeholder="annabeck99" />
                            </div>
                            <div className={cx('item')}>
                                <label>Full Name</label>
                                <input className={cx('input')} type="text" placeholder="Anna Becker" />
                            </div>
                            <div className={cx('item')}>
                                <label>Email</label>
                                <input className={cx('input')} type="text" placeholder="annabeck99@gmail.com" />
                            </div>
                            <div className={cx('item')}>
                                <label>Phone</label>
                                <input className={cx('input')} type="text" placeholder="+1 123 456 67" />
                            </div>
                            <div className={cx('item')}>
                                <label>Address</label>
                                <input className={cx('input')} type="text" placeholder="New York | USA" />
                            </div>
                        </div>
                        <div className={cx('right')}>
                            <div className={cx('upload')}>
                                <img
                                    className={cx('upload-img')}
                                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
                                <label htmlFor="file">
                                    <FontAwesomeIcon className={cx('user-icon')} icon={faUpload} />
                                </label>
                                <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                            <button className={cx('update-button')}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default User;
