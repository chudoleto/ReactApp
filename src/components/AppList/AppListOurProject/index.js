import React from 'react';
import './style.css'

const AppListOurProject = () => {
    return (
        <div className="AppListOurProject">
            <div className='AppListOurProject-bl'>
                <div>
                    <h3>Наши проекты</h3>
                </div>
                <div>
                    <p> Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem <br></br> Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                </div>
                <div className='AppListOurProject-bl-img'>
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
