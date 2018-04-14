import React, { Component } from 'react'
import store from '../store_modules/store'
import actions from '../store_modules/stateActions'


class ProfilesListItem extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        };
    }
    componentDidMount() {
    }
    viewProfile() {
        store.dispatch({type: actions.state.CURRENT_PROFILE, currentProfile: this.props.profile});
        this.props.history.push('profile');
    }
    render() {
        return (
            <li onClick={this.viewProfile.bind(this)}>
                {this.props.profile.firstName} {this.props.profile.lastName}
            </li>
        )
    }
}

export default ProfilesListItem
