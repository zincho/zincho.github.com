"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

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
                                "\uADF8\uB8E8\uC871 \uACE0\uB3C4\uC2DC",
                                React.createElement("span", { className: "glyphicon glyphicon-plane", "aria-hidden": "true", style: { color: "hotPink" } }),
                                React.createElement("span", { id: "btn_audio", className: "glyphicon glyphicon-music", "aria-hidden": "true", style: { color: "hotPink" } })
                            ),
                            React.createElement(
                                "p",
                                { style: { fontSize: "2rem" } },
                                "\uC218\uC5FC\uBFCC\uB9AC"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Contents = function (_React$Component2) {
    _inherits(Contents, _React$Component2);

    function Contents() {
        _classCallCheck(this, Contents);

        return _possibleConstructorReturn(this, (Contents.__proto__ || Object.getPrototypeOf(Contents)).apply(this, arguments));
    }

    _createClass(Contents, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(PlanButton, null),
                React.createElement(PlanA, null)
            );
        }
    }]);

    return Contents;
}(React.Component);

var PlanButton = function (_React$Component3) {
    _inherits(PlanButton, _React$Component3);

    function PlanButton(props) {
        _classCallCheck(this, PlanButton);

        var _this3 = _possibleConstructorReturn(this, (PlanButton.__proto__ || Object.getPrototypeOf(PlanButton)).call(this, props));

        _this3.state = {
            styleA: _this3.getStyle(1)
        };

        _this3.handleClickA = _this3.handleClickA.bind(_this3);
        return _this3;
    }

    _createClass(PlanButton, [{
        key: "getStyle",
        value: function getStyle(type) {
            var style = {
                fontSize: "20px",
                margin: "0px 5px 0px 0px",
                cursor: "pointer"
            };
            switch (type) {
                case 1:
                    style.color = "Black";
                    //Object.assign(style, {color: "Black"});
                    break;
                default:
                    break;
            }

            return style;
        }
    }, {
        key: "handleClickA",
        value: function handleClickA() {
            var _this4 = this;

            this.setState(function (prevState) {
                return {
                    styleA: _this4.getStyle(1)
                };
            });

            $("#planA").show();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "row", style: { margin: "30px 0px 10px 0px" } },
                    React.createElement(
                        "div",
                        { className: "col-xs-12", style: { padding: "0px" } },
                        React.createElement(
                            "span",
                            { key: "btn_1", className: "label label-warning", style: this.state.styleA, onClick: this.handleClickA },
                            "\uC218\uC5FC\uBFCC\uB9AC"
                        )
                    )
                )
            );
        }
    }]);

    return PlanButton;
}(React.Component);

var Table = function (_React$Component4) {
    _inherits(Table, _React$Component4);

    function Table(props) {
        _classCallCheck(this, Table);

        var _this5 = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

        _this5.handleClick = _this5.handleClick.bind(_this5);
        return _this5;
    }

    _createClass(Table, [{
        key: "handleClick",
        value: function handleClick(target) {
            var offset = $("#" + target).offset();

            if (offset) {
                $('html, body').animate({ scrollTop: offset.top }, 500);
            }
        }
    }, {
        key: "createTbody",
        value: function createTbody() {
            var _this6 = this;

            return React.createElement(
                "tbody",
                null,
                this.props.data.map(function (list, idx) {
                    return React.createElement(
                        "tr",
                        { key: idx, onClick: _this6.handleClick.bind(null, list.target), style: { cursor: "pointer" } },
                        React.createElement(
                            "td",
                            { style: { textAlign: "center", verticalAlign: "middle" } },
                            list.time
                        ),
                        React.createElement(
                            "td",
                            { style: { verticalAlign: "middle" } },
                            list.contents
                        )
                    );
                })
            );
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "table",
                { className: "table table-bordered table-hover", id: this.props.id },
                React.createElement(
                    "colgroup",
                    null,
                    React.createElement("col", { style: { width: "10%" } }),
                    React.createElement("col", { style: { width: "90%" } })
                ),
                React.createElement(
                    "thead",
                    null,
                    React.createElement(
                        "tr",
                        { className: "success" },
                        React.createElement(
                            "th",
                            { style: { textAlign: "center" } },
                            "\uC2DC\uAC04"
                        ),
                        React.createElement(
                            "th",
                            { style: { textAlign: "center" } },
                            "\uB0B4\uC6A9"
                        )
                    )
                ),
                this.createTbody()
            );
        }
    }]);

    return Table;
}(React.Component);

var Thumbnail = function (_React$Component5) {
    _inherits(Thumbnail, _React$Component5);

    function Thumbnail(props) {
        _classCallCheck(this, Thumbnail);

        var _this7 = _possibleConstructorReturn(this, (Thumbnail.__proto__ || Object.getPrototypeOf(Thumbnail)).call(this, props));

        _this7.superGif = null;

        _this7.handleClick = _this7.handleClick.bind(_this7);
        _this7.onPlay = _this7.onPlay.bind(_this7);
        _this7.onPause = _this7.onPause.bind(_this7);
        _this7.onRestart = _this7.onRestart.bind(_this7);
        _this7.onForward = _this7.onForward.bind(_this7);
        _this7.onBack = _this7.onBack.bind(_this7);
        return _this7;
    }

    _createClass(Thumbnail, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var me = this;
            this.superGif = new SuperGif({ gif: me.refs.gif });
            this.superGif.load();
        }
    }, {
        key: "onPlay",
        value: function onPlay() {
            this.superGif.play();
        }
    }, {
        key: "onPause",
        value: function onPause() {
            this.superGif.pause();
        }
    }, {
        key: "onRestart",
        value: function onRestart() {
            this.superGif.move_to(0);
        }
    }, {
        key: "onForward",
        value: function onForward() {
            this.superGif.move_relative(1);
        }
    }, {
        key: "onBack",
        value: function onBack() {
            this.superGif.move_relative(-1);
        }
    }, {
        key: "handleClick",
        value: function handleClick(target) {
            var offset = $("#" + target).offset();
            $('html, body').animate({ scrollTop: offset.top }, 500);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "thumbnail", style: { borderTopColor: "HotPink" }, id: this.props.id },
                React.createElement("img", { ref: "gif", src: "image/title.jpg", "data-animated_src": this.props.src, "data-auto_play": "0" }),
                React.createElement(
                    "a",
                    { href: "javascript:;", onClick: this.onPause },
                    "Pause"
                ),
                " |",
                React.createElement(
                    "a",
                    { href: "javascript:;", onClick: this.onPlay },
                    "Play"
                ),
                " |",
                React.createElement(
                    "a",
                    { href: "javascript:;", onClick: this.onRestart },
                    "Restart"
                ),
                " |",
                React.createElement(
                    "a",
                    { href: "javascript:;", onClick: this.onForward },
                    "Step forward"
                ),
                " |",
                React.createElement(
                    "a",
                    { href: "javascript:;", onClick: this.onBack },
                    "Step back"
                ),
                React.createElement(
                    "div",
                    { className: "caption" },
                    React.createElement(
                        "h3",
                        { style: { color: "Maroon" } },
                        this.props.title
                    ),
                    React.createElement(
                        "p",
                        null,
                        this.props.contents
                    ),
                    this.props.link ? React.createElement(
                        "a",
                        { href: this.props.link, target: "_blank" },
                        React.createElement(
                            "p",
                            { style: { whiteSpace: "normal", wordBreak: "break-all" } },
                            this.props.link
                        )
                    ) : "",
                    this.props.tableId ? React.createElement(
                        "p",
                        null,
                        React.createElement(
                            "a",
                            { href: "#", className: "btn btn-primary", role: "button", onClick: this.handleClick.bind(null, this.props.tableId) },
                            "\uC77C\uC815\uD45C\uB85C \uC774\uB3D9"
                        )
                    ) : ""
                )
            );
        }
    }]);

    return Thumbnail;
}(React.Component);

var ThumbnailList = function (_React$Component6) {
    _inherits(ThumbnailList, _React$Component6);

    function ThumbnailList() {
        _classCallCheck(this, ThumbnailList);

        return _possibleConstructorReturn(this, (ThumbnailList.__proto__ || Object.getPrototypeOf(ThumbnailList)).apply(this, arguments));
    }

    _createClass(ThumbnailList, [{
        key: "cho",
        value: function cho() {
            var sId = this.props.id.split("_");

            var thum;

            switch (sId[0]) {
                case "leftright":
                    thum = React.createElement(Thumbnail, { id: this.props.id, src: "image/leftright.gif", title: "\uBC1C\uCFF5\uCFF5\uB530", contents: "\uC67C\uBC1C \uC624\uB978\uBC1C \uB79C\uB364\uC73C\uB85C \uCFF5\uCFF5 \uD558\uB294\uB370 \uADF8 \uC9C0\uC810 \uD53C\uD558\uAE30" });
                    break;
                case "jangpan":
                    thum = React.createElement(Thumbnail, { id: this.props.id, src: "image/jangpan.gif", title: "\uB3C5\uC7A5\uD310", contents: "\uB3C5\uC7A5\uD310 \uB9C9 \uC62C\uB77C\uC624\uB294\uB370 \uB9C9 \uD53C\uD558\uAE30" });
                    break;
                case "par":
                    thum = React.createElement(Thumbnail, { id: this.props.id, src: "image/par.gif", title: "\uAD11\uC5ED3\uBC88", contents: "\uBA3C\uACF3 \uAC00\uC6B4\uB370 \uADFC\uC811 3\uBC88 \uC5F0\uB2EC\uC544\uC11C \uC4F0\uB294\uB370 \uC548\uCABD\uC5D0 \uC788\uB2E4\uAC00 \uBC14\uAE65\uC73C\uB85C \uB3C4\uB9DD\uAC00\uBA74 \uB41C\uB2F9" });
                    break;
                case "70per":
                    thum = React.createElement(Thumbnail, { id: this.props.id, src: "image/70per.gif", title: "70\uD37C\uC8FC\uC2DC", contents: "\uC8FC\uC2DC\uC790 2\uBA85\uC774 \uBC18\uB300\uBC29\uD5A5\uC5D0\uC11C \uC2DC\uC791\uD574 \uBBF8\uB9AC \uC57D\uC18D\uB41C \uBC29\uD5A5\uC73C\uB85C \uAF434\uAC1C\uB97C \uBA39\uB294\uB2E4. \uADF8 \uD6C4 \uBA3C\uACF3 \uAC00\uC6B4\uB370 \uADFC\uC811 3\uBC88 \uD328\uD134 \uD53C\uD55C\uB2E4\uC74C \uAF43\uC744 \uBA39\uC740 \uC8FC\uC2DC\uC790\uB97C \uC81C\uC678\uD55C \uB098\uBA38\uC9C0\uB294 \uBC1C\uC774 \uBB36\uC774\uBBC0\uB85C \uC0B4\uB824\uC8FC\uC138\uC694\uB97C \uC678\uCE58\uB3C4\uB85D \uD55C\uB2E4. \uC8FC\uC2DC\uC790 2\uBA85\uC740 \uB3C5\uC7A5\uD310\uC774 \uC0DD\uAE34\uACF3\uC73C\uB85C \uB2EC\uB824\uAC00 \uD55C\uBA85\uC740 \uB3C5\uC7A5\uD310\uC5D0\uC11C \uBA40\uB9AC\uC788\uACE0 \uD55C\uBA85\uC740 \uB3C5\uC7A5\uD310\uC5D0\uC11C \uAC00\uAE4C\uC774 \uC11C\uC788\uC73C\uBA74 \uBA40\uB9AC\uC11C\uC788\uB294\uC0AC\uB78C \uBC18\uB300\uD3B8\uC73C\uB85C \uD53C\uC790 \uC548\uC804\uC9C0\uB300\uAC00 \uC0DD\uAE34\uB2E4. \uBBF8\uB9AC \uB300\uAE30\uD558\uACE0 \uC788\uB358 \uC8FC\uC2DC\uC790\uAC00 \uC7A5\uD310\uC744 \uBC1F\uC73C\uBA74 \uD30C\uD2F0\uC6D0 \uC804\uC6D0 \uC548\uC804\uC9C0\uB300\uB85C \uC18C\uD658. \uADF8\uD6C4 \uBC18\uB300\uD3B8\uC73C\uB85C \uBA3C\uACF3\uC5D0 \uC788\uB358 \uC8FC\uC2DC\uC790\uAC00 \uC5F4\uC2EC\uD788 \uB2EC\uB824\uC11C \uBC1F\uC73C\uBA74 \uB41C\uB2E4." });
                    break;
                case "40per":
                    thum = React.createElement(Thumbnail, { id: this.props.id, src: "image/40per.gif", title: "40\uD37C\uC8FC\uC2DC", contents: "70\uD37C \uC8FC\uC2DC\uC640 \uAE30\uBCF8\uC801\uC73C\uB85C \uAC19\uC9C0\uB9CC \uC774\uBC88\uC5D0\uB294 \uB9C8\uC9C0\uB9C9\uC5D0 4\uBC88\uC744 \uD53C\uD574\uC57C \uD55C\uB2E4. \uC8FC\uC2DC\uC790\uB4E4\uC740 \uC548\uC804\uC9C0\uB300 2\uBC88 \uB9CC\uB4E0 \uD6C4 \uB2E4\uC2DC \uC57D\uC18D \uB41C \uBC29\uD5A5\uC73C\uB85C \uB2EC\uB824\uAC00 \uBC18\uBCF5\uD558\uBA74 \uB41C\uB2E4." });
                    break;
                case "20per":
                    thum = React.createElement(Thumbnail, { id: this.props.id, src: "image/20per.gif", title: "20\uD37C", contents: "\uD0F1\uCEE4 \uBC18\uB300 \uBC29\uD5A5\uC73C\uB85C \uD53C\uC790 \uC548\uC804\uC9C0\uB300\uAC00 \uC0DD\uC131\uB418\uBA70 \uC67C\uCABD \uC624\uB978\uCABD(\uB79C\uB364?\uC778\uC9C0\uB294 \uD655\uC2E4\uD558\uC9C0 \uC54A\uB2E4. \uBCF4\uD1B5 \uC67C\uCABD \uBA3C\uC800 \uC2DC\uC791\uD558\uACE0 \uADF8 \uB2E4\uC74C\uC5D0 \uC624\uB978\uCABD\uC73C\uB85C \uAC00\uB294\uAC83\uC73C\uB85C \uD655\uC778\uD588\uC73C\uB098 \uC815\uD655\uD558\uC9C0 \uC54A\uB2E4.)\uC73C\uB85C \uBE60\uB974\uAC8C \uD53C\uC790\uC548\uC804\uC9C0\uB300\uAC00 \uC5F0\uC18D\uC73C\uB85C \uC0DD\uAE30\uBBC0\uB85C \uBAB9 \uB4A4\uAF41\uBB34\uB2C8\uC5D0 \uBC14\uC9DD\uBD99\uC5B4\uC11C \uBE60\uB978 \uBB34\uBE59\uBB34\uBE59\uBB34\uBE59" });
                    break;
                case "after":
                    thum = React.createElement(Thumbnail, { id: this.props.id, src: "image/after.gif", title: "\uC8FC\uC2DC\uD6C4\uAD11\uC5ED", contents: "\uC8FC\uC2DC\uD328\uD134\uC774 \uB05D\uB098\uACE0 \uAD11\uC5ED3\uBC88 \uAFCD\uC2A4\uAFCD\uC2A4\uAFCD\uC2A4\uD55C\uB2F9" });
                    break;
                default:
                    break;
            }

            return thum;
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.cho()
            );
        }
    }]);

    return ThumbnailList;
}(React.Component);

var PlanA = function (_React$Component7) {
    _inherits(PlanA, _React$Component7);

    function PlanA() {
        _classCallCheck(this, PlanA);

        return _possibleConstructorReturn(this, (PlanA.__proto__ || Object.getPrototypeOf(PlanA)).apply(this, arguments));
    }

    _createClass(PlanA, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container", id: "planA" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-xs-12" },
                        React.createElement(
                            "div",
                            { className: "panel panel-danger" },
                            React.createElement(
                                "div",
                                { className: "panel-heading" },
                                React.createElement(
                                    "h1",
                                    { className: "panel-title" },
                                    "\uC218\uC5FC\uBFCC\uB9AC \uB178\uB9D0"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "panel-body" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-xs-12" },
                                        React.createElement(ThumbnailList, { id: "leftright" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-xs-12" },
                                        React.createElement(ThumbnailList, { id: "jangpan" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-xs-12" },
                                        React.createElement(ThumbnailList, { id: "par" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-xs-12" },
                                        React.createElement(ThumbnailList, { id: "70per" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-xs-12" },
                                        React.createElement(ThumbnailList, { id: "after" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-xs-12" },
                                        React.createElement(ThumbnailList, { id: "40per" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-xs-12" },
                                        React.createElement(ThumbnailList, { id: "20per" })
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return PlanA;
}(React.Component);

var App = function (_React$Component8) {
    _inherits(App, _React$Component8);

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