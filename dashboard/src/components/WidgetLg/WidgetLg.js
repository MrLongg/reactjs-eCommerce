import classNames from 'classnames/bind';
import styles from './WidgetLg.module.scss';

const cx = classNames.bind(styles);

function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={cx('button', `${type}`)}>{type}</button>;
    };

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Latest transactions</h3>
            <table className={cx('table')}>
                <tr className={cx('tr')}>
                    <th className={cx('th')}>Customer</th>
                    <th className={cx('th')}>Date</th>
                    <th className={cx('th')}>Amount</th>
                    <th className={cx('th')}>Status</th>
                </tr>
                <tr className={cx('tr')}>
                    <td className={cx('user')}>
                        <img
                            className={cx('img')}
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                        />
                        <span className={cx('name')}>Susan Carol</span>
                    </td>
                    <td className={cx('date')}>2 June 2021</td>
                    <td className={cx('amount')}>$122.00</td>
                    <td className={cx('status')}>
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className={cx('tr')}>
                    <td className={cx('user')}>
                        <img
                            className={cx('img')}
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                        />
                        <span className={cx('name')}>Susan Carol</span>
                    </td>
                    <td className={cx('date')}>2 June 2021</td>
                    <td className={cx('amount')}>$122.00</td>
                    <td className={cx('status')}>
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className={cx('tr')}>
                    <td className={cx('user')}>
                        <img
                            className={cx('img')}
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                        />
                        <span className={cx('name')}>Susan Carol</span>
                    </td>
                    <td className={cx('date')}>2 June 2021</td>
                    <td className={cx('amount')}>$122.00</td>
                    <td className={cx('status')}>
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className={cx('tr')}>
                    <td className={cx('user')}>
                        <img
                            className={cx('img')}
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                        />
                        <span className={cx('name')}>Susan Carol</span>
                    </td>
                    <td className={cx('date')}>2 June 2021</td>
                    <td className={cx('amount')}>$122.00</td>
                    <td className={cx('status')}>
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className={cx('tr')}>
                    <td className={cx('user')}>
                        <img
                            className={cx('img')}
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                        />
                        <span className={cx('name')}>Susan Carol</span>
                    </td>
                    <td className={cx('date')}>2 June 2021</td>
                    <td className={cx('amount')}>$122.00</td>
                    <td className={cx('status')}>
                        <Button type="Approved" />
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default WidgetLg;
