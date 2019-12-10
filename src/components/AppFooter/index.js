import React from "react";
import "./style.css"

const AppFooter = () => {
    return (
        <div>
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
};

export default AppFooter;