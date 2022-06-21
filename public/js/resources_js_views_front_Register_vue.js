(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_front_Register_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LeaveModal.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LeaveModal.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    question: {
      type: String,
      "default": "En quittant cette page, vous allez perdre toutes les données saisies,voulez-vous continuer ?"
    }
  },
  emits: ["confirm", "cancel"],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose,
        emit = _ref.emit;
    expose();
    var props = __props;
    var __returned__ = {
      props: props,
      emit: emit
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/Register.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/Register.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/UserIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/OfficeBuildingIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/EyeIcon.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/HomeIcon.js");
/* harmony import */ var _services_authServices_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/authServices.js */ "./resources/js/services/authServices.js");
/* harmony import */ var _stores_authenticate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/stores/authenticate */ "./resources/js/stores/authenticate.js");
/* harmony import */ var _components_LeaveModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/LeaveModal */ "./resources/js/components/LeaveModal.vue");
/* harmony import */ var vuejs_confirm_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuejs-confirm-dialog */ "./node_modules/vuejs-confirm-dialog/dist/vuejs-confirm-dialog.es.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();

    var _useAuth = (0,_services_authServices_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        sendEmailVerification = _useAuth.sendEmailVerification,
        sendSmsVerification = _useAuth.sendSmsVerification,
        errors = _useAuth.errors,
        loading = _useAuth.loading,
        createUser = _useAuth.createUser;

    var level = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
    var verifyField = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)("");
    var progress = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
    var location = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var showPassword = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var showCPassword = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var mapLink = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCmxQ_PZ3Emup8gQBqJPFBcnFlyHhQCv24&libraries=places";

    var _createConfirmDialog = (0,vuejs_confirm_dialog__WEBPACK_IMPORTED_MODULE_5__.createConfirmDialog)(_components_LeaveModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      question: "En quittant cette page, vous allez perdre toutes les données saisies,voulez-vous continuer ?"
    }),
        reveal = _createConfirmDialog.reveal,
        onConfirm = _createConfirmDialog.onConfirm;

    var accountType = function accountType(type) {
      level.value++;
      progress.value += 10;
      user.type = type;
    };

    var verifEmailData = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({
      email: "",
      code: "",
      hour: "",
      minutes: ""
    });
    var verifPhoneData = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({
      phone: null,
      code: "",
      hour: "",
      minutes: ""
    });
    var user = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({
      firstname: "",
      lastname: null,
      email: "",
      password: "",
      phone: "",
      location: null,
      category: null,
      password_confirmation: "",
      type: ""
    }); // onMounted(() => {
    //     new Promise((resolve, reject) => {
    //         let googleScript = document.querySelector(`script[src="${mapLink}"]`);
    //         if (!googleScript) {
    //             googleScript = document.createElement("script");
    //             googleScript.src = mapLink;
    //             googleScript.async = true;
    //             document.head.append(googleScript);
    //             googleScript.addEventListener("error", () => {
    //                 reject();
    //             });
    //             googleScript.addEventListener("load", () => {
    //                 resolve();
    //             });
    //         }
    //     }).then(() => {
    //         new google.maps.places.Autocomplete(location.value);
    //     });
    // });

    var emailVerificationSend = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                verifEmailData.code = Math.floor(Math.random() * 999999);
                verifEmailData.hour = new Date().getHours();
                verifEmailData.minutes = new Date().getMinutes();
                _context.next = 5;
                return sendEmailVerification(_objectSpread({}, verifEmailData));

              case 5:
                if (errors.value == "") {
                  level.value++;
                  progress.value += 15;
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function emailVerificationSend() {
        return _ref2.apply(this, arguments);
      };
    }();

    var VerifyEmailCode = function VerifyEmailCode() {
      if (verifEmailData.code == verifyField.value) {
        user.email = verifEmailData.email;
        level.value++;
        progress.value += 15;
        verifyField.value = "";
      } else {
        errors.value = "Code de verification incorrect";
      }
    };

    var SmsVerificationSend = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                verifPhoneData.code = Math.floor(Math.random() * 999999);
                verifPhoneData.hour = new Date().getHours();
                verifPhoneData.minutes = new Date().getMinutes();
                _context2.next = 5;
                return sendSmsVerification(_objectSpread({}, verifPhoneData));

              case 5:
                if (errors.value == "") {
                  level.value++;
                  progress.value += 15;
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function SmsVerificationSend() {
        return _ref3.apply(this, arguments);
      };
    }();

    var VerifySmsCode = function VerifySmsCode() {
      if (verifPhoneData.code == verifyField.value) {
        user.phone = verifPhoneData.phone;
        level.value++;
        progress.value += 15;
      } else {
        errors.value = "Code de verification incorrect";
      }
    };

    var register = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return createUser(_objectSpread({}, user));

              case 2:
                if (errors.value == "") {
                  level.value++;
                  progress.value = 100;
                }

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function register() {
        return _ref4.apply(this, arguments);
      };
    }();

    (0,vue_router__WEBPACK_IMPORTED_MODULE_6__.onBeforeRouteLeave)(function (to, from, next) {
      if (level.value > 0 && level.value < 6) {
        reveal();
        onConfirm(function () {
          next();
        });
      } else {
        next();
      }
    });

    var cleanErrors = function cleanErrors() {
      errors.value = "";
    };

    var toogleShowPassword = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                showPassword.value = !showPassword.value;

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function toogleShowPassword() {
        return _ref5.apply(this, arguments);
      };
    }();

    var toogleShowCPassword = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                showCPassword.value = !showCPassword.value;

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function toogleShowCPassword() {
        return _ref6.apply(this, arguments);
      };
    }();

    var __returned__ = {
      sendEmailVerification: sendEmailVerification,
      sendSmsVerification: sendSmsVerification,
      errors: errors,
      loading: loading,
      createUser: createUser,
      level: level,
      verifyField: verifyField,
      progress: progress,
      location: location,
      showPassword: showPassword,
      showCPassword: showCPassword,
      mapLink: mapLink,
      reveal: reveal,
      onConfirm: onConfirm,
      accountType: accountType,
      verifEmailData: verifEmailData,
      verifPhoneData: verifPhoneData,
      user: user,
      emailVerificationSend: emailVerificationSend,
      VerifyEmailCode: VerifyEmailCode,
      SmsVerificationSend: SmsVerificationSend,
      VerifySmsCode: VerifySmsCode,
      register: register,
      cleanErrors: cleanErrors,
      toogleShowPassword: toogleShowPassword,
      toogleShowCPassword: toogleShowCPassword,
      reactive: vue__WEBPACK_IMPORTED_MODULE_1__.reactive,
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_1__.onMounted,
      UserIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_7__["default"],
      OfficeBuildingIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_8__["default"],
      EyeIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_9__["default"],
      HomeIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_10__["default"],
      useAuth: _services_authServices_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      useAuthenticateStore: _stores_authenticate__WEBPACK_IMPORTED_MODULE_3__.useAuthenticateStore,
      LeaveModal: _components_LeaveModal__WEBPACK_IMPORTED_MODULE_4__["default"],
      createConfirmDialog: vuejs_confirm_dialog__WEBPACK_IMPORTED_MODULE_5__.createConfirmDialog,
      onBeforeRouteLeave: vue_router__WEBPACK_IMPORTED_MODULE_6__.onBeforeRouteLeave
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LeaveModal.vue?vue&type=template&id=5742103e":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LeaveModal.vue?vue&type=template&id=5742103e ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "relative z-10",
  "aria-labelledby": "modal-title",
  role: "dialog",
  "aria-modal": "true"
};
var _hoisted_2 = {
  "class": "fixed inset-0 z-10 overflow-y-auto"
};
var _hoisted_3 = {
  "class": "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
};
var _hoisted_4 = {
  "class": "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
};
var _hoisted_5 = {
  "class": "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
};
var _hoisted_6 = {
  "class": "sm:flex sm:items-start"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "h-6 w-6 text-yellow-600",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
})])], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-lg font-medium leading-6 text-gray-900",
  id: "modal-title"
}, " Vous allez quitter la création de compte ", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "mt-2"
};
var _hoisted_11 = {
  "class": "text-sm text-gray-500"
};
var _hoisted_12 = {
  "class": "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.emit('cancel');
    })
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.question), 1
  /* TEXT */
  )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.emit('cancel');
    }),
    type: "button",
    "class": "inline-flex w-full justify-center rounded-md border border-transparent bg-primary-color px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary-color focus:outline-none focus:ring-2 focus:ring-secondary-color focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
  }, " Continuer "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.emit('confirm');
    }),
    type: "button",
    "class": "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
  }, " Quitter ")])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/Register.vue?vue&type=template&id=47979e28":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/Register.vue?vue&type=template&id=47979e28 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mb-16"
};
var _hoisted_2 = {
  "class": "dark:bg-gray-800 relative m-auto w-full max-w-sm rounded-md bg-white p-6 shadow-md"
};
var _hoisted_3 = {
  "class": "text-center text-3xl font-semibold text-gray-700"
};
var _hoisted_4 = {
  key: 0,
  "class": "flex flex-col items-center justify-center space-y-4 py-10 px-4"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Créer un compte particulier", -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Créer un compte professionel", -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "mt-4"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email",
  "class": "block text-sm text-gray-800"
}, "E-mail", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "mt-6"
};
var _hoisted_10 = {
  key: 0,
  type: "submit",
  "class": "w-full transform rounded-md bg-primary-color px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-secondary-color focus:bg-primary-color focus:outline-none"
};
var _hoisted_11 = {
  key: 1,
  type: "button",
  disabled: "",
  "class": "flex w-full transform items-center justify-center rounded-md bg-secondary-color px-4 py-2 tracking-wide text-white focus:outline-none"
};
var _hoisted_12 = {
  "class": "mt-4"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email",
  "class": "block text-sm text-gray-800"
}, "Code de vérification", -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "mt-6"
};
var _hoisted_15 = {
  key: 0,
  type: "submit",
  "class": "w-full transform rounded-md bg-primary-color px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-secondary-color focus:bg-primary-color focus:outline-none"
};
var _hoisted_16 = {
  key: 1,
  type: "button",
  disabled: "",
  "class": "flex w-full transform items-center justify-center rounded-md bg-secondary-color px-4 py-2 tracking-wide text-white focus:outline-none"
};
var _hoisted_17 = {
  "class": "mt-4"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block text-sm text-gray-800"
}, "Numéro de Téléphone", -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "mt-2"
};
var _hoisted_20 = {
  "class": "mt-6"
};
var _hoisted_21 = {
  key: 0,
  type: "submit",
  "class": "w-full transform rounded-md bg-primary-color px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-secondary-color focus:bg-primary-color focus:outline-none"
};
var _hoisted_22 = {
  key: 1,
  type: "button",
  disabled: "",
  "class": "flex w-full transform items-center justify-center rounded-md bg-secondary-color px-4 py-2 tracking-wide text-white focus:outline-none"
};
var _hoisted_23 = {
  "class": "mt-4"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block text-sm text-gray-800"
}, "Code de vérification", -1
/* HOISTED */
);

var _hoisted_25 = {
  "class": "mt-6"
};
var _hoisted_26 = {
  key: 0,
  type: "submit",
  "class": "w-full transform rounded-md bg-primary-color px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-secondary-color focus:bg-primary-color focus:outline-none"
};
var _hoisted_27 = {
  key: 1,
  type: "button",
  disabled: "",
  "class": "flex w-full transform items-center justify-center rounded-md bg-secondary-color px-4 py-2 tracking-wide text-white focus:outline-none"
};
var _hoisted_28 = {
  "class": "mt-4"
};
var _hoisted_29 = {
  "class": "block text-sm text-gray-800"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Nom ");

var _hoisted_31 = {
  key: 0
};
var _hoisted_32 = {
  key: 0,
  "class": "mt-2"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block text-sm text-gray-800"
}, "Prénom", -1
/* HOISTED */
);

var _hoisted_34 = {
  key: 1,
  "class": "mt-2"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block text-sm text-gray-800"
}, "Ville", -1
/* HOISTED */
);

var _hoisted_36 = {
  key: 2,
  "class": "mt-2"
};

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block text-sm text-gray-800"
}, "Catégotie de votre activité", -1
/* HOISTED */
);

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "vetement"
}, "Vetement", -1
/* HOISTED */
);

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "automobile"
}, "Automobile", -1
/* HOISTED */
);

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "immobilier"
}, "Immobilier", -1
/* HOISTED */
);

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "cuisine"
}, "Cuisine", -1
/* HOISTED */
);

var _hoisted_42 = [_hoisted_38, _hoisted_39, _hoisted_40, _hoisted_41];
var _hoisted_43 = {
  "class": "mt-2"
};

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block text-sm text-gray-800"
}, "Mot de passe", -1
/* HOISTED */
);

var _hoisted_45 = {
  "class": "relative mt-2"
};
var _hoisted_46 = ["type"];
var _hoisted_47 = {
  "class": "mt-2"
};

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block text-sm text-gray-800"
}, "Confirmation du mot de passe", -1
/* HOISTED */
);

var _hoisted_49 = {
  "class": "relative mt-2"
};
var _hoisted_50 = ["type"];

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mt-8 text-center text-xs font-light text-gray-400"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" En créant mon compte professionnel je reconnais avoir lu et accepté les "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "font-medium text-primary-color hover:underline"
}, "Conditions Générales de Vente"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" et les "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "font-medium text-primary-color hover:underline"
}, "Conditions Générales d‘Utilisation"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" . ")], -1
/* HOISTED */
);

var _hoisted_52 = {
  "class": "mt-6"
};
var _hoisted_53 = {
  key: 0,
  type: "submit",
  "class": "w-full transform rounded-md bg-primary-color px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-secondary-color focus:bg-primary-color focus:outline-none"
};
var _hoisted_54 = {
  key: 1,
  type: "button",
  disabled: "",
  "class": "flex w-full transform items-center justify-center rounded-md bg-secondary-color px-4 py-2 tracking-wide text-white focus:outline-none"
};
var _hoisted_55 = {
  key: 6,
  "class": "flex flex-col items-center justify-center space-y-4 py-10 px-4"
};

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-center text-sm font-light text-gray-500"
}, " Félicitation vous êtes désormais membre de Adnafrica 😀 ", -1
/* HOISTED */
);

var _hoisted_57 = {
  href: "/",
  "class": "flex space-x-2 rounded-md border border-primary-color bg-white p-2 text-primary-color hover:bg-primary-color hover:text-white"
};

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Retouner à l'acceuil", -1
/* HOISTED */
);

var _hoisted_59 = {
  key: 0,
  "class": "mt-8 text-center text-xs font-light text-gray-400"
};

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Vous avez déja un compte ? ");

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Se connecter");

var _hoisted_62 = {
  "class": "rounded-x-md absolute bottom-0 left-0 h-1.5 w-full rounded-b-md bg-gray-200"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DialogsWrapper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DialogsWrapper");

  var _component_Goback = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Goback");

  var _component_Error = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Error");

  var _component_Spin = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Spin");

  var _component_vue_tel_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vue-tel-input");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DialogsWrapper), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Goback), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.level == 6 ? "Inscription terminée" : "Rejoindre Adnafrica"), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Error, {
    errors: $setup.errors,
    onCleanErrors: $setup.cleanErrors
  }, null, 8
  /* PROPS */
  , ["errors"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup, {
    "enter-active-class": "transition duration-1000",
    "enter-from-class": "opacity-0 translate-x-20",
    "enter-to-class": "opacity-1 translate-x-0",
    "leave-active-class": "transition duration-500 absolute ease-out",
    "leave-from-class": "opacity-1 translate-x-0",
    "leave-to-class": " -translate-x-20 opacity-0",
    mode: "out-in"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" level 0 "), $setup.level == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return $setup.accountType('particular');
        }),
        "class": "flex space-x-2 rounded-md border border-primary-color bg-white p-2 text-primary-color hover:bg-primary-color hover:text-white"
      }, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["UserIcon"], {
        "class": "h-5 w-5"
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return $setup.accountType('professional');
        }),
        "class": "flex space-x-2 rounded-md border border-primary-color bg-white p-2 text-primary-color hover:bg-primary-color hover:text-white"
      }, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["OfficeBuildingIcon"], {
        "class": "h-5 w-5"
      })])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" level 1 "), $setup.level == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
        key: 1,
        onSubmit: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $setup.emailVerificationSend();
        }, ["prevent"])),
        "class": "mt-6"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "email",
        required: "",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.verifEmailData.email = $event;
        }),
        "class": "mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.verifEmailData.email]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [$setup.loading == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_10, " Suivant ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.loading == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Spin), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" S'inscrire ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 32
      /* HYDRATE_EVENTS */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" level 2 "), $setup.level == 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
        key: 2,
        onSubmit: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $setup.VerifyEmailCode();
        }, ["prevent"])),
        "class": "mt-6"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        required: "",
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $setup.verifyField = $event;
        }),
        maxlength: "6",
        "class": "mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.verifyField]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [$setup.loading == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_15, " Suivant ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.loading == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Spin)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 32
      /* HYDRATE_EVENTS */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" level 3 "), $setup.level == 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
        key: 3,
        onSubmit: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $setup.SmsVerificationSend();
        }, ["prevent"])),
        "class": "mt-6"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vue_tel_input, {
        modelValue: $setup.verifPhoneData.phone,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return $setup.verifPhoneData.phone = $event;
        }),
        mode: "international"
      }, null, 8
      /* PROPS */
      , ["modelValue"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [$setup.loading == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_21, " Suivant ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.loading == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Spin)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 32
      /* HYDRATE_EVENTS */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" level 4 "), $setup.level == 4 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
        key: 4,
        onSubmit: _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $setup.VerifySmsCode();
        }, ["prevent"])),
        "class": "mt-6"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        required: "",
        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
          return $setup.verifyField = $event;
        }),
        maxlength: "6",
        "class": "mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.verifyField]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [$setup.loading == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_26, " Suivant ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.loading == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Spin)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 32
      /* HYDRATE_EVENTS */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" level 5 "), $setup.level == 5 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
        key: 5,
        onSubmit: _cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $setup.register();
        }, ["prevent"])),
        "class": "mt-6"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_29, [_hoisted_30, $setup.user.type == 'professional' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_31, "de l'entreprise")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        required: "",
        "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
          return $setup.user.firstname = $event;
        }),
        "class": "mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.firstname]])]), $setup.user.type == 'particular' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        required: "",
        "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
          return $setup.user.lastname = $event;
        }),
        "class": "mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.lastname]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.user.type == 'professional' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        required: "",
        "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
          return $setup.user.location = $event;
        }),
        "class": "mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.location]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"mt-2\" v-if=\"user.type == 'professional'\">\r\n                            <label class=\"block text-sm text-gray-800\"\r\n                                >Ville</label\r\n                            >\r\n                            <input\r\n                                type=\"text\"\r\n                                required\r\n                                ref=\"location\"\r\n                                class=\"mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40\"\r\n                            />\r\n                        </div> "), $setup.user.type == 'professional' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
          return $setup.user.category = $event;
        }),
        required: "",
        "class": "form-select mt-2 w-full rounded-md text-sm text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
      }, _hoisted_42, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.user.category]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: [$setup.showPassword ? 'text' : 'password'],
        required: "",
        "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
          return $setup.user.password = $event;
        }),
        "class": "block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
      }, null, 8
      /* PROPS */
      , _hoisted_46), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic, $setup.user.password]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        onClick: _cache[15] || (_cache[15] = function ($event) {
          return $setup.toogleShowPassword();
        }),
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.showPassword ? 'absolute top-3 right-2 text-primary-color' : 'absolute top-3 right-2 text-gray-500 hover:text-primary-color'])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["EyeIcon"], {
        "class": "h-5 w-5"
      })], 2
      /* CLASS */
      )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [_hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: [$setup.showCPassword ? 'text' : 'password'],
        required: "",
        "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
          return $setup.user.password_confirmation = $event;
        }),
        "class": "block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
      }, null, 8
      /* PROPS */
      , _hoisted_50), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic, $setup.user.password_confirmation]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        onClick: _cache[17] || (_cache[17] = function ($event) {
          return $setup.toogleShowCPassword();
        }),
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.showCPassword ? 'absolute top-3 right-2 text-primary-color' : 'absolute top-3 right-2 text-gray-500 hover:text-primary-color'])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["EyeIcon"], {
        "class": "h-5 w-5"
      })], 2
      /* CLASS */
      )])])]), _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [$setup.loading == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_53, " Terminer ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.loading == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Spin)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 32
      /* HYDRATE_EVENTS */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" level 6 "), $setup.level == 6 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_55, [_hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_57, [_hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HomeIcon"], {
        "class": "h-5 w-5"
      })])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }), $setup.level == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_59, [_hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'login'
    },
    "class": "font-medium text-primary-color hover:underline"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_61];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "rounded-x-md h-1.5 rounded-b-md bg-primary-color",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('width: ' + $setup.progress + '%')
  }, null, 4
  /* STYLE */
  )])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/services/authServices.js":
/*!***********************************************!*\
  !*** ./resources/js/services/authServices.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router */ "./resources/js/router/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function useAuth() {
  var user = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
  var errors = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)("");
  var loading = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(0);

  var sendEmailVerification = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {
      var key;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              errors.value = "";
              _context.prev = 1;
              loading.value = 1;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/send-verification-email", data);

            case 5:
              loading.value = 0;
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);

              if (_context.t0.response.status == 422) {
                for (key in e.response.data.errors) {
                  errors.value += e.response.data.errors[key][0] + "\n";
                }
              } else {
                errors.value = _context.t0.response.data.message;
              }

              loading.value = 0;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));

    return function sendEmailVerification(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var sendSmsVerification = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(data) {
      var key;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              errors.value = "";
              _context2.prev = 1;
              loading.value = 1;
              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/send-verification-sms", data);

            case 5:
              loading.value = 0;
              _context2.next = 12;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);

              if (_context2.t0.response.status == 422) {
                for (key in e.response.data.errors) {
                  errors.value += e.response.data.errors[key][0] + "\n";
                }
              } else {
                errors.value = _context2.t0.response.data.message;
              }

              loading.value = 0;

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }));

    return function sendSmsVerification(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var createUser = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(data) {
      var response, key;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              errors.value = "";
              _context3.prev = 1;
              loading.value = 1;
              _context3.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/register", data);

            case 5:
              response = _context3.sent;
              user.value = response.data.data;
              localStorage.user = JSON.stringify(response.data.data.user);
              localStorage.tokenUser = response.data.data.token;
              loading.value = 2;
              _context3.next = 16;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](1);
              loading.value = 0;

              if (_context3.t0.response.status == 422) {
                for (key in _context3.t0.response.data.errors) {
                  errors.value += _context3.t0.response.data.errors[key][0] + "\n";
                }
              }

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 12]]);
    }));

    return function createUser(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var loginUser = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(data) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              errors.value = "";
              _context4.prev = 1;
              loading.value = 1;
              _context4.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/login", data);

            case 5:
              response = _context4.sent;
              user.value = response.data.data;
              localStorage.user = JSON.stringify(response.data.data.user);
              localStorage.tokenUser = response.data.data.token;
              loading.value = 2;
              _context4.next = 16;
              break;

            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](1);
              loading.value = 0;
              errors.value = _context4.t0.response.data.message;

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 12]]);
    }));

    return function loginUser(_x4) {
      return _ref4.apply(this, arguments);
    };
  }(); // const loginAdmin = async (data) => {
  //     errors.value = "";
  //     try {
  //         loading.value = 1;
  //         let response = await axios.post("/api/login-admin", data);
  //         localStorage.user = JSON.stringify(response.data.data.user);
  //         localStorage.token = response.data.data.token;
  //         loading.value = 2;
  //         router.push({ name: "admin.dash" });
  //     } catch (e) {
  //         loading.value = 0;
  //         errors.value = "invalid email or password";
  //     }
  // };


  return {
    sendEmailVerification: sendEmailVerification,
    sendSmsVerification: sendSmsVerification,
    createUser: createUser,
    errors: errors,
    loading: loading,
    user: user,
    loginUser: loginUser // loginAdmin,

  };
}

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./resources/js/components/LeaveModal.vue":
/*!************************************************!*\
  !*** ./resources/js/components/LeaveModal.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LeaveModal_vue_vue_type_template_id_5742103e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeaveModal.vue?vue&type=template&id=5742103e */ "./resources/js/components/LeaveModal.vue?vue&type=template&id=5742103e");
/* harmony import */ var _LeaveModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeaveModal.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/LeaveModal.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_adnafrica_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_adnafrica_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LeaveModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LeaveModal_vue_vue_type_template_id_5742103e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/LeaveModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/front/Register.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/front/Register.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_47979e28__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=47979e28 */ "./resources/js/views/front/Register.vue?vue&type=template&id=47979e28");
/* harmony import */ var _Register_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&setup=true&lang=js */ "./resources/js/views/front/Register.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_adnafrica_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_adnafrica_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Register_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Register_vue_vue_type_template_id_47979e28__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/front/Register.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/LeaveModal.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/LeaveModal.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LeaveModal.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LeaveModal.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/views/front/Register.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/front/Register.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/Register.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/LeaveModal.vue?vue&type=template&id=5742103e":
/*!******************************************************************************!*\
  !*** ./resources/js/components/LeaveModal.vue?vue&type=template&id=5742103e ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveModal_vue_vue_type_template_id_5742103e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveModal_vue_vue_type_template_id_5742103e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LeaveModal.vue?vue&type=template&id=5742103e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LeaveModal.vue?vue&type=template&id=5742103e");


/***/ }),

/***/ "./resources/js/views/front/Register.vue?vue&type=template&id=47979e28":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/front/Register.vue?vue&type=template&id=47979e28 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_47979e28__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_47979e28__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=template&id=47979e28 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/Register.vue?vue&type=template&id=47979e28");


/***/ }),

/***/ "./node_modules/@heroicons/vue/outline/esm/EyeIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/vue/outline/esm/EyeIcon.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    }),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/outline/esm/HomeIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/vue/outline/esm/HomeIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/outline/esm/OfficeBuildingIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/vue/outline/esm/OfficeBuildingIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/outline/esm/UserIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/vue/outline/esm/UserIcon.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    })
  ]))
}

/***/ })

}]);