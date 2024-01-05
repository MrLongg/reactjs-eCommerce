import classNames from 'classnames/bind';
import styles from './WidgetLg.module.scss';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethod';
import { format } from 'timeago.js'

const cx = classNames.bind(styles);

function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={cx('button', `${type}`)}>{type}</button>;
    };

    const [orders, setOders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get('orders');
                setOders(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getOrders();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Latest transactions</h3>
            <table className={cx('table')}>
                <tbody>
                    <tr className={cx('tr')}>
                        <th className={cx('th')}>Customer</th>
                        <th className={cx('th')}>Date</th>
                        <th className={cx('th')}>Amount</th>
                        <th className={cx('th')}>Status</th>
                    </tr>
                    {orders.map((order) => (
                        <tr className={cx('tr')} key={order._id}>
                            <td className={cx('user')}>
                                <span className={cx('name')}>{order.userId}</span>
                            </td>
                            <td className={cx('date')}>{format(order.createdAt)}</td>
                            <td className={cx('amount')}>${order.amount}</td>
                            <td className={cx('status')}>
                                <Button type={order.status} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default WidgetLg;
