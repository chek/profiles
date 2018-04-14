import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import store, { history } from './store_modules/store';

import './App.css';
import ProfilesList from './profilesList';
import ProfileInfo from './profileInfo';
import {ProfilesGenerator} from './profilesGenerator'


class App extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      profiles: []
    };
  }

  render() {
    let profiles = [];
    if (this.state.profiles.length === 0) {
      profiles = ProfilesGenerator.generateProfils(5)
      this.setState({ profiles: profiles });
    } else {
      profiles = this.state.profiles;
    }
    return (
      <div className="app">
        <Route exact path="/" component={ProfilesList} profiles={profiles} />
        <Route exact path="/profile" history={history} component={ProfileInfo} />
      </div>
    );
  }
}

export default App;
