import React, { Component } from 'react'
import ProfilesListItem from './profilesListItem';


class ProfilesList extends Component {
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
                <ul>
                    {this.props.profiles.map(function(profile){
                        return <ProfilesListItem  profile={profile} />
                    })}
                </ul>
            </div>
        )
    }
}

export default ProfilesList
