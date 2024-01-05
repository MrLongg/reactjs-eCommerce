import classNames from 'classnames/bind';
import styles from './FeaturedInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethod';

const cx = classNames.bind(styles);
function FeaturedInfo() {
    const [income, setIncome] = useState([]);
    const [perc, setPerc] = useState(0);

    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await userRequest.get('orders/income');
                setIncome(res.data);
                setPerc((res.data[1].total * 100) / res.data[0].total - 100);
            } catch (err) {
                console.log(err);
            }
        };
        getIncome();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('item')}>
                <span className={cx('title')}>Revanue</span>
                <div className={cx('money-container')}>
                    <span className={cx('money')}>${income && income[1] && income[1].total}</span>
                    <span className={cx('money-rate')}>
                        % {Math.floor(perc)}{' '}
                        {perc < 0 ? (
                            <FontAwesomeIcon className={cx('icon', 'negative')} icon={faArrowDown} />
                        ) : perc > 0 ? (
                            <FontAwesomeIcon className={cx('icon')} icon={faArrowUp} />
                        ) : null}
                    </span>
                </div>
                <span className={cx('sub')}>Compare to last month</span>
            </div>
            <div className={cx('item')}>
                <span className={cx('title')}>Sales</span>
                <div className={cx('money-container')}>
                    <span className={cx('money')}>$4,415</span>
                    <span className={cx('money-rate')}>
                        -1.4
                        <FontAwesomeIcon className={cx('icon', 'negative')} icon={faArrowDown} />
                    </span>
                </div>
                <span className={cx('sub')}>Compare to last month</span>
            </div>
            <div className={cx('item')}>
                <span className={cx('title')}>Cost</span>
                <div className={cx('money-container')}>
                    <span className={cx('money')}>$2,225</span>
                    <span className={cx('money-rate')}>
                        +2.4
                        <FontAwesomeIcon className={cx('icon')} icon={faArrowUp} />
                    </span>
                </div>
                <span className={cx('sub')}>Compare to last month</span>
            </div>
        </div>
    );
}

export default FeaturedInfo;
