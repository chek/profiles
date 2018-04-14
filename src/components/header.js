import React, { Component } from 'react'


class Title extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        };
    }
    componentDidMount() {

    }
    render() {
        return (
            <h1>
                {this.props.title}
            </h1>
        )
    }
}

export default Title

