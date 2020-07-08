function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-help-help-routing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/help/components/help/help.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/help/components/help/help.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesHelpComponentsHelpHelpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card-header\">\r\n    <h3>Frequently Asked Questions<a class=\"btn btn-primary float-right\" routerLink=\"/contact\">Contact</a></h3>\r\n</div>\r\n\r\n<ngb-accordion #acc=\"ngbAccordion\" >\r\n<ngb-panel *ngFor=\"let help of helps | async; let indexOfElement = index;\" >\r\n  <ng-template ngbPanelHeader>\r\n      <button class=\"btn btn-link\" ngbPanelToggle>\r\n          <span>&#9733; <b> {{help.title}}</b></span>\r\n      </button>\r\n  </ng-template>\r\n\r\n<ng-template ngbPanelContent>\r\n  <div [innerHTML]=\"help.helpdesc\"></div>\r\n</ng-template>\r\n</ngb-panel>\r\n</ngb-accordion>\r\n<div class=\"d-flex justify-content-between p-2\">\r\n<ngb-pagination [collectionSize]=\"10\" page=\"1\" [pageSize]=\"10\"></ngb-pagination>\r\n<select class=\"custom-select\"\r\n    style=\"width: auto;\" name=\"pageSize\">\r\n    <option [ngValue]=\"10\" [selected]=\"true\">10 items per page</option>\r\n    <option [ngValue]=\"30\">30 items per page</option>\r\n    <option [ngValue]=\"50\">50 items per page</option>\r\n</select>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/help/containers/helpme/helpme.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/help/containers/helpme/helpme.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesHelpContainersHelpmeHelpmeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard>\n    <sb-dashboard-head ></sb-dashboard-head>\n    <sb-help></sb-help>\n</sb-layout-dashboard>\n";
    /***/
  },

  /***/
  "./src/modules/help/components/help/help.component.scss":
  /*!**************************************************************!*\
    !*** ./src/modules/help/components/help/help.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesHelpComponentsHelpHelpComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9oZWxwL2NvbXBvbmVudHMvaGVscC9oZWxwLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/help/components/help/help.component.ts":
  /*!************************************************************!*\
    !*** ./src/modules/help/components/help/help.component.ts ***!
    \************************************************************/

  /*! exports provided: HelpComponent */

  /***/
  function srcModulesHelpComponentsHelpHelpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpComponent", function () {
      return HelpComponent;
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


    var _services_help_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/help.service */
    "./src/modules/help/services/help.service.ts");

    var HelpComponent = /*#__PURE__*/function () {
      function HelpComponent(helpService) {
        _classCallCheck(this, HelpComponent);

        this.helpService = helpService;
      }

      _createClass(HelpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.helps = this.helpService.getHelps();
        }
      }]);

      return HelpComponent;
    }();

    HelpComponent.ctorParameters = function () {
      return [{
        type: _services_help_service__WEBPACK_IMPORTED_MODULE_2__["HelpService"]
      }];
    };

    HelpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-help',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./help.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/help/components/help/help.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./help.component.scss */
      "./src/modules/help/components/help/help.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_help_service__WEBPACK_IMPORTED_MODULE_2__["HelpService"]])], HelpComponent);
    /***/
  },

  /***/
  "./src/modules/help/components/index.ts":
  /*!**********************************************!*\
    !*** ./src/modules/help/components/index.ts ***!
    \**********************************************/

  /*! exports provided: components, HelpComponent */

  /***/
  function srcModulesHelpComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _help_help_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./help/help.component */
    "./src/modules/help/components/help/help.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HelpComponent", function () {
      return _help_help_component__WEBPACK_IMPORTED_MODULE_1__["HelpComponent"];
    });

    var components = [_help_help_component__WEBPACK_IMPORTED_MODULE_1__["HelpComponent"]];
    /***/
  },

  /***/
  "./src/modules/help/containers/helpme/helpme.component.scss":
  /*!******************************************************************!*\
    !*** ./src/modules/help/containers/helpme/helpme.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesHelpContainersHelpmeHelpmeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9oZWxwL2NvbnRhaW5lcnMvaGVscG1lL2hlbHBtZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/help/containers/helpme/helpme.component.ts":
  /*!****************************************************************!*\
    !*** ./src/modules/help/containers/helpme/helpme.component.ts ***!
    \****************************************************************/

  /*! exports provided: HelpMeComponent */

  /***/
  function srcModulesHelpContainersHelpmeHelpmeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpMeComponent", function () {
      return HelpMeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HelpMeComponent = /*#__PURE__*/function () {
      function HelpMeComponent() {
        _classCallCheck(this, HelpMeComponent);
      }

      _createClass(HelpMeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HelpMeComponent;
    }();

    HelpMeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-helpme',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./helpme.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/help/containers/helpme/helpme.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./helpme.component.scss */
      "./src/modules/help/containers/helpme/helpme.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], HelpMeComponent);
    /***/
  },

  /***/
  "./src/modules/help/containers/index.ts":
  /*!**********************************************!*\
    !*** ./src/modules/help/containers/index.ts ***!
    \**********************************************/

  /*! exports provided: containers, HelpMeComponent */

  /***/
  function srcModulesHelpContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _helpme_helpme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./helpme/helpme.component */
    "./src/modules/help/containers/helpme/helpme.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HelpMeComponent", function () {
      return _helpme_helpme_component__WEBPACK_IMPORTED_MODULE_1__["HelpMeComponent"];
    });

    var containers = [_helpme_helpme_component__WEBPACK_IMPORTED_MODULE_1__["HelpMeComponent"]];
    /***/
  },

  /***/
  "./src/modules/help/help-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/modules/help/help-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: ROUTES, HelpRoutingModule */

  /***/
  function srcModulesHelpHelpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpRoutingModule", function () {
      return HelpRoutingModule;
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


    var _help_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./help.module */
    "./src/modules/help/help.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/help/containers/index.ts");
    /* tslint:disable: ordered-imports*/

    /* Module */

    /* Containers */

    /* Routes */


    var ROUTES = [{
      path: '',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["HelpMeComponent"],
      data: {
        title: 'Help - SME Adviser',
        breadcrumbs: [{
          icon: 'book-open',
          text: 'help',
          link: '/help'
        }, {
          text: 'help',
          active: true
        }]
      }
    }];

    var HelpRoutingModule = function HelpRoutingModule() {
      _classCallCheck(this, HelpRoutingModule);
    };

    HelpRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_help_module__WEBPACK_IMPORTED_MODULE_3__["HelpModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HelpRoutingModule);
    /***/
  },

  /***/
  "./src/modules/help/help.module.ts":
  /*!*****************************************!*\
    !*** ./src/modules/help/help.module.ts ***!
    \*****************************************/

  /*! exports provided: HelpModule */

  /***/
  function srcModulesHelpHelpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpModule", function () {
      return HelpModule;
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
    "./src/modules/help/components/index.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/help/containers/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services */
    "./src/modules/help/services/index.ts");
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


    var HelpModule = function HelpModule() {
      _classCallCheck(this, HelpModule);
    };

    HelpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_11__["AppCommonModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditorModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_14__["services"])),
      declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_13__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_12__["components"])),
      exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_13__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_12__["components"]))
    })], HelpModule);
    /***/
  },

  /***/
  "./src/modules/help/services/index.ts":
  /*!********************************************!*\
    !*** ./src/modules/help/services/index.ts ***!
    \********************************************/

  /*! exports provided: services, HelpService */

  /***/
  function srcModulesHelpServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _help_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./help.service */
    "./src/modules/help/services/help.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HelpService", function () {
      return _help_service__WEBPACK_IMPORTED_MODULE_1__["HelpService"];
    });

    var services = [_help_service__WEBPACK_IMPORTED_MODULE_1__["HelpService"]];
    /***/
  }
}]);
//# sourceMappingURL=modules-help-help-routing-module-es5.js.map