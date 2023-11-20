import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import Announcement from '../../components/Annoucement/Announcement';
import Slider from '../../components/Slider/Slider';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Announcement />
            <Navbar />
            <Slider />
        </div>
    );
}

export default Home;
