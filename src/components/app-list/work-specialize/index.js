import React from 'react';
import "./style.scss";

const AppListWorkSpecialize = () => {
    return (
        <div className="work-specialize">
            <div className='work-specialize__container'>
                <div className='work-specialize__container__title'>
                    <h3>
                        Наши работы, на которых <br></br> мы специализируемся
                    </h3>
                    <a href='#' className="work-specialize__container__title__btn">Все услуги</a>
                </div>
                <div className="work-specialize__container__info">
                    <div>
                        <img src="/images/Rectangle2.2.png" alt="картинка"></img>
                        <h3><span>01.</span> Исследование и упаковка</h3>
                        <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. <br></br>Lorem Ipsum
                            является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                        <a href='#'>Подробнее</a>
                    </div>
                    <div>
                        <img src="/images/Rectangle2.2.png" alt="картинка"></img>
                        <h3><span>01.</span> Исследование и упаковка</h3>
                        <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. <br></br>Lorem Ipsum
                            является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                        <a href='#'>Подробнее</a>
                    </div>
                    <div>
                        <img src="/images/Rectangle2.2.png" alt="картинка"></img>
                        <h3><span>01.</span> Исследование и упаковка</h3>
                        <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. <br></br>Lorem Ipsum
                            является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                        <a href='#'>Подробнее</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AppListWorkSpecialize;

