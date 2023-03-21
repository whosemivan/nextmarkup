import styles from './style.module.scss';

const Rates = () => {
    return (
        <section className={styles.rates}>
            <h2 className={styles.rates__title}>Тарифы обучения</h2>

            <ul className={styles.rates__list}>
                <li className={styles.rates__item}>
                    <h3 className={styles.rates__itemTitle}>
                        FREE
                    </h3>
                    <p className={styles.rates__text}>
                        Пройди теоретическую подготовку
                    </p>
                    <span className={styles.rates__price}>
                        Бесплатно
                    </span>
                    <button className={styles.rates__btn}>
                        Пройти прямо сейчас
                    </button>
                </li>

                <li className={styles.rates__item}>
                    <h3 className={styles.rates__itemTitle}>
                        PRO
                    </h3>
                    <ul className={styles.rates__cardList}>
                        <li className={styles.rates__cardItem}>
                            6 live-сессий
                        </li>
                        <li className={styles.rates__cardItem}>
                            доступ в приват чат
                        </li>
                        <li className={styles.rates__cardItem}>
                            углубленное обучение
                        </li>
                        <li className={styles.rates__cardItem}>
                            сертификат об обучении
                        </li>
                        <li className={styles.rates__cardItem}>
                            практическое освоение каждого инструмента
                        </li>
                        <li className={styles.rates__cardItem}>
                            сертификат об обучении
                        </li>
                    </ul>
                    <span className={styles.rates__price}>
                        3 850 ₽
                    </span>
                    <button className={styles.rates__btn}>
                        Начать прямо сейчас
                    </button>
                </li>

                <li className={styles.rates__item}>
                    <h3 className={styles.rates__itemTitle}>
                        PERSONAL
                    </h3>
                    
                    <ul className={styles.rates__cardList}>
                        <li className={styles.rates__cardItem}>
                            Все, что входит в тариф <span className={styles.rates__itemDecor}>PRO</span>
                        </li>
                        <li className={styles.rates__cardItem}>
                            персональная поддержка
                        </li>
                        <li className={styles.rates__cardItem}>
                            доступ к записи курса
                        </li>
                    </ul>
                    <span className={styles.rates__price}>
                        8 580 ₽
                    </span>
                    <button className={styles.rates__btn}>
                        Начать прямо сейчас
                    </button>
                </li>
            </ul>

        </section>
    );
};

export default Rates;