import styles from '../styles/firstScreen.module.scss';

const FirstScreen = () => {
    return (
        <section className={styles.firstScreen}>
            <h1 className={styles.firstScreen__infTitle}>Crypto Weteran</h1>
            <a className={styles.firstScreen__logoLink} href="#">
                <img className={styles.firstScreen__logoImage} src="/logo-mobile.svg" alt="Crypto Weteran Logo" width="186" height="37" />
            </a>

            <div className={styles.firstScreen__wrapper}>

                <div className={styles.firstScreen__container}>
                    <h3 className={styles.firstScreen__author}>Алекс Донкан</h3>
                    <span className={styles.firstScreen__info}>Авторский Интенсив</span>

                    <h2 className={styles.firstScreen__title}>Быстрый старт заработка на криптовалюте</h2>
                    <p className={styles.firstScreen__text}>
                        5 проверенных методов для новичка
                    </p>
                </div>

                <iframe className={styles.firstScreen__video} width="345" height="239" src="https://www.youtube.com/embed/1A4V_CTclT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <a className={styles.firstScreen__link} href="#">Начать бесплатно</a>
            </div>
        </section>
    );
};

export default FirstScreen;