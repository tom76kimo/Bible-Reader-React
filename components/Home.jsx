'use strict';
var React = require('react/addons');
var PureRenderMixin = React.addons.PureRenderMixin;

var BigImgBanner = React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        var style = {
            backgroundImage: 'url(/public/image/bigBanner.jpg)'
        };
        return (
            <div className="bible-big-img-banner">
                <a ref="bigBanner" style={style} className="bible-fill-img"></a>
            </div>
        );
    },
    componentDidMount: function () {
        this._changeToLargeImage();
    },
    _changeToLargeImage: function () {
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
        var largeImageBanner;
        var self = this;

        if (windowWidth > 1024) {
            largeImageBanner = new Image;
            largeImageBanner.onload = function () {
                console.log('loaded');
                self.refs.bigBanner.getDOMNode().style.backgroundImage = 'url(' + this.src + ')';
            };
            largeImageBanner.src = '/public/image/bigBanner-large.jpg';
        }
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
