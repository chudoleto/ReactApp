import React, {Component} from 'react'
import './style.css'


class Header extends Component{
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Header;