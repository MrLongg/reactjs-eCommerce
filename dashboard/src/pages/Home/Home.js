import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import Chart from '../../components/Chart/Chart';
import { userData } from '../../dummyData';

const cx = classNames.bind(styles);
function Home () {
    return (
        <div className={cx('wrapper')}>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" dataKey="Active User" grid/>
        </div>
    )
}

export default Home