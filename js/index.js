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
                { style: { marginTop: "50px" } },
                React.createElement(
                    "div",
                    { className: "container" },
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
                                        "\uADF8\uB8E8\uC871"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "panel-body" },
                                    React.createElement(
                                        "a",
                                        { href: "http://bns.plaync.com/board/job/summoner/article/7228874", target: "blank" },
                                        "\uC18C\uD658\uC0AC \uC2DC\uC810 \uC218\uC5FC\uBFCC\uB9AC \uC601\uC0C1 \uD14D\uC2A4\uD2B8 \uC124\uBA85 \uD3EC\uD568"
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Contents;
}(React.Component);

var App = function (_React$Component3) {
    _inherits(App, _React$Component3);

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