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

/***/ "(app-pages-browser)/./src/components/login/loginCodeInputs.tsx":
/*!**************************************************!*\
  !*** ./src/components/login/loginCodeInputs.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.module.css */ \"(app-pages-browser)/./src/components/login/login.module.css\");\n/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_login_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst firstRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\nconst secondRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\nconst thirdRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\nconst fourthRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\nconst listOfRefs = [\n    firstRef,\n    secondRef,\n    thirdRef,\n    fourthRef\n];\nconst LoginCodeInputs = ()=>{\n    function fillInputsHandler() {\n        for(let i = 0; i < listOfRefs.length; i++){\n            var _listOfRefs_i_current;\n            if (i < 3 && ((_listOfRefs_i_current = listOfRefs[i].current) === null || _listOfRefs_i_current === void 0 ? void 0 : _listOfRefs_i_current.value) !== \"\") {\n                var _listOfRefs__current;\n                (_listOfRefs__current = listOfRefs[i + 1].current) === null || _listOfRefs__current === void 0 ? void 0 : _listOfRefs__current.focus();\n            }\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: (_login_module_css__WEBPACK_IMPORTED_MODULE_2___default().code_inputs_container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                maxLength: 1,\n                className: (_login_module_css__WEBPACK_IMPORTED_MODULE_2___default().each_code_field),\n                ref: firstRef,\n                onChange: (e)=>fillInputsHandler()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\login\\\\loginCodeInputs.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                maxLength: 1,\n                className: (_login_module_css__WEBPACK_IMPORTED_MODULE_2___default().each_code_field),\n                ref: secondRef,\n                onChange: (e)=>fillInputsHandler()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\login\\\\loginCodeInputs.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                maxLength: 1,\n                className: (_login_module_css__WEBPACK_IMPORTED_MODULE_2___default().each_code_field),\n                ref: thirdRef,\n                onChange: (e)=>fillInputsHandler()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\login\\\\loginCodeInputs.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                maxLength: 1,\n                className: (_login_module_css__WEBPACK_IMPORTED_MODULE_2___default().each_code_field),\n                ref: fourthRef,\n                onChange: (e)=>fillInputsHandler()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\login\\\\loginCodeInputs.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\login\\\\loginCodeInputs.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_c = LoginCodeInputs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginCodeInputs);\nvar _c;\n$RefreshReg$(_c, \"LoginCodeInputs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xvZ2luL2xvZ2luQ29kZUlucHV0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFzQztBQUNHO0FBSXZDLE1BQU1HLFdBQVdGLDZDQUFNQSxDQUFtQjtBQUMxQyxNQUFNRyxZQUFZSCw2Q0FBTUEsQ0FBbUI7QUFDM0MsTUFBTUksV0FBV0osNkNBQU1BLENBQW1CO0FBQzFDLE1BQU1LLFlBQVlMLDZDQUFNQSxDQUFtQjtBQUMzQyxNQUFNTSxhQUFhO0lBQUNKO0lBQVVDO0lBQVdDO0lBQVVDO0NBQVU7QUFFL0QsTUFBTUUsa0JBQTRCO0lBS2hDLFNBQVNDO1FBQ1AsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlILFdBQVdJLE1BQU0sRUFBRUQsSUFBSztnQkFDN0JIO1lBQWIsSUFBSUcsSUFBSSxLQUFLSCxFQUFBQSx3QkFBQUEsVUFBVSxDQUFDRyxFQUFFLENBQUNFLE9BQU8sY0FBckJMLDRDQUFBQSxzQkFBdUJNLEtBQUssTUFBSyxJQUFJO29CQUNoRE47aUJBQUFBLHVCQUFBQSxVQUFVLENBQUNHLElBQUksRUFBRSxDQUFDRSxPQUFPLGNBQXpCTCwyQ0FBQUEscUJBQTJCTyxLQUFLO1lBQ2xDO1FBQ0Y7SUFDRjtJQUlBLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFXZCxnRkFBNkI7OzBCQUM1Qyw4REFBQ2dCO2dCQUNDQyxNQUFLO2dCQUNMQyxXQUFXO2dCQUNYSixXQUFXZCwwRUFBdUI7Z0JBQ2xDb0IsS0FBS25CO2dCQUNMb0IsVUFBVSxDQUFDQyxJQUFNZjs7Ozs7OzBCQUVuQiw4REFBQ1M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLFdBQVc7Z0JBQ1hKLFdBQVdkLDBFQUF1QjtnQkFDbENvQixLQUFLbEI7Z0JBQ0xtQixVQUFVLENBQUNDLElBQU1mOzs7Ozs7MEJBRW5CLDhEQUFDUztnQkFDQ0MsTUFBSztnQkFDTEMsV0FBVztnQkFDWEosV0FBV2QsMEVBQXVCO2dCQUNsQ29CLEtBQUtqQjtnQkFDTGtCLFVBQVUsQ0FBQ0MsSUFBTWY7Ozs7OzswQkFFbkIsOERBQUNTO2dCQUNDQyxNQUFLO2dCQUNMQyxXQUFXO2dCQUNYSixXQUFXZCwwRUFBdUI7Z0JBQ2xDb0IsS0FBS2hCO2dCQUNMaUIsVUFBVSxDQUFDQyxJQUFNZjs7Ozs7Ozs7Ozs7O0FBSXpCO0tBL0NNRDtBQWlETiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sb2dpbi9sb2dpbkNvZGVJbnB1dHMudHN4PzA2Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9sb2dpbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCJAL2FwcC9HbG9iYWxSZWR1eC9zdG9yZVwiO1xyXG5cclxuICBjb25zdCBmaXJzdFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBzZWNvbmRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgdGhpcmRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgZm91cnRoUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IGxpc3RPZlJlZnMgPSBbZmlyc3RSZWYsIHNlY29uZFJlZiwgdGhpcmRSZWYsIGZvdXJ0aFJlZl07XHJcblxyXG5jb25zdCBMb2dpbkNvZGVJbnB1dHM6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cclxuXHJcblxyXG5cclxuICBmdW5jdGlvbiBmaWxsSW5wdXRzSGFuZGxlcigpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdE9mUmVmcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaSA8IDMgJiYgbGlzdE9mUmVmc1tpXS5jdXJyZW50Py52YWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICAgIGxpc3RPZlJlZnNbaSArIDFdLmN1cnJlbnQ/LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb2RlX2lucHV0c19jb250YWluZXJ9PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgbWF4TGVuZ3RoPXsxfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5lYWNoX2NvZGVfZmllbGR9XHJcbiAgICAgICAgcmVmPXtmaXJzdFJlZn1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IGZpbGxJbnB1dHNIYW5kbGVyKCl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBtYXhMZW5ndGg9ezF9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmVhY2hfY29kZV9maWVsZH1cclxuICAgICAgICByZWY9e3NlY29uZFJlZn1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IGZpbGxJbnB1dHNIYW5kbGVyKCl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBtYXhMZW5ndGg9ezF9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmVhY2hfY29kZV9maWVsZH1cclxuICAgICAgICByZWY9e3RoaXJkUmVmfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZmlsbElucHV0c0hhbmRsZXIoKX1cclxuICAgICAgLz5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIG1heExlbmd0aD17MX1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZWFjaF9jb2RlX2ZpZWxkfVxyXG4gICAgICAgIHJlZj17Zm91cnRoUmVmfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZmlsbElucHV0c0hhbmRsZXIoKX1cclxuICAgICAgLz5cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Db2RlSW5wdXRzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsImNsYXNzZXMiLCJmaXJzdFJlZiIsInNlY29uZFJlZiIsInRoaXJkUmVmIiwiZm91cnRoUmVmIiwibGlzdE9mUmVmcyIsIkxvZ2luQ29kZUlucHV0cyIsImZpbGxJbnB1dHNIYW5kbGVyIiwiaSIsImxlbmd0aCIsImN1cnJlbnQiLCJ2YWx1ZSIsImZvY3VzIiwic3BhbiIsImNsYXNzTmFtZSIsImNvZGVfaW5wdXRzX2NvbnRhaW5lciIsImlucHV0IiwidHlwZSIsIm1heExlbmd0aCIsImVhY2hfY29kZV9maWVsZCIsInJlZiIsIm9uQ2hhbmdlIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/login/loginCodeInputs.tsx\n"));

/***/ })

});