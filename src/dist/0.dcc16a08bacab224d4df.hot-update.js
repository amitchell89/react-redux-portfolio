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
	      return {
	        state: state,
	        portfolio: action.name
	      };
	
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
//# sourceMappingURL=0.dcc16a08bacab224d4df.hot-update.js.map