'use strict';
var React = require('react');

var NavigationBar = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <a className="navbar-brand">
                        Bible Reader
                        <small className="version">2.0</small>
                    </a>
                </div>
            </nav>
        );
    }
});

module.exports = NavigationBar;
