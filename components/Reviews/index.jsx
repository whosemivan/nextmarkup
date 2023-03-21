
import React, { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import styles from './style.module.scss';
import { Navigation } from "swiper";


const Reviews = () => {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <section className={styles.reviews}>
            <h2 className={styles.reviews__title}>Отзывы учеников</h2>

            {/* desktop */}
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                loop={true}
                // navigation={true}
                ref={sliderRef}
                modules={[Navigation]}
                className={styles.mySwiper}
            >
                <SwiperSlide>
                    <div className={styles.reviews__slide}>
                        <img className={styles.reviews__image} src="/rev1-desk.jpg" alt="Отзыв учтаника курса" width="360" height="203" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.reviews__slide}>
                        <img className={styles.reviews__image} src="/rev2-desk.jpg" alt="Отзыв учтаника курса" width="360" height="243" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.reviews__slide}>
                        <img className={styles.reviews__image} src="/rev3-desk.jpg" alt="Отзыв учтаника курса" width="360" height="363" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <button className={styles.prevArrow} onClick={handlePrev}></button>
            <button className={styles.nextArrow} onClick={handleNext}></button>

            {/* mobile */}
            <ul className={styles.reviews__list}>
                <li className={styles.reviews__listItem}>
                    <img className={styles.reviews__image} src="/rev1.jpg" alt="Отзыв учтаника курса" width="348" height="193" />
                </li>
                <li className={styles.reviews__listItem}>
                    <img className={styles.reviews__image} src="/rev2.jpg" alt="Отзыв учтаника курса" width="348" height="235" />
                </li>
                <li className={styles.reviews__listItem}>
                    <img className={styles.reviews__image} src="/rev3.jpg" alt="Отзыв учтаника курса" width="348" height="351" />
                </li>
            </ul>
        </section>
    );
};

export default Reviews;