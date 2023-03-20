import styles from '../styles/reviews.module.scss';

const Reviews = () => {
    return (
        <section className={styles.reviews}>
            <h2 className={styles.reviews__title}>Отзывы учеников</h2>

            {/* desktop */}


            {/* mobile */}
            <ul className={styles.reviews__list}>
                <li>
                    <img className={styles.reviews__image} src="/rev1.png" alt="Отзыв учтаника курса" width="348" height="193" />
                </li>
                <li>
                    <img className={styles.reviews__image} src="/rev2.png" alt="Отзыв учтаника курса" width="348" height="235" />
                </li>
                <li>
                    <img className={styles.reviews__image} src="/rev3.png" alt="Отзыв учтаника курса" width="348" height="351" />
                </li>
            </ul>
        </section>
    );
};

export default Reviews;