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

/***/ "(app-pages-browser)/./src/components/UI/product/product.tsx":
/*!***********************************************!*\
  !*** ./src/components/UI/product/product.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _product_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.module.css */ \"(app-pages-browser)/./src/components/UI/product/product.module.css\");\n/* harmony import */ var _product_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_product_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Product = (props)=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const product = props.product;\n    dispatch(diff);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_2___default().main_product_container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_2___default().image_box),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    src: product.image,\n                    alt: product.name,\n                    width: 100,\n                    height: 13\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\UI\\\\product\\\\product.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\UI\\\\product\\\\product.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_2___default().product_content),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_product_module_css__WEBPACK_IMPORTED_MODULE_2___default().content_top),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    product.weight,\n                                    \"мл\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\UI\\\\product\\\\product.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\UI\\\\product\\\\product.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\UI\\\\product\\\\product.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_2___default().content_bottom),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"del\", {\n                                            children: product.lastPrice\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\UI\\\\product\\\\product.tsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\UI\\\\product\\\\product.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: [\n                                                product.currPrice,\n                                                \"₽\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\UI\\\\product\\\\product.tsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\UI\\\\product\\\\product.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\UI\\\\product\\\\product.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_2___default().details),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\UI\\\\product\\\\product.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\UI\\\\product\\\\product.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\UI\\\\product\\\\product.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\UI\\\\product\\\\product.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\UI\\\\product\\\\product.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                href: \"/product-details/\".concat(product.slug),\n                className: (_product_module_css__WEBPACK_IMPORTED_MODULE_2___default().product_link)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\UI\\\\product\\\\product.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\baghy\\\\OneDrive\\\\Desktop\\\\food-mart\\\\food-mart\\\\src\\\\components\\\\UI\\\\product\\\\product.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Product, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch\n    ];\n});\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1VJL3Byb2R1Y3QvcHJvZHVjdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEI7QUFDaUI7QUFDWjtBQUVGO0FBQ2E7QUFFMUMsTUFBTUssVUFBK0MsQ0FBQ0M7O0lBQ3BELE1BQU1DLFdBQVdILHdEQUFXQTtJQUM1QixNQUFNSSxVQUFVRixNQUFNRSxPQUFPO0lBQzdCRCxTQUFTRTtJQUdULHFCQUVFLDhEQUFDQztRQUFJQyxXQUFXVixtRkFBOEI7OzBCQUM1Qyw4REFBQ1M7Z0JBQUlDLFdBQVdWLHNFQUFpQjswQkFDL0IsNEVBQUNDLGtEQUFLQTtvQkFBQ1ksS0FBS04sUUFBUU8sS0FBSztvQkFBRUMsS0FBS1IsUUFBUVMsSUFBSTtvQkFBRUMsT0FBTztvQkFBS0MsUUFBUTs7Ozs7Ozs7Ozs7MEJBRXBFLDhEQUFDQztnQkFBS1QsV0FBV1YsNEVBQXVCOztrQ0FDdEMsOERBQUNtQjt3QkFBS1QsV0FBV1Ysd0VBQW1COzswQ0FDbEMsOERBQUNtQjs7b0NBQU1aLFFBQVFlLE1BQU07b0NBQUM7Ozs7Ozs7MENBQ3RCLDhEQUFDSDswQ0FBTVosUUFBUVMsSUFBSTs7Ozs7Ozs7Ozs7O2tDQUVyQiw4REFBQ0c7OzBDQUNDLDhEQUFDQTtnQ0FBS1QsV0FBV1YsMkVBQXNCOztrREFDckMsOERBQUNtQjtrREFDQyw0RUFBQ0s7c0RBQUtqQixRQUFRa0IsU0FBUzs7Ozs7Ozs7Ozs7a0RBRXpCLDhEQUFDTjtrREFDQyw0RUFBQ087O2dEQUFHbkIsUUFBUW9CLFNBQVM7Z0RBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHMUIsOERBQUNsQjtnQ0FBSUMsV0FBV1Ysb0VBQWU7O2tEQUM3Qiw4REFBQ21COzs7OztrREFDRCw4REFBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlQLDhEQUFDakIsaURBQUlBO2dCQUFDMkIsTUFBTSxvQkFBaUMsT0FBYnRCLFFBQVF1QixJQUFJO2dCQUFJcEIsV0FBV1YseUVBQW9COzs7Ozs7Ozs7Ozs7QUFHckY7R0FuQ01JOztRQUNhRCxvREFBV0E7OztLQUR4QkM7QUFxQ04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVUkvcHJvZHVjdC9wcm9kdWN0LnRzeD8yODc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vcHJvZHVjdC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0TW9kZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL21vZHVsZS9wcm9kdWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3Q6IFJlYWN0LkZDPHsgcHJvZHVjdDogUHJvZHVjdE1vZGVsIH0+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgcHJvZHVjdCA9IHByb3BzLnByb2R1Y3Q7XHJcbiAgZGlzcGF0Y2goZGlmZilcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5fcHJvZHVjdF9jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZV9ib3h9PlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e3Byb2R1Y3QuaW1hZ2V9IGFsdD17cHJvZHVjdC5uYW1lfSB3aWR0aD17MTAwfSBoZWlnaHQ9ezEzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnByb2R1Y3RfY29udGVudH0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRfdG9wfT5cclxuICAgICAgICAgIDxzcGFuPntwcm9kdWN0LndlaWdodH3QvNC7PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+e3Byb2R1Y3QubmFtZX08L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRfYm90dG9tfT5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPGRlbD57cHJvZHVjdC5sYXN0UHJpY2V9PC9kZWw+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPGI+e3Byb2R1Y3QuY3VyclByaWNlfeKCvTwvYj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsc30+XHJcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC1kZXRhaWxzLyR7cHJvZHVjdC5zbHVnfWB9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9kdWN0X2xpbmt9PjwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY2xhc3NlcyIsIkltYWdlIiwiTGluayIsInVzZURpc3BhdGNoIiwiUHJvZHVjdCIsInByb3BzIiwiZGlzcGF0Y2giLCJwcm9kdWN0IiwiZGlmZiIsImRpdiIsImNsYXNzTmFtZSIsIm1haW5fcHJvZHVjdF9jb250YWluZXIiLCJpbWFnZV9ib3giLCJzcmMiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsInNwYW4iLCJwcm9kdWN0X2NvbnRlbnQiLCJjb250ZW50X3RvcCIsIndlaWdodCIsImNvbnRlbnRfYm90dG9tIiwiZGVsIiwibGFzdFByaWNlIiwiYiIsImN1cnJQcmljZSIsImRldGFpbHMiLCJocmVmIiwic2x1ZyIsInByb2R1Y3RfbGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/UI/product/product.tsx\n"));

/***/ })

});