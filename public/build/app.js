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
/* harmony import */ var _scripts_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/form.js */ "./assets/scripts/form.js");
/* harmony import */ var _scripts_form_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_form_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_reset_btn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/reset-btn.js */ "./assets/scripts/reset-btn.js");
/* harmony import */ var _scripts_reset_btn_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_reset_btn_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_selecte_pays_regions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/selecte-pays-regions.js */ "./assets/scripts/selecte-pays-regions.js");
/* harmony import */ var _scripts_selecte_pays_regions_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_selecte_pays_regions_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scripts_selecte_types_cepages_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/selecte-types-cepages.js */ "./assets/scripts/selecte-types-cepages.js");
/* harmony import */ var _scripts_selecte_types_cepages_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scripts_selecte_types_cepages_js__WEBPACK_IMPORTED_MODULE_6__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */







console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/***/ }),

/***/ "./assets/scripts/form.js":
/*!********************************!*\
  !*** ./assets/scripts/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
var selector = 'input[type="text"], input[type="number"], input[type=email], input[type=password], select, textarea';
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

/***/ "./assets/scripts/reset-btn.js":
/*!*************************************!*\
  !*** ./assets/scripts/reset-btn.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.querySelectorAll('.reset-btn').forEach(function (button) {
  button.addEventListener('click', function () {
    var input = button.previousElementSibling;
    if (input && input.dataset.original !== undefined) {
      input.value = input.dataset.original;
      input.dispatchEvent(new Event('change')); // utile pour relancer un fetch AJAX lié
    }
  });
});

/***/ }),

/***/ "./assets/scripts/selecte-pays-regions.js":
/*!************************************************!*\
  !*** ./assets/scripts/selecte-pays-regions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
document.addEventListener('DOMContentLoaded', function () {
  var paysSelect = document.querySelector('#bottles_type_form_pays');
  if (!paysSelect) return;
  var urlBaseRegions = paysSelect.dataset.url;
  paysSelect.addEventListener('change', function () {
    var paysId = this.value;
    fetch("".concat(urlBaseRegions, "?paysId=").concat(paysId), {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      var resultsContainerRegions = document.querySelector('#region-field');
      if (resultsContainerRegions && data.html) {
        resultsContainerRegions.outerHTML = data.html;
      }
    })["catch"](function (error) {
      return console.error('Erreur:', error);
    });
  });
});

/***/ }),

/***/ "./assets/scripts/selecte-types-cepages.js":
/*!*************************************************!*\
  !*** ./assets/scripts/selecte-types-cepages.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
document.addEventListener('DOMContentLoaded', function () {
  var typeSelect = document.querySelector('#bottles_type_form_type');
  var resultsContainerCepages = document.querySelector('#cepage-field');
  if (!typeSelect) return;
  var urlBaseCepages = typeSelect.dataset.url;
  typeSelect.addEventListener('change', function () {
    var typeId = this.value;
    fetch("".concat(urlBaseCepages, "?typeId=").concat(typeId), {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      var resultsContainerCepages = document.querySelector('#cepage-field');
      if (resultsContainerCepages && data.html) {
        resultsContainerCepages.outerHTML = data.html;
      }
    })["catch"](function (error) {
      return console.error('Erreur:', error);
    });
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_fortawesome_fontawes-29d2d6"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdGLFVBQVUsQ0FBQ3RCLE9BQU8sQ0FBQ1EsR0FBRztFQUU3Q2MsVUFBVSxDQUFDM0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVk7SUFDOUMsSUFBTThDLE1BQU0sR0FBRyxJQUFJLENBQUNsRCxLQUFLO0lBRXpCbUMsS0FBSyxJQUFBQyxNQUFBLENBQUlhLGNBQWMsY0FBQWIsTUFBQSxDQUFXYyxNQUFNLEdBQUk7TUFDeENiLE1BQU0sRUFBRSxLQUFLO01BQ2JDLE9BQU8sRUFBRTtRQUNMLGtCQUFrQixFQUFFO01BQ3hCO0lBQ0osQ0FBQyxDQUFDLENBQ0RDLElBQUksQ0FBQyxVQUFBQyxRQUFRO01BQUEsT0FBSUEsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUFBLEVBQUMsQ0FDakNGLElBQUksQ0FBQyxVQUFBRyxJQUFJLEVBQUk7TUFDVixJQUFNTSx1QkFBdUIsR0FBR3hELFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGVBQWUsQ0FBQztNQUN2RSxJQUFJcUQsdUJBQXVCLElBQUlOLElBQUksQ0FBQ0UsSUFBSSxFQUFFO1FBQ3RDSSx1QkFBdUIsQ0FBQ0gsU0FBUyxHQUFHSCxJQUFJLENBQUNFLElBQUk7TUFDakQ7SUFDSixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFFLEtBQUs7TUFBQSxPQUFJMUQsT0FBTyxDQUFDMEQsS0FBSyxDQUFDLFNBQVMsRUFBRUEsS0FBSyxDQUFDO0lBQUEsRUFBQztFQUNwRCxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDMUJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3Jlc2V0LWJ0bi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9zZWxlY3RlLXBheXMtcmVnaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9zZWxlY3RlLXR5cGVzLWNlcGFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxyXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxyXG4gKi9cclxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnO1xyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9mb3JtLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvcmVzZXQtYnRuLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvc2VsZWN0ZS1wYXlzLXJlZ2lvbnMuanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9zZWxlY3RlLXR5cGVzLWNlcGFnZXMuanMnO1xyXG5cclxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjoknKTtcclxuIiwiXHJcbmNvbnN0IHNlbGVjdG9yID0gJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT1wYXNzd29yZF0sIHNlbGVjdCwgdGV4dGFyZWEnO1xyXG5jb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtZm9ybScpO1xyXG5cclxuZnVuY3Rpb24gaW5pdElucHV0KGlucHV0RWwpIHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dEVsLnBhcmVudE5vZGU7XHJcblxyXG4gICAgaWYgKGlucHV0RWwudmFsdWUudHJpbSgpICE9PSAnJykge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0LS1maWxsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25Gb2N1cyk7XHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkZvY3VzKGV2KSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBldi50YXJnZXQucGFyZW50Tm9kZTtcclxuXHJcbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5jbGFzc0xpc3QpIHtcclxuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25CbHVyKCBldiApIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LnBhcmVudE5vZGU7XHJcblxyXG4gICAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG5cclxuICAgICAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgbGl2ZVZhbGlkYXRpb24pO1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBsaXZlVmFsaWRhdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpdmVWYWxpZGF0aW9uKCBldiApIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LnBhcmVudE5vZGU7XHJcblxyXG4gICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pZiAoZm9ybSkge1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBvblN1Ym1pdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uU3VibWl0KGV2KSB7XHJcbiAgICBjb25zdCBpbnB1dHNXcmFwcGVycyA9IGV2LnRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJyk7XHJcbiAgICBsZXQgaGFzRXJyb3IgPSBmYWxzZTtcclxuXHJcbiAgICBpbnB1dHNXcmFwcGVycy5mb3JFYWNoKCh3cmFwcGVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgICAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoaGFzRXJyb3IpIHtcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIGlmIChpbnB1dHMpIHtcclxuICAgICAgICBpbnB1dHMuZm9yRWFjaChpbml0SW5wdXQpO1xyXG4gICAgICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgICAgICAgICBpbnB1dC5ibHVyKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzZXQtYnRuJykuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXQgPSBidG4ucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgIGlmIChpbnB1dCAmJiBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsO1xyXG4gICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnKSk7XHJcbiAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdibHVyJykpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTsiLCJkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzZXQtYnRuJykuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gYnV0dG9uLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgaWYgKGlucHV0ICYmIGlucHV0LmRhdGFzZXQub3JpZ2luYWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0LmRhdGFzZXQub3JpZ2luYWw7XHJcbiAgICAgICAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7IC8vIHV0aWxlIHBvdXIgcmVsYW5jZXIgdW4gZmV0Y2ggQUpBWCBsacOpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgcGF5c1NlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib3R0bGVzX3R5cGVfZm9ybV9wYXlzJyk7XHJcblxyXG4gICAgaWYgKCFwYXlzU2VsZWN0KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgdXJsQmFzZVJlZ2lvbnMgPSBwYXlzU2VsZWN0LmRhdGFzZXQudXJsO1xyXG5cclxuICAgIHBheXNTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHBheXNJZCA9IHRoaXMudmFsdWU7XHJcblxyXG4gICAgICAgIGZldGNoKGAke3VybEJhc2VSZWdpb25zfT9wYXlzSWQ9JHtwYXlzSWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRzQ29udGFpbmVyUmVnaW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWdpb24tZmllbGQnKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdHNDb250YWluZXJSZWdpb25zICYmIGRhdGEuaHRtbCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0c0NvbnRhaW5lclJlZ2lvbnMub3V0ZXJIVE1MID0gZGF0YS5odG1sO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyZXVyOicsIGVycm9yKSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCB0eXBlU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvdHRsZXNfdHlwZV9mb3JtX3R5cGUnKTtcclxuICAgIGNvbnN0IHJlc3VsdHNDb250YWluZXJDZXBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NlcGFnZS1maWVsZCcpO1xyXG5cclxuICAgIGlmICghdHlwZVNlbGVjdCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHVybEJhc2VDZXBhZ2VzID0gdHlwZVNlbGVjdC5kYXRhc2V0LnVybDtcclxuXHJcbiAgICB0eXBlU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCB0eXBlSWQgPSB0aGlzLnZhbHVlO1xyXG5cclxuICAgICAgICBmZXRjaChgJHt1cmxCYXNlQ2VwYWdlc30/dHlwZUlkPSR7dHlwZUlkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0c0NvbnRhaW5lckNlcGFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2VwYWdlLWZpZWxkJyk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRzQ29udGFpbmVyQ2VwYWdlcyAmJiBkYXRhLmh0bWwpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHNDb250YWluZXJDZXBhZ2VzLm91dGVySFRNTCA9IGRhdGEuaHRtbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0VycmV1cjonLCBlcnJvcikpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsInNlbGVjdG9yIiwiaW5wdXRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJpbml0SW5wdXQiLCJpbnB1dEVsIiwid3JhcHBlciIsInBhcmVudE5vZGUiLCJ2YWx1ZSIsInRyaW0iLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwib25Gb2N1cyIsIm9uQmx1ciIsImV2IiwicGFyZW50IiwidGFyZ2V0IiwiaW5wdXQiLCJyZW1vdmUiLCJjaGVja1ZhbGlkaXR5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxpdmVWYWxpZGF0aW9uIiwib25TdWJtaXQiLCJpbnB1dHNXcmFwcGVycyIsImhhc0Vycm9yIiwiZm9yRWFjaCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwiZm9jdXMiLCJibHVyIiwiYnRuIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImRhdGFzZXQiLCJvcmlnaW5hbCIsInVuZGVmaW5lZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImJ1dHRvbiIsInBheXNTZWxlY3QiLCJ1cmxCYXNlUmVnaW9ucyIsInVybCIsInBheXNJZCIsImZldGNoIiwiY29uY2F0IiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicmVzdWx0c0NvbnRhaW5lclJlZ2lvbnMiLCJodG1sIiwib3V0ZXJIVE1MIiwiZXJyb3IiLCJ0eXBlU2VsZWN0IiwicmVzdWx0c0NvbnRhaW5lckNlcGFnZXMiLCJ1cmxCYXNlQ2VwYWdlcyIsInR5cGVJZCJdLCJzb3VyY2VSb290IjoiIn0=