/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass DOMNodeCollection {\n  constructor(nodes) {\n    this.nodes = nodes;\n  }\n}\n\nDOMNodeCollection.prototype.html = function(html) {\n  // debugger\n  if (typeof html === \"string\") {\n    this.nodes.forEach((node) => {\n      node.innerHTML = html;\n    });\n  } else if (this.nodes.length > 0) {\n    return this.nodes[0].innerHTML;\n  }\n};\n\nDOMNodeCollection.prototype.empty = function() {\n  this.html(\"\");\n\n};\n\nDOMNodeCollection.prototype.append = function(el) {\n  // append\n  if (typeof el === 'string') {\n    this.nodes.forEach((node) => {\n      node.innerHTML += el;\n    });\n  } else if(el.constructor.name === \"DOMNodeCollection\") {\n    this.nodes.forEach((node) => {\n      el.nodes.forEach((htmlEl) => {\n        node.innerHTML += htmlEl.outerHTML;\n      });\n    });\n  }\n};\n\nDOMNodeCollection.prototype.attr = function(attrname, value) {\n  if (value === undefined) {\n    return this.nodes[0].getAttribute(attrname);\n  } else {\n    this.nodes.forEach((node) => {\n      return node.setAttribute(attrname, value);\n    });\n  }\n};\n\nDOMNodeCollection.prototype.addClass = function(classname) {\n  this.attr(\"class\", classname);\n};\n\nDOMNodeCollection.prototype.removeClass = function(classname) {\n  this.nodes.forEach((node) => {\n    node.classList.remove(classname);\n  });\n};\n\nDOMNodeCollection.prototype.children = function() {\n  let childArr = [];\n  this.nodes.forEach((node) => {\n    const child = node.children;\n    childArr = childArr.concat(Array.from(child));\n  });\n  return new DOMNodeCollection(childArr);\n};\n\nDOMNodeCollection.prototype.parent = function() {\n  // let childArr = [];\n  let parentNodes = [];\n  // debugger\n  this.nodes.forEach((node) => {\n    const parent = node.parentNode;\n    // debugger\n    if (!parentNodes.includes(parent)) {\n      parentNodes.push(parent);\n    }\n\n  });\n  return new DOMNodeCollection(parentNodes);\n};\n\nDOMNodeCollection.prototype.find = function(child) {\n  let result = [];\n  this.nodes.forEach((node) => {\n    // debugger\n    const childlist = node.querySelectorAll(child);\n    result = result.concat(Array.from(childlist));\n  });\n  return new DOMNodeCollection(result);\n};\n\nDOMNodeCollection.prototype.remove = function() {\n  this.nodes.forEach((node) => {\n    node.parentNode.removeChild(node);\n  });\n};\n\nDOMNodeCollection.prototype.on = function(action, callback) {\n  this.nodes.forEach((node) => {\n    node.addEventListener(action, callback);\n    let event = `asdf-${action}`;\n    if (typeof node[event] === \"undefined\") {\n      node[event] = [];\n    }\n    node[event].push(callback);\n  });\n};\n\nDOMNodeCollection.prototype.off = function(action) {\n  this.nodes.forEach((node) => {\n    let event = `asdf-${action}`;\n    if (node[event]) {\n      node[event].forEach((el) => {\n        node.removeEventListener(action, el);\n      });\n    }\n  });\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DOMNodeCollection);\n\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_node_collection.js */ \"./lib/dom_node_collection.js\");\n//\n// var docReady = false;\n// var docFnArr = [];\n\n// $( () => alert('the document is ready'));\n\nvar docReady = false;\nvar docFnArr = [];\n\n$( () => alert('the document is ready'));\n\nwindow.$l = (arg) => {\n  if (typeof arg === 'string') {\n    // css selector\n    const nodelist = document.querySelectorAll(arg);\n    return new _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Array.from(nodelist));\n  } else if (typeof arg === \"function\") {\n    if (docReady === false) {\n\n      docFnArr.push(arg);\n    } else {\n      arg();\n    }\n  } else if(typeof arg === 'object') {\n    if (arg instanceof HTMLElement) {\n      return new _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([arg]);\n    }\n}\n};\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });