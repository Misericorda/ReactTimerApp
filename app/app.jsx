import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
import {hashHistory, IndexRoute} from 'react-router';
import Main from 'Main';
import Countdown from 'Countdown';
import Timer from 'Timer';
// Load foundation
// require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
// require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css');
$(document).foundation();

// app css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
    <HashRouter history={hashHistory}>
        <Main>
            <Switch>
                <Route exact path='/' component={Timer}/>
                <Route exact path='/countdown' component={Countdown}/>
            </Switch>
        </Main>
    </HashRouter>
    ,document.getElementById('app')
);
