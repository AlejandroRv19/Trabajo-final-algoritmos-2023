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

/***/ "./src/components/form/formstyle.css":
/*!*******************************************!*\
  !*** ./src/components/form/formstyle.css ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n    #main_box {\\r\\n        background-color: white;\\r\\n        padding: 20px;\\r\\n    }\\r\\n\\r\\n    .second_box {\\r\\n        margin-bottom: 20px;\\r\\n    }\\r\\n\\r\\n    .div_content input[type=\\\"text\\\"],\\r\\n    .div2_content input[type=\\\"password\\\"] {\\r\\n        background-color: #FAFAFA;\\r\\n        border: 1px solid #ccc;\\r\\n        padding: 10px;\\r\\n        width: 100%;\\r\\n        box-sizing: border-box;\\r\\n        margin-bottom: 10px;\\r\\n        border-radius: 9px;\\r\\n    }\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/form/formstyle.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"form\": () => (/* reexport safe */ _form_form__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _form_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form/form */ \"./src/components/form/form.ts\");\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/components/form/form.ts":
/*!*************************************!*\
  !*** ./src/components/form/form.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ form)\n/* harmony export */ });\n/* harmony import */ var _utils_main_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/main_styles */ \"./src/utils/main_styles.ts\");\n/* harmony import */ var _formstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formstyle.css */ \"./src/components/form/formstyle.css\");\n\n\nclass form extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        (0,_utils_main_styles__WEBPACK_IMPORTED_MODULE_0__.loadCss)(this, _formstyle_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        const Main_box = this.ownerDocument.createElement('section');\n        Main_box.id = \"main_box\";\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(Main_box);\n        const second_box = this.ownerDocument.createElement('div');\n        Main_box.classList.add(\"second_box\");\n        Main_box.appendChild(second_box);\n        const div = this.ownerDocument.createElement('div');\n        div.classList.add(\"div_content\");\n        second_box.appendChild(div);\n        const input1 = this.ownerDocument.createElement('input');\n        input1.type = \"text\";\n        input1.placeholder = \"Phone number, username, or email\";\n        div.appendChild(input1);\n        const div2 = this.ownerDocument.createElement('div');\n        div2.classList.add(\"div2_content\");\n        second_box.appendChild(div2);\n        const input2 = this.ownerDocument.createElement('input');\n        input2.type = \"password\";\n        input2.placeholder = \"password\";\n        div2.appendChild(input2);\n    }\n}\ncustomElements.define('app-form', form);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/form/form.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _screens_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/export */ \"./src/screens/export.ts\");\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const Main_wrapper = this.ownerDocument.createElement('section');\n        Main_wrapper.classList.add(\"Main_wrapper\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(Main_wrapper);\n        const dasboard_wrapper = this.ownerDocument.createElement('div');\n        dasboard_wrapper.classList.add(\"dasboard_wrapper\");\n        Main_wrapper.appendChild(dasboard_wrapper);\n        const dasboard = this.ownerDocument.createElement('app-dasboard');\n        dasboard_wrapper.appendChild(dasboard);\n        const login_wrapper = this.ownerDocument.createElement('div');\n        login_wrapper.classList.add(\"login_wrapper\");\n        Main_wrapper.appendChild(login_wrapper);\n        const Login = this.ownerDocument.createElement('app-login');\n        login_wrapper.appendChild(Login);\n        const register_wrapper = this.ownerDocument.createElement('div');\n        register_wrapper.classList.add(\"register_wrapper\");\n        Main_wrapper.appendChild(register_wrapper);\n        const Register = this.ownerDocument.createElement('app-register');\n        register_wrapper.appendChild(Register);\n        const message_wrapper = this.ownerDocument.createElement('div');\n        message_wrapper.classList.add(\"message_wrapper\");\n        Main_wrapper.appendChild(message_wrapper);\n        const message = this.ownerDocument.createElement('app-message');\n        message_wrapper.appendChild(message);\n        const notification_wrapper = this.ownerDocument.createElement('div');\n        notification_wrapper.classList.add(\"notification_wrapper\");\n        Main_wrapper.appendChild(message_wrapper);\n        const notification = this.ownerDocument.createElement('app-notification');\n        notification_wrapper.appendChild(notification);\n        const search_wrapper = this.ownerDocument.createElement('div');\n        search_wrapper.classList.add(\"search_wrapper\");\n        Main_wrapper.appendChild(search_wrapper);\n        const search = this.ownerDocument.createElement('app-search');\n        search_wrapper.appendChild(search);\n        const profile_wrapper = this.ownerDocument.createElement('div');\n        profile_wrapper.classList.add(\"profile_wrapper\");\n        Main_wrapper.appendChild(profile_wrapper);\n        const profile = this.ownerDocument.createElement('app-profile');\n        profile_wrapper.appendChild(profile);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/screens/dasboard/dasboard.ts":
/*!******************************************!*\
  !*** ./src/screens/dasboard/dasboard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dasboard)\n/* harmony export */ });\nclass dasboard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('div');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n    }\n}\ncustomElements.define('app-dasboard', dasboard);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/dasboard/dasboard.ts?");

/***/ }),

/***/ "./src/screens/export.ts":
/*!*******************************!*\
  !*** ./src/screens/export.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Login\": () => (/* reexport safe */ _login_login__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"dasboard\": () => (/* reexport safe */ _dasboard_dasboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"message\": () => (/* reexport safe */ _message_message__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"notification\": () => (/* reexport safe */ _notification_notification__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"profile\": () => (/* reexport safe */ _profile_profile__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"register\": () => (/* reexport safe */ _register_regsiter__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _dasboard_dasboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dasboard/dasboard */ \"./src/screens/dasboard/dasboard.ts\");\n/* harmony import */ var _login_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login */ \"./src/screens/login/login.ts\");\n/* harmony import */ var _message_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message/message */ \"./src/screens/message/message.ts\");\n/* harmony import */ var _notification_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification/notification */ \"./src/screens/notification/notification.ts\");\n/* harmony import */ var _profile_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile */ \"./src/screens/profile/profile.ts\");\n/* harmony import */ var _register_regsiter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/regsiter */ \"./src/screens/register/regsiter.ts\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/export.ts?");

/***/ }),

/***/ "./src/screens/login/login.ts":
/*!************************************!*\
  !*** ./src/screens/login/login.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ login)\n/* harmony export */ });\nclass login extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const Main_box = this.ownerDocument.createElement('section');\n        Main_box.id = \"main_box\";\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(Main_box);\n        const imageBox = this.ownerDocument.createElement('div');\n        Main_box.appendChild(imageBox);\n        const image = this.ownerDocument.createElement('img');\n        image.src = \"../utils/img/Logo_picsphere.png\";\n        imageBox.appendChild(image);\n        const div_form = this.ownerDocument.createElement('div');\n        Main_box.appendChild(div_form);\n        const form_component = this.ownerDocument.createElement('app-form');\n        div_form.appendChild(form_component);\n        const div_btn = this.ownerDocument.createElement('div');\n        Main_box.appendChild(div_btn);\n        const button = this.ownerDocument.createElement('button');\n        button.innerText = \"Login\";\n        div_btn.appendChild(button);\n    }\n}\ncustomElements.define('app-login', login);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/login/login.ts?");

/***/ }),

/***/ "./src/screens/message/message.ts":
/*!****************************************!*\
  !*** ./src/screens/message/message.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ message)\n/* harmony export */ });\nclass message extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const Main_wrapper = this.ownerDocument.createElement('section');\n        Main_wrapper.classList.add(\"Main_wrapper\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(Main_wrapper);\n    }\n}\ncustomElements.define('app-message', message);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/message/message.ts?");

/***/ }),

/***/ "./src/screens/notification/notification.ts":
/*!**************************************************!*\
  !*** ./src/screens/notification/notification.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ notification)\n/* harmony export */ });\nclass notification extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const Main_wrapper = this.ownerDocument.createElement('section');\n        Main_wrapper.classList.add(\"Main_wrapper\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(Main_wrapper);\n    }\n}\ncustomElements.define('app-notification', notification);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/notification/notification.ts?");

/***/ }),

/***/ "./src/screens/profile/profile.ts":
/*!****************************************!*\
  !*** ./src/screens/profile/profile.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ profile)\n/* harmony export */ });\nclass profile extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const Main_wrapper = this.ownerDocument.createElement('section');\n        Main_wrapper.classList.add(\"Main_wrapper\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(Main_wrapper);\n    }\n}\ncustomElements.define('app-profile', profile);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/profile/profile.ts?");

/***/ }),

/***/ "./src/screens/register/regsiter.ts":
/*!******************************************!*\
  !*** ./src/screens/register/regsiter.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ register)\n/* harmony export */ });\nclass register extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('div');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n    }\n}\ncustomElements.define('app-register', register);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/register/regsiter.ts?");

/***/ }),

/***/ "./src/utils/main_styles.ts":
/*!**********************************!*\
  !*** ./src/utils/main_styles.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadCss\": () => (/* binding */ loadCss)\n/* harmony export */ });\nconst loadCss = (elRef, styles) => {\n    var _a;\n    const css = elRef.ownerDocument.createElement(\"style\");\n    css.innerHTML = styles;\n    (_a = elRef.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(css);\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/utils/main_styles.ts?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;