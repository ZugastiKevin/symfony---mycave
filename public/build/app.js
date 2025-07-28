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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdGLFVBQVUsQ0FBQ3RCLE9BQU8sQ0FBQ1EsR0FBRztFQUU3Q2MsVUFBVSxDQUFDM0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVk7SUFDOUMsSUFBTThDLE1BQU0sR0FBRyxJQUFJLENBQUNsRCxLQUFLO0lBRXpCbUMsS0FBSyxJQUFBQyxNQUFBLENBQUlhLGNBQWMsY0FBQWIsTUFBQSxDQUFXYyxNQUFNLEdBQUk7TUFDeENiLE1BQU0sRUFBRSxLQUFLO01BQ2JDLE9BQU8sRUFBRTtRQUNMLGtCQUFrQixFQUFFO01BQ3hCO0lBQ0osQ0FBQyxDQUFDLENBQ0RDLElBQUksQ0FBQyxVQUFBQyxRQUFRO01BQUEsT0FBSUEsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUFBLEVBQUMsQ0FDakNGLElBQUksQ0FBQyxVQUFBRyxJQUFJLEVBQUk7TUFDVixJQUFNTSx1QkFBdUIsR0FBR3hELFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGVBQWUsQ0FBQztNQUN2RSxJQUFJcUQsdUJBQXVCLElBQUlOLElBQUksQ0FBQ0UsSUFBSSxFQUFFO1FBQ3RDSSx1QkFBdUIsQ0FBQ0gsU0FBUyxHQUFHSCxJQUFJLENBQUNFLElBQUk7TUFDakQ7SUFDSixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFFLEtBQUs7TUFBQSxPQUFJMUQsT0FBTyxDQUFDMEQsS0FBSyxDQUFDLFNBQVMsRUFBRUEsS0FBSyxDQUFDO0lBQUEsRUFBQztFQUNwRCxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDMUJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3Jlc2V0LWJ0bi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9zZWxlY3RlLXBheXMtcmVnaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9zZWxlY3RlLXR5cGVzLWNlcGFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXG4gKi9cbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJztcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuaW1wb3J0ICcuL3NjcmlwdHMvZm9ybS5qcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9yZXNldC1idG4uanMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvc2VsZWN0ZS1wYXlzLXJlZ2lvbnMuanMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvc2VsZWN0ZS10eXBlcy1jZXBhZ2VzLmpzJztcblxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjoknKTtcbiIsIlxuY29uc3Qgc2VsZWN0b3IgPSAnaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sIGlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgc2VsZWN0LCB0ZXh0YXJlYSc7XG5jb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWZvcm0nKTtcblxuZnVuY3Rpb24gaW5pdElucHV0KGlucHV0RWwpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXRFbC5wYXJlbnROb2RlO1xuXG4gICAgaWYgKGlucHV0RWwudmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dC0tZmlsbGVkJyk7XG4gICAgfVxuXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uRm9jdXMpO1xuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1cik7XG59XG5cbmZ1bmN0aW9uIG9uRm9jdXMoZXYpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBldi50YXJnZXQucGFyZW50Tm9kZTtcblxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LmNsYXNzTGlzdCkge1xuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9uQmx1ciggZXYgKSB7XG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LnBhcmVudE5vZGU7XG5cbiAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0tZmlsbGVkJyk7XG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xuXG4gICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgbGl2ZVZhbGlkYXRpb24pO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgbGl2ZVZhbGlkYXRpb24pO1xufVxuXG5mdW5jdGlvbiBsaXZlVmFsaWRhdGlvbiggZXYgKSB7XG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LnBhcmVudE5vZGU7XG5cbiAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XG4gICAgfVxufVxuXG5pZiAoZm9ybSkge1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgb25TdWJtaXQpO1xufVxuXG5mdW5jdGlvbiBvblN1Ym1pdChldikge1xuICAgIGNvbnN0IGlucHV0c1dyYXBwZXJzID0gZXYudGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKTtcbiAgICBsZXQgaGFzRXJyb3IgPSBmYWxzZTtcblxuICAgIGlucHV0c1dyYXBwZXJzLmZvckVhY2goKHdyYXBwZXIpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcbiAgICAgICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChoYXNFcnJvcikge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgaWYgKGlucHV0cykge1xuICAgICAgICBpbnB1dHMuZm9yRWFjaChpbml0SW5wdXQpO1xuICAgICAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICBpbnB1dC5ibHVyKCk7XG4gICAgICAgIH0pXG4gICAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNldC1idG4nKS5mb3JFYWNoKChidG4pID0+IHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gYnRuLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKGlucHV0ICYmIGlucHV0LmRhdGFzZXQub3JpZ2luYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsO1xuICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JykpO1xuICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2JsdXInKSk7XG4gICAgfVxuICB9KTtcbn0pOyIsImRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNldC1idG4nKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGJ1dHRvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBpZiAoaW5wdXQgJiYgaW5wdXQuZGF0YXNldC5vcmlnaW5hbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0LmRhdGFzZXQub3JpZ2luYWw7XG4gICAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpOyAvLyB1dGlsZSBwb3VyIHJlbGFuY2VyIHVuIGZldGNoIEFKQVggbGnDqVxuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgcGF5c1NlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib3R0bGVzX3R5cGVfZm9ybV9wYXlzJyk7XG5cbiAgICBpZiAoIXBheXNTZWxlY3QpIHJldHVybjtcblxuICAgIGNvbnN0IHVybEJhc2VSZWdpb25zID0gcGF5c1NlbGVjdC5kYXRhc2V0LnVybDtcblxuICAgIHBheXNTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBwYXlzSWQgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgIGZldGNoKGAke3VybEJhc2VSZWdpb25zfT9wYXlzSWQ9JHtwYXlzSWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHNDb250YWluZXJSZWdpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZ2lvbi1maWVsZCcpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdHNDb250YWluZXJSZWdpb25zICYmIGRhdGEuaHRtbCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdHNDb250YWluZXJSZWdpb25zLm91dGVySFRNTCA9IGRhdGEuaHRtbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0VycmV1cjonLCBlcnJvcikpO1xuICAgIH0pO1xufSk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IHR5cGVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm90dGxlc190eXBlX2Zvcm1fdHlwZScpO1xuICAgIGNvbnN0IHJlc3VsdHNDb250YWluZXJDZXBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NlcGFnZS1maWVsZCcpO1xuXG4gICAgaWYgKCF0eXBlU2VsZWN0KSByZXR1cm47XG5cbiAgICBjb25zdCB1cmxCYXNlQ2VwYWdlcyA9IHR5cGVTZWxlY3QuZGF0YXNldC51cmw7XG5cbiAgICB0eXBlU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgdHlwZUlkID0gdGhpcy52YWx1ZTtcblxuICAgICAgICBmZXRjaChgJHt1cmxCYXNlQ2VwYWdlc30/dHlwZUlkPSR7dHlwZUlkfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzQ29udGFpbmVyQ2VwYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjZXBhZ2UtZmllbGQnKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHRzQ29udGFpbmVyQ2VwYWdlcyAmJiBkYXRhLmh0bWwpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzQ29udGFpbmVyQ2VwYWdlcy5vdXRlckhUTUwgPSBkYXRhLmh0bWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJldXI6JywgZXJyb3IpKTtcbiAgICB9KTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RvciIsImlucHV0cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvcm0iLCJxdWVyeVNlbGVjdG9yIiwiaW5pdElucHV0IiwiaW5wdXRFbCIsIndyYXBwZXIiLCJwYXJlbnROb2RlIiwidmFsdWUiLCJ0cmltIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uRm9jdXMiLCJvbkJsdXIiLCJldiIsInBhcmVudCIsInRhcmdldCIsImlucHV0IiwicmVtb3ZlIiwiY2hlY2tWYWxpZGl0eSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsaXZlVmFsaWRhdGlvbiIsIm9uU3VibWl0IiwiaW5wdXRzV3JhcHBlcnMiLCJoYXNFcnJvciIsImZvckVhY2giLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsImZvY3VzIiwiYmx1ciIsImJ0biIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJkYXRhc2V0Iiwib3JpZ2luYWwiLCJ1bmRlZmluZWQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJidXR0b24iLCJwYXlzU2VsZWN0IiwidXJsQmFzZVJlZ2lvbnMiLCJ1cmwiLCJwYXlzSWQiLCJmZXRjaCIsImNvbmNhdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInJlc3VsdHNDb250YWluZXJSZWdpb25zIiwiaHRtbCIsIm91dGVySFRNTCIsImVycm9yIiwidHlwZVNlbGVjdCIsInJlc3VsdHNDb250YWluZXJDZXBhZ2VzIiwidXJsQmFzZUNlcGFnZXMiLCJ0eXBlSWQiXSwic291cmNlUm9vdCI6IiJ9