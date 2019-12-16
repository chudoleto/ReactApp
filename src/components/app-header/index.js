import React from 'react';
import "./style.scss";

const AppHeader = () =>{
    return (
        <div>
            <header>
                <div className="header">
                    <ul className="header___nav-menu">
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">Наши проекты</a></li>
                        <li><a href="#">Услуги</a></li>
                        <li><a href="#">Новости</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                    <hr className='header__element-hr'></hr>
                    <div className="header__title">
                        <div><p>передовая IT студия</p></div>
                        <div><h1>Мы создаем легкие решения <br></br> сложных задач и проблем</h1></div>
                        <a href='#' className="header__title-btn">Наши проекты</a>
                    </div>
                </div>
            </header>
        </div>
    )
};

export default AppHeader;