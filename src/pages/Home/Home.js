import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import Announcement from '../../components/Annoucement/Announcement';
import Slider from '../../components/Slider/Slider';
import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Home;
