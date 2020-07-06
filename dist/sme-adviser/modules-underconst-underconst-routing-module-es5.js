function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-underconst-underconst-routing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/underconst/components/underconst/underconst.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/underconst/components/underconst/underconst.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesUnderconstComponentsUnderconstUnderconstComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row justify-content-center\">\n    <div class=\"col-lg-12\">\n        <div class=\"card shadow-lg border-0 rounded-lg mt-2\">\n            <div class=\"card-header\">\n                <img src=\"../../../../assets/img/page underconstruction.jpg\" class=\"img-rounded\" style=\"width:100%\" alt=\"Page under construction\">\n            </div>\n            <div class=\"card-body\">\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/underconst/containers/underconstruction/underconstruction.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/underconst/containers/underconstruction/underconstruction.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesUnderconstContainersUnderconstructionUnderconstructionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard>\n    <sb-dashboard-head ></sb-dashboard-head>\n    <sb-underconst></sb-underconst>\n</sb-layout-dashboard>\n";
    /***/
  },

  /***/
  "./src/modules/underconst/components/index.ts":
  /*!****************************************************!*\
    !*** ./src/modules/underconst/components/index.ts ***!
    \****************************************************/

  /*! exports provided: components, UnderConstComponent */

  /***/
  function srcModulesUnderconstComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
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
    /* harmony import */


    var _underconst_underconst_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./underconst/underconst.component */
    "./src/modules/underconst/components/underconst/underconst.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UnderConstComponent", function () {
      return _underconst_underconst_component__WEBPACK_IMPORTED_MODULE_1__["UnderConstComponent"];
    });

    var components = [_underconst_underconst_component__WEBPACK_IMPORTED_MODULE_1__["UnderConstComponent"]];
    /***/
  },

  /***/
  "./src/modules/underconst/components/underconst/underconst.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/modules/underconst/components/underconst/underconst.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesUnderconstComponentsUnderconstUnderconstComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy91bmRlcmNvbnN0L2NvbXBvbmVudHMvdW5kZXJjb25zdC91bmRlcmNvbnN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/underconst/components/underconst/underconst.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/modules/underconst/components/underconst/underconst.component.ts ***!
    \******************************************************************************/

  /*! exports provided: UnderConstComponent */

  /***/
  function srcModulesUnderconstComponentsUnderconstUnderconstComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnderConstComponent", function () {
      return UnderConstComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UnderConstComponent = /*#__PURE__*/function () {
      function UnderConstComponent() {
        _classCallCheck(this, UnderConstComponent);
      }

      _createClass(UnderConstComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UnderConstComponent;
    }();

    UnderConstComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-underconst',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./underconst.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/underconst/components/underconst/underconst.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./underconst.component.scss */
      "./src/modules/underconst/components/underconst/underconst.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], UnderConstComponent);
    /***/
  },

  /***/
  "./src/modules/underconst/containers/index.ts":
  /*!****************************************************!*\
    !*** ./src/modules/underconst/containers/index.ts ***!
    \****************************************************/

  /*! exports provided: containers, UnderConstructionComponent */

  /***/
  function srcModulesUnderconstContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _underconstruction_underconstruction_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./underconstruction/underconstruction.component */
    "./src/modules/underconst/containers/underconstruction/underconstruction.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UnderConstructionComponent", function () {
      return _underconstruction_underconstruction_component__WEBPACK_IMPORTED_MODULE_1__["UnderConstructionComponent"];
    });

    var containers = [_underconstruction_underconstruction_component__WEBPACK_IMPORTED_MODULE_1__["UnderConstructionComponent"]];
    /***/
  },

  /***/
  "./src/modules/underconst/containers/underconstruction/underconstruction.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/modules/underconst/containers/underconstruction/underconstruction.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesUnderconstContainersUnderconstructionUnderconstructionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy91bmRlcmNvbnN0L2NvbnRhaW5lcnMvdW5kZXJjb25zdHJ1Y3Rpb24vdW5kZXJjb25zdHJ1Y3Rpb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/underconst/containers/underconstruction/underconstruction.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/modules/underconst/containers/underconstruction/underconstruction.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: UnderConstructionComponent */

  /***/
  function srcModulesUnderconstContainersUnderconstructionUnderconstructionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnderConstructionComponent", function () {
      return UnderConstructionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UnderConstructionComponent = /*#__PURE__*/function () {
      function UnderConstructionComponent() {
        _classCallCheck(this, UnderConstructionComponent);
      }

      _createClass(UnderConstructionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UnderConstructionComponent;
    }();

    UnderConstructionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-underconstruction',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./underconstruction.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/underconst/containers/underconstruction/underconstruction.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./underconstruction.component.scss */
      "./src/modules/underconst/containers/underconstruction/underconstruction.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], UnderConstructionComponent);
    /***/
  },

  /***/
  "./src/modules/underconst/services/index.ts":
  /*!**************************************************!*\
    !*** ./src/modules/underconst/services/index.ts ***!
    \**************************************************/

  /*! exports provided: services, UnderConstService */

  /***/
  function srcModulesUnderconstServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _underconst_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./underconst.service */
    "./src/modules/underconst/services/underconst.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UnderConstService", function () {
      return _underconst_service__WEBPACK_IMPORTED_MODULE_1__["UnderConstService"];
    });

    var services = [_underconst_service__WEBPACK_IMPORTED_MODULE_1__["UnderConstService"]];
    /***/
  },

  /***/
  "./src/modules/underconst/services/underconst.service.ts":
  /*!***************************************************************!*\
    !*** ./src/modules/underconst/services/underconst.service.ts ***!
    \***************************************************************/

  /*! exports provided: UnderConstService */

  /***/
  function srcModulesUnderconstServicesUnderconstServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnderConstService", function () {
      return UnderConstService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UnderConstService = function UnderConstService() {
      _classCallCheck(this, UnderConstService);
    };

    UnderConstService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UnderConstService);
    /***/
  },

  /***/
  "./src/modules/underconst/underconst-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/modules/underconst/underconst-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ROUTES, UnderConstRoutingModule */

  /***/
  function srcModulesUnderconstUnderconstRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnderConstRoutingModule", function () {
      return UnderConstRoutingModule;
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


    var _underconst_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./underconst.module */
    "./src/modules/underconst/underconst.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/underconst/containers/index.ts");
    /* tslint:disable: ordered-imports*/

    /* Module */

    /* Containers */

    /* Routes */


    var ROUTES = [{
      path: '',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["UnderConstructionComponent"],
      data: {
        title: 'Under Construction',
        breadcrumbs: [{
          icon: 'book-open',
          text: 'underconst',
          link: '/underconst'
        }, {
          text: 'underconst',
          active: true
        }]
      }
    }];

    var UnderConstRoutingModule = function UnderConstRoutingModule() {
      _classCallCheck(this, UnderConstRoutingModule);
    };

    UnderConstRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_underconst_module__WEBPACK_IMPORTED_MODULE_3__["UnderConstModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UnderConstRoutingModule);
    /***/
  },

  /***/
  "./src/modules/underconst/underconst.module.ts":
  /*!*****************************************************!*\
    !*** ./src/modules/underconst/underconst.module.ts ***!
    \*****************************************************/

  /*! exports provided: UnderConstModule */

  /***/
  function srcModulesUnderconstUnderconstModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnderConstModule", function () {
      return UnderConstModule;
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


    var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @kolkov/angular-editor */
    "./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js");
    /* harmony import */


    var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @modules/navigation/navigation.module */
    "./src/modules/navigation/navigation.module.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _common_app_common_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @common/app-common.module */
    "./src/modules/app-common/app-common.module.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components */
    "./src/modules/underconst/components/index.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/underconst/containers/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services */
    "./src/modules/underconst/services/index.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* tslint:disable: ordered-imports*/
    //  Firebase

    /* Modules */

    /* Components */

    /* Containers */

    /* Directives */
    // import * as searchDirectives from './directives';

    /* Guards */

    /* Services */


    var UnderConstModule = function UnderConstModule() {
      _classCallCheck(this, UnderConstModule);
    };

    UnderConstModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_11__["AppCommonModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditorModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_14__["services"])),
      declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_13__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_12__["components"])),
      exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_13__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_12__["components"]))
    })], UnderConstModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-underconst-underconst-routing-module-es5.js.map