import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {TextField} from 'material-ui';

export default React.createClass({
    mixin: [PureRenderMixin],
    render: function() {
        return <div className="login row">
            <h1> Login </h1>
            <TextField
                hintText="Username"
                floatingLabelText="Username:" />
            <TextField
                hintText="Password Field"
                floatingLabelText="Password:"
                type="password" />

        </div>;
    }
});