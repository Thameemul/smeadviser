function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-addnewquery-addnewquery-routing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/addnewquery/components/addnewquery/addnewquery.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/addnewquery/components/addnewquery/addnewquery.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAddnewqueryComponentsAddnewqueryAddnewqueryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row justify-content-center\">\n    <div class=\"col-lg-12\">\n        <div class=\"card shadow-lg border-0 rounded-lg mt-2\">\n            <div class=\"card-header\">\n                <h3 class=\"text-center font-weight-dark my-1\">Add new Query</h3>\n            </div>\n            <div class=\"card-body\">\n                <form #form=\"ngForm\"  (submit)=\"onSubmit(form)\">\n                    <div class=\"form-row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group \"><label class=\"medium mb-1 \">First Name</label>\n                                <input class=\"form-control py-4\" name=\"firstname\" #firstname=\"ngModel\"\n                                    [(ngModel)]=\"queryservice.formData.firstname\" placeholder=\"Enter first name\"\n                                    required /></div>\n                            <div *ngIf=\"firstname.invalid && firstname.touched\" class=\"validation-error\">This field is\n                                required</div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\"><label class=\"medium mb-1\">Last Name</label>\n                                <input class=\"form-control py-4\" name=\"lastname\" #lastname=\"ngModel\"\n                                    [(ngModel)]=\"queryservice.formData.lastname\" placeholder=\"Enter last name\"\n                                    required /></div>\n                            <div *ngIf=\"lastname.invalid && lastname.touched\" class=\"validation-error\">This field is\n                                required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\"><label class=\"medium mb-1\">Email</label>\n                                <input class=\"form-control py-4\" name=\"email\" #email=\"ngModel\"\n                                    [(ngModel)]=\"queryservice.formData.email\" type=\"email\" aria-describedby=\"emailHelp\"\n                                    placeholder=\"Enter email address\" required /></div>\n                            <div *ngIf=\"email.invalid && email.touched\" class=\"validation-error\">This field is required\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\"><label class=\"medium mb-1\">Phone No</label>\n                                <input class=\"form-control py-4\" name=\"phone\" #phone=\"ngModel\"\n                                    [(ngModel)]=\"queryservice.formData.phone\" placeholder=\"Enter Phone Number\"\n                                    required /></div>\n                            <div *ngIf=\"phone.invalid && phone.touched\" class=\"validation-error\">This field is required\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- <div class=\"form-row\">\n                        <div class=\"form-group col-md-12\" name=\"category\" #category=\"ngModel\"\n                            [(ngModel)]=\"postservice.formData.category\" >\n                            <div ngbDropdown class=\"d-inline-block\">\n                                <a class=\"btn btn-outline-primary\" id=\"dropdownBasic2\" ngbDropdownToggle>Category</a>\n                                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\n                                    <a ngbDropdownItem>Technical</a>\n                                    <a ngbDropdownItem>Domain</a>\n                                    <a ngbDropdownItem>Others</a>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"category.invalid && category.touched\" class=\"validation-error\">This field is\n                            required</div>\n                    </div> -->\n\n                    <div class=\"form-group\">\n                        <angular-editor name=\"querydesc\" #querydesc=\"ngModel\" [(ngModel)]=\"queryservice.formData.querydesc\"\n                            [config]=\"config\"></angular-editor>\n                        <div *ngIf=\"querydesc.invalid && querydesc.touched\" class=\"validation-error\">This field is\n                            required</div>\n                    </div>\n\n                    <div class=\"form-row\">\n                        <div class=\"col-md-6 form-group mt-4 mb-0 \">\n                            <a class=\"btn btn-primary \" (click)=\"resetForm()\">Reset</a>\n                        </div>\n                        <div class=\"col-md-6 form-group mt-4 mb-0\">\n                            <button type=\"submit\" [disabled]=\"form.invalid\"\n                                class=\"btn btn-success btn-block\"> Submit</button>\n                        </div>\n                    </div>\n\n                </form>\n            </div>\n\n        </div>\n    </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/addnewquery/containers/newquery/newquery.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/addnewquery/containers/newquery/newquery.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAddnewqueryContainersNewqueryNewqueryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard\n    ><sb-dashboard-head ></sb-dashboard-head>\n         <div class=\"card-body\"><sb-addnewquery ></sb-addnewquery></div>\n</sb-layout-dashboard>\n";
    /***/
  },

  /***/
  "./src/modules/addnewquery/addnewquery-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/modules/addnewquery/addnewquery-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: ROUTES, AddNewQueryRoutingModule */

  /***/
  function srcModulesAddnewqueryAddnewqueryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNewQueryRoutingModule", function () {
      return AddNewQueryRoutingModule;
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


    var _addnewquery_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addnewquery.module */
    "./src/modules/addnewquery/addnewquery.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/addnewquery/containers/index.ts");
    /* tslint:disable: ordered-imports*/

    /* Module */

    /* Containers */

    /* Routes */


    var ROUTES = [{
      path: '',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["NewQueryComponent"],
      data: {
        title: 'Add new Query',
        breadcrumbs: [{
          icon: 'book-open',
          text: 'addnewquery',
          link: '/addnewquery'
        }, {
          text: 'addnewquery',
          active: true
        }]
      }
    }];

    var AddNewQueryRoutingModule = function AddNewQueryRoutingModule() {
      _classCallCheck(this, AddNewQueryRoutingModule);
    };

    AddNewQueryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_addnewquery_module__WEBPACK_IMPORTED_MODULE_3__["AddNewQueryModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddNewQueryRoutingModule);
    /***/
  },

  /***/
  "./src/modules/addnewquery/addnewquery.module.ts":
  /*!*******************************************************!*\
    !*** ./src/modules/addnewquery/addnewquery.module.ts ***!
    \*******************************************************/

  /*! exports provided: AddNewQueryModule */

  /***/
  function srcModulesAddnewqueryAddnewqueryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNewQueryModule", function () {
      return AddNewQueryModule;
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
    "./src/modules/addnewquery/components/index.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/addnewquery/containers/index.ts");
    /* harmony import */


    var _directives__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./directives */
    "./src/modules/addnewquery/directives/index.ts");
    /* harmony import */


    var _guards__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./guards */
    "./src/modules/addnewquery/guards/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services */
    "./src/modules/addnewquery/services/index.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* tslint:disable: ordered-imports*/
    //  Firebase

    /* Modules */

    /* Components */

    /* Containers */

    /* Directives */

    /* Guards */

    /* Services */


    var AddNewQueryModule = function AddNewQueryModule() {
      _classCallCheck(this, AddNewQueryModule);
    };

    AddNewQueryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_11__["AppCommonModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditorModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_16__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_15__["guards"]), _toConsumableArray(_directives__WEBPACK_IMPORTED_MODULE_14__["directives"])),
      declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_13__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_12__["components"]), _toConsumableArray(_directives__WEBPACK_IMPORTED_MODULE_14__["directives"])),
      exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_13__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_12__["components"]))
    })], AddNewQueryModule);
    /***/
  },

  /***/
  "./src/modules/addnewquery/components/addnewquery/addnewquery.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/modules/addnewquery/components/addnewquery/addnewquery.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAddnewqueryComponentsAddnewqueryAddnewqueryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hZGRuZXdxdWVyeS9jb21wb25lbnRzL2FkZG5ld3F1ZXJ5L2FkZG5ld3F1ZXJ5LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/addnewquery/components/addnewquery/addnewquery.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/modules/addnewquery/components/addnewquery/addnewquery.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: AddNewQueryComponent */

  /***/
  function srcModulesAddnewqueryComponentsAddnewqueryAddnewqueryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNewQueryComponent", function () {
      return AddNewQueryComponent;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _services_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/query.service */
    "./src/modules/addnewquery/services/query.service.ts");

    var AddNewQueryComponent = /*#__PURE__*/function () {
      function AddNewQueryComponent(queryservice, firestore) {
        _classCallCheck(this, AddNewQueryComponent);

        this.queryservice = queryservice;
        this.firestore = firestore;
        this.htmlContent = '';
        this.config = {
          editable: true,
          spellcheck: true,
          height: '5rem',
          minHeight: '15rem',
          placeholder: 'Enter text here...',
          translate: 'no',
          defaultParagraphSeparator: 'p',
          defaultFontName: 'Arial'
        };
      }

      _createClass(AddNewQueryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resetForm();
        }
      }, {
        key: "resetForm",
        value: function resetForm(form) {
          if (form != null) {
            form.reset();
          }

          this.queryservice.formData = {
            id: '',
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            category: '',
            querydesc: ''
          };
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var data = form.value;
          this.firestore.collection('query').add(data);
          this.resetForm(form);
          alert('Query Submitted successfully');
        }
      }]);

      return AddNewQueryComponent;
    }();

    AddNewQueryComponent.ctorParameters = function () {
      return [{
        type: _services_query_service__WEBPACK_IMPORTED_MODULE_3__["QueryService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    AddNewQueryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-addnewquery',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./addnewquery.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/addnewquery/components/addnewquery/addnewquery.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./addnewquery.component.scss */
      "./src/modules/addnewquery/components/addnewquery/addnewquery.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_3__["QueryService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])], AddNewQueryComponent);
    /***/
  },

  /***/
  "./src/modules/addnewquery/components/index.ts":
  /*!*****************************************************!*\
    !*** ./src/modules/addnewquery/components/index.ts ***!
    \*****************************************************/

  /*! exports provided: components, AddNewQueryComponent */

  /***/
  function srcModulesAddnewqueryComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _addnewquery_addnewquery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./addnewquery/addnewquery.component */
    "./src/modules/addnewquery/components/addnewquery/addnewquery.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AddNewQueryComponent", function () {
      return _addnewquery_addnewquery_component__WEBPACK_IMPORTED_MODULE_1__["AddNewQueryComponent"];
    });

    var components = [_addnewquery_addnewquery_component__WEBPACK_IMPORTED_MODULE_1__["AddNewQueryComponent"]];
    /***/
  },

  /***/
  "./src/modules/addnewquery/containers/index.ts":
  /*!*****************************************************!*\
    !*** ./src/modules/addnewquery/containers/index.ts ***!
    \*****************************************************/

  /*! exports provided: containers, NewQueryComponent */

  /***/
  function srcModulesAddnewqueryContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _newquery_newquery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./newquery/newquery.component */
    "./src/modules/addnewquery/containers/newquery/newquery.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NewQueryComponent", function () {
      return _newquery_newquery_component__WEBPACK_IMPORTED_MODULE_1__["NewQueryComponent"];
    });

    var containers = [_newquery_newquery_component__WEBPACK_IMPORTED_MODULE_1__["NewQueryComponent"]];
    /***/
  },

  /***/
  "./src/modules/addnewquery/containers/newquery/newquery.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/modules/addnewquery/containers/newquery/newquery.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAddnewqueryContainersNewqueryNewqueryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hZGRuZXdxdWVyeS9jb250YWluZXJzL25ld3F1ZXJ5L25ld3F1ZXJ5LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/addnewquery/containers/newquery/newquery.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/modules/addnewquery/containers/newquery/newquery.component.ts ***!
    \***************************************************************************/

  /*! exports provided: NewQueryComponent */

  /***/
  function srcModulesAddnewqueryContainersNewqueryNewqueryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewQueryComponent", function () {
      return NewQueryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NewQueryComponent = /*#__PURE__*/function () {
      function NewQueryComponent() {
        _classCallCheck(this, NewQueryComponent);
      }

      _createClass(NewQueryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewQueryComponent;
    }();

    NewQueryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-newquery',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./newquery.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/addnewquery/containers/newquery/newquery.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./newquery.component.scss */
      "./src/modules/addnewquery/containers/newquery/newquery.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], NewQueryComponent);
    /***/
  },

  /***/
  "./src/modules/addnewquery/directives/index.ts":
  /*!*****************************************************!*\
    !*** ./src/modules/addnewquery/directives/index.ts ***!
    \*****************************************************/

  /*! exports provided: directives, SBSortableHeaderDirective */

  /***/
  function srcModulesAddnewqueryDirectivesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "directives", function () {
      return directives;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sortable.directive */
    "./src/modules/addnewquery/directives/sortable.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SBSortableHeaderDirective", function () {
      return _sortable_directive__WEBPACK_IMPORTED_MODULE_1__["SBSortableHeaderDirective"];
    });

    var directives = [_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["SBSortableHeaderDirective"]];
    /***/
  },

  /***/
  "./src/modules/addnewquery/directives/sortable.directive.ts":
  /*!******************************************************************!*\
    !*** ./src/modules/addnewquery/directives/sortable.directive.ts ***!
    \******************************************************************/

  /*! exports provided: SBSortableHeaderDirective */

  /***/
  function srcModulesAddnewqueryDirectivesSortableDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SBSortableHeaderDirective", function () {
      return SBSortableHeaderDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var _rotate = {
      asc: 'desc',
      desc: '',
      '': 'asc'
    };

    var SBSortableHeaderDirective = /*#__PURE__*/function () {
      function SBSortableHeaderDirective() {
        _classCallCheck(this, SBSortableHeaderDirective);

        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SBSortableHeaderDirective, [{
        key: "rotate",
        value: function rotate() {
          this.direction = _rotate[this.direction];
          this.sort.emit({
            column: this.sbSortable,
            direction: this.direction
          });
        }
      }, {
        key: "isAscending",
        get: function get() {
          return this.direction === 'asc';
        }
      }, {
        key: "isDescending",
        get: function get() {
          return this.direction === 'desc';
        }
      }]);

      return SBSortableHeaderDirective;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SBSortableHeaderDirective.prototype, "sbSortable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SBSortableHeaderDirective.prototype, "direction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SBSortableHeaderDirective.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.asc'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SBSortableHeaderDirective.prototype, "isAscending", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.desc'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SBSortableHeaderDirective.prototype, "isDescending", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], SBSortableHeaderDirective.prototype, "rotate", null);
    SBSortableHeaderDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'th[sbSortable]'
    })], SBSortableHeaderDirective);
    /***/
  },

  /***/
  "./src/modules/addnewquery/guards/addnewquery.guard.ts":
  /*!*************************************************************!*\
    !*** ./src/modules/addnewquery/guards/addnewquery.guard.ts ***!
    \*************************************************************/

  /*! exports provided: AddNewQueryGuard */

  /***/
  function srcModulesAddnewqueryGuardsAddnewqueryGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNewQueryGuard", function () {
      return AddNewQueryGuard;
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

    var AddNewQueryGuard = /*#__PURE__*/function () {
      function AddNewQueryGuard() {
        _classCallCheck(this, AddNewQueryGuard);
      }

      _createClass(AddNewQueryGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
      }]);

      return AddNewQueryGuard;
    }();

    AddNewQueryGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AddNewQueryGuard);
    /***/
  },

  /***/
  "./src/modules/addnewquery/guards/index.ts":
  /*!*************************************************!*\
    !*** ./src/modules/addnewquery/guards/index.ts ***!
    \*************************************************/

  /*! exports provided: guards, AddNewQueryGuard */

  /***/
  function srcModulesAddnewqueryGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _addnewquery_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./addnewquery.guard */
    "./src/modules/addnewquery/guards/addnewquery.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AddNewQueryGuard", function () {
      return _addnewquery_guard__WEBPACK_IMPORTED_MODULE_1__["AddNewQueryGuard"];
    });

    var guards = [_addnewquery_guard__WEBPACK_IMPORTED_MODULE_1__["AddNewQueryGuard"]];
    /***/
  },

  /***/
  "./src/modules/addnewquery/services/index.ts":
  /*!***************************************************!*\
    !*** ./src/modules/addnewquery/services/index.ts ***!
    \***************************************************/

  /*! exports provided: services, QueryService */

  /***/
  function srcModulesAddnewqueryServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./query.service */
    "./src/modules/addnewquery/services/query.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "QueryService", function () {
      return _query_service__WEBPACK_IMPORTED_MODULE_1__["QueryService"];
    });

    var services = [_query_service__WEBPACK_IMPORTED_MODULE_1__["QueryService"]];
    /***/
  },

  /***/
  "./src/modules/addnewquery/services/query.service.ts":
  /*!***********************************************************!*\
    !*** ./src/modules/addnewquery/services/query.service.ts ***!
    \***********************************************************/

  /*! exports provided: QueryService */

  /***/
  function srcModulesAddnewqueryServicesQueryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QueryService", function () {
      return QueryService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");

    var QueryService = /*#__PURE__*/function () {
      function QueryService(firestore) {
        _classCallCheck(this, QueryService);

        this.firestore = firestore;
      }

      _createClass(QueryService, [{
        key: "getQuery$",
        value: function getQuery$() {
          return this.firestore.collection('query').snapshotChanges();
        }
      }, {
        key: "createQuery",
        value: function createQuery(query) {
          return this.firestore.collection('query').add(query);
        }
      }, {
        key: "updateQuery",
        value: function updateQuery(query) {
          delete query.id;
          this.firestore.doc('query/' + query.id).update(query);
        }
      }, {
        key: "deleteQuery",
        value: function deleteQuery(queryId) {
          this.firestore.doc('query/' + queryId)["delete"]();
        }
      }]);

      return QueryService;
    }();

    QueryService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    QueryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])], QueryService);
    /***/
  }
}]);
//# sourceMappingURL=modules-addnewquery-addnewquery-routing-module-es5.js.map