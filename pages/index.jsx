import styles from '../styles/index.module.scss';
import Head from 'next/head';

import FirstScreen from '../components/FirstScreen';
import Advantages from '../components/Advantages';
import Program from '../components/Program';
import Reviews from '../components/Reviews';
import Rates from '../components/Rates';
import Creators from '../components/Creators';

const Index = () => {
    return (
        <>
            <Head>
                <meta keywords="Быстрый старт заработка на криптовалюте, Алекс Донкан, Как зарегистрироваться на бирже?, Как создать аккаунт на бирже?, Что такое биржа Binance и Kucoin?, Что такое DEX и CEX?, Что такое кошельки?, Что такое P2P сервисы?, Что такое спред сервисы?, Как зарабатывать на P2P сервисах?, Какие меры безопасности необходимо соблюдать при проведении операций P2P?, Что такое фьючерсы?, Как зарабатывать на фьючерсах?, Какие есть виды ордеров для торговли на фьючерсах?, Как защититься от потерь?, Как контролировать риски?, В чем особенности работы с телефона и компьютера при торговле на фьючерсах?, Что такое стоп лосс и take profit?, Что такое ETF контракт?, Как зарабатывать на ETF?, В чем отличие от фьючерса?, Что такое кредитные плечи?, Что такое фиксированное третье плечо?, В чем плюсы третьего кредитного плеча?, Как выбирать ETF?, Что такое копитрейдинг?, Как зарабатывать на копировании сделок успешных трейдеров?, Как выбирать прибыльного трейдера?, Как анализировать статистику?, Какие меры предосторожности необходимо соблюдать при копитрейдинге?, Какие стратегии можно использовать?, Binance, Kucoin, Crypto Weteran, Крипта, криптовалюта" />
                <title>Crypto Weteran</title>
            </Head>
           <FirstScreen/>
           <Advantages/>
           <Program/>
           <Reviews/>
           <Rates/>
           <Creators/>
        </>
    );
};

export default Index;





