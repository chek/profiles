import React, { Component } from 'react'


class ProfileInfo extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        };
    }
    componentDidMount() {
    }
    render() {
        return (
            <li>
                {this.props.profile.firstName} {this.props.profile.lastName}
            </li>
        )
    }
}

export default ProfileInfo