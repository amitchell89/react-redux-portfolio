webpackHotUpdate(0,{

/***/ 248:
/*!**************************!*\
  !*** ./src/views/app.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 78);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(/*! redux */ 321);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 335);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 250);
	
	var _header = __webpack_require__(/*! ./header */ 313);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _footer = __webpack_require__(/*! ./footer */ 314);
	
	var _footer2 = _interopRequireDefault(_footer);
	
	var _gallery = __webpack_require__(/*! ./gallery */ 315);
	
	var _gallery2 = _interopRequireDefault(_gallery);
	
	var _about = __webpack_require__(/*! ./about */ 317);
	
	var _about2 = _interopRequireDefault(_about);
	
	var _contact = __webpack_require__(/*! ./contact */ 318);
	
	var _contact2 = _interopRequireDefault(_contact);
	
	var _terms = __webpack_require__(/*! ./terms */ 319);
	
	var _terms2 = _interopRequireDefault(_terms);
	
	var _notFound = __webpack_require__(/*! ./notFound */ 320);
	
	var _notFound2 = _interopRequireDefault(_notFound);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// import * as reducers from '../store/reducers';
	// const reducer = combineReducers(reducers);
	// const store = createStore(reducer);
	
	var defaultState = {
	  todo: {
	    items: []
	  }
	};
	
	function portfolioApp(state, action) {
	  switch (action.type) {
	    case 'ADD_TODO':
	      var newState = Object.assign({}, state);
	
	      newState.todo.items.push({
	        message: action.message,
	        completed: false
	      });
	
	      return newState;
	
	    default:
	      return state;
	  }
	}
	var store = redux.createStore(portfolioApp, defaultState);
	
	var AppContainer = function (_Component) {
	  _inherits(AppContainer, _Component);
	
	  function AppContainer() {
	    _classCallCheck(this, AppContainer);
	
	    return _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).apply(this, arguments));
	  }
	
	  _createClass(AppContainer, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'site_wrapper' },
	        _react2.default.createElement(_header2.default, null),
	        _react2.default.createElement(
	          'div',
	          { className: 'content_wrapper' },
	          this.props.children
	        ),
	        _react2.default.createElement(_footer2.default, null)
	      );
	    }
	  }]);
	
	  return AppContainer;
	}(_react.Component);
	
	var App = function (_Component2) {
	  _inherits(App, _Component2);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactRouter.Router,
	        { history: _reactRouter.browserHistory },
	        _react2.default.createElement(
	          _reactRouter.Route,
	          { path: '/', component: AppContainer },
	          _react2.default.createElement(_reactRouter.IndexRoute, { component: _gallery2.default }),
	          _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _about2.default }),
	          _react2.default.createElement(_reactRouter.Route, { path: '/contact', component: _contact2.default }),
	          _react2.default.createElement(_reactRouter.Route, { path: '/terms', component: _terms2.default }),
	          _react2.default.createElement(_reactRouter.Route, { path: '*', component: _notFound2.default })
	        )
	      );
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	var _default = App;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(defaultState, 'defaultState', '/Users/amitchell/src2/portfolio/src/views/app.js');
	
	  __REACT_HOT_LOADER__.register(portfolioApp, 'portfolioApp', '/Users/amitchell/src2/portfolio/src/views/app.js');
	
	  __REACT_HOT_LOADER__.register(store, 'store', '/Users/amitchell/src2/portfolio/src/views/app.js');
	
	  __REACT_HOT_LOADER__.register(AppContainer, 'AppContainer', '/Users/amitchell/src2/portfolio/src/views/app.js');
	
	  __REACT_HOT_LOADER__.register(App, 'App', '/Users/amitchell/src2/portfolio/src/views/app.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/amitchell/src2/portfolio/src/views/app.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=0.84b3b13966d81165fc9d.hot-update.js.map