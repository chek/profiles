import React, { Component } from 'react'
import ProfilesListItem from './profilesListItem';
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
        console.log('ProfilesList')
        console.log(this.props.history)
        console.log(this.props.state.allProfiles)
        console.log(this.props.profiles)
        /*

                    {this.props.state.allProfiles.map(function(profile){
                        return <ProfilesListItem  profile={profile} />
                    })}
        

        */
       const that = this
        return (
            <div className="container">
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

export default connect(mapStateToProps)(ProfilesList) ;
