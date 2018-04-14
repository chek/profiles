import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ProfilesListItem from './profilesListItem'
import { connect } from 'react-redux'


class ProfilesList extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        };
    }
    componentDidMount() {
    }
    render() {
       const that = this
        return (
            <div className="container">
                <h1>
                    <i class="fas fa-angle-left"></i>
                    Workers
                </h1>
                {this.props.state.allProfiles.map(function(profile){
                    return <ProfilesListItem  profile={profile} history={that.props.history} />
                })}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        state: state.state
    }
}

export default withRouter(connect(mapStateToProps)(ProfilesList))
