import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Login from './Login';
import Register from './Register';

export default React.createClass({
    mixin: [PureRenderMixin],
    render: function() {
        return <div className="home-page">
            <h1> Macro Track</h1>
            <Login />
            <Register />
        </div>;
    }
});