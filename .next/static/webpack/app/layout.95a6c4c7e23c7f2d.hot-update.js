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

/***/ "(app-pages-browser)/./src/app/GlobalRedux/loginSlice.ts":
/*!*******************************************!*\
  !*** ./src/app/GlobalRedux/loginSlice.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loginActions: function() { return /* binding */ loginActions; },\n/* harmony export */   loginSlice: function() { return /* binding */ loginSlice; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    openLoginModalBool: false,\n    openCodeFieldBool: false,\n    phoneNumber: null,\n    codeArray: [],\n    verificationCode: undefined,\n    verified: false\n};\nconst loginSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"Login\",\n    initialState,\n    reducers: {\n        openLoginModal (state) {\n            state.openLoginModalBool = true;\n        },\n        closeLoginModal (state) {\n            state.codeArray = [];\n            state.openLoginModalBool = false;\n            state.openCodeFieldBool = false;\n        },\n        closeLoginModalByWindow (state, action) {\n            const e = action.payload;\n            if (e.clientY < 34 || e.clientY > 672 || e.clientX < 491 || e.clientX > 1020) {\n                state.openCodeFieldBool = false;\n                state.openLoginModalBool = false;\n                state.codeArray = [];\n            }\n        },\n        openCodeField (state, action) {\n            state.openCodeFieldBool = true;\n            state.phoneNumber = action.payload;\n        },\n        codeGenerator (state) {\n            while(state.codeArray.length < 4){\n                const randomNumber = Math.round(Math.random() * 9);\n                state.codeArray = [\n                    ...state.codeArray,\n                    randomNumber\n                ];\n            }\n            let arrayToString = \"\";\n            state.codeArray.map((item)=>{\n                arrayToString += item;\n            });\n            state.verificationCode = arrayToString;\n            alert(\"Your verification code is: \" + arrayToString);\n        },\n        check\n    }\n});\nconst loginActions = loginSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (loginSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvR2xvYmFsUmVkdXgvbG9naW5TbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDK0M7QUFXL0MsTUFBTUMsZUFBNEI7SUFDaENDLG9CQUFvQjtJQUNwQkMsbUJBQW1CO0lBQ25CQyxhQUFhO0lBQ2JDLFdBQVcsRUFBRTtJQUNiQyxrQkFBa0JDO0lBQ2xCQyxVQUFVO0FBQ1o7QUFFTyxNQUFNQyxhQUFhVCw2REFBV0EsQ0FBQztJQUNwQ1UsTUFBTTtJQUNOVDtJQUNBVSxVQUFVO1FBQ1JDLGdCQUFlQyxLQUFLO1lBQ2xCQSxNQUFNWCxrQkFBa0IsR0FBRztRQUM3QjtRQUVBWSxpQkFBZ0JELEtBQUs7WUFDbkJBLE1BQU1SLFNBQVMsR0FBRyxFQUFFO1lBQ3BCUSxNQUFNWCxrQkFBa0IsR0FBRztZQUMzQlcsTUFBTVYsaUJBQWlCLEdBQUc7UUFDNUI7UUFDQVkseUJBQXdCRixLQUFLLEVBQUVHLE1BQU07WUFDbkMsTUFBTUMsSUFBSUQsT0FBT0UsT0FBTztZQUN4QixJQUNFRCxFQUFFRSxPQUFPLEdBQUcsTUFDWkYsRUFBRUUsT0FBTyxHQUFHLE9BQ1pGLEVBQUVHLE9BQU8sR0FBRyxPQUNaSCxFQUFFRyxPQUFPLEdBQUcsTUFDWjtnQkFDQVAsTUFBTVYsaUJBQWlCLEdBQUc7Z0JBQzFCVSxNQUFNWCxrQkFBa0IsR0FBRztnQkFDM0JXLE1BQU1SLFNBQVMsR0FBRyxFQUFFO1lBQ3RCO1FBQ0Y7UUFDQWdCLGVBQWNSLEtBQUssRUFBRUcsTUFBTTtZQUN6QkgsTUFBTVYsaUJBQWlCLEdBQUc7WUFDMUJVLE1BQU1ULFdBQVcsR0FBR1ksT0FBT0UsT0FBTztRQUNwQztRQUNBSSxlQUFjVCxLQUFLO1lBQ2pCLE1BQU9BLE1BQU1SLFNBQVMsQ0FBQ2tCLE1BQU0sR0FBRyxFQUFHO2dCQUNqQyxNQUFNQyxlQUF1QkMsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUs7Z0JBQ3hEZCxNQUFNUixTQUFTLEdBQUc7dUJBQUlRLE1BQU1SLFNBQVM7b0JBQUVtQjtpQkFBYTtZQUN0RDtZQUNBLElBQUlJLGdCQUF3QjtZQUM1QmYsTUFBTVIsU0FBUyxDQUFDd0IsR0FBRyxDQUFDLENBQUNDO2dCQUNuQkYsaUJBQWlCRTtZQUNuQjtZQUNBakIsTUFBTVAsZ0JBQWdCLEdBQUdzQjtZQUN6QkcsTUFBTSxnQ0FBZ0NIO1FBQ3hDO1FBQ0FJO0lBQ0Y7QUFDRixHQUFHO0FBRUksTUFBTUMsZUFBZXhCLFdBQVd5QixPQUFPLENBQUM7QUFDL0MsK0RBQWV6QixXQUFXMEIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvR2xvYmFsUmVkdXgvbG9naW5TbGljZS50cz83OTZhIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvZ2luU3RhdGVzIHtcclxuICBvcGVuTG9naW5Nb2RhbEJvb2w6IGJvb2xlYW47XHJcbiAgb3BlbkNvZGVGaWVsZEJvb2w6IGJvb2xlYW47XHJcbiAgcGhvbmVOdW1iZXI6IG51bWJlciB8IG51bGw7XHJcbiAgY29kZUFycmF5OiBudW1iZXJbXTtcclxuICB2ZXJpZmljYXRpb25Db2RlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgdmVyaWZpZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogTG9naW5TdGF0ZXMgPSB7XHJcbiAgb3BlbkxvZ2luTW9kYWxCb29sOiBmYWxzZSxcclxuICBvcGVuQ29kZUZpZWxkQm9vbDogZmFsc2UsXHJcbiAgcGhvbmVOdW1iZXI6IG51bGwsXHJcbiAgY29kZUFycmF5OiBbXSxcclxuICB2ZXJpZmljYXRpb25Db2RlOiB1bmRlZmluZWQsXHJcbiAgdmVyaWZpZWQ6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJMb2dpblwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgb3BlbkxvZ2luTW9kYWwoc3RhdGUpIHtcclxuICAgICAgc3RhdGUub3BlbkxvZ2luTW9kYWxCb29sID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgY2xvc2VMb2dpbk1vZGFsKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmNvZGVBcnJheSA9IFtdO1xyXG4gICAgICBzdGF0ZS5vcGVuTG9naW5Nb2RhbEJvb2wgPSBmYWxzZTtcclxuICAgICAgc3RhdGUub3BlbkNvZGVGaWVsZEJvb2wgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBjbG9zZUxvZ2luTW9kYWxCeVdpbmRvdyhzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGUuY2xpZW50WSA8IDM0IHx8XHJcbiAgICAgICAgZS5jbGllbnRZID4gNjcyIHx8XHJcbiAgICAgICAgZS5jbGllbnRYIDwgNDkxIHx8XHJcbiAgICAgICAgZS5jbGllbnRYID4gMTAyMFxyXG4gICAgICApIHtcclxuICAgICAgICBzdGF0ZS5vcGVuQ29kZUZpZWxkQm9vbCA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLm9wZW5Mb2dpbk1vZGFsQm9vbCA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLmNvZGVBcnJheSA9IFtdO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb3BlbkNvZGVGaWVsZChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIHN0YXRlLm9wZW5Db2RlRmllbGRCb29sID0gdHJ1ZTtcclxuICAgICAgc3RhdGUucGhvbmVOdW1iZXIgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBjb2RlR2VuZXJhdG9yKHN0YXRlKSB7XHJcbiAgICAgIHdoaWxlIChzdGF0ZS5jb2RlQXJyYXkubGVuZ3RoIDwgNCkge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbU51bWJlcjogbnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XHJcbiAgICAgICAgc3RhdGUuY29kZUFycmF5ID0gWy4uLnN0YXRlLmNvZGVBcnJheSwgcmFuZG9tTnVtYmVyXTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgYXJyYXlUb1N0cmluZzogc3RyaW5nID0gXCJcIjtcclxuICAgICAgc3RhdGUuY29kZUFycmF5Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGFycmF5VG9TdHJpbmcgKz0gaXRlbTtcclxuICAgICAgfSk7XHJcbiAgICAgIHN0YXRlLnZlcmlmaWNhdGlvbkNvZGUgPSBhcnJheVRvU3RyaW5nO1xyXG4gICAgICBhbGVydChcIllvdXIgdmVyaWZpY2F0aW9uIGNvZGUgaXM6IFwiICsgYXJyYXlUb1N0cmluZyk7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbnMgPSBsb2dpblNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2luU2xpY2UucmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwib3BlbkxvZ2luTW9kYWxCb29sIiwib3BlbkNvZGVGaWVsZEJvb2wiLCJwaG9uZU51bWJlciIsImNvZGVBcnJheSIsInZlcmlmaWNhdGlvbkNvZGUiLCJ1bmRlZmluZWQiLCJ2ZXJpZmllZCIsImxvZ2luU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJvcGVuTG9naW5Nb2RhbCIsInN0YXRlIiwiY2xvc2VMb2dpbk1vZGFsIiwiY2xvc2VMb2dpbk1vZGFsQnlXaW5kb3ciLCJhY3Rpb24iLCJlIiwicGF5bG9hZCIsImNsaWVudFkiLCJjbGllbnRYIiwib3BlbkNvZGVGaWVsZCIsImNvZGVHZW5lcmF0b3IiLCJsZW5ndGgiLCJyYW5kb21OdW1iZXIiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJhcnJheVRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImFsZXJ0IiwiY2hlY2siLCJsb2dpbkFjdGlvbnMiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/GlobalRedux/loginSlice.ts\n"));

/***/ })

});