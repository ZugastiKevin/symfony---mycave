(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _scripts_form_login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/form-login.js */ "./assets/scripts/form-login.js");
/* harmony import */ var _scripts_form_login_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_form_login_js__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */




console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/***/ }),

/***/ "./assets/scripts/form-login.js":
/*!**************************************!*\
  !*** ./assets/scripts/form-login.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
var selector = 'input[type="text"], input[type=email], input[type=password]';
var inputs = document.querySelectorAll(selector);
var form = document.querySelector('.all-form');
function initInput(inputEl) {
  var wrapper = inputEl.parentNode;
  if (inputEl.value.trim() !== '') {
    wrapper === null || wrapper === void 0 || wrapper.classList.add('input--filled');
  }
  inputEl.addEventListener('focus', onFocus);
  inputEl.addEventListener('blur', onBlur);
}
function onFocus(ev) {
  var parent = ev.target.parentNode;
  if (parent && parent.classList) {
    parent.classList.add('inputs--filled');
  }
}
function onBlur(ev) {
  var input = ev.target;
  var wrapper = input.parentNode;
  if (input.value.trim() === '') {
    wrapper.classList.remove('inputs--filled');
    wrapper.classList.remove('inputs--invalid');
  } else {
    wrapper.classList.add('inputs--filled');
    if (!input.checkValidity()) {
      wrapper.classList.add('inputs--invalid');
    } else {
      wrapper.classList.remove('inputs--invalid');
    }
  }
  input.removeEventListener('input', liveValidation);
  input.addEventListener('input', liveValidation);
}
function liveValidation(ev) {
  var input = ev.target;
  var wrapper = input.parentNode;
  if (!input.checkValidity()) {
    wrapper.classList.add('inputs--invalid');
  } else {
    wrapper.classList.remove('inputs--invalid');
  }
}
if (form) {
  form.addEventListener('submit', onSubmit);
}
function onSubmit(ev) {
  var inputsWrappers = ev.target.querySelectorAll('span');
  var hasError = false;
  inputsWrappers.forEach(function (wrapper) {
    var input = wrapper.querySelector(selector);
    if (input) {
      if (!input.checkValidity()) {
        wrapper.classList.add('inputs--invalid');
        hasError = true;
      } else {
        wrapper.classList.remove('inputs--invalid');
      }
    }
  });
  if (hasError) {
    ev.preventDefault();
  }
}
window.addEventListener('load', function () {
  if (inputs) {
    inputs.forEach(initInput);
    inputs.forEach(function (input) {
      input.focus();
      input.blur();
    });
  }
});
document.querySelectorAll('.reset-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var input = btn.previousElementSibling;
    if (input && input.dataset.original !== undefined) {
      input.value = input.dataset.original;
      input.dispatchEvent(new Event('input'));
      input.dispatchEvent(new Event('blur'));
    }
  });
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_fortawesome_fontawes-55d58a"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsWUFBTTtJQUNsQyxJQUFNTSxLQUFLLEdBQUdhLEdBQUcsQ0FBQ0Msc0JBQXNCO0lBQ3hDLElBQUlkLEtBQUssSUFBSUEsS0FBSyxDQUFDZSxPQUFPLENBQUNDLFFBQVEsS0FBS0MsU0FBUyxFQUFFO01BQ2pEakIsS0FBSyxDQUFDVixLQUFLLEdBQUdVLEtBQUssQ0FBQ2UsT0FBTyxDQUFDQyxRQUFRO01BQ3BDaEIsS0FBSyxDQUFDa0IsYUFBYSxDQUFDLElBQUlDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztNQUN2Q25CLEtBQUssQ0FBQ2tCLGFBQWEsQ0FBQyxJQUFJQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEM7RUFDRixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDcEdGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9mb3JtLWxvZ2luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnO1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnO1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9mb3JtLWxvZ2luLmpzJztcblxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjoknKTtcbiIsIlxyXG5jb25zdCBzZWxlY3RvciA9ICdpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1lbWFpbF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdJztcclxuY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWZvcm0nKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRJbnB1dChpbnB1dEVsKSB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXRFbC5wYXJlbnROb2RlO1xyXG5cclxuICAgIGlmIChpbnB1dEVsLnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dC0tZmlsbGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uRm9jdXMpO1xyXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25CbHVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Gb2N1cyhldikge1xyXG4gICAgY29uc3QgcGFyZW50ID0gZXYudGFyZ2V0LnBhcmVudE5vZGU7XHJcblxyXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uQmx1ciggZXYgKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2LnRhcmdldDtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5wYXJlbnROb2RlO1xyXG5cclxuICAgIGlmIChpbnB1dC52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuXHJcbiAgICAgICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIGxpdmVWYWxpZGF0aW9uKTtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgbGl2ZVZhbGlkYXRpb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsaXZlVmFsaWRhdGlvbiggZXYgKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2LnRhcmdldDtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5wYXJlbnROb2RlO1xyXG5cclxuICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuaWYgKGZvcm0pIHtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgb25TdWJtaXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvblN1Ym1pdChldikge1xyXG4gICAgY29uc3QgaW5wdXRzV3JhcHBlcnMgPSBldi50YXJnZXQucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpO1xyXG4gICAgbGV0IGhhc0Vycm9yID0gZmFsc2U7XHJcblxyXG4gICAgaW5wdXRzV3JhcHBlcnMuZm9yRWFjaCgod3JhcHBlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGhhc0Vycm9yKSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICBpZiAoaW5wdXRzKSB7XHJcbiAgICAgICAgaW5wdXRzLmZvckVhY2goaW5pdElucHV0KTtcclxuICAgICAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcclxuICAgICAgICAgICAgaW5wdXQuYmx1cigpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc2V0LWJ0bicpLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IGlucHV0ID0gYnRuLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICBpZiAoaW5wdXQgJiYgaW5wdXQuZGF0YXNldC5vcmlnaW5hbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gaW5wdXQuZGF0YXNldC5vcmlnaW5hbDtcclxuICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JykpO1xyXG4gICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnYmx1cicpKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RvciIsImlucHV0cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvcm0iLCJxdWVyeVNlbGVjdG9yIiwiaW5pdElucHV0IiwiaW5wdXRFbCIsIndyYXBwZXIiLCJwYXJlbnROb2RlIiwidmFsdWUiLCJ0cmltIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uRm9jdXMiLCJvbkJsdXIiLCJldiIsInBhcmVudCIsInRhcmdldCIsImlucHV0IiwicmVtb3ZlIiwiY2hlY2tWYWxpZGl0eSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsaXZlVmFsaWRhdGlvbiIsIm9uU3VibWl0IiwiaW5wdXRzV3JhcHBlcnMiLCJoYXNFcnJvciIsImZvckVhY2giLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsImZvY3VzIiwiYmx1ciIsImJ0biIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJkYXRhc2V0Iiwib3JpZ2luYWwiLCJ1bmRlZmluZWQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiXSwic291cmNlUm9vdCI6IiJ9