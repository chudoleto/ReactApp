import React from "react";
import "./style.scss";

const AppListInfoMobileApp = () => {
    return (
        <div className="info-mobile-app">
            <div className='info-mobile-app__tittle'>
                <h1>Мы создаем мобильные приложения <br></br> для крупных корпораций</h1>
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                <div className="info-mobile-app__tittle__sintez-site">
                    <div className="info-mobile-app__tittle__sintez-site__item">
                        <div><img src='/images/Group1.png'></img></div>
                        <div>
                            <h3>Создание сайтов</h3>
                            <p>Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</p>
                        </div>
                    </div>
                    <div className="info-mobile-app__tittle__sintez-site__item">
                        <div><img src='/images/Group1.png'></img></div>
                        <div>
                            <h3>Создание сайтов</h3>
                            <p>Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</p>
                        </div>
                    </div>
                    <div className="info-mobile-app__tittle__sintez-site__item">
                        <div><img src='/images/Group1.png'></img></div>
                        <div>
                            <h3>Создание сайтов</h3>
                            <p>Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</p>
                        </div>
                    </div>
                </div>
                <a href='#' className="info-mobile-app__tittle__btn">Все услуги</a>
            </div>
        </div>
    )
};

export default AppListInfoMobileApp;