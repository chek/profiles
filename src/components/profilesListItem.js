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
            <div className="row" onClick={this.viewProfile.bind(this)}>
                <div className="col-md-3" ></div>
                <div className="col-md-6 profile-name" >
                    {this.props.profile.firstName} {this.props.profile.lastName}
                </div>
                <div className="col-md-3" ></div>
            </div>
        )
    }
}

export default ProfilesListItem
