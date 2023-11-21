import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { sliderItems } from '../Data/Data';

const cx = classNames.bind(styles);

function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);

    // Logic lướt Slide
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    // Logic lướt Slide tự động
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex < sliderItems.length - 1 ? prevIndex + 1 : 0));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('arrow', 'arrow-left')} onClick={() => handleClick('left')}>
                <ArrowLeftOutlined />
            </div>
            <div className={cx('container')} style={{ '--slideIndex': slideIndex }}>
                {sliderItems.map((item) => (
                    <div key={item.id} className={cx('slide', `${item.order}`)}>
                        <div className={cx('image-container')}>
                            <img className={cx('image')} src={item.img} alt="" />
                        </div>
                        <div className={cx('info-container')}>
                            <h1 className={cx('title')}>{item.title}</h1>
                            <p className={cx('description')}>{item.desc}</p>
                            <button className={cx('button')}>SHOW NOW</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={cx('arrow', 'arrow-right')} onClick={() => handleClick('right')}>
                <ArrowRightOutlined />
            </div>
        </div>
    );
}

export default Slider;
