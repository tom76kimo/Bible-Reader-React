'use strict';
var React = require('react/addons');
var PureRenderMixin = React.addons.PureRenderMixin;

var BigImgBanner = React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        var style = {
            backgroundImage: 'url(http://bible.tom76kimo.info/assets/images/l1.jpg)'
        };
        return (
            <div className="bible-big-img-banner">
                <a style={style} className="bible-fill-img"></a>
            </div>
        );
    }
});

var Home = React.createClass({
    mixins: [PureRenderMixin],
    getInitialState: function () {
        return {};
    },
    render: function() {
        return (
            <BigImgBanner />
        );
    }
});

module.exports = Home;
