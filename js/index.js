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
            videoData: null,
            toonData: null
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

var Image = function (_React$Component2) {
    _inherits(Image, _React$Component2);

    function Image() {
        _classCallCheck(this, Image);

        return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
    }

    _createClass(Image, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement("img", { src: this.props.src, className: "img-responsive center-block", alt: "image" })
            );
        }
    }]);

    return Image;
}(React.Component);

var Pannel = function (_React$Component3) {
    _inherits(Pannel, _React$Component3);

    function Pannel(props) {
        _classCallCheck(this, Pannel);

        var _this3 = _possibleConstructorReturn(this, (Pannel.__proto__ || Object.getPrototypeOf(Pannel)).call(this, props));

        _this3.state = {
            body: null
        };

        _this3.handleClick = _this3.handleClick.bind(_this3);
        return _this3;
    }

    _createClass(Pannel, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            if (!this.state.body) return;

            $('html, body').animate({ scrollTop: $(this.refs.header).offset().top }, 500);

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
            if (helper.getState("openPanel") === this) {
                helper.getState("openPanel").removeBody();
                helper.setState("openPanel", null);
                return;
            }

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

    return Pannel;
}(React.Component);

var VideoPannel = function (_Pannel) {
    _inherits(VideoPannel, _Pannel);

    function VideoPannel(props) {
        _classCallCheck(this, VideoPannel);

        return _possibleConstructorReturn(this, (VideoPannel.__proto__ || Object.getPrototypeOf(VideoPannel)).call(this, props));
    }

    _createClass(VideoPannel, [{
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
}(Pannel);

var ToonPannel = function (_Pannel2) {
    _inherits(ToonPannel, _Pannel2);

    function ToonPannel(props) {
        _classCallCheck(this, ToonPannel);

        return _possibleConstructorReturn(this, (ToonPannel.__proto__ || Object.getPrototypeOf(ToonPannel)).call(this, props));
    }

    _createClass(ToonPannel, [{
        key: "createBody",
        value: function createBody() {
            return React.createElement(
                "div",
                { className: "panel-body", style: { paddingLeft: "0px", paddingRight: "0px" } },
                React.createElement(Image, { src: this.props.src }),
                React.createElement("div", { id: "disqus_thread" })
            );
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "panel panel-success" },
                React.createElement(
                    "div",
                    { ref: "header", className: "panel-heading", onClick: this.handleClick, style: { cursor: "pointer" } },
                    React.createElement(
                        "h1",
                        { className: "panel-title" },
                        this.props.title
                    )
                ),
                this.state.body
            );
        }
    }]);

    return ToonPannel;
}(Pannel);

var Header = function (_React$Component4) {
    _inherits(Header, _React$Component4);

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
                                "\uBE14\uC18C\uC640\uC778",
                                React.createElement("span", { className: "glyphicon glyphicon-plane", "aria-hidden": "true", style: { color: "hotPink" } }),
                                React.createElement("span", { id: "btn_audio", className: "glyphicon glyphicon-music", "aria-hidden": "true", style: { color: "hotPink" } })
                            ),
                            React.createElement(
                                "p",
                                { style: { fontSize: "1.6rem" } },
                                "\u77E5\u4E4B\u8005 \u4E0D\u5982\u597D\u4E4B\u8005 \u597D\u4E4B\u8005 \u4E0D\u5982\uF914\u4E4B\u8005"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Contents = function (_React$Component5) {
    _inherits(Contents, _React$Component5);

    function Contents(props) {
        _classCallCheck(this, Contents);

        var _this7 = _possibleConstructorReturn(this, (Contents.__proto__ || Object.getPrototypeOf(Contents)).call(this, props));

        _this7.state = {
            body: null,
            tapColorA: "white",
            tapColorB: "white"
        };
        return _this7;
    }

    _createClass(Contents, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.handleTapClick("video");
        }
    }, {
        key: "handleTapClick",
        value: function handleTapClick(id) {
            if (helper.getState("openPanel") !== null) {
                helper.getState("openPanel").removeBody();
                helper.setState("openPanel", null);
            }

            switch (id) {
                case "video":
                    this.setState({ tapColorA: "Lime" });
                    this.setState({ tapColorB: "white" });
                    break;
                case "toon":
                    this.setState({ tapColorA: "white" });
                    this.setState({ tapColorB: "Lime" });
                    break;
            }

            this.removeBody();
            this.createBody(id);
        }
    }, {
        key: "createBody",
        value: function createBody(id) {
            var me = this;

            switch (id) {
                case "video":
                    $.getJSON("json/video.json", function (json) {
                        helper.setState("videoData", json.data);
                        me.setState({
                            body: me.createVideoPannel()
                        });
                    });
                    break;
                case "toon":
                    $.getJSON("json/toon.json", function (json) {
                        helper.setState("toonData", json.data);
                        me.setState({
                            body: me.createToonPannel()
                        });
                    });
                    break;
            }
        }
    }, {
        key: "removeBody",
        value: function removeBody() {
            this.setState({
                body: null
            });
        }
    }, {
        key: "createTabButton",
        value: function createTabButton() {
            return React.createElement(
                "div",
                { className: "col-xs-12" },
                React.createElement(
                    "button",
                    { type: "button", className: "btn btn-info", style: { color: this.state.tapColorA }, onClick: this.handleTapClick.bind(this, "video") },
                    "\uC601\uC0C1"
                ),
                React.createElement(
                    "button",
                    { type: "button", className: "btn btn-info", style: { marginLeft: "7px", color: this.state.tapColorB }, onClick: this.handleTapClick.bind(this, "toon") },
                    "\uACF5\uB7B5\uD230"
                )
            );
        }
    }, {
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
        key: "createToonPannel",
        value: function createToonPannel() {
            return helper.getState("toonData").map(function (obj, idx) {
                return React.createElement(
                    "div",
                    { className: "col-xs-12", key: idx },
                    React.createElement(ToonPannel, { title: obj.title, date: obj.date, src: obj.src })
                );
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { style: { marginTop: "30px" } },
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        this.createTabButton()
                    ),
                    React.createElement(
                        "div",
                        { className: "row", style: { marginTop: "15px" } },
                        this.state.body
                    )
                )
            );
        }
    }]);

    return Contents;
}(React.Component);

var App = function (_React$Component6) {
    _inherits(App, _React$Component6);

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

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));