var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var placeholder = "# Enter your Markdown in the Editor on the left and see the Html result in the previewer on the right\n<br/>\n\n\n<br/><br/>    \n  ## This is a sub-heading...\n  ### And here's some other cool stuff:\n    \n  Heres some code, `<div></div>`, between 2 backticks.\n  \n  ```\n  // this is multi-line code:\n  \n  function anotherExample(firstLine, lastLine) {\n    if (firstLine == '```' && lastLine == '```') {\n      return multiLineCode;\n    }\n  }\n  ```\n    \n  You can also make text **bold**... whoa!\n  Or _italic_.\n  Or... wait for it... **_both!_**\n  And feel free to go crazy ~~crossing stuff out~~.\n  \n  There's also [links](https://www.freecodecamp.com), and\n  > Block Quotes!\n  \n  And if you want to get really crazy, even tables:\n  \n  Wild Header | Crazy Header | Another Header?\n  ------------ | ------------- | ------------- \n  Your content can | be here, and it | can be here....\n  And here. | Okay. | I think we get it.\n  \n  - And of course there are lists.\n    - Some are bulleted.\n       - With different indentation levels.\n          - That look like this.\n  \n  \n  1. And there are numbererd lists too.\n  1. Use just 1s if you want! \n  1. But the list goes on...\n  - Even if you use dashes or asterisks.\n  * images:\n  \n  ![React Logo w/ Text](https://goo.gl/Umyytc)\n<img src=\"https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg\" alt=\"drawing\" width=\"200\"/>\n\n  ";var























































MyApp = function (_React$Component) {_inherits(MyApp, _React$Component);
  function MyApp(props) {_classCallCheck(this, MyApp);var _this = _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this,
    props));
    _this.state = {
      inputValue: placeholder };

    _this.handleChange = _this.handleChange.bind(_this);return _this;
  }_createClass(MyApp, [{ key: "handleChange", value: function handleChange(
    event) {
      this.setState({
        inputValue: event.target.value });

      function createMarkup() {
        return { __html: this.state.inputValue };

      }

    } }, { key: "render", value: function render()
    {
      return (
        React.createElement("div", null,

          React.createElement("div", { className: "container topBottomMargin" },
            React.createElement("h1", { className: "text-center" }, "Welcome to this React Markdown Previewer"),
            React.createElement("div", { className: "row topBottomMargin" },
              React.createElement("div", { className: "col-md-6" },
                React.createElement("h3", { className: "text-center" }, "Editor"),
                React.createElement("textarea", { id: "editor",
                  value: this.state.inputValue,
                  onChange: this.handleChange, className: "border border-primary md-textarea form-control", type: "text", rows: "25" })),


              React.createElement("div", { className: "col-md-6" },
                React.createElement("h3", { className: "text-center" }, "Previewer"),

                React.createElement("div", { className: "border border-success", id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.inputValue) } })))),




          React.createElement(Footer, null)));


    } }]);return MyApp;}(React.Component);
;


var Footer = function Footer() {
  return (
    React.createElement("p", { className: "text-center" }, "Written by ", React.createElement("a", { href: "https://github.com/londonjob", target: "_blank" }, "londonjob")));



};





ReactDOM.render(React.createElement(MyApp, null), document.getElementById('root'));