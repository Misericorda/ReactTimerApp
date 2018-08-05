import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {hashHistory} from 'react-router';
import Main from './components/Main';
import Countdown from './components/Countdown';
import Timer from './components/Timer';
import {hot} from 'react-hot-loader'

const App = () => (
  <HashRouter history={hashHistory}>
    <Main>
      <Switch>
        <Route exact path='/' component={Timer}/>
        <Route exact path='/countdown' component={Countdown}/>
      </Switch>
    </Main>
  </HashRouter>
);
export default module.hot ? hot(module)(App) : App
