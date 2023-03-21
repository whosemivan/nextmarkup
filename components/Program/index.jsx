import styles from './style.module.scss';

const Program = () => {
    return (
        <section className={styles.program}>
            <h2 className={styles.program__title}>Программа курса</h2>

            <h3 className={styles.program__listTitle}>Модуль 1</h3>
            <ul className={styles.program__list}>
                <li className={styles.program__item}>
                    Как зарегистрироваться на бирже?
                </li>
            </ul>

            <h3 className={styles.program__listTitle}>Модуль 2</h3>
            <ul className={styles.program__list}>
                <li className={styles.program__item}>
                    Как создать аккаунт на бирже?
                </li>
                <li className={styles.program__item}>
                    Что такое биржа Binance и Kucoin?
                </li>
                <li className={styles.program__item}>
                    Что такое DEX и CEX?
                </li>
                <li className={styles.program__item}>
                    Что такое кошельки?
                </li>
            </ul>

            <h3 className={styles.program__listTitle}>Модуль 3</h3>
            <ul className={styles.program__list}>
                <li className={styles.program__item}>
                    Что такое P2P сервисы?
                </li>
                <li className={styles.program__item}>
                    Что такое спред сервисы?
                </li>
                <li className={styles.program__item}>
                    Как зарабатывать на P2P сервисах?
                </li>
                <li className={styles.program__item}>
                    Какие меры безопасности необходимо соблюдать при проведении операций P2P?
                </li>
            </ul>

            <h3 className={styles.program__listTitle}>Модуль 4</h3>
            <ul className={styles.program__list}>
                <li className={styles.program__item}>
                    Что такое спот?
                </li>
                <li className={styles.program__item}>
                    Что такое ордер и какие виды ордеров существуют?
                </li>
                <li className={styles.program__item}>
                    Как зарабатывать на спот торговле?
                </li>
                <li className={styles.program__item}>
                    Что такое инвестиционная маржа и спекулятивная маржа?
                </li>
                <li className={styles.program__item}>
                    Как выбирать монеты для покупки?
                </li>
                <li className={styles.program__item}>
                    Как извлекать прибыль безопаснее всего?
                </li>
                <li className={styles.program__item}>
                    Что такое кошельки?
                </li>
                <li className={styles.program__item}>
                    Как влияет психология на торговлю?
                </li>
                <li className={styles.program__item}>
                    Что такое OSO?
                </li>
            </ul>

            <h3 className={styles.program__listTitle}>Модуль 5</h3>
            <ul className={styles.program__list}>
                <li className={styles.program__item}>
                    Что такое фьючерсы?
                </li>
                <li className={styles.program__item}>
                    Как зарабатывать на фьючерсах?
                </li>
                <li className={styles.program__item}>
                    Какие есть виды ордеров для торговли на фьючерсах?
                </li>
                <li className={styles.program__item}>
                    Как защититься от потерь?
                </li>
                <li className={styles.program__item}>
                    Как контролировать риски?
                </li>
                <li className={styles.program__item}>
                    В чем особенности работы с телефона и компьютера при торговле на фьючерсах?
                </li>
                <li className={styles.program__item}>
                    Что такое стоп лосс и take profit?
                </li>
            </ul>

            <h3 className={styles.program__listTitle}>Модуль 6</h3>
            <ul className={styles.program__list}>
                <li className={styles.program__item}>
                    Что такое ETF контракт?
                </li>
                <li className={styles.program__item}>
                    Как зарабатывать на ETF?
                </li>
                <li className={styles.program__item}>
                    В чем отличие от фьючерса?
                </li>
                <li className={styles.program__item}>
                    Что такое кредитные плечи?
                </li>
                <li className={styles.program__item}>
                    Что такое фиксированное третье плечо?
                </li>
                <li className={styles.program__item}>
                    В чем плюсы третьего кредитного плеча?
                </li>
                <li className={styles.program__item}>
                    Как выбирать ETF?
                </li>
            </ul>

            <h3 className={styles.program__listTitle}>Модуль 7</h3>
            <ul className={styles.program__list}>
                <li className={styles.program__item}>
                    Что такое копитрейдинг?
                </li>
                <li className={styles.program__item}>
                    Как зарабатывать на копировании сделок успешных трейдеров?
                </li>
                <li className={styles.program__item}>
                    Как выбирать прибыльного трейдера?
                </li>
                <li className={styles.program__item}>
                    Как анализировать статистику?
                </li>
                <li className={styles.program__item}>
                    Какие меры предосторожности необходимо соблюдать при копитрейдинге?
                </li>
                <li className={styles.program__item}>
                    Какие стратегии можно использовать?
                </li>
            </ul>

            <h3 className={styles.program__listTitle}>Модуль 8. FAQ сессия </h3>
            <ul className={styles.program__list}>
                <li className={styles.program__item}>
                    Отвечаем на вопросы, которые остались после курса.
                </li>
                <li className={styles.program__item}>
                    Какие трудности возникли при прохождении курса?
                </li>
                <li className={styles.program__item}>
                    Как применить полученные знания?
                </li>
                <li className={styles.program__item}>
                    Приглашение в приватный чат с опытными трейдерами.
                </li>
            </ul>
        </section>
    );
};

export default Program;