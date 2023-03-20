import styles from '../styles/creators.module.scss';

const Creators = () => {
    return (
        <div className={styles.creators}>
            <div className={styles.creators__projects}>
                <h2 className={styles.creators__projectsTitle}>От создателя проектов</h2>
                <img className={styles.creators__image} src="/signals.png" alt="Signals" width="143" height="143" />
                <img className={styles.creators__image} src="/signals2.png" alt="Weteran signals" width="143" height="143" />
            </div>
            <div className={styles.creators__platforms}>
                <h2 className={styles.creators__platformsTitle}>Работаем на</h2>
                <img className={styles.creators__platformsBinance} src="/binance.svg" alt="Binance" width="160" height="30" />
                <img className={styles.creators__platformsKucoin} src="/kucoin.svg" alt="Kucoin" width="125" height="29" />
            </div>
        </div>
    );
};

export default Creators;