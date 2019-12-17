import React from 'react';
import "./style.scss";

const AppHeader = () =>{
    return (
        <div>
            <header>
                <div className="header">
                    <ul className="header-nav-menu">
                        <li className="header-nav-menu-item"><a href="#">Главная</a></li>
                        <li className="header-nav-menu-item"><a href="#">Наши проекты</a></li>
                        <li className="header-nav-menu-item"><a href="#">Услуги</a></li>
                        <li className="header-nav-menu-item"><a href="#">Новости</a></li>
                        <li className="header-nav-menu-item"><a href="#">Контакты</a></li>
                    </ul>
                    <hr className='header-element-hr'></hr>
                    <div className="header__title">
                        <div><p className="header__title-item">передовая IT студия</p></div>
                        <div><h1 className="header__title-item-info">Мы создаем легкие решения <br></br> сложных задач и проблем</h1></div>
                        <a href='#' className="header__title-btn">Наши проекты</a>
                    </div>
                </div>
            </header>
        </div>
    )
};

export default AppHeader;