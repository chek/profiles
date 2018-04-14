import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './header'
import Back from './back'


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
            <div className="container profile-details">
                <Back history={this.props.history}  />
                <Header title="Worker Profile" />
                <div className="row">
                    <div className="col-md-2 col-4" />
                    <div className="col-md-2 col-4 avatar">
                        <img src={this.props.state.currentProfile.avatar}  />
                    </div>   
                    <div className="col-md-6" >
                        <h2>
                            {this.props.state.currentProfile.firstName} {this.props.state.currentProfile.lastName}
                        </h2>
                        <h4>
                            <b>Birthday:</b> {this.props.state.currentProfile.birthday}
                        </h4>
                        <h4>
                            <b>Email:</b> {this.props.state.currentProfile.email}
                        </h4>
                        <h5>
                            <b>Address</b>: {this.props.state.currentProfile.address}
                        </h5>
                    </div>   
                    <div className="col-md-2 col-sm-0" />
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        state: state.state
    }
}

export default connect(mapStateToProps)(ProfileInfo)

