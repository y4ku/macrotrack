import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import {Route} from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import Macros from './components/Macros';

let injectTapEventPlugin = require('react-tap-event-plugin');

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const routes = <Route component={App}>
    <Route path="/track" component={Macros} />
    <Route path="/" component={HomePage} />
</Route>;

ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('app')
);
