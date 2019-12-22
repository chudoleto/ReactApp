import React from "react";
import "./style.scss"

const AppFooter = () => {
    const post = [
        {id: 1, title: "Контактная информация",  content1: "test@test.ru", content2: "+8 777 555 66 99", content3: "Москва, Бульвар Ленина 33"},
        {id: 2, title: "Основные ссылки", content1: "Главная", content2: "Наши проекты", content3: "Наши услуги", content4: "Контакты"},
        {id: 3, title: "Наши проекты", content1: "РосНано", content2: "Сколково", content3: "Проект “Восток” ", content4: "ТЭЦ Калининграда"},
        {id: 4, title: "Социальные сети", content1: "VK.com", content2: "Instagram", content3: "Facebook", content4: "Twitter"},
    ];

    const content = post.map((post) =>
        <ul className='footer__content-title' key = {post.id}>
            <li className="footer__content-title-item">{post.title}</li>
            <li className="footer__content-title-item-info">{post.content1}</li>
            <li className="footer__content-title-item-info">{post.content2}</li>
            <li className="footer__content-title-item-info">{post.content3}</li>
            <li className="footer__content-title-item-info">{post.content4}</li>
        </ul>
    );
    return (
        <div>
            <footer>
                <div className="footer">
                    <div className="footer__content">
                        {content}
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