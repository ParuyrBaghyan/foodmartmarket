"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/object.assign";
exports.ids = ["vendor-chunks/object.assign"];
exports.modules = {

/***/ "(ssr)/./node_modules/object.assign/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/object.assign/implementation.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n// modified from https://github.com/es-shims/es6-shim\nvar objectKeys = __webpack_require__(/*! object-keys */ \"(ssr)/./node_modules/object-keys/index.js\");\nvar hasSymbols = __webpack_require__(/*! has-symbols/shams */ \"(ssr)/./node_modules/has-symbols/shams.js\")();\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"(ssr)/./node_modules/call-bind/callBound.js\");\nvar toObject = Object;\nvar $push = callBound('Array.prototype.push');\nvar $propIsEnumerable = callBound('Object.prototype.propertyIsEnumerable');\nvar originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;\n\n// eslint-disable-next-line no-unused-vars\nmodule.exports = function assign(target, source1) {\n\tif (target == null) { throw new TypeError('target must be an object'); }\n\tvar to = toObject(target); // step 1\n\tif (arguments.length === 1) {\n\t\treturn to; // step 2\n\t}\n\tfor (var s = 1; s < arguments.length; ++s) {\n\t\tvar from = toObject(arguments[s]); // step 3.a.i\n\n\t\t// step 3.a.ii:\n\t\tvar keys = objectKeys(from);\n\t\tvar getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);\n\t\tif (getSymbols) {\n\t\t\tvar syms = getSymbols(from);\n\t\t\tfor (var j = 0; j < syms.length; ++j) {\n\t\t\t\tvar key = syms[j];\n\t\t\t\tif ($propIsEnumerable(from, key)) {\n\t\t\t\t\t$push(keys, key);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t// step 3.a.iii:\n\t\tfor (var i = 0; i < keys.length; ++i) {\n\t\t\tvar nextKey = keys[i];\n\t\t\tif ($propIsEnumerable(from, nextKey)) { // step 3.a.iii.2\n\t\t\t\tvar propValue = from[nextKey]; // step 3.a.iii.2.a\n\t\t\t\tto[nextKey] = propValue; // step 3.a.iii.2.b\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to; // step 4\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb2JqZWN0LmFzc2lnbi9pbXBsZW1lbnRhdGlvbi5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLDhEQUFhO0FBQ3RDLGlCQUFpQixtQkFBTyxDQUFDLG9FQUFtQjtBQUM1QyxnQkFBZ0IsbUJBQU8sQ0FBQyx3RUFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qiw0QkFBNEI7QUFDNUI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBLDJDQUEyQztBQUMzQyxtQ0FBbUM7QUFDbkMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLW1hcnQvLi9ub2RlX21vZHVsZXMvb2JqZWN0LmFzc2lnbi9pbXBsZW1lbnRhdGlvbi5qcz9hN2I3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLy8gbW9kaWZpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM2LXNoaW1cbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnb2JqZWN0LWtleXMnKTtcbnZhciBoYXNTeW1ib2xzID0gcmVxdWlyZSgnaGFzLXN5bWJvbHMvc2hhbXMnKSgpO1xudmFyIGNhbGxCb3VuZCA9IHJlcXVpcmUoJ2NhbGwtYmluZC9jYWxsQm91bmQnKTtcbnZhciB0b09iamVjdCA9IE9iamVjdDtcbnZhciAkcHVzaCA9IGNhbGxCb3VuZCgnQXJyYXkucHJvdG90eXBlLnB1c2gnKTtcbnZhciAkcHJvcElzRW51bWVyYWJsZSA9IGNhbGxCb3VuZCgnT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZScpO1xudmFyIG9yaWdpbmFsR2V0U3ltYm9scyA9IGhhc1N5bWJvbHMgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzIDogbnVsbDtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZTEpIHtcblx0aWYgKHRhcmdldCA9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ3RhcmdldCBtdXN0IGJlIGFuIG9iamVjdCcpOyB9XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7IC8vIHN0ZXAgMVxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuXHRcdHJldHVybiB0bzsgLy8gc3RlcCAyXG5cdH1cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyArK3MpIHtcblx0XHR2YXIgZnJvbSA9IHRvT2JqZWN0KGFyZ3VtZW50c1tzXSk7IC8vIHN0ZXAgMy5hLmlcblxuXHRcdC8vIHN0ZXAgMy5hLmlpOlxuXHRcdHZhciBrZXlzID0gb2JqZWN0S2V5cyhmcm9tKTtcblx0XHR2YXIgZ2V0U3ltYm9scyA9IGhhc1N5bWJvbHMgJiYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgfHwgb3JpZ2luYWxHZXRTeW1ib2xzKTtcblx0XHRpZiAoZ2V0U3ltYm9scykge1xuXHRcdFx0dmFyIHN5bXMgPSBnZXRTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBzeW1zLmxlbmd0aDsgKytqKSB7XG5cdFx0XHRcdHZhciBrZXkgPSBzeW1zW2pdO1xuXHRcdFx0XHRpZiAoJHByb3BJc0VudW1lcmFibGUoZnJvbSwga2V5KSkge1xuXHRcdFx0XHRcdCRwdXNoKGtleXMsIGtleSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBzdGVwIDMuYS5paWk6XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHR2YXIgbmV4dEtleSA9IGtleXNbaV07XG5cdFx0XHRpZiAoJHByb3BJc0VudW1lcmFibGUoZnJvbSwgbmV4dEtleSkpIHsgLy8gc3RlcCAzLmEuaWlpLjJcblx0XHRcdFx0dmFyIHByb3BWYWx1ZSA9IGZyb21bbmV4dEtleV07IC8vIHN0ZXAgMy5hLmlpaS4yLmFcblx0XHRcdFx0dG9bbmV4dEtleV0gPSBwcm9wVmFsdWU7IC8vIHN0ZXAgMy5hLmlpaS4yLmJcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87IC8vIHN0ZXAgNFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/object.assign/implementation.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/object.assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object.assign/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar defineProperties = __webpack_require__(/*! define-properties */ \"(ssr)/./node_modules/define-properties/index.js\");\nvar callBind = __webpack_require__(/*! call-bind */ \"(ssr)/./node_modules/call-bind/index.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"(ssr)/./node_modules/object.assign/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"(ssr)/./node_modules/object.assign/polyfill.js\");\nvar shim = __webpack_require__(/*! ./shim */ \"(ssr)/./node_modules/object.assign/shim.js\");\n\nvar polyfill = callBind.apply(getPolyfill());\n// eslint-disable-next-line no-unused-vars\nvar bound = function assign(target, source1) {\n\treturn polyfill(Object, arguments);\n};\n\ndefineProperties(bound, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = bound;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb2JqZWN0LmFzc2lnbi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYix1QkFBdUIsbUJBQU8sQ0FBQywwRUFBbUI7QUFDbEQsZUFBZSxtQkFBTyxDQUFDLDBEQUFXOztBQUVsQyxxQkFBcUIsbUJBQU8sQ0FBQyw4RUFBa0I7QUFDL0Msa0JBQWtCLG1CQUFPLENBQUMsa0VBQVk7QUFDdEMsV0FBVyxtQkFBTyxDQUFDLDBEQUFROztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QtbWFydC8uL25vZGVfbW9kdWxlcy9vYmplY3QuYXNzaWduL2luZGV4LmpzPzQzZTUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lUHJvcGVydGllcyA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgY2FsbEJpbmQgPSByZXF1aXJlKCdjYWxsLWJpbmQnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIHBvbHlmaWxsID0gY2FsbEJpbmQuYXBwbHkoZ2V0UG9seWZpbGwoKSk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbnZhciBib3VuZCA9IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZTEpIHtcblx0cmV0dXJuIHBvbHlmaWxsKE9iamVjdCwgYXJndW1lbnRzKTtcbn07XG5cbmRlZmluZVByb3BlcnRpZXMoYm91bmQsIHtcblx0Z2V0UG9seWZpbGw6IGdldFBvbHlmaWxsLFxuXHRpbXBsZW1lbnRhdGlvbjogaW1wbGVtZW50YXRpb24sXG5cdHNoaW06IHNoaW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJvdW5kO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/object.assign/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/object.assign/polyfill.js":
/*!************************************************!*\
  !*** ./node_modules/object.assign/polyfill.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"(ssr)/./node_modules/object.assign/implementation.js\");\n\nvar lacksProperEnumerationOrder = function () {\n\tif (!Object.assign) {\n\t\treturn false;\n\t}\n\t/*\n\t * v8, specifically in node 4.x, has a bug with incorrect property enumeration order\n\t * note: this does not detect the bug unless there's 20 characters\n\t */\n\tvar str = 'abcdefghijklmnopqrst';\n\tvar letters = str.split('');\n\tvar map = {};\n\tfor (var i = 0; i < letters.length; ++i) {\n\t\tmap[letters[i]] = letters[i];\n\t}\n\tvar obj = Object.assign({}, map);\n\tvar actual = '';\n\tfor (var k in obj) {\n\t\tactual += k;\n\t}\n\treturn str !== actual;\n};\n\nvar assignHasPendingExceptions = function () {\n\tif (!Object.assign || !Object.preventExtensions) {\n\t\treturn false;\n\t}\n\t/*\n\t * Firefox 37 still has \"pending exception\" logic in its Object.assign implementation,\n\t * which is 72% slower than our shim, and Firefox 40's native implementation.\n\t */\n\tvar thrower = Object.preventExtensions({ 1: 2 });\n\ttry {\n\t\tObject.assign(thrower, 'xy');\n\t} catch (e) {\n\t\treturn thrower[1] === 'y';\n\t}\n\treturn false;\n};\n\nmodule.exports = function getPolyfill() {\n\tif (!Object.assign) {\n\t\treturn implementation;\n\t}\n\tif (lacksProperEnumerationOrder()) {\n\t\treturn implementation;\n\t}\n\tif (assignHasPendingExceptions()) {\n\t\treturn implementation;\n\t}\n\treturn Object.assign;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb2JqZWN0LmFzc2lnbi9wb2x5ZmlsbC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixxQkFBcUIsbUJBQU8sQ0FBQyw4RUFBa0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsTUFBTTtBQUNoRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QtbWFydC8uL25vZGVfbW9kdWxlcy9vYmplY3QuYXNzaWduL3BvbHlmaWxsLmpzPzcyODciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbnZhciBsYWNrc1Byb3BlckVudW1lcmF0aW9uT3JkZXIgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHQvKlxuXHQgKiB2OCwgc3BlY2lmaWNhbGx5IGluIG5vZGUgNC54LCBoYXMgYSBidWcgd2l0aCBpbmNvcnJlY3QgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXJcblx0ICogbm90ZTogdGhpcyBkb2VzIG5vdCBkZXRlY3QgdGhlIGJ1ZyB1bmxlc3MgdGhlcmUncyAyMCBjaGFyYWN0ZXJzXG5cdCAqL1xuXHR2YXIgc3RyID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0Jztcblx0dmFyIGxldHRlcnMgPSBzdHIuc3BsaXQoJycpO1xuXHR2YXIgbWFwID0ge307XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGV0dGVycy5sZW5ndGg7ICsraSkge1xuXHRcdG1hcFtsZXR0ZXJzW2ldXSA9IGxldHRlcnNbaV07XG5cdH1cblx0dmFyIG9iaiA9IE9iamVjdC5hc3NpZ24oe30sIG1hcCk7XG5cdHZhciBhY3R1YWwgPSAnJztcblx0Zm9yICh2YXIgayBpbiBvYmopIHtcblx0XHRhY3R1YWwgKz0gaztcblx0fVxuXHRyZXR1cm4gc3RyICE9PSBhY3R1YWw7XG59O1xuXG52YXIgYXNzaWduSGFzUGVuZGluZ0V4Y2VwdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICghT2JqZWN0LmFzc2lnbiB8fCAhT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdC8qXG5cdCAqIEZpcmVmb3ggMzcgc3RpbGwgaGFzIFwicGVuZGluZyBleGNlcHRpb25cIiBsb2dpYyBpbiBpdHMgT2JqZWN0LmFzc2lnbiBpbXBsZW1lbnRhdGlvbixcblx0ICogd2hpY2ggaXMgNzIlIHNsb3dlciB0aGFuIG91ciBzaGltLCBhbmQgRmlyZWZveCA0MCdzIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbi5cblx0ICovXG5cdHZhciB0aHJvd2VyID0gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHsgMTogMiB9KTtcblx0dHJ5IHtcblx0XHRPYmplY3QuYXNzaWduKHRocm93ZXIsICd4eScpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIHRocm93ZXJbMV0gPT09ICd5Jztcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFBvbHlmaWxsKCkge1xuXHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRyZXR1cm4gaW1wbGVtZW50YXRpb247XG5cdH1cblx0aWYgKGxhY2tzUHJvcGVyRW51bWVyYXRpb25PcmRlcigpKSB7XG5cdFx0cmV0dXJuIGltcGxlbWVudGF0aW9uO1xuXHR9XG5cdGlmIChhc3NpZ25IYXNQZW5kaW5nRXhjZXB0aW9ucygpKSB7XG5cdFx0cmV0dXJuIGltcGxlbWVudGF0aW9uO1xuXHR9XG5cdHJldHVybiBPYmplY3QuYXNzaWduO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/object.assign/polyfill.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/object.assign/shim.js":
/*!********************************************!*\
  !*** ./node_modules/object.assign/shim.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"(ssr)/./node_modules/define-properties/index.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"(ssr)/./node_modules/object.assign/polyfill.js\");\n\nmodule.exports = function shimAssign() {\n\tvar polyfill = getPolyfill();\n\tdefine(\n\t\tObject,\n\t\t{ assign: polyfill },\n\t\t{ assign: function () { return Object.assign !== polyfill; } }\n\t);\n\treturn polyfill;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb2JqZWN0LmFzc2lnbi9zaGltLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLGFBQWEsbUJBQU8sQ0FBQywwRUFBbUI7QUFDeEMsa0JBQWtCLG1CQUFPLENBQUMsa0VBQVk7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrQkFBa0I7QUFDdEIsSUFBSSxzQkFBc0I7QUFDMUI7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1tYXJ0Ly4vbm9kZV9tb2R1bGVzL29iamVjdC5hc3NpZ24vc2hpbS5qcz85YjYxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbUFzc2lnbigpIHtcblx0dmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcblx0ZGVmaW5lKFxuXHRcdE9iamVjdCxcblx0XHR7IGFzc2lnbjogcG9seWZpbGwgfSxcblx0XHR7IGFzc2lnbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gT2JqZWN0LmFzc2lnbiAhPT0gcG9seWZpbGw7IH0gfVxuXHQpO1xuXHRyZXR1cm4gcG9seWZpbGw7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/object.assign/shim.js\n");

/***/ })

};
;