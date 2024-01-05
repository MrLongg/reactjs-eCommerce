import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/apiCalls'

const cx = classNames.bind(styles);

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { email, password })
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Admin Login Page</div>
            <input className={cx('input')} type='text' placeholder='Enter your email...' onChange={e => setEmail(e.target.value)}/>
            <input className={cx('input')} type='password' placeholder='Enter your password...' onChange={e => setPassword(e.target.value)} />
            <button className={cx('button')} onClick={handleClick}>Login</button>
        </div>
    )
}

export default Login