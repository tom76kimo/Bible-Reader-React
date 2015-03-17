'use strict';
var React = require('react/addons');
var PureRenderMixin = React.addons.PureRenderMixin;

var HasLoginBlock = React.createClass({
    logOut: function () {
        this.props.changeLoginState(false);
    },
    render: function () {
        return (
            <div className="form-group JHei">
                <a className="btn btn-info Mend-5" href="#read">開始閱讀 <span className="glyphicon glyphicon-fire"></span></a>
                <a className="btn btn-default Mend-5" href="#achievement" >觀看成就 <span className="glyphicon glyphicon-tower"></span></a>
                <a className="btn btn-default Mend-5" href="#setting" title="Setting"> <span className="glyphicon glyphicon-user"></span></a>
                <button type="button" className="btn btn-warning" title="Log Out" onClick={this.logOut}>
                    <span className="glyphicon glyphicon-log-out"></span>
                </button>
            </div>
        );
    }
});

var NotLoginBlock = React.createClass({
    login: function () {
        var userId = this.refs.userId.getDOMNode().value;
        var password = this.refs.userPassword.getDOMNode().value;
        // console.log(this.refs.userId.getDOMNode().value);
        this.props.changeLoginState(true);
    },
    render: function () {
        return (
            <div className="JHei">
                <div className="form-group">
                        <input type="text" ref="userId" placeholder="User ID" className="Mend-5 form-control" />
                </div>
                <div className="form-group">
                    <input type="text" ref="userPassword" placeholder="Password" className="Mend-5 form-control" />
                </div>
                <button className="btn btn-info" onClick={this.login}>登入</button>
            </div>
        );
    }
})

var LoginBlock = React.createClass({
    mixins: [ PureRenderMixin ],
    getInitialState: function () {
        return {
            isLogged: false
        };
    },
    changeLoginState: function (value) {
        this.setState({
            isLogged: value
        });
    },
    render: function () {
        if (this.state.isLogged) {
            return <HasLoginBlock changeLoginState={this.changeLoginState} />;
        } else {
            return <NotLoginBlock changeLoginState={this.changeLoginState} />;
        }
    }
});

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
                    <div className="navbar-collapse collapse">
                        <div className="navbar-form navbar-right">
                            <LoginBlock />
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = NavigationBar;
