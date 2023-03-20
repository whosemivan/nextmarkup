
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import styles from '../styles/reviews.module.scss';
import { Navigation } from "swiper";


const Reviews = () => {
    return (
        <section className={styles.reviews}>
            <h2 className={styles.reviews__title}>Отзывы учеников</h2>

            {/* desktop */}
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                loop={true}
                navigation={true}
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