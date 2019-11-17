import React, {Component} from 'react'

class list extends Component{
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default list;