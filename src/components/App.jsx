import React from 'react';
import {List} from 'immutable';

export default React.createClass({
    render: function() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});