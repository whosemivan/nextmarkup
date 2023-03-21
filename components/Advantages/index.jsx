import styles from './style.module.scss';

const Advantages = () => {
    return (
        <section className={styles.advantages}>
            <h2 className={styles.advantages__title}>Преимущества курса</h2>
            
            <ul className={styles.advantages__list}>
                <li className={styles.advantages__item}>
                    <p className={styles.advantages__text}>
                        дней обучения на практике
                    </p>
                </li>

                <li className={styles.advantages__item}>
                    <p className={styles.advantages__text}>
                        live-сессий с Алексом
                    </p>
                </li>

                <li className={styles.advantages__item}>
                    <p className={styles.advantages__text}>
                        лет практики в одном курсе
                    </p>
                </li>

                <li className={styles.advantages__item}>
                    <p className={styles.advantages__text}>
                        доступ в приватный чат
                    </p>
                </li>

                <li className={styles.advantages__item}>
                    <p className={styles.advantages__text}>
                        персональная поддержка
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default Advantages;