"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_woojin_Documents_blockchain_Blockchain_Tutorial_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_woojin_Documents_blockchain_Blockchain_Tutorial_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_woojin_Documents_blockchain_Blockchain_Tutorial_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _result_blockchain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../result/blockchain */ \"./result/blockchain.js\");\n/* harmony import */ var _result_blockchain__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_result_blockchain__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar bc = new (_result_blockchain__WEBPACK_IMPORTED_MODULE_3___default())();\nvar Index = function() {\n    var isStop = false;\n    var startMining = function() {\n        var _ref = _asyncToGenerator(_Users_woojin_Documents_blockchain_Blockchain_Tutorial_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_woojin_Documents_blockchain_Blockchain_Tutorial_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(\"\\uCC44\\uAD74 \\uC2DC\\uC791\");\n                        isStop = false;\n                    case 2:\n                        if (isStop) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        _ctx.next = 5;\n                        return bc.mining();\n                    case 5:\n                        _ctx.next = 2;\n                        break;\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function startMining() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var stopMining = function() {\n        console.log(\"\\uCC44\\uAD74 \\uC815\\uC9C0\");\n        isStop = true;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: startMining,\n                children: \"\\uC2DC\\uC791\"\n            }, void 0, false, {\n                fileName: \"/Users/woojin/Documents/blockchain/Blockchain_Tutorial/pages/index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: stopMining,\n                children: \"\\uC815\\uC9C0\"\n            }, void 0, false, {\n                fileName: \"/Users/woojin/Documents/blockchain/Blockchain_Tutorial/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/woojin/Documents/blockchain/Blockchain_Tutorial/pages/index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsRUFBRSxHQUFHLElBQUlELDJEQUFVLEVBQUU7QUFFM0IsSUFBTUUsS0FBSyxHQUFHLFdBQU07SUFDbEIsSUFBSUMsTUFBTSxHQUFHLEtBQUs7SUFDbEIsSUFBTUMsV0FBVzttQkFBRyx1TUFBWTs7Ozt3QkFDOUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUFPLENBQVMsQ0FBQzt3QkFDckJILE1BQUYsR0FBRyxLQUFLLENBQUM7OzRCQUNQQSxNQUFNOzs7OzsrQkFDTkYsRUFBRSxDQUFDTSxNQUFNLEVBQUU7Ozs7Ozs7OztTQUVwQjt3QkFOS0gsV0FBVzs7O09BTWhCO0lBQ0QsSUFBTUksVUFBVSxHQUFHLFdBQU07UUFDdkJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUFPLENBQVMsQ0FBQztRQUNyQkgsTUFBRixHQUFHLElBQUksQ0FBQztLQUNmO0lBQ0QscUJBQ0UsOERBQUNNLEtBQUc7OzBCQUNGLDhEQUFDQyxRQUFNO2dCQUFDQyxPQUFPLEVBQUVQLFdBQVc7MEJBQUUsY0FBRTs7Ozs7cUJBQWE7MEJBQ3pDLDhEQUFITSxRQUFNO2dCQUFDQyxPQUFPLEVBQUVILFVBQVU7MEJBQUUsY0FBRTs7Ozs7cUJBQVM7Ozs7OzthQUNwQyxDQUNOO0NBQ0g7QUFuQktOLEtBQUFBLEtBQUs7QUFxQlgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCbG9ja2NoYWluIGZyb20gXCIuLi9yZXN1bHQvYmxvY2tjaGFpblwiO1xuXG5jb25zdCBiYyA9IG5ldyBCbG9ja2NoYWluKCk7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBsZXQgaXNTdG9wID0gZmFsc2U7XG4gIGNvbnN0IHN0YXJ0TWluaW5nID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwi7LGE6rW0IOyLnOyekVwiKTtcbiAgICBpc1N0b3AgPSBmYWxzZTtcbiAgICB3aGlsZSAoIWlzU3RvcCkge1xuICAgICAgYXdhaXQgYmMubWluaW5nKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBzdG9wTWluaW5nID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwi7LGE6rW0IOygleyngFwiKTtcbiAgICBpc1N0b3AgPSB0cnVlO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0TWluaW5nfT7si5zsnpE8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17c3RvcE1pbmluZ30+7KCV7KeAPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJsb2NrY2hhaW4iLCJiYyIsIkluZGV4IiwiaXNTdG9wIiwic3RhcnRNaW5pbmciLCJjb25zb2xlIiwibG9nIiwibWluaW5nIiwic3RvcE1pbmluZyIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});