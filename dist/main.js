/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n   Tweaks from following:\r\n   https://twitter.com/argyleink/status/1371850967822520333\r\n*/\r\n\r\n/* Color picker code taken from here \r\n   https://twitter.com/argyleink/status/1293249067305205760 */\r\n   :root {\r\n    color-scheme: dark light;\r\n    \r\n    /* destructure brand channels */\r\n    --hue: 180; /* change me!! */\r\n    --saturation: 100%;\r\n    --lightness: 30%;\r\n    \r\n  \r\n    \r\n    /* main body */\r\n    --text-main: hsl(\r\n      var(--hue) \r\n      var(--saturation)\r\n      10% /* lower is darker */\r\n    );\r\n    \r\n    --background-main: hsl(\r\n      var(--hue) \r\n      calc(var(--saturation) / 2) \r\n      95% /* higher is lighter */\r\n    );\r\n  \r\n    /* header */\r\n    --background-alt-1: hsl(\r\n      var(--hue) \r\n      var(--saturation)\r\n      var(--lightness) \r\n    );\r\n  \r\n    --text-accent-1: hsl(\r\n      var(--hue)\r\n      var(--saturation)\r\n      80%\r\n    );\r\n  \r\n  \r\n    /* sidebar */\r\n    --background-alt-2: hsl(\r\n      var(--hue) \r\n      var(--saturation)\r\n      calc(var(--lightness) * 2/ 3) \r\n    );\r\n  \r\n    --text-accent-2: hsl(\r\n      var(--hue)\r\n      var(--saturation)\r\n      80%\r\n    );\r\n  }\r\n  \r\n  @media (prefers-color-scheme: dark) {\r\n    /* just tweak the lightness */\r\n    /* maybe desaturate too */\r\n    \r\n    :root {\r\n  \r\n      --text-main: hsl(\r\n        var(--hue) \r\n        calc(var(--saturation) / 2) \r\n        85%\r\n      );\r\n  \r\n      --background-main: hsl(\r\n        var(--hue) \r\n        var(--saturation) \r\n        10%\r\n      );\r\n  \r\n      /* header */\r\n      --text-accent-1: hsl(\r\n        var(--hue)\r\n        var(--saturation)\r\n        10%\r\n      );\r\n    \r\n    --background-alt-1: hsl(\r\n      var(--hue) \r\n      calc(var(--saturation) / 2)\r\n      70%\r\n    );\r\n  \r\n  \r\n      /* sidebar */\r\n      --text-accent-2: hsl(\r\n        var(--hue)\r\n        var(--saturation)\r\n        85%\r\n      );\r\n  \r\n      --background-alt-2: hsl(\r\n        var(--hue) \r\n        var(--saturation)\r\n        calc(var(--lightness) / 2) \r\n      );\r\n    }\r\n  \r\n  } \r\n  \r\n  * {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  \r\n  \r\n  html, body, div, span, applet, object, iframe,\r\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\n  a, abbr, acronym, address, big, cite, code,\r\n  del, dfn, em, img, ins, kbd, q, s, samp,\r\n  small, strike, strong, sub, sup, tt, var,\r\n  b, u, i, center,\r\n  dl, dt, dd, ol, ul, li,\r\n  fieldset, form, label, legend,\r\n  table, caption, tbody, tfoot, thead, tr, th, td,\r\n  article, aside, canvas, details, embed, \r\n  figure, figcaption, footer, header, hgroup, \r\n  menu, nav, output, ruby, section, summary,\r\n  time, mark, audio, video {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n    margin: unset;\r\n    font-family: inherit;\r\n  }\r\n  /* HTML5 display-role reset for older browsers */\r\n  article, aside, details, figcaption, figure, \r\n  footer, header, hgroup, menu, nav, section {\r\n    display: block;\r\n  }\r\n  body {\r\n    line-height: 1;\r\n    min-block-size: 100%;\r\n    min-inline-size: 100%;\r\n    \r\n    font-family: system-ui, sans-serif;\r\n    \r\n    /* display: grid; */\r\n    place-content: center;\r\n    color: var(--text-main);\r\n    background: var(--background-main);\r\n    min-block-size: 100%;\r\n    min-inline-size: 100%;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n  \r\n    place-content: center;\r\n    font-family: system-ui, sans-serif;\r\n  }\r\n  ol, ul {\r\n    list-style: none;\r\n  }\r\n  blockquote, q {\r\n    quotes: none;\r\n  }\r\n  blockquote:before, blockquote:after,\r\n  q:before, q:after {\r\n    content: '';\r\n    content: none;\r\n  }\r\n  table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n  }\r\n  \r\n  html {\r\n    block-size: 100%;\r\n    inline-size: 100%;\r\n  }\r\n\r\n  #content {\r\n    background-color: var(--background-main);\r\n    color: var(--text-main);\r\n  }\r\n\r\n  header {\r\n    background-color: var(--background-alt-1);\r\n    color: var(--text-accent-1);\r\n    height: 10vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  #body {\r\n    height: 80vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  #info {\r\n    height: 40vh;\r\n    width: 60vw;\r\n    background-color: var(--background-alt-2);\r\n    color: var(--text-accent-2);\r\n    overflow: auto;\r\n    overflow-wrap: break-word;\r\n  }\r\n\r\n  footer {\r\n    background-color: var(--background-alt-1);\r\n    color: var(--text-accent-1);\r\n    height: 10vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;CAKC;;AAED;6DAC6D;GAC1D;IACC,wBAAwB;;IAExB,+BAA+B;IAC/B,UAAU,EAAE,gBAAgB;IAC5B,kBAAkB;IAClB,gBAAgB;;;;IAIhB,cAAc;IACd;;;;KAIC;;IAED;;;;KAIC;;IAED,WAAW;IACX;;;;KAIC;;IAED;;;;KAIC;;;IAGD,YAAY;IACZ;;;;KAIC;;IAED;;;;KAIC;EACH;;EAEA;IACE,6BAA6B;IAC7B,yBAAyB;;IAEzB;;MAEE;;;;OAIC;;MAED;;;;OAIC;;MAED,WAAW;MACX;;;;OAIC;;IAEH;;;;KAIC;;;MAGC,YAAY;MACZ;;;;OAIC;;MAED;;;;OAIC;IACH;;EAEF;;EAEA;IACE,sBAAsB;EACxB;;;;EAIA;;;;;;;;;;;;;IAaE,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,aAAa;IACb,wBAAwB;IACxB,aAAa;IACb,oBAAoB;EACtB;EACA,gDAAgD;EAChD;;IAEE,cAAc;EAChB;EACA;IACE,cAAc;IACd,oBAAoB;IACpB,qBAAqB;;IAErB,kCAAkC;;IAElC,mBAAmB;IACnB,qBAAqB;IACrB,uBAAuB;IACvB,kCAAkC;IAClC,oBAAoB;IACpB,qBAAqB;IACrB,SAAS;IACT,sBAAsB;;IAEtB,qBAAqB;IACrB,kCAAkC;EACpC;EACA;IACE,gBAAgB;EAClB;EACA;IACE,YAAY;EACd;EACA;;IAEE,WAAW;IACX,aAAa;EACf;EACA;IACE,yBAAyB;IACzB,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,wCAAwC;IACxC,uBAAuB;EACzB;;EAEA;IACE,yCAAyC;IACzC,2BAA2B;IAC3B,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,WAAW;IACX,yCAAyC;IACzC,2BAA2B;IAC3B,cAAc;IACd,yBAAyB;EAC3B;;EAEA;IACE,yCAAyC;IACzC,2BAA2B;IAC3B,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n   Tweaks from following:\r\n   https://twitter.com/argyleink/status/1371850967822520333\r\n*/\r\n\r\n/* Color picker code taken from here \r\n   https://twitter.com/argyleink/status/1293249067305205760 */\r\n   :root {\r\n    color-scheme: dark light;\r\n    \r\n    /* destructure brand channels */\r\n    --hue: 180; /* change me!! */\r\n    --saturation: 100%;\r\n    --lightness: 30%;\r\n    \r\n  \r\n    \r\n    /* main body */\r\n    --text-main: hsl(\r\n      var(--hue) \r\n      var(--saturation)\r\n      10% /* lower is darker */\r\n    );\r\n    \r\n    --background-main: hsl(\r\n      var(--hue) \r\n      calc(var(--saturation) / 2) \r\n      95% /* higher is lighter */\r\n    );\r\n  \r\n    /* header */\r\n    --background-alt-1: hsl(\r\n      var(--hue) \r\n      var(--saturation)\r\n      var(--lightness) \r\n    );\r\n  \r\n    --text-accent-1: hsl(\r\n      var(--hue)\r\n      var(--saturation)\r\n      80%\r\n    );\r\n  \r\n  \r\n    /* sidebar */\r\n    --background-alt-2: hsl(\r\n      var(--hue) \r\n      var(--saturation)\r\n      calc(var(--lightness) * 2/ 3) \r\n    );\r\n  \r\n    --text-accent-2: hsl(\r\n      var(--hue)\r\n      var(--saturation)\r\n      80%\r\n    );\r\n  }\r\n  \r\n  @media (prefers-color-scheme: dark) {\r\n    /* just tweak the lightness */\r\n    /* maybe desaturate too */\r\n    \r\n    :root {\r\n  \r\n      --text-main: hsl(\r\n        var(--hue) \r\n        calc(var(--saturation) / 2) \r\n        85%\r\n      );\r\n  \r\n      --background-main: hsl(\r\n        var(--hue) \r\n        var(--saturation) \r\n        10%\r\n      );\r\n  \r\n      /* header */\r\n      --text-accent-1: hsl(\r\n        var(--hue)\r\n        var(--saturation)\r\n        10%\r\n      );\r\n    \r\n    --background-alt-1: hsl(\r\n      var(--hue) \r\n      calc(var(--saturation) / 2)\r\n      70%\r\n    );\r\n  \r\n  \r\n      /* sidebar */\r\n      --text-accent-2: hsl(\r\n        var(--hue)\r\n        var(--saturation)\r\n        85%\r\n      );\r\n  \r\n      --background-alt-2: hsl(\r\n        var(--hue) \r\n        var(--saturation)\r\n        calc(var(--lightness) / 2) \r\n      );\r\n    }\r\n  \r\n  } \r\n  \r\n  * {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  \r\n  \r\n  html, body, div, span, applet, object, iframe,\r\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\n  a, abbr, acronym, address, big, cite, code,\r\n  del, dfn, em, img, ins, kbd, q, s, samp,\r\n  small, strike, strong, sub, sup, tt, var,\r\n  b, u, i, center,\r\n  dl, dt, dd, ol, ul, li,\r\n  fieldset, form, label, legend,\r\n  table, caption, tbody, tfoot, thead, tr, th, td,\r\n  article, aside, canvas, details, embed, \r\n  figure, figcaption, footer, header, hgroup, \r\n  menu, nav, output, ruby, section, summary,\r\n  time, mark, audio, video {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n    margin: unset;\r\n    font-family: inherit;\r\n  }\r\n  /* HTML5 display-role reset for older browsers */\r\n  article, aside, details, figcaption, figure, \r\n  footer, header, hgroup, menu, nav, section {\r\n    display: block;\r\n  }\r\n  body {\r\n    line-height: 1;\r\n    min-block-size: 100%;\r\n    min-inline-size: 100%;\r\n    \r\n    font-family: system-ui, sans-serif;\r\n    \r\n    /* display: grid; */\r\n    place-content: center;\r\n    color: var(--text-main);\r\n    background: var(--background-main);\r\n    min-block-size: 100%;\r\n    min-inline-size: 100%;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n  \r\n    place-content: center;\r\n    font-family: system-ui, sans-serif;\r\n  }\r\n  ol, ul {\r\n    list-style: none;\r\n  }\r\n  blockquote, q {\r\n    quotes: none;\r\n  }\r\n  blockquote:before, blockquote:after,\r\n  q:before, q:after {\r\n    content: '';\r\n    content: none;\r\n  }\r\n  table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n  }\r\n  \r\n  html {\r\n    block-size: 100%;\r\n    inline-size: 100%;\r\n  }\r\n\r\n  #content {\r\n    background-color: var(--background-main);\r\n    color: var(--text-main);\r\n  }\r\n\r\n  header {\r\n    background-color: var(--background-alt-1);\r\n    color: var(--text-accent-1);\r\n    height: 10vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  #body {\r\n    height: 80vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  #info {\r\n    height: 40vh;\r\n    width: 60vw;\r\n    background-color: var(--background-alt-2);\r\n    color: var(--text-accent-2);\r\n    overflow: auto;\r\n    overflow-wrap: break-word;\r\n  }\r\n\r\n  footer {\r\n    background-color: var(--background-alt-1);\r\n    color: var(--text-accent-1);\r\n    height: 10vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const config = {
  OPENWEATHERMAP_API_TOKEN: 'd2227e66123b92ad3505d44f24fddf31',
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);


/***/ }),

/***/ "./src/modules/model.js":
/*!******************************!*\
  !*** ./src/modules/model.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Model": () => (/* binding */ Model)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* eslint-disable no-underscore-dangle */


const Model = (() => {
  const _weather = {
    valid: false,
    coord: {
      lon: 0,
      lat: 0,
    },
    weather: {
      main: '',
      description: '',
    },
    wind: {
      speed: 0,
      direction: 0,
    },
    temperature: {
      temperature: 0,
      feelsLike: 0,
    },
  };

  let _location = '';
  let _scale = 'F';

  const handleBadRequest = () => {
    console.log('bad request ');
    _weather.valid = false;
  };

  const getWeather = () => _weather;

  const setWeather = async (location) => {
    _location = location;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${_location}&appid=${_config__WEBPACK_IMPORTED_MODULE_0__.default.OPENWEATHERMAP_API_TOKEN}`);
    const data = await response.json();
    if (!response.ok) {
      console.log(data);
      handleBadRequest();
    } else {
      _weather.valid = true;
      _weather.coord.lon = data.coord.lon;
      _weather.coord.lat = data.coord.lat;
      _weather.weather.description = data.weather[0].main;
      _weather.weather.main = data.weather[0].main;
      _weather.wind.speed = data.wind.speed;
      _weather.wind.direction = data.wind.deg;
      _weather.temperature.temperature = data.main.temp;
      _weather.temperature.feelsLike = data.main.feels_like;

      console.log(data);
    }
  };

  const getScale = () => _scale;

  const setScale = (scale) => {
    if (scale === 'C' || scale === 'F') {
      _scale = scale;
    } else {
      throw new Error('Scale not accepted');
    }
  };

  const getTemperature = () => {
    if (_scale === 'C') {
      return Math.round(_weather.temperature.temperature - 273.15);
    }
    return Math.round((_weather.temperature.temperature - 273.15) * 9 / 5 + 32);
  };

  return {
    getWeather,
    setWeather,
    getScale,
    setScale,
    getTemperature,
  };
})();




/***/ }),

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "View": () => (/* binding */ View)
/* harmony export */ });
const View = (() => {
  const renderHeader = () => {
    const content = document.getElementById('content');
    const header = document.createElement('header');
    header.textContent = 'Weather';

    content.appendChild(header);
  };

  const renderBody = () => {
    const content = document.getElementById('content');
    const body = document.createElement('div');
    body.id = 'body';

    const info = document.createElement('div');
    info.id = 'info';

    const form = document.createElement('form');
    form.id = 'form';

    const input = document.createElement('input');
    input.id = 'input';
    input.type = 'text';
    input.placeholder = 'Enter City';

    const submit = document.createElement('submit');
    submit.id = 'submit';
    submit.textContent = 'Submit';
    submit.type = 'submit';

    form.appendChild(input);
    form.appendChild(submit);
    body.appendChild(info);
    body.appendChild(form);
    content.appendChild(body);
  };

  const renderFooter = () => {
    const content = document.getElementById('content');
    const footer = document.createElement('footer');
    footer.textContent = 'Weather';

    content.appendChild(footer);
  };

  const renderDocument = () => {
    renderHeader();
    renderBody();
    renderFooter();
  };

  const renderWeather = (weather) => {
    const info = document.getElementById('info');
    if (weather.valid) {
      info.textContent = JSON.stringify(weather);
    } else {
      info.textContent = 'City Not Found';
    }
  };

  return {
    renderDocument,
    renderWeather,
  };
})();




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/view */ "./src/modules/view.js");
/* harmony import */ var _modules_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/model */ "./src/modules/model.js");
/* eslint-disable no-console */




_modules_view__WEBPACK_IMPORTED_MODULE_1__.View.renderDocument();

const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  _modules_model__WEBPACK_IMPORTED_MODULE_2__.Model.setWeather(input.value).then(() => {
    _modules_view__WEBPACK_IMPORTED_MODULE_1__.View.renderWeather(_modules_model__WEBPACK_IMPORTED_MODULE_2__.Model.getWeather());
    console.log(_modules_model__WEBPACK_IMPORTED_MODULE_2__.Model.getTemperature());
  });
});


})();

/******/ })()
;
//# sourceMappingURL=main.js.map