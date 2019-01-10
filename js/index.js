MyApp = (function(_React$Component) {
  _inherits(MyApp, _React$Component);
  function MyApp(props) {
    _classCallCheck(this, MyApp);
    var _this = _possibleConstructorReturn(
      this,
      (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this, props)
    );
    _this.state = {
      inputValue: placeholder
    };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }
  _createClass(MyApp, [
    {
      key: "handleChange",
      value: function handleChange(event) {
        this.setState({
          inputValue: event.target.value
        });

        function createMarkup() {
          return { __html: this.state.inputValue };
        }
      }
    },
    {
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,

          React.createElement(
            "div",
            { className: "container topBottomMargin" },
            React.createElement(
              "h1",
              { className: "text-center" },
              "Welcome to this React Markdown Previewer"
            ),
            React.createElement(
              "div",
              { className: "row topBottomMargin" },
              React.createElement(
                "div",
                { className: "col-md-6" },
                React.createElement(
                  "h3",
                  { className: "text-center" },
                  "Editor"
                ),
                React.createElement("textarea", {
                  id: "editor",
                  value: this.state.inputValue,
                  onChange: this.handleChange,
                  className: "border border-primary md-textarea form-control",
                  type: "text",
                  rows: "25"
                })
              ),

              React.createElement(
                "div",
                { className: "col-md-6" },
                React.createElement(
                  "h3",
                  { className: "text-center" },
                  "Previewer"
                ),

                React.createElement("div", {
                  className: "border border-success",
                  id: "preview",
                  dangerouslySetInnerHTML: {
                    __html: marked(this.state.inputValue)
                  }
                })
              )
            )
          ),

          React.createElement(Footer, null)
        );
      }
    }
  ]);
  return MyApp;
})(React.Component);
var Footer = function Footer() {
  return React.createElement(
    "p",
    { className: "text-center" },
    "Written by ",
    React.createElement(
      "a",
      { href: "https://github.com/londonjob", target: "_blank" },
      "londonjob"
    )
  );
};

ReactDOM.render(
  React.createElement(MyApp, null),
  document.getElementById("root")
);
