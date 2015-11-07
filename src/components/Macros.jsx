import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixin: [PureRenderMixin],
    render: function() {
        return <div className="macros">
            <h1> Macros </h1>
        </div>;
    }
});