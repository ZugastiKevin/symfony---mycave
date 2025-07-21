(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _scripts_form_login_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/form-login.js */ "./assets/scripts/form-login.js");
/* harmony import */ var _scripts_form_login_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scripts_form_login_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _scripts_i18nService_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scripts/i18nService.js */ "./assets/scripts/i18nService.js");
/* harmony import */ var _scripts_i18nService_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scripts_i18nService_js__WEBPACK_IMPORTED_MODULE_9__);





/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */





console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
document.addEventListener('DOMContentLoaded', function () {
  I18nService.init('fr');
  document.querySelectorAll('[data-change-locale]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var locale = this.dataset.changeLocale;
      I18nService.changeLanguage(locale);
    });
  });
});

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

/***/ "./assets/scripts/i18nService.js":
/*!***************************************!*\
  !*** ./assets/scripts/i18nService.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
__webpack_require__(/*! core-js/modules/es.set.difference.v2.js */ "./node_modules/core-js/modules/es.set.difference.v2.js");
__webpack_require__(/*! core-js/modules/es.set.intersection.v2.js */ "./node_modules/core-js/modules/es.set.intersection.v2.js");
__webpack_require__(/*! core-js/modules/es.set.is-disjoint-from.v2.js */ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
__webpack_require__(/*! core-js/modules/es.set.is-subset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
__webpack_require__(/*! core-js/modules/es.set.is-superset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
__webpack_require__(/*! core-js/modules/es.set.symmetric-difference.v2.js */ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
__webpack_require__(/*! core-js/modules/es.set.union.v2.js */ "./node_modules/core-js/modules/es.set.union.v2.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
window.I18nService = function () {
  var currentLocale = 'fr';
  var endpoint = '/ajax';
  function setLocale(locale) {
    currentLocale = locale;
    return fetch("".concat(endpoint, "/change-locale/").concat(locale), {
      method: 'POST',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
  }
  function collectKeys() {
    var keys = new Set();
    document.querySelectorAll('[data-i18n-key]').forEach(function (el) {
      keys.add(el.dataset.i18nKey);
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var attrs = el.dataset.i18nAttr.split(',');
      attrs.forEach(function (attr) {
        var keyAttr = "i18n".concat(attr.charAt(0).toUpperCase() + attr.slice(1));
        var key = el.dataset[keyAttr];
        if (key) keys.add(key);
      });
    });
    return Array.from(keys);
  }
  function fetchTranslations(keys) {
    console.log('Envoi des clés pour traduction :', keys);
    return fetch("".concat(window.location.origin).concat(endpoint, "/get-translations/").concat(currentLocale), {
      method: 'POST',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        keys: keys
      })
    }).then(function (res) {
      return res.json();
    });
  }
  function updateDom(translations) {
    document.querySelectorAll('[data-i18n-key]').forEach(function (el) {
      var key = el.dataset.i18nKey;
      if (translations[key]) el.textContent = translations[key];
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var attrs = el.dataset.i18nAttr.split(',');
      attrs.forEach(function (attr) {
        var keyAttr = "i18n".concat(attr.charAt(0).toUpperCase() + attr.slice(1));
        var key = el.dataset[keyAttr];
        if (translations[key]) {
          el.setAttribute(attr, translations[key]);
        }
      });
    });
  }
  function changeLanguage(locale) {
    return setLocale(locale).then(function () {
      var keys = collectKeys();
      return fetchTranslations(keys);
    }).then(function (translations) {
      updateDom(translations);
    });
  }
  return {
    init: function init() {
      var defaultLocale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'fr';
      var baseEndpoint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/ajax';
      currentLocale = defaultLocale;
      endpoint = baseEndpoint;
    },
    changeLanguage: changeLanguage
  };
}();

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_fortawesome_fontawes-188617"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxZQUFZO0lBQzNCLENBQUM7SUFDRDFFLGNBQWMsRUFBZEE7RUFDSixDQUFDO0FBQ0wsQ0FBQyxDQUFFLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDL0VKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9mb3JtLWxvZ2luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2kxOG5TZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxuICovXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCAnLi9zY3JpcHRzL2Zvcm0tbG9naW4uanMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvaTE4blNlcnZpY2UuanMnO1xuXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIEkxOG5TZXJ2aWNlLmluaXQoJ2ZyJyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jaGFuZ2UtbG9jYWxlXScpLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlID0gdGhpcy5kYXRhc2V0LmNoYW5nZUxvY2FsZTtcbiAgICAgICAgICAgIEkxOG5TZXJ2aWNlLmNoYW5nZUxhbmd1YWdlKGxvY2FsZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iLCJcbmNvbnN0IHNlbGVjdG9yID0gJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT1wYXNzd29yZF0nO1xuY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1mb3JtJyk7XG5cbmZ1bmN0aW9uIGluaXRJbnB1dChpbnB1dEVsKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0RWwucGFyZW50Tm9kZTtcblxuICAgIGlmIChpbnB1dEVsLnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXQtLWZpbGxlZCcpO1xuICAgIH1cblxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvbkZvY3VzKTtcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xufVxuXG5mdW5jdGlvbiBvbkZvY3VzKGV2KSB7XG4gICAgY29uc3QgcGFyZW50ID0gZXYudGFyZ2V0LnBhcmVudE5vZGU7XG5cbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5jbGFzc0xpc3QpIHtcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvbkJsdXIoIGV2ICkge1xuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5wYXJlbnROb2RlO1xuXG4gICAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWZpbGxlZCcpO1xuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcblxuICAgICAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIGxpdmVWYWxpZGF0aW9uKTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGxpdmVWYWxpZGF0aW9uKTtcbn1cblxuZnVuY3Rpb24gbGl2ZVZhbGlkYXRpb24oIGV2ICkge1xuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5wYXJlbnROb2RlO1xuXG4gICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xuICAgIH1cbn1cblxuaWYgKGZvcm0pIHtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU3VibWl0KTtcbn1cblxuZnVuY3Rpb24gb25TdWJtaXQoZXYpIHtcbiAgICBjb25zdCBpbnB1dHNXcmFwcGVycyA9IGV2LnRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJyk7XG4gICAgbGV0IGhhc0Vycm9yID0gZmFsc2U7XG5cbiAgICBpbnB1dHNXcmFwcGVycy5mb3JFYWNoKCh3cmFwcGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzRXJyb3IpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIGlmIChpbnB1dHMpIHtcbiAgICAgICAgaW5wdXRzLmZvckVhY2goaW5pdElucHV0KTtcbiAgICAgICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgaW5wdXQuYmx1cigpO1xuICAgICAgICB9KVxuICAgIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzZXQtYnRuJykuZm9yRWFjaCgoYnRuKSA9PiB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGJ0bi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIGlmIChpbnB1dCAmJiBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gaW5wdXQuZGF0YXNldC5vcmlnaW5hbDtcbiAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcpKTtcbiAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdibHVyJykpO1xuICAgIH1cbiAgfSk7XG59KTsiLCJ3aW5kb3cuSTE4blNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIGxldCBjdXJyZW50TG9jYWxlID0gJ2ZyJztcbiAgICBsZXQgZW5kcG9pbnQgPSAnL2FqYXgnO1xuXG4gICAgZnVuY3Rpb24gc2V0TG9jYWxlKGxvY2FsZSkge1xuICAgICAgICBjdXJyZW50TG9jYWxlID0gbG9jYWxlO1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7ZW5kcG9pbnR9L2NoYW5nZS1sb2NhbGUvJHtsb2NhbGV9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbGxlY3RLZXlzKCkge1xuICAgICAgICBjb25zdCBrZXlzID0gbmV3IFNldCgpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWkxOG4ta2V5XScpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAga2V5cy5hZGQoZWwuZGF0YXNldC5pMThuS2V5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaTE4bi1hdHRyXScpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXR0cnMgPSBlbC5kYXRhc2V0LmkxOG5BdHRyLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBhdHRycy5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleUF0dHIgPSBgaTE4biR7YXR0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGF0dHIuc2xpY2UoMSl9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbC5kYXRhc2V0W2tleUF0dHJdO1xuICAgICAgICAgICAgICAgIGlmIChrZXkpIGtleXMuYWRkKGtleSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oa2V5cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmV0Y2hUcmFuc2xhdGlvbnMoa2V5cykge1xuICAgICAgICBjb25zb2xlLmxvZygnRW52b2kgZGVzIGNsw6lzIHBvdXIgdHJhZHVjdGlvbiA6Jywga2V5cyk7XG4gICAgICAgIHJldHVybiBmZXRjaChgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7ZW5kcG9pbnR9L2dldC10cmFuc2xhdGlvbnMvJHtjdXJyZW50TG9jYWxlfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBrZXlzIH0pXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZURvbSh0cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaTE4bi1rZXldJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBlbC5kYXRhc2V0LmkxOG5LZXk7XG4gICAgICAgICAgICBpZiAodHJhbnNsYXRpb25zW2tleV0pIGVsLnRleHRDb250ZW50ID0gdHJhbnNsYXRpb25zW2tleV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWkxOG4tYXR0cl0nKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJzID0gZWwuZGF0YXNldC5pMThuQXR0ci5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgYXR0cnMuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlBdHRyID0gYGkxOG4ke2F0dHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBhdHRyLnNsaWNlKDEpfWA7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWwuZGF0YXNldFtrZXlBdHRyXTtcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNsYXRpb25zW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHRyYW5zbGF0aW9uc1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlTGFuZ3VhZ2UobG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBzZXRMb2NhbGUobG9jYWxlKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBjb2xsZWN0S2V5cygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFRyYW5zbGF0aW9ucyhrZXlzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbih0cmFuc2xhdGlvbnMgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZURvbSh0cmFuc2xhdGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKGRlZmF1bHRMb2NhbGUgPSAnZnInLCBiYXNlRW5kcG9pbnQgPSAnL2FqYXgnKSB7XG4gICAgICAgICAgICBjdXJyZW50TG9jYWxlID0gZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgIGVuZHBvaW50ID0gYmFzZUVuZHBvaW50O1xuICAgICAgICB9LFxuICAgICAgICBjaGFuZ2VMYW5ndWFnZVxuICAgIH07XG59KSgpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJJMThuU2VydmljZSIsImluaXQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImxpbmsiLCJlIiwicHJldmVudERlZmF1bHQiLCJsb2NhbGUiLCJkYXRhc2V0IiwiY2hhbmdlTG9jYWxlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJzZWxlY3RvciIsImlucHV0cyIsImZvcm0iLCJxdWVyeVNlbGVjdG9yIiwiaW5pdElucHV0IiwiaW5wdXRFbCIsIndyYXBwZXIiLCJwYXJlbnROb2RlIiwidmFsdWUiLCJ0cmltIiwiY2xhc3NMaXN0IiwiYWRkIiwib25Gb2N1cyIsIm9uQmx1ciIsImV2IiwicGFyZW50IiwidGFyZ2V0IiwiaW5wdXQiLCJyZW1vdmUiLCJjaGVja1ZhbGlkaXR5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxpdmVWYWxpZGF0aW9uIiwib25TdWJtaXQiLCJpbnB1dHNXcmFwcGVycyIsImhhc0Vycm9yIiwid2luZG93IiwiZm9jdXMiLCJibHVyIiwiYnRuIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm9yaWdpbmFsIiwidW5kZWZpbmVkIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiY3VycmVudExvY2FsZSIsImVuZHBvaW50Iiwic2V0TG9jYWxlIiwiZmV0Y2giLCJjb25jYXQiLCJtZXRob2QiLCJoZWFkZXJzIiwiY29sbGVjdEtleXMiLCJrZXlzIiwiU2V0IiwiZWwiLCJpMThuS2V5IiwiYXR0cnMiLCJpMThuQXR0ciIsInNwbGl0IiwiYXR0ciIsImtleUF0dHIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwia2V5IiwiQXJyYXkiLCJmcm9tIiwiZmV0Y2hUcmFuc2xhdGlvbnMiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJ1cGRhdGVEb20iLCJ0cmFuc2xhdGlvbnMiLCJ0ZXh0Q29udGVudCIsInNldEF0dHJpYnV0ZSIsImRlZmF1bHRMb2NhbGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJiYXNlRW5kcG9pbnQiXSwic291cmNlUm9vdCI6IiJ9