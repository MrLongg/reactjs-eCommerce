import classNames from 'classnames/bind';
import styles from './NewUser.module.scss';

const cx = classNames.bind(styles);

function NewUser() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>New User</h1>
            <form className={cx('form')}>
                <div className={cx('item')}>
                    <label>Username</label>
                    <input type="text" placeholder="john" />
                </div>
                <div className={cx('item')}>
                    <label>Full Name</label>
                    <input type="text" placeholder="John Smith" />
                </div>
                <div className={cx('item')}>
                    <label>Email</label>
                    <input type="email" placeholder="john@gmail.com" />
                </div>
                <div className={cx('item')}>
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className={cx('item')}>
                    <label>Phone</label>
                    <input type="text" placeholder="+1 123 456 67" />
                </div>
                <div className={cx('item')}>
                    <label>Address</label>
                    <input type="text" placeholder="New York | USA" />
                </div>
                <div className={cx('item')}>
                    <label>Gender</label>
                    <div className={cx('gender')}>
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label for="other">other</label>
                    </div>
                </div>
                <div className={cx('item')}>
                    <label>Active</label>
                    <select className={cx('select')} name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className={cx('button')}>Create</button>
            </form>
        </div>
    );
}

export default NewUser;
