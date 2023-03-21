import styles from '../styles/index.module.scss';
import Head from 'next/head';

import FirstScreen from '../components/FirstScreen';
import Advantages from '../components/Advantages';
import Program from '../components/Program';
import Reviews from '../components/Reviews';
import Rates from '../components/Rates';
import Creators from '../components/Creators';
import Footer from '../components/Footer';

const Index = () => {
    return (
        <>
            <Head>
                <meta keywords="Быстрый старт заработка на криптовалюте, Алекс Донкан, Как зарегистрироваться на бирже?, Как создать аккаунт на бирже?, Что такое DEX и CEX?, Что такое кошельки?, Что такое P2P сервисы?, Что такое фьючерсы?, Что такое ETF контракт?, Что такое копитрейдинг?, Binance, Kucoin, Crypto Weteran, криптовалюта" />
                <title>Crypto Weteran</title>
            </Head>
            <FirstScreen />
            <Advantages />
            <Program />
            <Reviews />
            <Rates />
            <Creators />
            <Footer />
        </>
    );
};

export default Index;





