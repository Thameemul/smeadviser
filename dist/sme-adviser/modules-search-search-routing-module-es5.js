function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-search-search-routing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/search/components/search/search.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/search/components/search/search.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesSearchComponentsSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row justify-content-center\">\n    <div class=\"col-lg-12\">\n        <div class=\"card shadow-lg border-0 rounded-lg mt-2\">\n            <div class=\"card-header\">\n                <h3 class=\"text-center font-weight-dark my-1\">Search Results</h3>\n                <!-- <h6 class=\"text-center font-weight-dark my-1\">Below you will see everything we could locate for your search of <h5>\"{{searchWord}}\"</h5></h6> -->\n                <h6 class=\"text-center\">Below you will see everything we could locate for your search word\"</h6>\n            </div>\n\n            <ngb-accordion #acc=\"ngbAccordion\">\n                <ngb-panel *ngFor=\"let query of queries | async; let indexOfElement = index;\">\n                    <ng-template ngbPanelHeader>\n                        <button class=\"btn btn-link\" ngbPanelToggle>\n                            <span>&#9733; <b> {{query.title}}</b></span>\n                        </button>\n                    </ng-template>\n\n                    <ng-template ngbPanelContent>\n                        <div [innerHTML]=\"query.querydesc\"></div>\n                    </ng-template>\n                </ngb-panel>\n            </ngb-accordion>\n            <div class=\"d-flex justify-content-between p-2\">\n                <ngb-pagination [collectionSize]=\"10\" page=\"1\" [pageSize]=\"10\"> </ngb-pagination>\n                <select class=\"custom-select\" style=\"width: auto;\" name=\"pageSize\">\n                    <option [ngValue]=\"10\" [selected]=\"true\">10 items per page</option>\n                    <option [ngValue]=\"30\">30 items per page</option>\n                    <option [ngValue]=\"50\">50 items per page</option>\n                </select>\n            </div>\n            <div class=\"card-body\">\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/search/containers/searchresults/searchresults.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/search/containers/searchresults/searchresults.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesSearchContainersSearchresultsSearchresultsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard>\n    <sb-dashboard-head [hideBreadcrumbs]=\"false\"></sb-dashboard-head>\n    <sb-breadcrumbs *ngIf=\"!hideBreadcrumbs\"></sb-breadcrumbs>\n     <sb-search></sb-search>\n</sb-layout-dashboard>\n";
    /***/
  },

  /***/
  "./src/modules/search/components/index.ts":
  /*!************************************************!*\
    !*** ./src/modules/search/components/index.ts ***!
    \************************************************/

  /*! exports provided: components, SearchComponent */

  /***/
  function srcModulesSearchComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/modules/search/components/search/search.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return _search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"];
    });

    var components = [_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]];
    /***/
  },

  /***/
  "./src/modules/search/components/search/search.component.scss":
  /*!********************************************************************!*\
    !*** ./src/modules/search/components/search/search.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesSearchComponentsSearchSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zZWFyY2gvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/search/components/search/search.component.ts":
  /*!******************************************************************!*\
    !*** ./src/modules/search/components/search/search.component.ts ***!
    \******************************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcModulesSearchComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
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


    var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/search.service */
    "./src/modules/search/services/search.service.ts");

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent(searchService) {
        _classCallCheck(this, SearchComponent);

        this.searchService = searchService;
        this.searchWord = 'credit card';
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.queries = this.searchService.getSearchResults();
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ctorParameters = function () {
      return [{
        type: _services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]
      }];
    };

    SearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-search',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/search/components/search/search.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./search.component.scss */
      "./src/modules/search/components/search/search.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]])], SearchComponent);
    /***/
  },

  /***/
  "./src/modules/search/containers/index.ts":
  /*!************************************************!*\
    !*** ./src/modules/search/containers/index.ts ***!
    \************************************************/

  /*! exports provided: containers, SearchResultsComponent */

  /***/
  function srcModulesSearchContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./searchresults/searchresults.component */
    "./src/modules/search/containers/searchresults/searchresults.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function () {
      return _searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_1__["SearchResultsComponent"];
    });

    var containers = [_searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_1__["SearchResultsComponent"]];
    /***/
  },

  /***/
  "./src/modules/search/containers/searchresults/searchresults.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/modules/search/containers/searchresults/searchresults.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesSearchContainersSearchresultsSearchresultsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zZWFyY2gvY29udGFpbmVycy9zZWFyY2hyZXN1bHRzL3NlYXJjaHJlc3VsdHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/search/containers/searchresults/searchresults.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/modules/search/containers/searchresults/searchresults.component.ts ***!
    \********************************************************************************/

  /*! exports provided: SearchResultsComponent */

  /***/
  function srcModulesSearchContainersSearchresultsSearchresultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function () {
      return SearchResultsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SearchResultsComponent = /*#__PURE__*/function () {
      function SearchResultsComponent() {
        _classCallCheck(this, SearchResultsComponent);
      }

      _createClass(SearchResultsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchResultsComponent;
    }();

    SearchResultsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-searchresults',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./searchresults.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/search/containers/searchresults/searchresults.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./searchresults.component.scss */
      "./src/modules/search/containers/searchresults/searchresults.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SearchResultsComponent);
    /***/
  },

  /***/
  "./src/modules/search/search-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/modules/search/search-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ROUTES, SearchRoutingModule */

  /***/
  function srcModulesSearchSearchRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function () {
      return SearchRoutingModule;
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


    var _search_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search.module */
    "./src/modules/search/search.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/search/containers/index.ts");
    /* tslint:disable: ordered-imports*/

    /* Module */

    /* Containers */

    /* Routes */


    var ROUTES = [{
      path: '',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["SearchResultsComponent"],
      data: {
        title: 'Search Results',
        breadcrumbs: [{
          icon: 'book-open',
          text: 'search',
          link: '/search'
        }, {
          text: 'search',
          active: true
        }]
      }
    }];

    var SearchRoutingModule = function SearchRoutingModule() {
      _classCallCheck(this, SearchRoutingModule);
    };

    SearchRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_search_module__WEBPACK_IMPORTED_MODULE_3__["SearchModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SearchRoutingModule);
    /***/
  },

  /***/
  "./src/modules/search/search.module.ts":
  /*!*********************************************!*\
    !*** ./src/modules/search/search.module.ts ***!
    \*********************************************/

  /*! exports provided: SearchModule */

  /***/
  function srcModulesSearchSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchModule", function () {
      return SearchModule;
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
    "./src/modules/search/components/index.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/search/containers/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services */
    "./src/modules/search/services/index.ts");
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


    var SearchModule = function SearchModule() {
      _classCallCheck(this, SearchModule);
    };

    SearchModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_11__["AppCommonModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditorModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_14__["services"])),
      declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_13__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_12__["components"])),
      exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_13__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_12__["components"]))
    })], SearchModule);
    /***/
  },

  /***/
  "./src/modules/search/services/index.ts":
  /*!**********************************************!*\
    !*** ./src/modules/search/services/index.ts ***!
    \**********************************************/

  /*! exports provided: services, SearchService */

  /***/
  function srcModulesSearchServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./search.service */
    "./src/modules/search/services/search.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SearchService", function () {
      return _search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"];
    });

    var services = [_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]];
    /***/
  },

  /***/
  "./src/modules/search/services/search.service.ts":
  /*!*******************************************************!*\
    !*** ./src/modules/search/services/search.service.ts ***!
    \*******************************************************/

  /*! exports provided: SearchService */

  /***/
  function srcModulesSearchServicesSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchService", function () {
      return SearchService;
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


    var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SearchService = /*#__PURE__*/function () {
      function SearchService() {
        _classCallCheck(this, SearchService);
      }

      _createClass(SearchService, [{
        key: "getSearchResults",
        value: function getSearchResults() {
          var o = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var t = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('query').where('category', '<=', 'cal').get().then(function (querySnapshot) {
              var queries = [];
              querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                queries.push(doc.data()); // console.log(doc.id, ' => ', doc.data());
              });
              observer.next(queries);
            });
          });
          return o;
        }
      }]);

      return SearchService;
    }();

    SearchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SearchService);
    /***/
  }
}]);
//# sourceMappingURL=modules-search-search-routing-module-es5.js.map