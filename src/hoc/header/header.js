import React, {Component} from 'react'
// import 'header.css'

class header extends Component{
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default header;