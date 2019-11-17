import React, {Component} from 'react'

class footer extends Component{
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default footer;