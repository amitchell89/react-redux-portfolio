webpackHotUpdate(0,{

/***/ 344:
/*!*****************************************!*\
  !*** ./src/store/reducers/portfolio.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = portfolio;
	
	var _ActionTypes = __webpack_require__(/*! ../constants/ActionTypes */ 345);
	
	var types = _interopRequireWildcard(_ActionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = {
	  portfolio: 'paintings test'
	
	};
	
	function portfolio() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	
	    case types.UPDATE_PORTFOLIO:
	      return _extends({}, state, {
	        portfolio: action.name
	      });
	
	    default:
	      return state;
	  }
	}
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/amitchell/src2/portfolio/src/store/reducers/portfolio.js');
	
	  __REACT_HOT_LOADER__.register(portfolio, 'portfolio', '/Users/amitchell/src2/portfolio/src/store/reducers/portfolio.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=0.d811613178ec452ca0b5.hot-update.js.map