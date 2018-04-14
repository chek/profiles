import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import store, { history } from './store_modules/store'
import actions from './store_modules/stateActions'

import './App.css';
import ProfilesList from './components/profilesList'
import ProfileInfo from './components/profileInfo'
import {ProfilesGenerator} from './profilesGenerator'


class App extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      profiles: []
    };
  }

  render() {
    let profiles = store.getState().state.allProfiles
    if (profiles.length === 0) {
      let profiles = ProfilesGenerator.generateProfils(5)
      store.dispatch({type: actions.state.ALL_PROFILES, allProfiles: profiles})
    }
    
    return (
      <div className="app">
        <Route exact path="/" history={history} component={ProfilesList}  />
        <Route exact path="/profile" history={history} component={ProfileInfo} />
      </div>
    );
  }
}

export default App
