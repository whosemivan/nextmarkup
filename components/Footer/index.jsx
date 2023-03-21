import styles from './style.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__wrapper}>
                <a href="#" className={styles.footer__linkLogo}>
                    <img className={styles.footer__imageLogo} src="/logo-mobile.svg" alt="Crypto Weteran Logo" width="186" height="37" />
                </a>

                <ul className={styles.footer__infoList}>
                    <li className={styles.footer__infoItem}>
                        2023 CryptoWeteran
                    </li>
                    <li className={styles.footer__infoItem}>
                        ИП Харисов Р.А. ОГРН 7652138768321, ИНН 372657546231
                    </li>
                </ul>

                <ul className={styles.footer__navList}>
                    <li className={styles.footer__navItem}>
                        <a className={styles.footer__navLink} href="#">
                            Пользовательское соглашение
                        </a>
                    </li>
                    <li className={styles.footer__navItem}>
                        <a className={styles.footer__navLink} href="#">
                            Оферта
                        </a>
                    </li>
                    <li className={styles.footer__navItem}>
                        <a className={styles.footer__navLink} href="#">
                            Договор публичной оферты
                        </a>
                    </li>
                    <li className={styles.footer__navItem}>
                        <a className={styles.footer__navLink} href="#">
                            Согласие на обработку персональных данных
                        </a>
                    </li>
                    <li className={styles.footer__navItem}>
                        <a className={styles.footer__navLink} href="#">
                            Уведомление об использовании cookies
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;