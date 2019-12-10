import React from "react";
import "./style.css";

const AppList = () => {
    return (
        <div>
            <main>
                <div className="main-container">
                    <div className="content-container1">
                        <div><h1>Мы создаем мобильные приложения для крупных корпораций</h1></div>
                        <div><p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p></div>
                        <div className="sintez-site">
                            <div className="sintez-site-item">
                                <div>иконка</div>
                                <div>
                                    <h3>Создание сайтов</h3>
                                    <p>Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</p>
                                </div>
                            </div>
                            <div className="sintez-site-item">
                                <div>иконка</div>
                                <div>
                                    <h3>Создание сайтов</h3>
                                    <p>Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</p>
                                </div>
                            </div>
                            <div className="sintez-site-item">
                                <div>иконка</div>
                                <div>
                                    <h3>Создание сайтов</h3>
                                    <p>Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</p>
                                </div>
                            </div>
                        </div>
                        <div className="content-container1-btn"><a href='#'>Все услуги</a></div>
                    </div>
                    <div className="content-container2">
                        <div className="standart-development">
                            <div className="standart-development-item-1">
                                <h3>Высокие стандарты разработки</h3>
                                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem
                                    Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
                                    стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                                <a href="#">Подробнее о компании</a>
                            </div>
                            <div className="standart-development-item-2"><img src="" alt="картинка"></img></div>
                        </div>
                        <hr></hr>
                        <div className="standart-development-our-project">
                            <div className="standart-development-our-project-item">
                                <div>иконка</div>
                                <h3>125</h3>
                                <p>our projects</p>
                            </div>
                            <div className="standart-development-our-project-item">
                                <div>иконка</div>
                                <h3>125</h3>
                                <p>our projects</p>
                            </div>
                            <div className="standart-development-our-project-item">
                                <div>иконка</div>
                                <h3>125</h3>
                                <p>our projects</p>
                            </div>
                            <div className="standart-development-our-project-item">
                                <div>иконка</div>
                                <h3>125</h3>
                                <p>our projects</p>
                            </div>
                            <div className="standart-development-our-project-item">
                                <div>иконка</div>
                                <h3>125</h3>
                                <p>our projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
};

export default AppList;