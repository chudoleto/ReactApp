import React from "react";
import "./style.scss"

const AppFooter = () => {
    return (
        <div>
            <footer>
                <div className="footer">
                    <div className="footer__content">
                        <ul>
                            <li className="footer__content__title">Контактная информация</li>
                            <li><img src="/images/icon/envelope.png" alt="картинка"></img> test@test.ru</li>
                            <li><img src="/images/icon/call.png" alt="картинка"></img> +8 777 555 66 99</li>
                            <li><img src="/images/icon/placeholder.png" alt="картинка"></img> Москва, Бульвар Ленина 33</li>
                        </ul>
                        <ul>
                            <li className="footer__content__title">Основные ссылки</li>
                            <li><img src="/images/icon/right-arrow.png" alt="картинка"></img> Главная</li>
                            <li><img src="/images/icon/right-arrow.png" alt="картинка"></img> Наши проекты</li>
                            <li><img src="/images/icon/right-arrow.png" alt="картинка"></img> Наши услуги</li>
                            <li><img src="/images/icon/right-arrow.png" alt="картинка"></img> Контакты</li>
                        </ul>
                        <ul>
                            <li className="footer__content__title">Наши проекты</li>
                            <li><img src="/images/icon/right-arrow.png" alt="картинка"></img> РосНано</li>
                            <li><img src="/images/icon/right-arrow.png" alt="картинка"></img> Сколково</li>
                            <li><img src="/images/icon/right-arrow.png" alt="картинка"></img> Проект “Восток”</li>
                            <li><img src="/images/icon/right-arrow.png" alt="картинка"></img> ТЭЦ Калининграда</li>
                        </ul>
                        <ul>
                            <li className="footer__content__title">Социальные сети</li>
                            <li><img src="/images/icon/right-arrow.png" alt="картинка"></img> VK.com</li>
                            <li><img src="/images/icon/right-arrow.png" alt="картинка"></img> Instagram</li>
                            <li><img src="/images/icon/right-arrow.png" alt="картинка"></img> Facebook</li>
                            <li><img src="/images/icon/right-arrow.png" alt="картинка"></img> Twitter</li>
                        </ul>
                    </div>
                    <div>
                        <hr className='footer__element-hr'></hr>
                    </div>
                    <div className="footer__copyright"><p>(с) 2019. Все права защищены.</p></div>
                </div>
            </footer>
        </div>
    )
};

export default AppFooter;