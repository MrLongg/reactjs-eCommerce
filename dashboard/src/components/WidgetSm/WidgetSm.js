import classNames from 'classnames/bind';
import styles from './WidgetSm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import { userRequest } from '../../requestMethod';

const cx = classNames.bind(styles);

function WidgetSm() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await userRequest.get('users/?new=true');
                setUsers(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>New join members</span>
            <ul className={cx('list')}>
                {users.map((user) => (
                    <li className={cx('item')} key={user._id}>
                        <img
                            className={cx('img')}
                            src={
                                user.img ||
                                'https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg'
                            }
                            alt=""
                        />
                        <div className={cx('user')}>
                            <span className={cx('username')}>{user.username}</span>
                        </div>
                        <button className={cx('button')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faEye} />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WidgetSm;
