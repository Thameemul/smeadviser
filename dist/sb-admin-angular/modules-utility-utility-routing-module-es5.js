function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-utility-utility-routing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/utility/containers/version/version.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/utility/containers/version/version.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesUtilityContainersVersionVersionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span>{{version}}</span>\n";
    /***/
  },

  /***/
  "./src/modules/utility/components/index.ts":
  /*!*************************************************!*\
    !*** ./src/modules/utility/components/index.ts ***!
    \*************************************************/

  /*! exports provided: components */

  /***/
  function srcModulesUtilityComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "components", function () {
      return components;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var components = [];
    /***/
  },

  /***/
  "./src/modules/utility/containers/index.ts":
  /*!*************************************************!*\
    !*** ./src/modules/utility/containers/index.ts ***!
    \*************************************************/

  /*! exports provided: containers, VersionComponent */

  /***/
  function srcModulesUtilityContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "containers", function () {
      return containers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _version_version_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./version/version.component */
    "./src/modules/utility/containers/version/version.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "VersionComponent", function () {
      return _version_version_component__WEBPACK_IMPORTED_MODULE_1__["VersionComponent"];
    });

    var containers = [_version_version_component__WEBPACK_IMPORTED_MODULE_1__["VersionComponent"]];
    /***/
  },

  /***/
  "./src/modules/utility/containers/version/version.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/modules/utility/containers/version/version.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesUtilityContainersVersionVersionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy91dGlsaXR5L2NvbnRhaW5lcnMvdmVyc2lvbi92ZXJzaW9uLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/utility/containers/version/version.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/modules/utility/containers/version/version.component.ts ***!
    \*********************************************************************/

  /*! exports provided: VersionComponent */

  /***/
  function srcModulesUtilityContainersVersionVersionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VersionComponent", function () {
      return VersionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _modules_utility_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @modules/utility/services */
    "./src/modules/utility/services/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var VersionComponent = /*#__PURE__*/function () {
      function VersionComponent(utilityService) {
        _classCallCheck(this, VersionComponent);

        this.utilityService = utilityService;
      }

      _createClass(VersionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.utilityService.version$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (v) {
            return _this.version = v;
          });
        }
      }]);

      return VersionComponent;
    }();

    VersionComponent.ctorParameters = function () {
      return [{
        type: _modules_utility_services__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
      }];
    };

    VersionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-version',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./version.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/utility/containers/version/version.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./version.component.scss */
      "./src/modules/utility/containers/version/version.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_utility_services__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]])], VersionComponent);
    /***/
  },

  /***/
  "./src/modules/utility/guards/index.ts":
  /*!*********************************************!*\
    !*** ./src/modules/utility/guards/index.ts ***!
    \*********************************************/

  /*! exports provided: guards, UtilityGuard */

  /***/
  function srcModulesUtilityGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "guards", function () {
      return guards;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _utility_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./utility.guard */
    "./src/modules/utility/guards/utility.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UtilityGuard", function () {
      return _utility_guard__WEBPACK_IMPORTED_MODULE_1__["UtilityGuard"];
    });

    var guards = [_utility_guard__WEBPACK_IMPORTED_MODULE_1__["UtilityGuard"]];
    /***/
  },

  /***/
  "./src/modules/utility/guards/utility.guard.ts":
  /*!*****************************************************!*\
    !*** ./src/modules/utility/guards/utility.guard.ts ***!
    \*****************************************************/

  /*! exports provided: UtilityGuard */

  /***/
  function srcModulesUtilityGuardsUtilityGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilityGuard", function () {
      return UtilityGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UtilityGuard = /*#__PURE__*/function () {
      function UtilityGuard() {
        _classCallCheck(this, UtilityGuard);
      }

      _createClass(UtilityGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
      }]);

      return UtilityGuard;
    }();

    UtilityGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UtilityGuard);
    /***/
  },

  /***/
  "./src/modules/utility/services/index.ts":
  /*!***********************************************!*\
    !*** ./src/modules/utility/services/index.ts ***!
    \***********************************************/

  /*! exports provided: services, UtilityService */

  /***/
  function srcModulesUtilityServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "services", function () {
      return services;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./utility.service */
    "./src/modules/utility/services/utility.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
      return _utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"];
    });

    var services = [_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]];
    /***/
  },

  /***/
  "./src/modules/utility/services/utility.service.ts":
  /*!*********************************************************!*\
    !*** ./src/modules/utility/services/utility.service.ts ***!
    \*********************************************************/

  /*! exports provided: UtilityService */

  /***/
  function srcModulesUtilityServicesUtilityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
      return UtilityService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UtilityService = /*#__PURE__*/function () {
      function UtilityService(http) {
        _classCallCheck(this, UtilityService);

        this.http = http;
      }

      _createClass(UtilityService, [{
        key: "version$",
        get: function get() {
          return this.http.get('/assets/version', {
            responseType: 'text'
          });
        }
      }]);

      return UtilityService;
    }();

    UtilityService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    UtilityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], UtilityService);
    /***/
  },

  /***/
  "./src/modules/utility/utility-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/modules/utility/utility-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: ROUTES, UtilityRoutingModule */

  /***/
  function srcModulesUtilityUtilityRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilityRoutingModule", function () {
      return UtilityRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./utility.module */
    "./src/modules/utility/utility.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/utility/containers/index.ts");
    /* tslint:disable: ordered-imports*/

    /* Module */

    /* Containers */

    /* Routes */


    var ROUTES = [{
      path: '',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["VersionComponent"]
    }];

    var UtilityRoutingModule = function UtilityRoutingModule() {
      _classCallCheck(this, UtilityRoutingModule);
    };

    UtilityRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UtilityRoutingModule);
    /***/
  },

  /***/
  "./src/modules/utility/utility.module.ts":
  /*!***********************************************!*\
    !*** ./src/modules/utility/utility.module.ts ***!
    \***********************************************/

  /*! exports provided: UtilityModule */

  /***/
  function srcModulesUtilityUtilityModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilityModule", function () {
      return UtilityModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @common/app-common.module */
    "./src/modules/app-common/app-common.module.ts");
    /* harmony import */


    var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @modules/navigation/navigation.module */
    "./src/modules/navigation/navigation.module.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components */
    "./src/modules/utility/components/index.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/utility/containers/index.ts");
    /* harmony import */


    var _guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./guards */
    "./src/modules/utility/guards/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services */
    "./src/modules/utility/services/index.ts");
    /* tslint:disable: ordered-imports*/

    /* Modules */

    /* Components */

    /* Containers */

    /* Guards */

    /* Services */


    var UtilityModule = function UtilityModule() {
      _classCallCheck(this, UtilityModule);
    };

    UtilityModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"]],
      providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_10__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_9__["guards"])),
      declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_8__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_7__["components"])),
      exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_8__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_7__["components"]))
    })], UtilityModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-utility-utility-routing-module-es5.js.map