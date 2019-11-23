import React, {Component} from 'react'
import header from "./components/header/index";
import main from "./components/main/index";
import footer from "./components/footer/index";

class App extends Component {
  render() {
    return (
        <div>
            <header>
                <div className="header">
                    <ul className="nav-menu">
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">Наши проекты</a></li>
                        <li><a href="#">Услуги</a></li>
                        <li><a href="#">Новости</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                    <hr></hr>
                    <div className="title">
                        <div><p>передовая IT студия</p></div>
                        <div><h1>Мы создаем легкие решения сложных задач и проблем</h1></div>
                        <div className="title-btn"><a href='#'>Наши проекты</a></div>
                    </div>
                </div>
            </header>
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
            <footer>
                <div className="footer">
                    <div className="footer-content">
                        <ul>
                            <li className="footer-title">Контактная информация</li>
                            <li>test@test.ru</li>
                            <li>+8 777 555 66 99</li>
                            <li>Москва, Бульвар Ленина 33</li>
                        </ul>
                        <ul>
                            <li className="footer-title">Основные ссылки</li>
                            <li>Главная</li>
                            <li>Наши проекты</li>
                            <li>Наши услуги</li>
                            <li>Контакты</li>
                        </ul>
                        <ul>
                            <li className="footer-title">Наши проекты</li>
                            <li>РосНано</li>
                            <li>Сколково</li>
                            <li>Проект “Восток”</li>
                            <li>ТЭЦ Калининграда</li>
                        </ul>
                        <ul>
                            <li className="footer-title">Социальные сети</li>
                            <li>VK.com</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    <div>
                        <hr></hr>
                    </div>
                    <div className="copyright"><p>(с) 2019. Все права защищены.</p></div>
                </div>
            </footer>
        </div>
    )
  }
}

export default App;
