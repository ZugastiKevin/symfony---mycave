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
/* harmony import */ var _scripts_add_remove_bottle_cave_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/add-remove-bottle-cave.js */ "./assets/scripts/add-remove-bottle-cave.js");
/* harmony import */ var _scripts_add_remove_bottle_cave_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scripts_add_remove_bottle_cave_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _scripts_highlight_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/highlight.js */ "./assets/scripts/highlight.js");
/* harmony import */ var _scripts_highlight_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scripts_highlight_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _scripts_header_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scripts/header.js */ "./assets/scripts/header.js");
/* harmony import */ var _scripts_header_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scripts_header_js__WEBPACK_IMPORTED_MODULE_9__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */










console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/***/ }),

/***/ "./assets/scripts/add-remove-bottle-cave.js":
/*!**************************************************!*\
  !*** ./assets/scripts/add-remove-bottle-cave.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.querySelectorAll('.toggle-cave').forEach(function (btn) {
  btn.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var url, response, data, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          url = btn.dataset.url;
          _context.p = 1;
          _context.n = 2;
          return fetch(url, {
            method: 'POST',
            headers: {
              'X-Requested-With': 'XMLHttpRequest'
            }
          });
        case 2:
          response = _context.v;
          _context.n = 3;
          return response.json();
        case 3:
          data = _context.v;
          if (data.inCave) {
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-danger');
            btn.textContent = btn.dataset.labelRemove;
            btn.dataset.inCave = '1';
          } else {
            btn.classList.remove('btn-danger');
            btn.classList.add('btn-primary');
            btn.textContent = btn.dataset.labelAdd;
            btn.dataset.inCave = '0';
          }
          _context.n = 5;
          break;
        case 4:
          _context.p = 4;
          _t = _context.v;
          console.error('Erreur ajout/retrait de cave:', _t);
        case 5:
          return _context.a(2);
      }
    }, _callee, null, [[1, 4]]);
  })));
});

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
  var wrapper = inputEl.closest('span');
  if (inputEl.value.trim() !== '') {
    wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--filled');
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
  inputs.forEach(function (input) {
    initInput(input);
    if (input.tagName === 'SELECT' && input.value) {
      var wrapper = input.parentNode;
      wrapper.classList.add('inputs--filled');
    }
  });
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

/***/ "./assets/scripts/header.js":
/*!**********************************!*\
  !*** ./assets/scripts/header.js ***!
  \**********************************/
/***/ (() => {

var dropdown = document.querySelector(".dropdown");
var dropdownContent = document.querySelector(".dropdown-content");
dropdown.addEventListener("mouseover", function () {
  dropdownContent.style.display = "flex";
  dropdownContent.style.animation = "show-content 0.5s ease forwards";
});
dropdown.addEventListener("mouseout", function () {
  dropdownContent.style.animation = "dont-show-content 0.5s ease forwards";
  dropdownContent.addEventListener("animationend", function handler(element) {
    if (element.animationName === "dont-show-content") {
      dropdownContent.style.display = "none";
    }
    dropdownContent.removeEventListener("animationend", handler);
  });
});

/***/ }),

/***/ "./assets/scripts/highlight.js":
/*!*************************************!*\
  !*** ./assets/scripts/highlight.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.querySelectorAll('.highlight-toggle').forEach(function (btn) {
  btn.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var bottleId, url, response, data, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          bottleId = btn.dataset.id;
          url = btn.dataset.url;
          _context.p = 1;
          _context.n = 2;
          return fetch(url, {
            method: 'POST',
            headers: {
              'X-Requested-With': 'XMLHttpRequest'
            }
          });
        case 2:
          response = _context.v;
          _context.n = 3;
          return response.json();
        case 3:
          data = _context.v;
          // Reset all buttons
          document.querySelectorAll('.highlight-toggle').forEach(function (b) {
            b.classList.remove('highlighted');
            b.innerHTML = '<span>☆</span>';
          });
          if (data.highlighted) {
            btn.classList.add('highlighted');
            btn.innerHTML = '<span>★</span>';
          }
          _context.n = 5;
          break;
        case 4:
          _context.p = 4;
          _t = _context.v;
          console.error('Erreur lors du changement de highlight:', _t);
        case 5:
          return _context.a(2);
      }
    }, _callee, null, [[1, 4]]);
  })));
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_fortawesome_fontawes-44c9ef"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQyxVQUFBZSxJQUFJLEVBQUk7TUFDVixJQUFNb0UsdUJBQXVCLEdBQUc1RSxRQUFRLENBQUMyQixhQUFhLENBQUMsZUFBZSxDQUFDO01BQ3ZFLElBQUlpRCx1QkFBdUIsSUFBSXBFLElBQUksQ0FBQ2lFLElBQUksRUFBRTtRQUN0Q0csdUJBQXVCLENBQUNGLFNBQVMsR0FBR2xFLElBQUksQ0FBQ2lFLElBQUk7TUFDakQ7SUFDSixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFsRCxLQUFLO01BQUEsT0FBSWhGLE9BQU8sQ0FBQ2dGLEtBQUssQ0FBQyxTQUFTLEVBQUVBLEtBQUssQ0FBQztJQUFBLEVBQUM7RUFDcEQsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7OztBQzFCRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvYWRkLXJlbW92ZS1ib3R0bGUtY2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9oaWdobGlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvcmVzZXQtYnRuLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3NlbGVjdGUtcGF5cy1yZWdpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3NlbGVjdGUtdHlwZXMtY2VwYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXHJcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXHJcbiAqL1xyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XHJcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJztcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL2Zvcm0uanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9yZXNldC1idG4uanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9zZWxlY3RlLXBheXMtcmVnaW9ucy5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL3NlbGVjdGUtdHlwZXMtY2VwYWdlcy5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL2FkZC1yZW1vdmUtYm90dGxlLWNhdmUuanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9oaWdobGlnaHQuanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9oZWFkZXIuanMnO1xyXG5cclxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjoknKTtcclxuIiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1jYXZlJykuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGJ0bi5kYXRhc2V0LnVybDtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5pbkNhdmUpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdidG4tcHJpbWFyeScpO1xyXG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1kYW5nZXInKTtcclxuICAgICAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IGJ0bi5kYXRhc2V0LmxhYmVsUmVtb3ZlO1xyXG4gICAgICAgICAgICAgICAgYnRuLmRhdGFzZXQuaW5DYXZlID0gJzEnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1kYW5nZXInKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tcHJpbWFyeScpO1xyXG4gICAgICAgICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gYnRuLmRhdGFzZXQubGFiZWxBZGQ7XHJcbiAgICAgICAgICAgICAgICBidG4uZGF0YXNldC5pbkNhdmUgPSAnMCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGFqb3V0L3JldHJhaXQgZGUgY2F2ZTonLCBlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIiwiXHJcbmNvbnN0IHNlbGVjdG9yID0gJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT1wYXNzd29yZF0sIHNlbGVjdCwgdGV4dGFyZWEnO1xyXG5jb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtZm9ybScpO1xyXG5cclxuZnVuY3Rpb24gaW5pdElucHV0KGlucHV0RWwpIHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dEVsLmNsb3Nlc3QoJ3NwYW4nKTtcclxuXHJcbiAgICBpZiAoaW5wdXRFbC52YWx1ZS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25Gb2N1cyk7XHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkZvY3VzKGV2KSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBldi50YXJnZXQucGFyZW50Tm9kZTtcclxuXHJcbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5jbGFzc0xpc3QpIHtcclxuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25CbHVyKCBldiApIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LnBhcmVudE5vZGU7XHJcblxyXG4gICAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG5cclxuICAgICAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgbGl2ZVZhbGlkYXRpb24pO1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBsaXZlVmFsaWRhdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpdmVWYWxpZGF0aW9uKCBldiApIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LnBhcmVudE5vZGU7XHJcblxyXG4gICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pZiAoZm9ybSkge1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBvblN1Ym1pdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uU3VibWl0KGV2KSB7XHJcbiAgICBjb25zdCBpbnB1dHNXcmFwcGVycyA9IGV2LnRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJyk7XHJcbiAgICBsZXQgaGFzRXJyb3IgPSBmYWxzZTtcclxuXHJcbiAgICBpbnB1dHNXcmFwcGVycy5mb3JFYWNoKCh3cmFwcGVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgICAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoaGFzRXJyb3IpIHtcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIGluaXRJbnB1dChpbnB1dCk7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dC50YWdOYW1lID09PSAnU0VMRUNUJyAmJiBpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNldC1idG4nKS5mb3JFYWNoKChidG4pID0+IHtcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGJ0bi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgaWYgKGlucHV0ICYmIGlucHV0LmRhdGFzZXQub3JpZ2luYWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpbnB1dC52YWx1ZSA9IGlucHV0LmRhdGFzZXQub3JpZ2luYWw7XHJcbiAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcpKTtcclxuICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2JsdXInKSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pOyIsImNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93blwiKTtcclxuY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1jb250ZW50XCIpO1xyXG5cclxuZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XHJcbiAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwic2hvdy1jb250ZW50IDAuNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG59KTtcclxuXHJcbmRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XHJcbiAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJkb250LXNob3ctY29udGVudCAwLjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuXHJcbiAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiBoYW5kbGVyKGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC5hbmltYXRpb25OYW1lID09PSBcImRvbnQtc2hvdy1jb250ZW50XCIpIHtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICB9KTtcclxufSk7IiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZ2hsaWdodC10b2dnbGUnKS5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm90dGxlSWQgPSBidG4uZGF0YXNldC5pZDtcclxuICAgICAgICBjb25zdCB1cmwgPSBidG4uZGF0YXNldC51cmw7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVzZXQgYWxsIGJ1dHRvbnNcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZ2hsaWdodC10b2dnbGUnKS5mb3JFYWNoKGIgPT4ge1xyXG4gICAgICAgICAgICAgICAgYi5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHRlZCcpO1xyXG4gICAgICAgICAgICAgICAgYi5pbm5lckhUTUwgPSAnPHNwYW4+4piGPC9zcGFuPic7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEuaGlnaGxpZ2h0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZCcpO1xyXG4gICAgICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9ICc8c3Bhbj7imIU8L3NwYW4+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkdSBjaGFuZ2VtZW50IGRlIGhpZ2hsaWdodDonLCBlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc2V0LWJ0bicpLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGJ1dHRvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsO1xyXG4gICAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpOyAvLyB1dGlsZSBwb3VyIHJlbGFuY2VyIHVuIGZldGNoIEFKQVggbGnDqVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IHBheXNTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm90dGxlc190eXBlX2Zvcm1fcGF5cycpO1xyXG5cclxuICAgIGlmICghcGF5c1NlbGVjdCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHVybEJhc2VSZWdpb25zID0gcGF5c1NlbGVjdC5kYXRhc2V0LnVybDtcclxuXHJcbiAgICBwYXlzU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBwYXlzSWQgPSB0aGlzLnZhbHVlO1xyXG5cclxuICAgICAgICBmZXRjaChgJHt1cmxCYXNlUmVnaW9uc30/cGF5c0lkPSR7cGF5c0lkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0c0NvbnRhaW5lclJlZ2lvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVnaW9uLWZpZWxkJyk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRzQ29udGFpbmVyUmVnaW9ucyAmJiBkYXRhLmh0bWwpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHNDb250YWluZXJSZWdpb25zLm91dGVySFRNTCA9IGRhdGEuaHRtbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0VycmV1cjonLCBlcnJvcikpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgdHlwZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib3R0bGVzX3R5cGVfZm9ybV90eXBlJyk7XHJcbiAgICBjb25zdCByZXN1bHRzQ29udGFpbmVyQ2VwYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjZXBhZ2UtZmllbGQnKTtcclxuXHJcbiAgICBpZiAoIXR5cGVTZWxlY3QpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB1cmxCYXNlQ2VwYWdlcyA9IHR5cGVTZWxlY3QuZGF0YXNldC51cmw7XHJcblxyXG4gICAgdHlwZVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgdHlwZUlkID0gdGhpcy52YWx1ZTtcclxuXHJcbiAgICAgICAgZmV0Y2goYCR7dXJsQmFzZUNlcGFnZXN9P3R5cGVJZD0ke3R5cGVJZH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHNDb250YWluZXJDZXBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NlcGFnZS1maWVsZCcpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0c0NvbnRhaW5lckNlcGFnZXMgJiYgZGF0YS5odG1sKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzQ29udGFpbmVyQ2VwYWdlcy5vdXRlckhUTUwgPSBkYXRhLmh0bWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJldXI6JywgZXJyb3IpKTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX2ludm9rZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsInJlcXVpcmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9jYWxsZWUiLCJ1cmwiLCJyZXNwb25zZSIsImRhdGEiLCJfdCIsIl9jb250ZXh0IiwiZGF0YXNldCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImpzb24iLCJpbkNhdmUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImxhYmVsUmVtb3ZlIiwibGFiZWxBZGQiLCJlcnJvciIsInNlbGVjdG9yIiwiaW5wdXRzIiwiZm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJpbml0SW5wdXQiLCJpbnB1dEVsIiwid3JhcHBlciIsImNsb3Nlc3QiLCJ0cmltIiwib25Gb2N1cyIsIm9uQmx1ciIsImV2IiwicGFyZW50IiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImlucHV0IiwiY2hlY2tWYWxpZGl0eSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsaXZlVmFsaWRhdGlvbiIsIm9uU3VibWl0IiwiaW5wdXRzV3JhcHBlcnMiLCJoYXNFcnJvciIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwidGFnTmFtZSIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJvcmlnaW5hbCIsInVuZGVmaW5lZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImRyb3Bkb3duIiwiZHJvcGRvd25Db250ZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiYW5pbWF0aW9uIiwiaGFuZGxlciIsImVsZW1lbnQiLCJhbmltYXRpb25OYW1lIiwiYm90dGxlSWQiLCJpZCIsImIiLCJpbm5lckhUTUwiLCJoaWdobGlnaHRlZCIsImJ1dHRvbiIsInBheXNTZWxlY3QiLCJ1cmxCYXNlUmVnaW9ucyIsInBheXNJZCIsImNvbmNhdCIsInJlc3VsdHNDb250YWluZXJSZWdpb25zIiwiaHRtbCIsIm91dGVySFRNTCIsInR5cGVTZWxlY3QiLCJyZXN1bHRzQ29udGFpbmVyQ2VwYWdlcyIsInVybEJhc2VDZXBhZ2VzIiwidHlwZUlkIl0sInNvdXJjZVJvb3QiOiIifQ==