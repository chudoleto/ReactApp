import React from "react";
import "./style.scss"

const arr = ['Главная','Наши проекты','Наши услуги','Контакты']
const listItems = arr.map((arrItem)=>
    <li>{arrItem}</li>
);

const AppFooter = () => {
    return (
        <div>
            <footer>
                <div className="footer">
                    <div className="footer__content">
                        <ul className='footer__content-title'>
                            <li className="footer__content-title-item">Контактная информация</li>
                            <li className="footer__content-title-item-info"><img src="/images/icon/envelope.png" alt="картинка"></img> test@test.ru</li>
                            <li className="footer__content-title-item-info"><img src="/images/icon/call.png" alt="картинка"></img> +8 777 555 66 99</li>
                            <li className="footer__content-title-item-info"><img src="/images/icon/placeholder.png" alt="картинка"></img> Москва, Бульвар Ленина 33</li>
                        </ul>
                        <ul className='footer__content-title'>
                            <li className="footer__content-title-item">Основные ссылки</li>
                            <li className="footer__content-title-item-info"><img src="/images/icon/right-arrow.png" alt="картинка"></img> Главная</li>
                            <li className="footer__content-title-item-info"><img src="/images/icon/right-arrow.png" alt="картинка"></img> Наши проекты</li>
                            <li className="footer__content-title-item-info"><img src="/images/icon/right-arrow.png" alt="картинка"></img> Наши услуги</li>
                            <li className="footer__content-title-item-info"><img src="/images/icon/right-arrow.png" alt="картинка"></img> Контакты</li>
                        </ul>
                        <ul className='footer__content-title'>
                            <li className="footer__content-title-item">Наши проекты</li>
                            <li className="footer__content-title-item-info"><img src="/images/icon/right-arrow.png" alt="картинка"></img> РосНано</li>
                            <li className="footer__content-title-item-info"><img src="/images/icon/right-arrow.png" alt="картинка"></img> Сколково</li>
                            <li className="footer__content-title-item-info"><img src="/images/icon/right-arrow.png" alt="картинка"></img> Проект “Восток”</li>
                            <li className="footer__content-title-item-info"><img src="/images/icon/right-arrow.png" alt="картинка"></img> ТЭЦ Калининграда</li>
                        </ul>
                        <ul className='footer__content-title'>
                            <li className="footer__content-title-item">Социальные сети</li>
                            <li className="footer__content-title-item-info"><img src="/images/icon/right-arrow.png" alt="картинка"></img> VK.com</li>
                            <li className="footer__content-title-item-info"><img src="/images/icon/right-arrow.png" alt="картинка"></img> Instagram</li>
                            <li className="footer__content-title-item-info"><img src="/images/icon/right-arrow.png" alt="картинка"></img> Facebook</li>
                            <li className="footer__content-title-item-info"><img src="/images/icon/right-arrow.png" alt="картинка"></img> Twitter</li>
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