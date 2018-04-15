import React, { Component } from 'react'
import ProfilesListItem from './profilesListItem'
import Header from './header'
import Back from './back'
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
                <Header title="Workers" />
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

export default connect(mapStateToProps)(ProfilesList)
