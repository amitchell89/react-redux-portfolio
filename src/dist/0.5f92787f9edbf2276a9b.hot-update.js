webpackHotUpdate(0,{

/***/ 346:
/*!**********************************************!*\
  !*** ./src/store/actions/UpdatePortfolio.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updatePortfolio = updatePortfolio;
	
	var _ActionTypes = __webpack_require__(/*! ../constants/ActionTypes */ 345);
	
	var types = _interopRequireWildcard(_ActionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function updatePortfolio(name) {
	  console.log('action dispatched', name);
	  return {
	    type: types.UPDATE_PORTFOLIO,
	    name: name
	  };
	}
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(updatePortfolio, 'updatePortfolio', '/Users/amitchell/src2/portfolio/src/store/actions/UpdatePortfolio.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=0.5f92787f9edbf2276a9b.hot-update.js.map