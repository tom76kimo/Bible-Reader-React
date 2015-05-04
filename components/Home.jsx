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
                self.refs.bigBanner.getDOMNode().style.backgroundImage = 'url(' + this.src + ')';
            };
            largeImageBanner.src = '/public/image/bigBanner-large.jpg';
        }
    }
});

var ArticleButton = React.createClass({
    render: function() {
        return (
            <div className="feature-button">
                <span className="glyphicon glyphicon-send article-icon"></span>
            </div>
        );
    }
});

var RecentUpdatesButton = React.createClass({
    render: function() {
        return (
            <div className="feature-button">
                <span className="glyphicon glyphicon-list-alt updates-icon"></span>
            </div>
        );
    }
});

var ButtonTitle = React.createClass({
    propTypes: {
        content: React.PropTypes.string
    },
    render: function() {
        return (
            <div className="button-title">
                {this.props.content}
            </div>
        );
    }
});

var FeatureBanner = React.createClass({
    render: function() {
        return (
            <div className="feature-banner">
                <div>
                    <div className="col-xs-4">
                        <ArticleButton />
                        <ButtonTitle content="看看大家的收穫文章"/>
                    </div>
                    <div className="col-xs-4">
                        <RecentUpdatesButton />
                        <ButtonTitle content="紀錄網站開發及更新狀況"/>
                    </div>
                    <div className="col-xs-4">
                        <ArticleButton />
                        <ButtonTitle />
                    </div>
                </div>
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
            <div>
                <BigImgBanner />
                <FeatureBanner />
            </div>
        );
    }
});

module.exports = Home;
