"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/document.contains";
exports.ids = ["vendor-chunks/document.contains"];
exports.modules = {

/***/ "(ssr)/./node_modules/document.contains/implementation.js":
/*!**********************************************************!*\
  !*** ./node_modules/document.contains/implementation.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function contains(other) {\n\tif (arguments.length < 1) {\n\t\tthrow new TypeError('1 argument is required');\n\t}\n\tif (typeof other !== 'object') {\n\t\tthrow new TypeError('Argument 1 (”other“) to Node.contains must be an instance of Node');\n\t}\n\n\tvar node = other;\n\tdo {\n\t\tif (this === node) {\n\t\t\treturn true;\n\t\t}\n\t\tif (node) {\n\t\t\tnode = node.parentNode;\n\t\t}\n\t} while (node);\n\n\treturn false;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZG9jdW1lbnQuY29udGFpbnMvaW1wbGVtZW50YXRpb24uanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QtbWFydC8uL25vZGVfbW9kdWxlcy9kb2N1bWVudC5jb250YWlucy9pbXBsZW1lbnRhdGlvbi5qcz9iNTliIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb250YWlucyhvdGhlcikge1xuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IGlzIHJlcXVpcmVkJyk7XG5cdH1cblx0aWYgKHR5cGVvZiBvdGhlciAhPT0gJ29iamVjdCcpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCAxICjigJ1vdGhlcuKAnCkgdG8gTm9kZS5jb250YWlucyBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIE5vZGUnKTtcblx0fVxuXG5cdHZhciBub2RlID0gb3RoZXI7XG5cdGRvIHtcblx0XHRpZiAodGhpcyA9PT0gbm9kZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGlmIChub2RlKSB7XG5cdFx0XHRub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXHRcdH1cblx0fSB3aGlsZSAobm9kZSk7XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/document.contains/implementation.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/document.contains/index.js":
/*!*************************************************!*\
  !*** ./node_modules/document.contains/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"(ssr)/./node_modules/define-properties/index.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"(ssr)/./node_modules/document.contains/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"(ssr)/./node_modules/document.contains/polyfill.js\");\nvar polyfill = getPolyfill();\nvar shim = __webpack_require__(/*! ./shim */ \"(ssr)/./node_modules/document.contains/shim.js\");\n\nvar boundContains = function contains(node, other) {\n\treturn polyfill.apply(node, [other]);\n};\n\ndefine(boundContains, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = boundContains;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZG9jdW1lbnQuY29udGFpbnMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsYUFBYSxtQkFBTyxDQUFDLDBFQUFtQjs7QUFFeEMscUJBQXFCLG1CQUFPLENBQUMsa0ZBQWtCO0FBQy9DLGtCQUFrQixtQkFBTyxDQUFDLHNFQUFZO0FBQ3RDO0FBQ0EsV0FBVyxtQkFBTyxDQUFDLDhEQUFROztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1tYXJ0Ly4vbm9kZV9tb2R1bGVzL2RvY3VtZW50LmNvbnRhaW5zL2luZGV4LmpzPzJjM2QiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcbnZhciBzaGltID0gcmVxdWlyZSgnLi9zaGltJyk7XG5cbnZhciBib3VuZENvbnRhaW5zID0gZnVuY3Rpb24gY29udGFpbnMobm9kZSwgb3RoZXIpIHtcblx0cmV0dXJuIHBvbHlmaWxsLmFwcGx5KG5vZGUsIFtvdGhlcl0pO1xufTtcblxuZGVmaW5lKGJvdW5kQ29udGFpbnMsIHtcblx0Z2V0UG9seWZpbGw6IGdldFBvbHlmaWxsLFxuXHRpbXBsZW1lbnRhdGlvbjogaW1wbGVtZW50YXRpb24sXG5cdHNoaW06IHNoaW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJvdW5kQ29udGFpbnM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/document.contains/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/document.contains/polyfill.js":
/*!****************************************************!*\
  !*** ./node_modules/document.contains/polyfill.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"(ssr)/./node_modules/document.contains/implementation.js\");\n\nmodule.exports = function getPolyfill() {\n\tif (typeof document !== 'undefined') {\n\t\tif (document.contains) {\n\t\t\treturn document.contains;\n\t\t}\n\t\tif (document.body && document.body.contains) {\n\t\t\ttry {\n\t\t\t\tif (typeof document.body.contains.call(document, '') === 'boolean') {\n\t\t\t\t\treturn document.body.contains;\n\t\t\t\t}\n\t\t\t} catch (e) { /**/ }\n\t\t}\n\t}\n\treturn implementation;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZG9jdW1lbnQuY29udGFpbnMvcG9seWZpbGwuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIscUJBQXFCLG1CQUFPLENBQUMsa0ZBQWtCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssWUFBWTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QtbWFydC8uL25vZGVfbW9kdWxlcy9kb2N1bWVudC5jb250YWlucy9wb2x5ZmlsbC5qcz9hMDMyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFBvbHlmaWxsKCkge1xuXHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdGlmIChkb2N1bWVudC5jb250YWlucykge1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmNvbnRhaW5zO1xuXHRcdH1cblx0XHRpZiAoZG9jdW1lbnQuYm9keSAmJiBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50LmJvZHkuY29udGFpbnMuY2FsbChkb2N1bWVudCwgJycpID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0XHRyZXR1cm4gZG9jdW1lbnQuYm9keS5jb250YWlucztcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkgeyAvKiovIH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGltcGxlbWVudGF0aW9uO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/document.contains/polyfill.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/document.contains/shim.js":
/*!************************************************!*\
  !*** ./node_modules/document.contains/shim.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"(ssr)/./node_modules/define-properties/index.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"(ssr)/./node_modules/document.contains/polyfill.js\");\n\nmodule.exports = function shimContains() {\n\tvar polyfill = getPolyfill();\n\tif (typeof document !== 'undefined') {\n\t\tdefine(\n\t\t\tdocument,\n\t\t\t{ contains: polyfill },\n\t\t\t{ contains: function () { return document.contains !== polyfill; } }\n\t\t);\n\t\tif (typeof Element !== 'undefined') {\n\t\t\tdefine(\n\t\t\t\tElement.prototype,\n\t\t\t\t{ contains: polyfill },\n\t\t\t\t{ contains: function () { return Element.prototype.contains !== polyfill; } }\n\t\t\t);\n\t\t}\n\t}\n\treturn polyfill;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZG9jdW1lbnQuY29udGFpbnMvc2hpbS5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsMEVBQW1CO0FBQ3hDLGtCQUFrQixtQkFBTyxDQUFDLHNFQUFZOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxvQkFBb0I7QUFDekIsS0FBSyx3QkFBd0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9CQUFvQjtBQUMxQixNQUFNLHdCQUF3QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1tYXJ0Ly4vbm9kZV9tb2R1bGVzL2RvY3VtZW50LmNvbnRhaW5zL3NoaW0uanM/OWNhZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1Db250YWlucygpIHtcblx0dmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcblx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRkZWZpbmUoXG5cdFx0XHRkb2N1bWVudCxcblx0XHRcdHsgY29udGFpbnM6IHBvbHlmaWxsIH0sXG5cdFx0XHR7IGNvbnRhaW5zOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5jb250YWlucyAhPT0gcG9seWZpbGw7IH0gfVxuXHRcdCk7XG5cdFx0aWYgKHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0ZGVmaW5lKFxuXHRcdFx0XHRFbGVtZW50LnByb3RvdHlwZSxcblx0XHRcdFx0eyBjb250YWluczogcG9seWZpbGwgfSxcblx0XHRcdFx0eyBjb250YWluczogZnVuY3Rpb24gKCkgeyByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUuY29udGFpbnMgIT09IHBvbHlmaWxsOyB9IH1cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBwb2x5ZmlsbDtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/document.contains/shim.js\n");

/***/ })

};
;