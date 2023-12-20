import classNames from 'classnames/bind';
import styles from './Newsletter.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles);

function Newsletter() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Newsletter</h1>
            <div className={cx('description')}>Get timely updates from your favorite products</div>
            <div className={cx('input-container')}>
                <input className={cx('input')} placeholder="Your email..." />
                <button className={cx('button')}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>
        </div>
    );
}

export default Newsletter;
