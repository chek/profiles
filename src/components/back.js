import React, { Component } from 'react'


class Back extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        };
    }
    componentDidMount() {

    }
    back(e) {
        this.props.history.goBack()
    }
    render() {
        return (
            <div className="back" onClick={this.back.bind(this)}>
                <i class="fas fa-angle-left"></i>
            </div>
        )
    }
}

export default Back

