import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.type = "text/javascript";
        script.
    })

    return (
        <div className="home projects" id="home">
            <script src="./js/mixitup.min.js"/>
            <script src="./js/home.js"/>
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
            <h2 className="home__title">Nano Projects</h2>
            <div className="home__filters">
                <span className="home__item active-home" data-filter="all">todos</span>
                <span className="home__item" data-filter=".mentor">Frontend Mentor</span>
                <span className="home__item" data-filter=".dio">Dio</span>
                <span className="home__item" data-filter=".my">Pessoais</span>
                <span className="home__item" data-filter=".others">Outros</span>
            </div>

            <div className="home__container container grid">

                <div className="home__card mix my">
                    <img src="https://i.imgur.com/X2nyvYr.png" alt="" className="home__img" />

                    <h3 className="home__title">Pessoais</h3>

                    <a href="https://xadrez-react.vercel.app" target='_blank' className="home__button">
                        xadrez react aleatório <i className='bx bx-right-arrow-alt home__icon'></i>
                    </a>
                </div>

                <div className="home__card mix my">
                    <img src="https://i.imgur.com/0LoHeUP.png" alt="" className="home__img" />

                    <h3 className="home__title">Pessoais</h3>

                    <a href="https://cronometro-vert.vercel.app" target='_blank' className="home__button">
                        cronometro <i className='bx bx-right-arrow-alt home__icon'></i>
                    </a>
                </div>

                <div className="home__card mix mentor">
                    <img src="https://i.imgur.com/Bqg3wre.png" alt="" className="home__img" />

                    <h3 className="home__title">Frontend Mentor</h3>

                    <a href="https://desafio-qr-code.vercel.app" target='_blank' className="home__button">
                        QR-code chalenge <i className='bx bx-right-arrow-alt home__icon'></i>
                    </a>
                </div>
            </div>
        </div>
        
    );

};

export default Home;