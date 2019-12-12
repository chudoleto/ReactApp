import React from 'react';
import "./style.css";

const AppHeader = () =>{
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
                    <hr className='AppHeader-element'></hr>
                    <div className="title">
                        <div><p>передовая IT студия</p></div>
                        <div><h1>Мы создаем легкие решения сложных задач и проблем</h1></div>
                        <a href='#' className="title-btn">Наши проекты</a>
                    </div>
                </div>
            </header>
        </div>
    )
};

export default AppHeader;