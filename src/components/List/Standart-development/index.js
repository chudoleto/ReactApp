import React from "react";
import "./style.scss";

const AppListStandartDevelopment = () => {
    return (
        <div className="standart-development">
            <div className="standart-development__info">
                <div className="standart-development__info__text">
                    <h3>Высокие стандарты разработки</h3>
                    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem
                        Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
                        стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                    <a href="#">Подробнее о компании</a>
                </div>
                <div className="standart-development__info__img"><img src="/images/Rectangle2.png" alt="картинка"></img></div>
            </div>

            <hr className='standart-development-element-hr'></hr>

            <div className="standart-development__our-project">
                <div className="standart-development__our-project__item">
                    <div className="standart-development__our-project__item__info">
                        <div><img src="/images/web-programming.png" alt="картинка"></img></div>
                        <div><h3>125</h3></div>
                    </div>
                    <p>our projects</p>
                </div>
                <div className="standart-development__our-project__item">
                    <div className="standart-development__our-project__item__info">
                        <div><img src="/images/web-programming.png" alt="картинка"></img></div>
                        <div><h3>125</h3></div>
                    </div>
                    <p>our projects</p>
                </div>
                <div className="standart-development__our-project__item">
                    <div className="standart-development__our-project__item__info">
                        <div><img src="/images/web-programming.png" alt="картинка"></img></div>
                        <div><h3>125</h3></div>
                    </div>
                    <p>our projects</p>
                </div>
                <div className="standart-development__our-project__item">
                    <div className="standart-development__our-project__item__info">
                        <div><img src="/images/web-programming.png" alt="картинка"></img></div>
                        <div><h3>125</h3></div>
                    </div>
                    <p>our projects</p>
                </div>
                <div className="standart-development__our-project__item">
                    <div className="standart-development__our-project__item__info">
                        <div><img src="/images/web-programming.png" alt="картинка"></img></div>
                        <div><h3>125</h3></div>
                    </div>
                    <p>our projects</p>
                </div>
            </div>
        </div>
    )
};

export default AppListStandartDevelopment;