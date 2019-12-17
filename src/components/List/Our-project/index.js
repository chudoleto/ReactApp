import React from 'react';
import './style.scss'

const AppListOurProject = () => {
    return (
        <div className="our-project">
            <div className='our-project__info'>
                <div>
                    <h3>Наши проекты</h3>
                </div>
                <div>
                    <p> Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem <br></br> Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                </div>
                <div className='our-project__info__img'>
                    <div><img src="/images/Rectangle3.png" alt="картинка"></img></div>
                    <div><img src="/images/Rectangle3.png" alt="картинка"></img></div>
                    <div><img src="/images/Rectangle3.png" alt="картинка"></img></div>
                    <div><img src="/images/Rectangle3.png" alt="картинка"></img></div>
                </div>
            </div>
        </div>
    )
};

export default AppListOurProject;
