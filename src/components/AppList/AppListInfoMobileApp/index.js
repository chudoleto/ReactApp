import React from "react";
import "./style.css";

const AppListInfoMobileApp = () => {
    return (
        <div className="AppListInfoMobileApp">
            <div className='AppListInfoMobileApp-bl'>
                <div><h1>Мы создаем мобильные приложения <br></br> для крупных корпораций</h1></div>
                <div><p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой" для текстов на латинице с начала XVI века.</p></div>
                <div className="sintez-site">
                    <div className="sintez-site-item">
                        <div><img src='/images/Ellipse.png'></img></div>
                        <div>
                            <h3>Создание сайтов</h3>
                            <p>Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</p>
                        </div>
                    </div>
                    <div className="sintez-site-item">
                        <div><img src='/images/Ellipse.png'></img></div>
                        <div>
                            <h3>Создание сайтов</h3>
                            <p>Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</p>
                        </div>
                    </div>
                    <div className="sintez-site-item">
                        <div><img src='/images/Ellipse.png'></img></div>
                        <div>
                            <h3>Создание сайтов</h3>
                            <p>Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</p>
                        </div>
                    </div>
                </div>
                <a href='#' className="AppListInfoMobileApp-btn">Все услуги</a>
            </div>
        </div>
    )
};

export default AppListInfoMobileApp;