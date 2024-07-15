"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/es-set-tostringtag";
exports.ids = ["vendor-chunks/es-set-tostringtag"];
exports.modules = {

/***/ "(ssr)/./node_modules/es-set-tostringtag/index.js":
/*!**************************************************!*\
  !*** ./node_modules/es-set-tostringtag/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(ssr)/./node_modules/get-intrinsic/index.js\");\n\nvar $defineProperty = GetIntrinsic('%Object.defineProperty%', true);\n\nvar hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ \"(ssr)/./node_modules/has-tostringtag/shams.js\")();\nvar hasOwn = __webpack_require__(/*! hasown */ \"(ssr)/./node_modules/hasown/index.js\");\n\nvar toStringTag = hasToStringTag ? Symbol.toStringTag : null;\n\n/** @type {import('.')} */\nmodule.exports = function setToStringTag(object, value) {\n\tvar overrideIfSet = arguments.length > 2 && arguments[2] && arguments[2].force;\n\tif (toStringTag && (overrideIfSet || !hasOwn(object, toStringTag))) {\n\t\tif ($defineProperty) {\n\t\t\t$defineProperty(object, toStringTag, {\n\t\t\t\tconfigurable: true,\n\t\t\t\tenumerable: false,\n\t\t\t\tvalue: value,\n\t\t\t\twritable: false\n\t\t\t});\n\t\t} else {\n\t\t\tobject[toStringTag] = value; // eslint-disable-line no-param-reassign\n\t\t}\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXMtc2V0LXRvc3RyaW5ndGFnL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLG1CQUFtQixtQkFBTyxDQUFDLGtFQUFlOztBQUUxQzs7QUFFQSxxQkFBcUIsbUJBQU8sQ0FBQyw0RUFBdUI7QUFDcEQsYUFBYSxtQkFBTyxDQUFDLG9EQUFROztBQUU3Qjs7QUFFQSxXQUFXLGFBQWE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLElBQUk7QUFDSixnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1tYXJ0Ly4vbm9kZV9tb2R1bGVzL2VzLXNldC10b3N0cmluZ3RhZy9pbmRleC5qcz8wNjAyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJ2dldC1pbnRyaW5zaWMnKTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IEdldEludHJpbnNpYygnJU9iamVjdC5kZWZpbmVQcm9wZXJ0eSUnLCB0cnVlKTtcblxudmFyIGhhc1RvU3RyaW5nVGFnID0gcmVxdWlyZSgnaGFzLXRvc3RyaW5ndGFnL3NoYW1zJykoKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCdoYXNvd24nKTtcblxudmFyIHRvU3RyaW5nVGFnID0gaGFzVG9TdHJpbmdUYWcgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiBudWxsO1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLicpfSAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXRUb1N0cmluZ1RhZyhvYmplY3QsIHZhbHVlKSB7XG5cdHZhciBvdmVycmlkZUlmU2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICYmIGFyZ3VtZW50c1syXS5mb3JjZTtcblx0aWYgKHRvU3RyaW5nVGFnICYmIChvdmVycmlkZUlmU2V0IHx8ICFoYXNPd24ob2JqZWN0LCB0b1N0cmluZ1RhZykpKSB7XG5cdFx0aWYgKCRkZWZpbmVQcm9wZXJ0eSkge1xuXHRcdFx0JGRlZmluZVByb3BlcnR5KG9iamVjdCwgdG9TdHJpbmdUYWcsIHtcblx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0XHR3cml0YWJsZTogZmFsc2Vcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvYmplY3RbdG9TdHJpbmdUYWddID0gdmFsdWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblx0XHR9XG5cdH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/es-set-tostringtag/index.js\n");

/***/ })

};
;