import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { useState } from 'react';
import { login } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch, { email, password });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h1 className={cx('title')}>SIGN IN</h1>
                <form className={cx('form')}>
                    <input
                        className={cx('form-input')}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email..."
                    />
                    <input
                        className={cx('form-input')}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password..."
                    />
                    <button className={cx('button')} onClick={handleLogin} disabled={isFetching}>
                        LOGIN
                    </button>
                    {error && <p>Something went wrong!</p>}
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
