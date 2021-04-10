/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./main.css\");\n\n\n// countdown\n(function () {\n  if (window.location.href.indexOf('welcome') < 0) {\n    const second = 1000,\n    minute = second * 60,\n    hour = minute * 60,\n    day = hour * 24;\n\n  let birthday = \"May 30, 2021 16:00:00\",\n    countDown = new Date(birthday).getTime(),\n    x = setInterval(function () {\n\n      let now = new Date().getTime(),\n        distance = countDown - now;\n\n      document.getElementById(\"days\").innerText = Math.floor(distance / (day)),\n        document.getElementById(\"hours\").innerText = Math.floor((distance % (day)) / (hour)),\n        document.getElementById(\"minutes\").innerText = Math.floor((distance % (hour)) / (minute)),\n        document.getElementById(\"seconds\").innerText = Math.floor((distance % (minute)) / second);\n\n      //do something later when date is reached\n      if (distance < 0) {\n        let headline = document.getElementById(\"headline\"),\n          countdown = document.getElementById(\"countdown\"),\n          content = document.getElementById(\"content\");\n\n        headline.innerText = \"Наша свадьба уже сегодня!\";\n        countdown.style.display = \"none\";\n        content.style.display = \"block\";\n\n        clearInterval(x);\n      }\n      //seconds\n    }, 0)\n  }\n}());\n\n// Fix for iphone\nif (navigator.platform === 'iPhone') {\n  const navigation = document.getElementById('navigation');\n  navigation.style.marginBottom = '11vh';\n}\n\n// var lastScrollTop = 0;\n// document.addEventListener('scroll', function (e) {\n//   e.preventDefault();\n//   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: \"https://github.com/qeremy/so/blob/master/so.dom.js#L426\"\n//   if (st > lastScrollTop) {\n//     // window.location.hash = '#page';\n//     // let mainTarget = document.getElementById('page');\n//     // mainTarget.scrollIntoView()\n//     // document.getElementById('main').scrollIntoView(false);\n//     document.getElementById('hello').style.display = 'none';\n//   } else {\n//     //window.location.hash=\"\"\n//     // upscroll code\n//     //window.scrollTo(0, 0);\n//     document.getElementById('hello').style.display = 'block';\n//   }\n//   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling\n// });\n\n//# sourceURL=webpack://wedding-app/./main.js?");

/***/ }),

/***/ "./main.css":
/*!******************!*\
  !*** ./main.css ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_first_JPG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/first.JPG */ \"./images/first.JPG\");\n/* harmony import */ var _images_glitter_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/glitter.jpeg */ \"./images/glitter.jpeg\");\n/* harmony import */ var _images_IMG_7663_Facetune_17_03_2020_19_13_25_JPG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/IMG_7663_Facetune_17-03-2020-19-13-25.JPG */ \"./images/IMG_7663_Facetune_17-03-2020-19-13-25.JPG\");\n/* harmony import */ var _images_second_JPG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/second.JPG */ \"./images/second.JPG\");\n// Imports\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_first_JPG__WEBPACK_IMPORTED_MODULE_2__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_glitter_jpeg__WEBPACK_IMPORTED_MODULE_3__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_IMG_7663_Facetune_17_03_2020_19_13_25_JPG__WEBPACK_IMPORTED_MODULE_4__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_second_JPG__WEBPACK_IMPORTED_MODULE_5__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  font-family: 'Play', sans-serif !important;\\n}\\n\\nbody {\\n  width: 100vw;\\n  overflow-x: hidden;\\n}\\n\\n.main__body {\\n  background-color: aliceblue !important;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  background-position-x: center;\\n}\\n\\n.content {\\n  height: auto;\\n  padding: 15px 0;\\n}\\n\\n.button {\\n  display: block;\\n  text-align: center;\\n  background-color: rgb(228 228 230 / 81%);\\n  text-decoration: none;\\n  color: #343a40;\\n  padding: 0.5rem 0rem;\\n}\\n\\n.margin-r {\\n  margin-right: 0.5rem;\\n}\\n\\n.back__wrapper {\\n  background-color: #343a3f;\\n  color: white;\\n}\\n\\n.place__body {\\n  color: #343a3f;\\n}\\n\\n.place__card {\\n  height: calc(100vh - 64px);\\n}\\n\\n.btn-outline-primary {\\n  color: #343a3e!important;\\n  border-color: #343a3e!important;\\n}\\n\\n.btn-check:checked+.btn-outline-primary {\\n  color: #fff!important;\\n  background-color: #343a3e!important;\\n  border-color: #343a3e!important;\\n  box-shadow: none!important;\\n}\\n\\n.btn-check:active+.btn-outline-primary:focus, .btn-check:checked+.btn-outline-primary:focus, .btn-outline-primary.active:focus, .btn-outline-primary.dropdown-toggle.show:focus, .btn-outline-primary:active:focus {\\n  box-shadow: none!important;\\n}\\n\\n.dress-code-bar {\\n  width: 80%;\\n  border: 1px solid #343a3e;\\n  padding: 10px;\\n  border-radius: 10px;\\n  margin: 10px auto;\\n  display: flex;\\n  justify-content: space-around;\\n\\n}\\n\\n.dress-code-bar-men {\\n  width: 50%;\\n}\\n\\n.dress-code-bar__item-1 {\\n  width: 40px;\\n  height: 40px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  border-radius: 50%;\\n}\\n\\n.dress-code-bar__item-2 {\\n  width: 40px;\\n  height: 40px;\\n  background-color: #c3c3c3;\\n  border-radius: 50%;\\n}\\n\\n.dress-code-bar__item-3 {\\n  width: 40px;\\n  height: 40px;\\n  background-color: #f6e7da;\\n  border-radius: 50%;\\n}\\n\\n.dress-code-bar__item-4 {\\n  width: 40px;\\n  height: 40px;\\n  background-color: #676a6f;\\n  border-radius: 50%;\\n}\\n\\n.dress-code-bar__item-5 {\\n  width: 40px;\\n  height: 40px;\\n  background-color: #343a3e;\\n  border-radius: 50%;\\n}\\n\\n.hide {\\n  display: none;\\n}\\n\\n.presents__body {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-size: contain;\\n  background-position-x:center;\\n  background-position-y: bottom;\\n  background-repeat: no-repeat;\\n}\\n\\n.presents__content {\\n  background-color: rgb(255 255 255 / 100%);;\\n}\\n\\n.presents__photo {\\n  width: 100%;\\n}\\n\\n.height-30 {\\n  height: 30%;\\n}\\n\\n.cover {\\n  height: 100vh;\\n  width: 100%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  background-size: cover;\\n  background-position-x:center;\\n  background-position-y: bottom;\\n  background-repeat: no-repeat;\\n  color: white;\\n  top: 0;\\n  bottom: 0;\\n  right: 0;\\n  left: 0;\\n  font-size: 24px;\\n}\\n\\n.cover_substrate {\\n  /* width: 100%; */\\n  height: 100%;\\n  background-color: rgb(52 58 62 / 53%);;\\n  padding: 15px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.cover_content {\\n  width: 60%;\\n  max-width: 207px;\\n}\\n\\n.cover_title {\\n  line-height: 1.3rem;\\n  font-size: 1rem;\\n  padding-left: 0.6rem;\\n  text-align: justify;\\n  text-transform: uppercase;\\n  /* margin-top: -6rem; */\\n}\\n\\n.cover_date {\\n  font-size: 12rem;\\n  font-weight: 700;\\n  line-height: 10rem;\\n}\\n\\n/* .cover_arows {\\n  background-image: url(./images/arrows.gif);\\n  width: 40%;\\n  height: 100px;\\n  display: block;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  position: absolute;\\n  bottom: 15px;\\n} */\\n\\n.btn-outline-primary:hover {\\n  background-color: #fff!important;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://wedding-app/./main.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://wedding-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://wedding-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./images/IMG_7663_Facetune_17-03-2020-19-13-25.JPG":
/*!**********************************************************!*\
  !*** ./images/IMG_7663_Facetune_17-03-2020-19-13-25.JPG ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"2b0ec1274a3ddc7db95f8d39c6c822ba.JPG\");\n\n//# sourceURL=webpack://wedding-app/./images/IMG_7663_Facetune_17-03-2020-19-13-25.JPG?");

/***/ }),

/***/ "./images/first.JPG":
/*!**************************!*\
  !*** ./images/first.JPG ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"7bff7e08681f7b9fbe40a9643d781569.JPG\");\n\n//# sourceURL=webpack://wedding-app/./images/first.JPG?");

/***/ }),

/***/ "./images/glitter.jpeg":
/*!*****************************!*\
  !*** ./images/glitter.jpeg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"74d4228f06a416cc49dac9b77557cb6d.jpeg\");\n\n//# sourceURL=webpack://wedding-app/./images/glitter.jpeg?");

/***/ }),

/***/ "./images/second.JPG":
/*!***************************!*\
  !*** ./images/second.JPG ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"0a49dff44fbab4691a58594b9d71b401.JPG\");\n\n//# sourceURL=webpack://wedding-app/./images/second.JPG?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;