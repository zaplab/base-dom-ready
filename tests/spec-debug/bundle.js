/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _zapBaseDomReady = __webpack_require__(1);

	var _zapBaseDomReady2 = _interopRequireDefault(_zapBaseDomReady);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe('zap-base-dom-ready', function () {
	    beforeEach(function () {});

	    afterEach(function () {});

	    describe('should export the following', function () {
	        it('ready', function () {
	            expect(_zapBaseDomReady2.default).toEqual(jasmine.any(Function));
	        });
	    });

	    describe('ready', function () {
	        it('ready should call the passed function when the dom is ready', function (done) {
	            var innerFunctionSpy = jasmine.createSpy('innerFunctionSpy1');

	            (0, _zapBaseDomReady2.default)(function () {
	                innerFunctionSpy();
	            });

	            setTimeout(function () {
	                expect(innerFunctionSpy).toHaveBeenCalled();
	                done();
	            }, 1000);
	        });

	        it('next ready call should be called immediately', function () {
	            var innerFunctionSpy = jasmine.createSpy('innerFunctionSpy2');

	            (0, _zapBaseDomReady2.default)(function () {
	                innerFunctionSpy();
	            });

	            expect(innerFunctionSpy).toHaveBeenCalled();
	        });
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (fn) {
	    if (domLoaded) {
	        fn();
	    } else {
	        domLoadedFns.push(fn);
	    }
	};

	/**
	 * @type {HTMLDocument}
	 */
	var document = window.document;

	/**
	 * @type {Boolean}
	 */
	var domLoaded = document.readyState !== 'loading';

	/**
	 * @type {Array}
	 */
	var domLoadedFns = [];

	if (!domLoaded) {
	    (function () {
	        /**
	         * @type {Function|undefined}
	         */
	        var domLoadedFn = undefined;

	        /**
	         * @type {Function}
	         */
	        var domLoadedEvent = function domLoadedEvent() {
	            document.removeEventListener('DOMContentLoaded', domLoadedEvent);
	            domLoaded = true;

	            while (domLoadedFn = domLoadedFns.shift()) {
	                domLoadedFn();
	            }
	        };

	        document.addEventListener('DOMContentLoaded', domLoadedEvent);
	    })();
	}

	module.exports = exports['default'];

/***/ }
/******/ ]);