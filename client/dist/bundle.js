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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/lib/build_grid.js":
/*!**********************************!*\
  !*** ./client/lib/build_grid.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wall_off__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wall_off */ \"./client/lib/wall_off.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  graph = {};\n  const body = document.getElementsByClassName(\"root\")[0];\n  const height = window.innerHeight;\n\n  let mouseDown = false;\n\n  const dirs = [\n    [1, 0],\n    [1, -1],\n    [0, -1],\n    [-1, -1],\n    [-1, 0],\n    [-1, 1],\n    [0, 1],\n    [1, 1]\n  ];\n\n  const setNeighbors = pos => {\n    graph[pos] = {};\n    dirs.forEach(dir => {\n      const x = pos[0] + dir[0];\n      const y = pos[1] + dir[1];\n      if (x >= 0 && x <= square - 1 && y >= 0 && y <= square - 1) {\n        const newPos = [x, y];\n        graph[pos][newPos] = 1;\n      }\n    });\n  };\n\n  while (body.firstChild) {\n    body.removeChild(body.firstChild);\n  }\n\n  [...Array(square).keys()].forEach(row => {\n    const rowDiv = document.createElement(\"div\");\n    rowDiv.className = \"rowDiv\";\n    rowDiv.style.height = `${height / square}%`;\n    [...Array(square).keys()].forEach(col => {\n      const colDiv = document.createElement(\"div\");\n      const pos = [row, col];\n      setNeighbors(pos);\n      colDiv.setAttribute(\"data-pos\", pos);\n      colDiv.className = \"node\";\n      colDiv.id = pos;\n      colDiv.style.width = `${height / square}%`;\n\n      rowDiv.append(colDiv);\n\n      colDiv.addEventListener(\"click\", _ => {\n        if (selection === \"start\") {\n          if (source) {\n            const prevStart = document.getElementById(source.join(\",\"));\n            prevStart.style.background = \"transparent\";\n          }\n          colDiv.style.background = \"silver\";\n          source = pos;\n        }\n        if (selection === \"stop\") {\n          if (stop) {\n            const prevStop = document.getElementById(stop.join(\",\"));\n            prevStop.style.background = \"transparent\";\n          }\n          colDiv.style.background = \"rgba(8, 131, 16, 0.65)\";\n          stop = pos;\n        }\n      });\n      colDiv.addEventListener(\"mousedown\", _ => {\n        mouseDown = true;\n        if (selection === \"wall\") Object(_wall_off__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pos);\n      });\n      colDiv.addEventListener(\"mouseover\", _ => {\n        if (mouseDown && selection === \"wall\") Object(_wall_off__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pos);\n      });\n      colDiv.addEventListener(\"mouseup\", _ => {\n        mouseDown = false;\n      });\n    });\n    body.append(rowDiv);\n  });\n});\n\n\n//# sourceURL=webpack:///./client/lib/build_grid.js?");

/***/ }),

/***/ "./client/lib/dijkstras.js":
/*!*********************************!*\
  !*** ./client/lib/dijkstras.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _paint_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paint_path */ \"./client/lib/paint_path.js\");\n\n\nconst dijkstras = (graph, source) => {\n  let distance = {};\n  for (let node in graph) {\n    distance[node] = Infinity;\n  }\n  distance[source] = 0;\n\n  let unvisited = new Set(Object.keys(graph));\n  const size = unvisited.size;\n  let previous = {};\n  let index = 0;\n  while (unvisited.size > 0) {\n    let currNode = minDistanceNode(unvisited, distance);\n    index++;\n    if (currNode !== source.join(\",\") && currNode !== stop.join(\",\")) {\n      const node = document.getElementById(currNode);\n      setTimeout(() => {\n        node.style.background = \"rgba(83, 9, 219, 0.65)\";\n      }, 1000 * Math.log(index / size));\n    }\n    unvisited.delete(currNode);\n\n    for (let neighbor in graph[currNode]) {\n      let distanceFromCurrToNeighbor = graph[currNode][neighbor];\n      let totalNeighborDistance =\n        distance[currNode] + distanceFromCurrToNeighbor;\n\n      if (distance[neighbor] > totalNeighborDistance) {\n        distance[neighbor] = totalNeighborDistance;\n        previous[neighbor] = currNode;\n      }\n      if (unvisited.has(neighbor) && neighbor !== stop.join(\",\")) {\n        const node = document.getElementById(neighbor);\n        index++;\n        let taco = unvisited.size;\n        setTimeout(() => {\n          if (taco === 1) Object(_paint_path__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(distance, previous, stop);\n          node.style.background = \"rgba(255, 251, 0, 0.65)\";\n        }, 1000 * Math.log(index / size));\n      }\n    }\n  }\n\n  return { distance, previous, size };\n};\n// Determines relaxtion.\nconst minDistanceNode = (nodes, distance) => {\n  return Array.from(nodes).reduce((minNode, node) =>\n    distance[node] < distance[minNode] ? node : minNode\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dijkstras);\n\n\n//# sourceURL=webpack:///./client/lib/dijkstras.js?");

/***/ }),

/***/ "./client/lib/index.js":
/*!*****************************!*\
  !*** ./client/lib/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _right_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./right_menu */ \"./client/lib/right_menu.js\");\n/* harmony import */ var _build_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build_grid */ \"./client/lib/build_grid.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", _ => {\n  Object(_build_grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n\n//# sourceURL=webpack:///./client/lib/index.js?");

/***/ }),

/***/ "./client/lib/paint_path.js":
/*!**********************************!*\
  !*** ./client/lib/paint_path.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((distance, pathHash, stop) => {\n  let currentDistance = Infinity;\n  let posToPaint = \"\";\n\n  while (currentDistance > 2) {\n    currentDistance = distance[`${stop[0]},${stop[1]}`];\n    posToPaint = pathHash[`${stop[0]},${stop[1]}`];\n    stop = pathHash[`${stop[0]},${stop[1]}`].split(\",\");\n    const nodeToPaint = document.getElementById(posToPaint);\n    nodeToPaint.style.background = \"pink\";\n  }\n});\n\n\n//# sourceURL=webpack:///./client/lib/paint_path.js?");

/***/ }),

/***/ "./client/lib/right_menu.js":
/*!**********************************!*\
  !*** ./client/lib/right_menu.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dijkstras__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dijkstras */ \"./client/lib/dijkstras.js\");\n/* harmony import */ var _build_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build_grid */ \"./client/lib/build_grid.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const height = window.innerHeight;\n  const width = window.innerWidth;\n  const rightMenu = document.getElementById(\"right_menu\");\n  rightMenu.setAttribute(\n    \"style\",\n    `width:${(width - height) / 2 - 20}px; padding: 0 10px`\n  );\n\n  const startBox = document.getElementById(\"select_start\");\n  const stopBox = document.getElementById(\"select_stop\");\n  const wallBox = document.getElementById(\"select_wall\");\n  const reset = document.getElementById(\"reset\");\n  const commence = document.getElementById(\"commence\");\n\n  const checkboxes = [startBox, stopBox, wallBox, reset, commence];\n\n  let interval;\n\n  startBox.addEventListener(\"mouseenter\", () => {\n    startBox.firstElementChild.classList.remove(\"hide\");\n    if (selection !== \"start\") {\n      interval = setInterval(() => {\n        startBox.style.background =\n          startBox.style.background === \"silver\" ? \"transparent\" : \"silver\";\n        startBox.style.color =\n          startBox.style.color === \"black\" ? \"silver\" : \"black\";\n      }, 750);\n    }\n  });\n  stopBox.addEventListener(\"mouseenter\", () => {\n    stopBox.firstElementChild.classList.remove(\"hide\");\n    if (selection !== \"stop\") {\n      interval = setInterval(() => {\n        stopBox.style.background =\n          stopBox.style.background === \"rgba(8, 131, 16, 0.65)\"\n            ? \"transparent\"\n            : \"rgba(8, 131, 16, 0.65)\";\n      }, 750);\n    }\n  });\n  wallBox.addEventListener(\"mouseenter\", () => {\n    wallBox.firstElementChild.classList.remove(\"hide\");\n    if (selection !== \"wall\") {\n      interval = setInterval(() => {\n        wallBox.style.background =\n          wallBox.style.background === \"darkorange\"\n            ? \"transparent\"\n            : \"darkorange\";\n      }, 750);\n    }\n  });\n  reset.addEventListener(\"mouseenter\", () => {\n    reset.firstElementChild.classList.remove(\"hide\");\n    interval = setInterval(() => {\n      reset.style.background =\n        reset.style.background === \"darkred\" ? \"transparent\" : \"darkred\";\n    }, 750);\n  });\n  commence.addEventListener(\"mouseenter\", () => {\n    commence.firstElementChild.classList.remove(\"hide\");\n    interval = setInterval(() => {\n      commence.style.background =\n        commence.style.background === \"rgba(83, 9, 219, 0.65)\"\n          ? \"transparent\"\n          : \"rgba(83, 9, 219, 0.65)\";\n    }, 750);\n  });\n  startBox.addEventListener(\"mouseleave\", () => {\n    startBox.firstElementChild.classList.add(\"hide\");\n    if (selection !== \"start\") {\n      startBox.style.background = \"transparent\";\n      startBox.style.color = \"silver\";\n    }\n    clearInterval(interval);\n  });\n  stopBox.addEventListener(\"mouseleave\", () => {\n    stopBox.firstElementChild.classList.add(\"hide\");\n    if (selection !== \"stop\") {\n      stopBox.style.background = \"transparent\";\n    }\n    clearInterval(interval);\n  });\n  wallBox.addEventListener(\"mouseleave\", () => {\n    wallBox.firstElementChild.classList.add(\"hide\");\n    if (selection !== \"wall\") {\n      wallBox.style.background = \"transparent\";\n    }\n    clearInterval(interval);\n  });\n  reset.addEventListener(\"mouseleave\", () => {\n    reset.firstElementChild.classList.add(\"hide\");\n    reset.style.background = \"transparent\";\n    clearInterval(interval);\n  });\n  commence.addEventListener(\"mouseleave\", () => {\n    commence.firstElementChild.classList.add(\"hide\");\n    if (selection !== \"commence\") commence.style.background = \"transparent\";\n    clearInterval(interval);\n  });\n  startBox.addEventListener(\"click\", () => {\n    clearInterval(interval);\n    startBox.style.background = \"silver\";\n    startBox.style.color = \"black\";\n    stopBox.style.background = \"transparent\";\n    wallBox.style.background = \"transparent\";\n    selection = \"start\";\n  });\n  stopBox.addEventListener(\"click\", () => {\n    clearInterval(interval);\n    stopBox.style.background = \"rgba(8, 131, 16, 0.65)\";\n    startBox.style.background = \"transparent\";\n    startBox.style.color = \"silver\";\n    wallBox.style.background = \"transparent\";\n    selection = \"stop\";\n  });\n  wallBox.addEventListener(\"click\", () => {\n    clearInterval(interval);\n    wallBox.style.background = \"darkorange\";\n    stopBox.style.background = \"transparent\";\n    startBox.style.background = \"transparent\";\n    startBox.style.color = \"silver\";\n    selection = \"wall\";\n  });\n  reset.addEventListener(\"click\", () => {\n    clearInterval(interval);\n    selection = \"\";\n    source = undefined;\n    stop = undefined;\n    startBox.style.color = \"silver\";\n    checkboxes.forEach(box => {\n      box.style.background = \"transparent\";\n    });\n    Object(_build_grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n  commence.addEventListener(\"click\", () => {\n    clearInterval(interval);\n    wallBox.style.background = \"transparent\";\n    stopBox.style.background = \"transparent\";\n    startBox.style.background = \"transparent\";\n    if (source && stop) commence.style.background = \"rgba(83, 9, 219, 0.65)\";\n    startBox.style.color = \"silver\";\n    selection = \"commence\";\n  });\n\n  commence.addEventListener(\"click\", () => {\n    if (source && stop) Object(_dijkstras__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(graph, source);\n  });\n\n  const dimSlider = document.getElementsByClassName(\"slider\")[0];\n  const dimSuffix = document.getElementsByClassName(\"dimension_suffix\")[0];\n  const dimToolTip = document.getElementsByClassName(\"dimension_tooltip\")[0];\n\n  dimSlider.addEventListener(\"mouseenter\", () => {\n    dimToolTip.classList.remove(\"hide\");\n  });\n  dimSlider.addEventListener(\"mouseleave\", () => {\n    dimToolTip.classList.add(\"hide\");\n  });\n  dimSlider.addEventListener(\"input\", event => {\n    const value = event.currentTarget.value;\n    square = Number.parseInt(value);\n    if (square) {\n      dimSuffix.innerHTML = value + \"x\" + value;\n      Object(_build_grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    }\n    reset.dispatchEvent(new Event(\"click\"));\n  });\n});\n\n\n//# sourceURL=webpack:///./client/lib/right_menu.js?");

/***/ }),

/***/ "./client/lib/wall_off.js":
/*!********************************!*\
  !*** ./client/lib/wall_off.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (pos => {\n  const posString = pos.join(\",\");\n  const node = document.getElementById(posString);\n  node.style.transitionDuration = \"0s\";\n  node.style.transitionDelay = \"0s\";\n  node.style.background = \"darkorange\";\n  for (let key in graph) {\n    delete graph[key][posString];\n  }\n  delete graph[posString];\n});\n\n\n//# sourceURL=webpack:///./client/lib/wall_off.js?");

/***/ })

/******/ });