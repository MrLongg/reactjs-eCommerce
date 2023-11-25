import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h1 className={cx('title')}>SIGN IN</h1>
                <form className={cx('form')}>
                    <input className={cx('form-input')} placeholder="Enter your email..." />
                    <input className={cx('form-input')} placeholder="Enter your passowrd..." />
                    <button className={cx('button')}>LOGIN</button>
                    <a className={cx('link')} href="/">
                        Forgot your password?
                    </a>
                    <a className={cx('link')} href="/">
                        Create an account
                    </a>
                </form>
            </div>
        </div>
    );
}

export default Login;
