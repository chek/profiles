import React, { Component } from 'react'
import { connect } from 'react-redux'


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
            <div>
                {this.props.state.currentProfile.firstName} {this.props.state.currentProfile.lastName}
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

