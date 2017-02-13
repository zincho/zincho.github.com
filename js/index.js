"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var disqus_config;

var Helper = function () {
    function Helper(props) {
        _classCallCheck(this, Helper);

        this.state = {
            openPanel: null,
            openVideo: null,
            videoData: null
        };
    }

    _createClass(Helper, [{
        key: "setState",
        value: function setState(state, value) {
            this.state[state] = value;
        }
    }, {
        key: "getState",
        value: function getState(state) {
            return this.state[state];
        }
    }]);

    return Helper;
}();

var helper = new Helper();

var Video = function (_React$Component) {
    _inherits(Video, _React$Component);

    function Video() {
        _classCallCheck(this, Video);

        return _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).apply(this, arguments));
    }

    _createClass(Video, [{
        key: "dispose",
        value: function dispose() {
            videojs(this.refs.video).dispose();
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            helper.setState("openVideo", this);
            videojs(this.refs.video);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { style: { width: "100%", maxWidth: "640px", height: "auto", margin: "auto" } },
                React.createElement(
                    "video",
                    { ref: "video", id: "bs_video", className: "video-js vjs-default-skin vjs-16-9", controls: true, preload: "auto", width: "640", height: "264", "data-setup": '{}' },
                    React.createElement("source", { src: this.props.src, type: "video/mp4" }),
                    React.createElement(
                        "p",
                        { className: "vjs-no-js" },
                        "To view this video please enable JavaScript, and consider upgrading to a web browser that",
                        React.createElement(
                            "a",
                            { href: "http://videojs.com/html5-video-support/", target: "_blank" },
                            "supports HTML5 video"
                        )
                    )
                )
            );
        }
    }]);

    return Video;
}(React.Component);

var VideoPannel = function (_React$Component2) {
    _inherits(VideoPannel, _React$Component2);

    function VideoPannel(props) {
        _classCallCheck(this, VideoPannel);

        var _this2 = _possibleConstructorReturn(this, (VideoPannel.__proto__ || Object.getPrototypeOf(VideoPannel)).call(this, props));

        _this2.state = {
            body: null
        };

        _this2.handleClick = _this2.handleClick.bind(_this2);
        return _this2;
    }

    _createClass(VideoPannel, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            var me = this;

            if (window.DISQUS) {
                DISQUS.reset({
                    reload: true,
                    config: function config() {
                        this.page.identifier = me.props.src;
                        this.page.url = "https://zincho.github.io/index.html#!" + me.props.src;
                    }
                });
            } else {
                disqus_config = function disqus_config() {
                    this.page.url = "https://zincho.github.io/index.html#!" + me.props.src;
                    this.page.identifier = me.props.src;
                };

                var d = document,
                    s = d.createElement('script');
                s.src = '//zincho.disqus.com/embed.js';
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
            }
        }
    }, {
        key: "handleClick",
        value: function handleClick() {
            if (helper.getState("openPanel") === this) return;
            if (helper.getState("openPanel") !== null) helper.getState("openPanel").removeBody();

            this.appendBody();

            helper.setState("openPanel", this);
        }
    }, {
        key: "createBody",
        value: function createBody() {
            return React.createElement(
                "div",
                { className: "panel-body" },
                React.createElement(Video, { src: this.props.src }),
                React.createElement("div", { id: "disqus_thread" })
            );
        }
    }, {
        key: "appendBody",
        value: function appendBody() {
            this.setState({
                body: this.createBody()
            });
        }
    }, {
        key: "removeBody",
        value: function removeBody() {
            helper.getState("openVideo").dispose();

            this.setState({
                body: null
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "panel panel-danger" },
                React.createElement(
                    "div",
                    { ref: "header", className: "panel-heading", onClick: this.handleClick, style: { cursor: "pointer" } },
                    React.createElement(
                        "h1",
                        { className: "panel-title" },
                        this.props.title + " " + this.props.date
                    )
                ),
                this.state.body
            );
        }
    }]);

    return VideoPannel;
}(React.Component);

var Header = function (_React$Component3) {
    _inherits(Header, _React$Component3);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { style: { width: "100%", padding: "30px 15px", color: "#cdbfe3", textShadow: "0 1px 0 rgba(0,0,0,.1)", backgroundColor: "royalBlue", backgroundImage: "linear-gradient(to bottom, CornflowerBlue 0, royalBlue 100%)", backgroundRepeat: "repeat-x" } },
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-xs12" },
                            React.createElement(
                                "p",
                                { style: { color: "#fff", fontSize: "3.7rem" } },
                                "\uBE14\uC18C\uACF5\uB7B5 \uBAA8\uC74C",
                                React.createElement("span", { className: "glyphicon glyphicon-plane", "aria-hidden": "true", style: { color: "hotPink" } }),
                                React.createElement("span", { id: "btn_audio", className: "glyphicon glyphicon-music", "aria-hidden": "true", style: { color: "hotPink" } })
                            ),
                            React.createElement(
                                "p",
                                { style: { fontSize: "2rem" } },
                                "\uC554\uD2BC \uBAA8\uC74C"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Contents = function (_React$Component4) {
    _inherits(Contents, _React$Component4);

    function Contents(props) {
        _classCallCheck(this, Contents);

        return _possibleConstructorReturn(this, (Contents.__proto__ || Object.getPrototypeOf(Contents)).call(this, props));
    }

    _createClass(Contents, [{
        key: "createVideoPannel",
        value: function createVideoPannel() {
            return helper.getState("videoData").map(function (obj, idx) {
                return React.createElement(
                    "div",
                    { className: "col-xs-12", key: idx },
                    React.createElement(VideoPannel, { title: obj.title, date: obj.date, src: obj.src })
                );
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { style: { marginTop: "50px" } },
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        this.createVideoPannel()
                    )
                )
            );
        }
    }]);

    return Contents;
}(React.Component);

var App = function (_React$Component5) {
    _inherits(App, _React$Component5);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { style: { backgroundColor: "Cornsilk" } },
                React.createElement(Header, null),
                React.createElement(Contents, null)
            );
        }
    }]);

    return App;
}(React.Component);

$.getJSON("json/video.json", function (json) {
    helper.setState("videoData", json.data);

    ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
});