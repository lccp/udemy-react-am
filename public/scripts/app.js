'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BuildIt = function (_React$Component) {
    _inherits(BuildIt, _React$Component);

    function BuildIt(props) {
        _classCallCheck(this, BuildIt);

        var _this = _possibleConstructorReturn(this, (BuildIt.__proto__ || Object.getPrototypeOf(BuildIt)).call(this, props));

        _this.handleToggleVisibility = _this.handleToggleVisibility.bind(_this);
        _this.state = {
            visibility: false
        };
        return _this;
    }

    _createClass(BuildIt, [{
        key: 'handleToggleVisibility',
        value: function handleToggleVisibility() {
            this.setState(function (prevState) {
                return {
                    visibility: !prevState.visibility
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Build It'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleToggleVisibility },
                    this.state.visibility ? 'Hide Details' : 'Show Details'
                ),
                this.state.visibility ? React.createElement(
                    'p',
                    null,
                    'Showing information!'
                ) : null
            );
        }
    }]);

    return BuildIt;
}(React.Component);

ReactDOM.render(React.createElement(BuildIt, null), document.getElementById('app'));

// let buildIt = {
//     title: 'Visibility Toggle',
//     buttonText: 'Show Details',
//     showInfo: false
// }

// const appRoot = document.getElementById('app');

// let toggleVisibility = () => {
//     buildIt.showInfo = !buildIt.showInfo;
//     renderVisibilityApp()
// ;}


// const renderVisibilityApp = () => {
//     let template = (
//         <div>
//             <h1>{buildIt.title}</h1>

//             <button onClick={toggleVisibility}>
//                 {buildIt.showInfo ? 'Hide Details' : 'Show Details'}
//             </button>

//             {buildIt.showInfo ? <p>Showing information!</p> : null}
//         </div>
//     )

//     ReactDOM.render(template, appRoot);
// }

// renderVisibilityApp();
