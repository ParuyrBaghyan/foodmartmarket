"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/GlobalRedux/differFunc.ts":
/*!*******************************************!*\
  !*** ./src/app/GlobalRedux/differFunc.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   differFuncActions: function() { return /* binding */ differFuncActions; },\n/* harmony export */   differFuncSlice: function() { return /* binding */ differFuncSlice; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* __next_internal_client_entry_do_not_use__ differFuncSlice,differFuncActions,default auto */ \nconst initialState = {\n    fixed: false,\n    openCatalogBool: false,\n    openSearchBool: false,\n    onSearchBool: false,\n    markHeartBool: false,\n    product: null,\n    markProductHeartBool: false\n};\nconst differFuncSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"differFunc\",\n    initialState,\n    reducers: {\n        fixWhileScroll (state) {\n            if (window.scrollY > 36) {\n                state.fixed = true;\n            } else {\n                state.fixed = false;\n            }\n        },\n        openCatalog (state) {\n            state.openCatalogBool = !state.openCatalogBool;\n        },\n        openSearch (state) {\n            state.openSearchBool = !state.openSearchBool;\n        },\n        onSearch (state, action) {\n            if (action.payload !== \"\") {\n                state.onSearchBool = true;\n            } else {\n                state.onSearchBool = false;\n            }\n        },\n        markHeart (state) {\n            state.markHeartBool = !state.markHeartBool;\n        },\n        passProduct (state, action) {\n            state.product = action.payload;\n        },\n        markProductHeart (state) {\n            state.markProductHeartBool = !state.markProductHeartBool;\n        }\n    }\n});\nconst differFuncActions = differFuncSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (differFuncSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvR2xvYmFsUmVkdXgvZGlmZmVyRnVuYy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7K0ZBRytDO0FBYS9DLE1BQU1DLGVBQWdDO0lBQ3BDQyxPQUFPO0lBQ1BDLGlCQUFpQjtJQUNqQkMsZ0JBQWdCO0lBQ2hCQyxjQUFjO0lBQ2RDLGVBQWU7SUFDZkMsU0FBUztJQUNUQyxzQkFBdUI7QUFDekI7QUFFTyxNQUFNQyxrQkFBa0JULDZEQUFXQSxDQUFDO0lBQ3pDVSxNQUFNO0lBQ05UO0lBQ0FVLFVBQVU7UUFDUkMsZ0JBQWVDLEtBQUs7WUFDbEIsSUFBSUMsT0FBT0MsT0FBTyxHQUFHLElBQUk7Z0JBQ3ZCRixNQUFNWCxLQUFLLEdBQUc7WUFDaEIsT0FBTztnQkFDTFcsTUFBTVgsS0FBSyxHQUFHO1lBQ2hCO1FBQ0Y7UUFFQWMsYUFBWUgsS0FBSztZQUNmQSxNQUFNVixlQUFlLEdBQUcsQ0FBQ1UsTUFBTVYsZUFBZTtRQUNoRDtRQUVBYyxZQUFXSixLQUFLO1lBQ2RBLE1BQU1ULGNBQWMsR0FBRyxDQUFDUyxNQUFNVCxjQUFjO1FBQzlDO1FBRUFjLFVBQVNMLEtBQUssRUFBRU0sTUFBTTtZQUNwQixJQUFJQSxPQUFPQyxPQUFPLEtBQUssSUFBSTtnQkFDekJQLE1BQU1SLFlBQVksR0FBRztZQUN2QixPQUFPO2dCQUNMUSxNQUFNUixZQUFZLEdBQUc7WUFDdkI7UUFDRjtRQUNBZ0IsV0FBVVIsS0FBSztZQUNiQSxNQUFNUCxhQUFhLEdBQUcsQ0FBQ08sTUFBTVAsYUFBYTtRQUM1QztRQUNBZ0IsYUFBWVQsS0FBSyxFQUFFTSxNQUFNO1lBQ3ZCTixNQUFNTixPQUFPLEdBQUdZLE9BQU9DLE9BQU87UUFDaEM7UUFDQUcsa0JBQWlCVixLQUFLO1lBQ3BCQSxNQUFNTCxvQkFBb0IsR0FBRyxDQUFDSyxNQUFNTCxvQkFBb0I7UUFDMUQ7SUFDRjtBQUNGLEdBQUc7QUFFSSxNQUFNZ0Isb0JBQW9CZixnQkFBZ0JnQixPQUFPLENBQUM7QUFDekQsK0RBQWVoQixnQkFBZ0JpQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9HbG9iYWxSZWR1eC9kaWZmZXJGdW5jLnRzP2VjOWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBQcm9kdWN0TW9kZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL21vZHVsZS9wcm9kdWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlmZmVyZW50U3RhdGVzIHtcclxuICBmaXhlZDogYm9vbGVhbjtcclxuICBvcGVuQ2F0YWxvZ0Jvb2w6IGJvb2xlYW47XHJcbiAgb3BlblNlYXJjaEJvb2w6IGJvb2xlYW47XHJcbiAgb25TZWFyY2hCb29sOiBib29sZWFuO1xyXG4gIG1hcmtIZWFydEJvb2w6IGJvb2xlYW47XHJcbiAgcHJvZHVjdDogUHJvZHVjdE1vZGVsIHwgbnVsbDtcclxuICBtYXJrUHJvZHVjdEhlYXJ0Qm9vbDpib29sZWFuO1xyXG4gIGNob3NlUXVhbnRpdHlUeXBlQm9vbFxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IERpZmZlcmVudFN0YXRlcyA9IHtcclxuICBmaXhlZDogZmFsc2UsXHJcbiAgb3BlbkNhdGFsb2dCb29sOiBmYWxzZSxcclxuICBvcGVuU2VhcmNoQm9vbDogZmFsc2UsXHJcbiAgb25TZWFyY2hCb29sOiBmYWxzZSxcclxuICBtYXJrSGVhcnRCb29sOiBmYWxzZSxcclxuICBwcm9kdWN0OiBudWxsLFxyXG4gIG1hcmtQcm9kdWN0SGVhcnRCb29sIDogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkaWZmZXJGdW5jU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJkaWZmZXJGdW5jXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBmaXhXaGlsZVNjcm9sbChzdGF0ZSkge1xyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAzNikge1xyXG4gICAgICAgIHN0YXRlLmZpeGVkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGF0ZS5maXhlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5DYXRhbG9nKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLm9wZW5DYXRhbG9nQm9vbCA9ICFzdGF0ZS5vcGVuQ2F0YWxvZ0Jvb2w7XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5TZWFyY2goc3RhdGUpIHtcclxuICAgICAgc3RhdGUub3BlblNlYXJjaEJvb2wgPSAhc3RhdGUub3BlblNlYXJjaEJvb2w7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uU2VhcmNoKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkICE9PSBcIlwiKSB7XHJcbiAgICAgICAgc3RhdGUub25TZWFyY2hCb29sID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGF0ZS5vblNlYXJjaEJvb2wgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1hcmtIZWFydChzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5tYXJrSGVhcnRCb29sID0gIXN0YXRlLm1hcmtIZWFydEJvb2w7XHJcbiAgICB9LFxyXG4gICAgcGFzc1Byb2R1Y3Qoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICBzdGF0ZS5wcm9kdWN0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgbWFya1Byb2R1Y3RIZWFydChzdGF0ZSl7XHJcbiAgICAgIHN0YXRlLm1hcmtQcm9kdWN0SGVhcnRCb29sID0gIXN0YXRlLm1hcmtQcm9kdWN0SGVhcnRCb29sXHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGlmZmVyRnVuY0FjdGlvbnMgPSBkaWZmZXJGdW5jU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyRnVuY1NsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImZpeGVkIiwib3BlbkNhdGFsb2dCb29sIiwib3BlblNlYXJjaEJvb2wiLCJvblNlYXJjaEJvb2wiLCJtYXJrSGVhcnRCb29sIiwicHJvZHVjdCIsIm1hcmtQcm9kdWN0SGVhcnRCb29sIiwiZGlmZmVyRnVuY1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZml4V2hpbGVTY3JvbGwiLCJzdGF0ZSIsIndpbmRvdyIsInNjcm9sbFkiLCJvcGVuQ2F0YWxvZyIsIm9wZW5TZWFyY2giLCJvblNlYXJjaCIsImFjdGlvbiIsInBheWxvYWQiLCJtYXJrSGVhcnQiLCJwYXNzUHJvZHVjdCIsIm1hcmtQcm9kdWN0SGVhcnQiLCJkaWZmZXJGdW5jQWN0aW9ucyIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/GlobalRedux/differFunc.ts\n"));

/***/ })

});