"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/components/catalog-drop-down/catalogDropDown.tsx":
/*!**************************************************************!*\
  !*** ./src/components/catalog-drop-down/catalogDropDown.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _catalogDropDown_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalogDropDown.module.css */ \"(app-pages-browser)/./src/components/catalog-drop-down/catalogDropDown.module.css\");\n/* harmony import */ var _catalogDropDown_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_catalogDropDown_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CatalogDropDown = (props)=>{\n    _s();\n    const openCatalogBool = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.differFunc.openCatalogBool);\n    const openCatalog = openCatalogBool && (_catalogDropDown_module_css__WEBPACK_IMPORTED_MODULE_2___default().catalog_drop_down_container_open);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_catalogDropDown_module_css__WEBPACK_IMPORTED_MODULE_2___default().catalog_drop_down_container), \" \").concat(props.fixedClass)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\catalog-drop-down\\\\catalogDropDown.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CatalogDropDown, \"0yKu3poBSHVVzbKPW0E2a0s7PDE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = CatalogDropDown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CatalogDropDown);\nvar _c;\n$RefreshReg$(_c, \"CatalogDropDown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NhdGFsb2ctZHJvcC1kb3duL2NhdGFsb2dEcm9wRG93bi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBQ3lCO0FBQ1Q7QUFHMUMsTUFBTUcsa0JBQWlELENBQUNDOztJQUN0RCxNQUFNQyxrQkFBa0JILHdEQUFXQSxDQUNqQyxDQUFDSSxRQUFxQkEsTUFBTUMsVUFBVSxDQUFDRixlQUFlO0lBR3hELE1BQU1HLGNBQWNILG1CQUFtQkoscUdBQXdDO0lBRS9FLHFCQUNFLDhEQUFDUztRQUNDQyxXQUFXLEdBQTBDUCxPQUF2Q0gsZ0dBQW1DLEVBQUMsS0FBb0IsT0FBakJHLE1BQU1TLFVBQVU7Ozs7OztBQUczRTtHQVpNVjs7UUFDb0JELG9EQUFXQTs7O0tBRC9CQztBQWNOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhdGFsb2ctZHJvcC1kb3duL2NhdGFsb2dEcm9wRG93bi50c3g/ZmYxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2NhdGFsb2dEcm9wRG93bi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCJAL2FwcC9HbG9iYWxSZWR1eC9zdG9yZVwiO1xyXG5cclxuY29uc3QgQ2F0YWxvZ0Ryb3BEb3duOiBSZWFjdC5GQzx7IGZpeGVkQ2xhc3M6IGFueSB9PiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IG9wZW5DYXRhbG9nQm9vbCA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmRpZmZlckZ1bmMub3BlbkNhdGFsb2dCb29sXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb3BlbkNhdGFsb2cgPSBvcGVuQ2F0YWxvZ0Jvb2wgJiYgY2xhc3Nlcy5jYXRhbG9nX2Ryb3BfZG93bl9jb250YWluZXJfb3BlblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMuY2F0YWxvZ19kcm9wX2Rvd25fY29udGFpbmVyfSAke3Byb3BzLmZpeGVkQ2xhc3N9YH1cclxuICAgID48L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0YWxvZ0Ryb3BEb3duO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjbGFzc2VzIiwidXNlU2VsZWN0b3IiLCJDYXRhbG9nRHJvcERvd24iLCJwcm9wcyIsIm9wZW5DYXRhbG9nQm9vbCIsInN0YXRlIiwiZGlmZmVyRnVuYyIsIm9wZW5DYXRhbG9nIiwiY2F0YWxvZ19kcm9wX2Rvd25fY29udGFpbmVyX29wZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJjYXRhbG9nX2Ryb3BfZG93bl9jb250YWluZXIiLCJmaXhlZENsYXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/catalog-drop-down/catalogDropDown.tsx\n"));

/***/ })

});