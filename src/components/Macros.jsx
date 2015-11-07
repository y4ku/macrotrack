import React from 'react';

export default React.createClass({
    getMacros: function() {
        return this.props.macros || [];
    },
    render: function() {
        return <div className="macros">
            {this.getMacros().map(entry =>
                    <h1 key={entry}>{entry}</h1>
            )}
        </div>;
    }
});