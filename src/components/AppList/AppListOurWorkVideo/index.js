import React from 'react';
import "./style.css"

const AppListOurWorkVideo = () => {
    return (
        <div className="AppListOurWorkVideo">
            <div className="AppListOurWorkVideo-element">
                <div className="AppListOurWorkVideo-element-info">
                    <h3>Видео о нашей работе</h3>
                    <p>Просто посмотрите как мы работаем</p>
                </div>
            </div>
            <div className="AppListOurWorkVideo-element-video">
                <div className='AppListOurWorkVideo-element-video-item'>

                </div>
            </div>
            <hr className='AppListOurWorkVideo-element-hr'></hr>
<form>
            <div className="AppListOurWorkVideo-element-info-link">
                <h3>Подпишитесь на нашу рассылку</h3>
                <p>Полезные статьи, акции, новости - получите все это сейчас!</p>
                <div className="search">
                    <input type="search" placeholder="Ваш e-mail"></input>
                    <input type="submit" value="Подписаться"></input>
                </div>
                <span>Мы не шлем спам, и передаем никому ваши данные.</span>
            </div>
</form>
        </div>
    )
};

export default AppListOurWorkVideo;