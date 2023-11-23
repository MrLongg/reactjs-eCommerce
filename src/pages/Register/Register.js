import classNames from 'classnames/bind';
import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h1 className={cx('title')}>CREATE AN ACCOUNT</h1>
                <form className={cx('form')}>
                    <input className={cx('form-input')} placeholder="Enter your first name..." />
                    <input className={cx('form-input')} placeholder="Enter your last name..." />
                    <input className={cx('form-input')} placeholder="Enter your email..." />
                    <input className={cx('form-input')} placeholder="Enter your username..." />
                    <input className={cx('form-input')} placeholder="Enter your passowrd..." />
                    <input className={cx('form-input')} placeholder="Confirm passowrd..." />
                    <span className={cx('agreement')}>
                        By creating an account, I consent to the processing of my personal data in accordance with the{' '}
                        <b> PRIVACY POLICY </b>
                    </span>
                    <button className={cx('button')}>CREATE</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
