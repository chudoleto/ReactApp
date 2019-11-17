import React, {Component} from 'react'
import header from "./hoc/header/header";
import list from "./hoc/list/list";
import footer from "./hoc/footer/footer";
import './index.css'

class App extends Component {
  render() {
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
                <hr></hr>
            </div>
          </header>
          <list>
            <div>
              контент
            </div>
          </list>
          <footer>
            <div className="footer"></div>
          </footer>
        </div>
    )
  }
}

export default App;
