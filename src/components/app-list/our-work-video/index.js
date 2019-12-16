import React from 'react';
import "./style.scss"

const AppListOurWorkVideo = () => {
    return (
        <div className="video-our-work">
            <div className="video-our-work__title">
                <div className="video-our-work__title__info">
                    <h3>Видео о нашей работе</h3>
                    <p>Просто посмотрите как мы работаем</p>
                </div>
            </div>
            <div className="video-our-work__video">
                <div className='video-our-work__video__item'>

                </div>
            </div>
            <hr className='video-our-work__element-hr'></hr>
            <form>
                <div className="video-our-work__info-link">
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