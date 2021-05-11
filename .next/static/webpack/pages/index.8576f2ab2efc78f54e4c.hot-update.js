webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm/index.js":
/*!*****************************************!*\
  !*** ./components/CommentForm/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_userInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/userInput */ \"./hooks/userInput.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/mark/WebstormProjects/nodebird_inf/components/CommentForm/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar CommentForm = function CommentForm(_ref) {\n  _s();\n\n  var post = _ref.post;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    var _state$user$me;\n\n    return state === null || state === void 0 ? void 0 : (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;\n  });\n\n  var _useInput = Object(_hooks_userInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(''),\n      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput, 3),\n      commentText = _useInput2[0],\n      onChangeCommentText = _useInput2[2];\n\n  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    console.log(commentText, post);\n    dispatch({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[\"ADD_COMMENT_REQUEST\"],\n      data: {\n        content: commentText,\n        postId: post.id,\n        userId: id\n      }\n    });\n  }, [commentText, post]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    onFinish: onSubmitComment,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, {\n      style: {\n        position: 'relative',\n        margin: 0\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"].TextArea, {\n        value: commentText,\n        onChange: onChangeCommentText,\n        row: 4\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        style: {\n          position: 'absolute',\n          right: 0,\n          bottom: '-40px'\n        },\n        type: \"primary\",\n        htmlType: \"submit\",\n        children: \"\\uC090\\uC57D\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CommentForm, \"3Jdete6EFYnHyv45I7K047Gk9EI=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"], _hooks_userInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = CommentForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommentForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS9pbmRleC5qcz80NTUzIl0sIm5hbWVzIjpbIkNvbW1lbnRGb3JtIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VJbnB1dCIsImNvbW1lbnRUZXh0Iiwib25DaGFuZ2VDb21tZW50VGV4dCIsIm9uU3VibWl0Q29tbWVudCIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiZGF0YSIsImNvbnRlbnQiLCJwb3N0SWQiLCJ1c2VySWQiLCJwb3NpdGlvbiIsIm1hcmdpbiIsInJpZ2h0IiwiYm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNoQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSxXQUFXQSxLQUFYLGFBQVdBLEtBQVgseUNBQVdBLEtBQUssQ0FBRUMsSUFBUCxDQUFZQyxFQUF2QixtREFBVyxlQUFnQkosRUFBM0I7QUFBQSxHQUFELENBQXRCOztBQUNBLGtCQUE2Q0ssZ0VBQVEsQ0FBQyxFQUFELENBQXJEO0FBQUE7QUFBQSxNQUFPQyxXQUFQO0FBQUEsTUFBc0JDLG1CQUF0Qjs7QUFDQSxNQUFNQyxlQUFlLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN4Q0MsV0FBTyxDQUFDQyxHQUFSLENBQVlMLFdBQVosRUFBeUJULElBQXpCO0FBQ0FDLFlBQVEsQ0FBQztBQUNQYyxVQUFJLEVBQUVDLGtFQURDO0FBRVBDLFVBQUksRUFBRTtBQUFFQyxlQUFPLEVBQUVULFdBQVg7QUFBd0JVLGNBQU0sRUFBRW5CLElBQUksQ0FBQ0csRUFBckM7QUFBeUNpQixjQUFNLEVBQUVqQjtBQUFqRDtBQUZDLEtBQUQsQ0FBUjtBQUlELEdBTmtDLEVBTWhDLENBQUNNLFdBQUQsRUFBY1QsSUFBZCxDQU5nQyxDQUFuQztBQU9BLHNCQUNFLHFFQUFDLHlDQUFEO0FBQU0sWUFBUSxFQUFFVyxlQUFoQjtBQUFBLDJCQUNFLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFdBQUssRUFBRTtBQUFFVSxnQkFBUSxFQUFFLFVBQVo7QUFBd0JDLGNBQU0sRUFBRTtBQUFoQyxPQUFsQjtBQUFBLDhCQUNFLHFFQUFDLDBDQUFELENBQU8sUUFBUDtBQUFnQixhQUFLLEVBQUViLFdBQXZCO0FBQW9DLGdCQUFRLEVBQUVDLG1CQUE5QztBQUFtRSxXQUFHLEVBQUU7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsMkNBQUQ7QUFBUSxhQUFLLEVBQUU7QUFBRVcsa0JBQVEsRUFBRSxVQUFaO0FBQXdCRSxlQUFLLEVBQUUsQ0FBL0I7QUFBa0NDLGdCQUFNLEVBQUU7QUFBMUMsU0FBZjtBQUFvRSxZQUFJLEVBQUMsU0FBekU7QUFBbUYsZ0JBQVEsRUFBQyxRQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBckJEOztHQUFNekIsVztVQUNhRyx1RCxFQUNORSx1RCxFQUNrQ0ksd0Q7OztLQUh6Q1QsVztBQXVCU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRGb3JtL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vLi4vaG9va3MvdXNlcklucHV0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7QUREX0NPTU1FTlRfUkVRVUVTVH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL3Bvc3RcIjtcblxuY29uc3QgQ29tbWVudEZvcm0gPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGU/LnVzZXIubWU/LmlkKTtcbiAgY29uc3QgW2NvbW1lbnRUZXh0LCAsIG9uQ2hhbmdlQ29tbWVudFRleHRdID0gdXNlSW5wdXQoJycpO1xuICBjb25zdCBvblN1Ym1pdENvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc29sZS5sb2coY29tbWVudFRleHQsIHBvc3QpO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXG4gICAgICBkYXRhOiB7IGNvbnRlbnQ6IGNvbW1lbnRUZXh0LCBwb3N0SWQ6IHBvc3QuaWQsIHVzZXJJZDogaWR9XG4gICAgfSlcbiAgfSwgW2NvbW1lbnRUZXh0LCBwb3N0XSk7XG4gIHJldHVybiAoXG4gICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Q29tbWVudH0+XG4gICAgICA8Rm9ybS5JdGVtIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBtYXJnaW46IDAgfX0+XG4gICAgICAgIDxJbnB1dC5UZXh0QXJlYSB2YWx1ZT17Y29tbWVudFRleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZUNvbW1lbnRUZXh0fSByb3c9ezR9IC8+XG4gICAgICAgIDxCdXR0b24gc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAwLCBib3R0b206ICctNDBweCcgfX0gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIOyCkOyVvVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CommentForm/index.js\n");

/***/ })

})