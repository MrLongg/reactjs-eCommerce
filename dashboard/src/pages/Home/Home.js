import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import Chart from '../../components/Chart/Chart';
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import WidgetLg from '../../components/WidgetLg/WidgetLg';
import { useEffect, useMemo, useState } from 'react';
import { userRequest } from '../../requestMethod';

const cx = classNames.bind(styles);
function Home() {
    const [userStats, setUserStats] = useState([])

    const MONTHS = useMemo(
        () => [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        []
    )

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get('/users/stats')
                res.data.map((item) => 
                    setUserStats((prev) => [
                        ...prev,
                        { name: MONTHS[item._id - 1], 'Active User': item.total }
                    ])
                )
            } catch (err) {
                console.log(err);
            }
        }
        getStats()
    }, [MONTHS])

    return (
            <div className={cx('wrapper')}>
                <FeaturedInfo />
                <Chart data={userStats} title="User Analytics" dataKey="Active User" grid />
                <div className={cx('home-widgets')}>
                    <WidgetSm />
                    <WidgetLg />
                </div>
            </div>
    );
}

export default Home;
