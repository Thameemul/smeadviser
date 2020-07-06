function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-dashboard-dashboard-routing-module~modules-tables-tables-routing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/tables/components/ng-bootstrap-table/ng-bootstrap-table.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/tables/components/ng-bootstrap-table/ng-bootstrap-table.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesTablesComponentsNgBootstrapTableNgBootstrapTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form>\n    <div class=\"form-group form-inline\">Full text search: <input class=\"form-control ml-2\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"countryService.searchTerm\" /><span class=\"ml-3\" *ngIf=\"countryService.loading$ | async\">Loading...</span></div>\n    <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\" sbSortable=\"name\" (sort)=\"onSort($event)\"><span>Country</span><sb-sort-icon *ngIf='sortedColumn === \"name\"' [direction]=\"sortedDirection\"></sb-sort-icon></th>\n                <th scope=\"col\" sbSortable=\"area\" (sort)=\"onSort($event)\"><span>Area</span><sb-sort-icon *ngIf='sortedColumn === \"area\"' [direction]=\"sortedDirection\"></sb-sort-icon></th>\n                <th scope=\"col\" sbSortable=\"population\" (sort)=\"onSort($event)\"><span>Population</span><sb-sort-icon *ngIf='sortedColumn === \"population\"' [direction]=\"sortedDirection\"></sb-sort-icon></th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let country of countries$ | async\">\n                <th scope=\"row\">{{ country.id }}</th>\n                <td><img class=\"mr-2\" [src]=\"'https://upload.wikimedia.org/wikipedia/commons/' + country.flag\" style=\"width: 20px;\" /><ngb-highlight [result]=\"country.name\" [term]=\"countryService.searchTerm\"></ngb-highlight></td>\n                <td><ngb-highlight [result]=\"country.area | number\" [term]=\"countryService.searchTerm\"></ngb-highlight></td>\n                <td><ngb-highlight [result]=\"country.population | number\" [term]=\"countryService.searchTerm\"></ngb-highlight></td>\n            </tr>\n        </tbody>\n    </table>\n    <div class=\"d-flex justify-content-between p-2\">\n        <ngb-pagination [collectionSize]=\"total$ | async\" [(page)]=\"countryService.page\" [pageSize]=\"countryService.pageSize\"></ngb-pagination\n        ><select class=\"custom-select\" style=\"width: auto;\" name=\"pageSize\" [(ngModel)]=\"countryService.pageSize\"\n            ><option [ngValue]=\"2\">2 items per page</option\n            ><option [ngValue]=\"4\">4 items per page</option\n            ><option [ngValue]=\"6\">6 items per page</option></select\n        >\n    </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/tables/components/sort-icon/sort-icon.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/tables/components/sort-icon/sort-icon.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesTablesComponentsSortIconSortIconComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf='direction === \"asc\"'><fa-icon class=\"sort-icon\" [icon]='[\"fas\", \"chevron-up\"]'></fa-icon></ng-container><ng-container *ngIf='direction === \"desc\"'><fa-icon class=\"sort-icon\" [icon]='[\"fas\", \"chevron-down\"]'></fa-icon></ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/tables/containers/tables/tables.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/tables/containers/tables/tables.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesTablesContainersTablesTablesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard\n    ><sb-dashboard-head title=\"Tables\" [hideBreadcrumbs]=\"false\"></sb-dashboard-head\n    ><sb-card\n        ><div class=\"card-body\">The table below is adapted from ng-bootsrap. For more information, please visit the <a target=\"_blank\" href=\"https://ng-bootstrap.github.io/#/components/table/overview\">ng-bootstrap table documentation</a>.</div></sb-card\n    ><sb-card\n        ><div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>DataTable Example</div>\n        <div class=\"card-body\"><sb-ng-bootstrap-table [pageSize]=\"6\"></sb-ng-bootstrap-table></div></sb-card\n></sb-layout-dashboard>\n";
    /***/
  },

  /***/
  "./src/modules/tables/components/index.ts":
  /*!************************************************!*\
    !*** ./src/modules/tables/components/index.ts ***!
    \************************************************/

  /*! exports provided: components, NgBootstrapTableComponent, SortIconComponent */

  /***/
  function srcModulesTablesComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _ng_bootstrap_table_ng_bootstrap_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ng-bootstrap-table/ng-bootstrap-table.component */
    "./src/modules/tables/components/ng-bootstrap-table/ng-bootstrap-table.component.ts");
    /* harmony import */


    var _sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sort-icon/sort-icon.component */
    "./src/modules/tables/components/sort-icon/sort-icon.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgBootstrapTableComponent", function () {
      return _ng_bootstrap_table_ng_bootstrap_table_component__WEBPACK_IMPORTED_MODULE_1__["NgBootstrapTableComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SortIconComponent", function () {
      return _sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_2__["SortIconComponent"];
    });

    var components = [_ng_bootstrap_table_ng_bootstrap_table_component__WEBPACK_IMPORTED_MODULE_1__["NgBootstrapTableComponent"], _sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_2__["SortIconComponent"]];
    /***/
  },

  /***/
  "./src/modules/tables/components/ng-bootstrap-table/ng-bootstrap-table.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/modules/tables/components/ng-bootstrap-table/ng-bootstrap-table.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesTablesComponentsNgBootstrapTableNgBootstrapTableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "thead > tr > th {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL3RhYmxlcy9jb21wb25lbnRzL25nLWJvb3RzdHJhcC10YWJsZS9EOlxcWWFzbWluX0FuZ3VsYXJfV29ya3NwYWNlXFxTTUUtQWR2aXNlci1tYXN0ZXIvc3JjXFxtb2R1bGVzXFx0YWJsZXNcXGNvbXBvbmVudHNcXG5nLWJvb3RzdHJhcC10YWJsZVxcbmctYm9vdHN0cmFwLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL21vZHVsZXMvdGFibGVzL2NvbXBvbmVudHMvbmctYm9vdHN0cmFwLXRhYmxlL25nLWJvb3RzdHJhcC10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7QUNESiIsImZpbGUiOiJzcmMvbW9kdWxlcy90YWJsZXMvY29tcG9uZW50cy9uZy1ib290c3RyYXAtdGFibGUvbmctYm9vdHN0cmFwLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcblxudGhlYWQgPiB0ciA+IHRoIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59IiwidGhlYWQgPiB0ciA+IHRoIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/modules/tables/components/ng-bootstrap-table/ng-bootstrap-table.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/modules/tables/components/ng-bootstrap-table/ng-bootstrap-table.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: NgBootstrapTableComponent */

  /***/
  function srcModulesTablesComponentsNgBootstrapTableNgBootstrapTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgBootstrapTableComponent", function () {
      return NgBootstrapTableComponent;
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


    var _modules_tables_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @modules/tables/directives */
    "./src/modules/tables/directives/index.ts");
    /* harmony import */


    var _modules_tables_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @modules/tables/services */
    "./src/modules/tables/services/index.ts");

    var NgBootstrapTableComponent = /*#__PURE__*/function () {
      function NgBootstrapTableComponent(countryService, changeDetectorRef) {
        _classCallCheck(this, NgBootstrapTableComponent);

        this.countryService = countryService;
        this.changeDetectorRef = changeDetectorRef;
        this.pageSize = 4;
      }

      _createClass(NgBootstrapTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.countryService.pageSize = this.pageSize;
          this.countries$ = this.countryService.countries$;
          this.total$ = this.countryService.total$;
        }
      }, {
        key: "onSort",
        value: function onSort(_ref) {
          var column = _ref.column,
              direction = _ref.direction;
          this.sortedColumn = column;
          this.sortedDirection = direction;
          this.countryService.sortColumn = column;
          this.countryService.sortDirection = direction;
          this.changeDetectorRef.detectChanges();
        }
      }]);

      return NgBootstrapTableComponent;
    }();

    NgBootstrapTableComponent.ctorParameters = function () {
      return [{
        type: _modules_tables_services__WEBPACK_IMPORTED_MODULE_3__["CountryService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NgBootstrapTableComponent.prototype, "pageSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_modules_tables_directives__WEBPACK_IMPORTED_MODULE_2__["SBSortableHeaderDirective"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], NgBootstrapTableComponent.prototype, "headers", void 0);
    NgBootstrapTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-ng-bootstrap-table',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ng-bootstrap-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/tables/components/ng-bootstrap-table/ng-bootstrap-table.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ng-bootstrap-table.component.scss */
      "./src/modules/tables/components/ng-bootstrap-table/ng-bootstrap-table.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_tables_services__WEBPACK_IMPORTED_MODULE_3__["CountryService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], NgBootstrapTableComponent);
    /***/
  },

  /***/
  "./src/modules/tables/components/sort-icon/sort-icon.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/modules/tables/components/sort-icon/sort-icon.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesTablesComponentsSortIconSortIconComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sort-icon {\n  height: 0.9rem;\n  width: 0.9rem;\n  margin-left: 0.25rem;\n  margin-top: -0.125rem;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL3RhYmxlcy9jb21wb25lbnRzL3NvcnQtaWNvbi9EOlxcWWFzbWluX0FuZ3VsYXJfV29ya3NwYWNlXFxTTUUtQWR2aXNlci1tYXN0ZXIvc3JjXFxtb2R1bGVzXFx0YWJsZXNcXGNvbXBvbmVudHNcXHNvcnQtaWNvblxcc29ydC1pY29uLmNvbXBvbmVudC5zY3NzIiwic3JjL21vZHVsZXMvdGFibGVzL2NvbXBvbmVudHMvc29ydC1pY29uL3NvcnQtaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDREoiLCJmaWxlIjoic3JjL21vZHVsZXMvdGFibGVzL2NvbXBvbmVudHMvc29ydC1pY29uL3NvcnQtaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XG5cbi5zb3J0LWljb24ge1xuICAgIGhlaWdodDogMC45cmVtO1xuICAgIHdpZHRoOiAwLjlyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG4gICAgbWFyZ2luLXRvcDogLTAuMTI1cmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4iLCIuc29ydC1pY29uIHtcbiAgaGVpZ2h0OiAwLjlyZW07XG4gIHdpZHRoOiAwLjlyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICBtYXJnaW4tdG9wOiAtMC4xMjVyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/modules/tables/components/sort-icon/sort-icon.component.ts":
  /*!************************************************************************!*\
    !*** ./src/modules/tables/components/sort-icon/sort-icon.component.ts ***!
    \************************************************************************/

  /*! exports provided: SortIconComponent */

  /***/
  function srcModulesTablesComponentsSortIconSortIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortIconComponent", function () {
      return SortIconComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SortIconComponent = /*#__PURE__*/function () {
      function SortIconComponent() {
        _classCallCheck(this, SortIconComponent);
      }

      _createClass(SortIconComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SortIconComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SortIconComponent.prototype, "direction", void 0);
    SortIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-sort-icon',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sort-icon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/tables/components/sort-icon/sort-icon.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sort-icon.component.scss */
      "./src/modules/tables/components/sort-icon/sort-icon.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SortIconComponent);
    /***/
  },

  /***/
  "./src/modules/tables/containers/index.ts":
  /*!************************************************!*\
    !*** ./src/modules/tables/containers/index.ts ***!
    \************************************************/

  /*! exports provided: containers, TablesComponent */

  /***/
  function srcModulesTablesContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _tables_tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tables/tables.component */
    "./src/modules/tables/containers/tables/tables.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TablesComponent", function () {
      return _tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"];
    });

    var containers = [_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]];
    /***/
  },

  /***/
  "./src/modules/tables/containers/tables/tables.component.scss":
  /*!********************************************************************!*\
    !*** ./src/modules/tables/containers/tables/tables.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesTablesContainersTablesTablesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy90YWJsZXMvY29udGFpbmVycy90YWJsZXMvdGFibGVzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/tables/containers/tables/tables.component.ts":
  /*!******************************************************************!*\
    !*** ./src/modules/tables/containers/tables/tables.component.ts ***!
    \******************************************************************/

  /*! exports provided: TablesComponent */

  /***/
  function srcModulesTablesContainersTablesTablesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablesComponent", function () {
      return TablesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TablesComponent = /*#__PURE__*/function () {
      function TablesComponent() {
        _classCallCheck(this, TablesComponent);
      }

      _createClass(TablesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TablesComponent;
    }();

    TablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-tables',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tables.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/tables/containers/tables/tables.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tables.component.scss */
      "./src/modules/tables/containers/tables/tables.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TablesComponent);
    /***/
  },

  /***/
  "./src/modules/tables/data/countries.ts":
  /*!**********************************************!*\
    !*** ./src/modules/tables/data/countries.ts ***!
    \**********************************************/

  /*! exports provided: COUNTRIES */

  /***/
  function srcModulesTablesDataCountriesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COUNTRIES", function () {
      return COUNTRIES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var COUNTRIES = [{
      id: 1,
      name: 'Russia',
      flag: 'f/f3/Flag_of_Russia.svg',
      area: 17075200,
      population: 146989754
    }, {
      id: 2,
      name: 'France',
      flag: 'c/c3/Flag_of_France.svg',
      area: 640679,
      population: 64979548
    }, {
      id: 3,
      name: 'Germany',
      flag: 'b/ba/Flag_of_Germany.svg',
      area: 357114,
      population: 82114224
    }, {
      id: 4,
      name: 'Portugal',
      flag: '5/5c/Flag_of_Portugal.svg',
      area: 92090,
      population: 10329506
    }, {
      id: 5,
      name: 'Canada',
      flag: 'c/cf/Flag_of_Canada.svg',
      area: 9976140,
      population: 36624199
    }, {
      id: 6,
      name: 'Vietnam',
      flag: '2/21/Flag_of_Vietnam.svg',
      area: 331212,
      population: 95540800
    }, {
      id: 7,
      name: 'Brazil',
      flag: '0/05/Flag_of_Brazil.svg',
      area: 8515767,
      population: 209288278
    }, {
      id: 8,
      name: 'Mexico',
      flag: 'f/fc/Flag_of_Mexico.svg',
      area: 1964375,
      population: 129163276
    }, {
      id: 9,
      name: 'United States',
      flag: 'a/a4/Flag_of_the_United_States.svg',
      area: 9629091,
      population: 324459463
    }, {
      id: 10,
      name: 'India',
      flag: '4/41/Flag_of_India.svg',
      area: 3287263,
      population: 1324171354
    }, {
      id: 11,
      name: 'Indonesia',
      flag: '9/9f/Flag_of_Indonesia.svg',
      area: 1910931,
      population: 263991379
    }, {
      id: 12,
      name: 'Tuvalu',
      flag: '3/38/Flag_of_Tuvalu.svg',
      area: 26,
      population: 11097
    }, {
      id: 13,
      name: 'China',
      flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
      area: 9596960,
      population: 1409517397
    }];
    /***/
  },

  /***/
  "./src/modules/tables/directives/index.ts":
  /*!************************************************!*\
    !*** ./src/modules/tables/directives/index.ts ***!
    \************************************************/

  /*! exports provided: directives, SBSortableHeaderDirective */

  /***/
  function srcModulesTablesDirectivesIndexTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/modules/tables/directives/sortable.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SBSortableHeaderDirective", function () {
      return _sortable_directive__WEBPACK_IMPORTED_MODULE_1__["SBSortableHeaderDirective"];
    });

    var directives = [_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["SBSortableHeaderDirective"]];
    /***/
  },

  /***/
  "./src/modules/tables/directives/sortable.directive.ts":
  /*!*************************************************************!*\
    !*** ./src/modules/tables/directives/sortable.directive.ts ***!
    \*************************************************************/

  /*! exports provided: SBSortableHeaderDirective */

  /***/
  function srcModulesTablesDirectivesSortableDirectiveTs(module, __webpack_exports__, __webpack_require__) {
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
  "./src/modules/tables/guards/index.ts":
  /*!********************************************!*\
    !*** ./src/modules/tables/guards/index.ts ***!
    \********************************************/

  /*! exports provided: guards, TablesGuard */

  /***/
  function srcModulesTablesGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _tables_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tables.guard */
    "./src/modules/tables/guards/tables.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TablesGuard", function () {
      return _tables_guard__WEBPACK_IMPORTED_MODULE_1__["TablesGuard"];
    });

    var guards = [_tables_guard__WEBPACK_IMPORTED_MODULE_1__["TablesGuard"]];
    /***/
  },

  /***/
  "./src/modules/tables/guards/tables.guard.ts":
  /*!***************************************************!*\
    !*** ./src/modules/tables/guards/tables.guard.ts ***!
    \***************************************************/

  /*! exports provided: TablesGuard */

  /***/
  function srcModulesTablesGuardsTablesGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablesGuard", function () {
      return TablesGuard;
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

    var TablesGuard = /*#__PURE__*/function () {
      function TablesGuard() {
        _classCallCheck(this, TablesGuard);
      }

      _createClass(TablesGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
      }]);

      return TablesGuard;
    }();

    TablesGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TablesGuard);
    /***/
  },

  /***/
  "./src/modules/tables/services/country.service.ts":
  /*!********************************************************!*\
    !*** ./src/modules/tables/services/country.service.ts ***!
    \********************************************************/

  /*! exports provided: CountryService */

  /***/
  function srcModulesTablesServicesCountryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryService", function () {
      return CountryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _modules_tables_data_countries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @modules/tables/data/countries */
    "./src/modules/tables/data/countries.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    function compare(v1, v2) {
      return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
    }

    function sort(countries, column, direction) {
      if (direction === '') {
        return countries;
      } else {
        return _toConsumableArray(countries).sort(function (a, b) {
          var res = compare(a[column], b[column]);
          return direction === 'asc' ? res : -res;
        });
      }
    }

    function matches(country, term, pipe) {
      return country.name.toLowerCase().includes(term.toLowerCase()) || pipe.transform(country.area).includes(term) || pipe.transform(country.population).includes(term);
    }

    var CountryService = /*#__PURE__*/function () {
      function CountryService(pipe) {
        var _this = this;

        _classCallCheck(this, CountryService);

        this.pipe = pipe;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._countries$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](0);
        this._state = {
          page: 1,
          pageSize: 4,
          searchTerm: '',
          sortColumn: '',
          sortDirection: ''
        };

        this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
          return _this._loading$.next(true);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(120), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
          return _this._search();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(120), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
          return _this._loading$.next(false);
        })).subscribe(function (result) {
          _this._countries$.next(result.countries);

          _this._total$.next(result.total);
        });

        this._search$.next();
      }

      _createClass(CountryService, [{
        key: "_set",
        value: function _set(patch) {
          Object.assign(this._state, patch);

          this._search$.next();
        }
      }, {
        key: "_search",
        value: function _search() {
          var _this2 = this;

          var _this$_state = this._state,
              sortColumn = _this$_state.sortColumn,
              sortDirection = _this$_state.sortDirection,
              pageSize = _this$_state.pageSize,
              page = _this$_state.page,
              searchTerm = _this$_state.searchTerm; // 1. sort

          var countries = sort(_modules_tables_data_countries__WEBPACK_IMPORTED_MODULE_3__["COUNTRIES"], sortColumn, sortDirection); // 2. filter

          countries = countries.filter(function (country) {
            return matches(country, searchTerm, _this2.pipe);
          });
          var total = countries.length; // 3. paginate

          countries = countries.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({
            countries: countries,
            total: total
          });
        }
      }, {
        key: "countries$",
        get: function get() {
          return this._countries$.asObservable();
        }
      }, {
        key: "total$",
        get: function get() {
          return this._total$.asObservable();
        }
      }, {
        key: "loading$",
        get: function get() {
          return this._loading$.asObservable();
        }
      }, {
        key: "page",
        get: function get() {
          return this._state.page;
        },
        set: function set(page) {
          this._set({
            page: page
          });
        }
      }, {
        key: "pageSize",
        get: function get() {
          return this._state.pageSize;
        },
        set: function set(pageSize) {
          this._set({
            pageSize: pageSize
          });
        }
      }, {
        key: "searchTerm",
        get: function get() {
          return this._state.searchTerm;
        },
        set: function set(searchTerm) {
          this._set({
            searchTerm: searchTerm
          });
        }
      }, {
        key: "sortColumn",
        set: function set(sortColumn) {
          this._set({
            sortColumn: sortColumn
          });
        }
      }, {
        key: "sortDirection",
        set: function set(sortDirection) {
          this._set({
            sortDirection: sortDirection
          });
        }
      }]);

      return CountryService;
    }();

    CountryService.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]
      }];
    };

    CountryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]])], CountryService);
    /***/
  },

  /***/
  "./src/modules/tables/services/index.ts":
  /*!**********************************************!*\
    !*** ./src/modules/tables/services/index.ts ***!
    \**********************************************/

  /*! exports provided: services, TablesService, CountryService */

  /***/
  function srcModulesTablesServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _country_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./country.service */
    "./src/modules/tables/services/country.service.ts");
    /* harmony import */


    var _tables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tables.service */
    "./src/modules/tables/services/tables.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TablesService", function () {
      return _tables_service__WEBPACK_IMPORTED_MODULE_2__["TablesService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CountryService", function () {
      return _country_service__WEBPACK_IMPORTED_MODULE_1__["CountryService"];
    });

    var services = [_tables_service__WEBPACK_IMPORTED_MODULE_2__["TablesService"], _country_service__WEBPACK_IMPORTED_MODULE_1__["CountryService"]];
    /***/
  },

  /***/
  "./src/modules/tables/services/tables.service.ts":
  /*!*******************************************************!*\
    !*** ./src/modules/tables/services/tables.service.ts ***!
    \*******************************************************/

  /*! exports provided: TablesService */

  /***/
  function srcModulesTablesServicesTablesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablesService", function () {
      return TablesService;
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

    var TablesService = /*#__PURE__*/function () {
      function TablesService() {
        _classCallCheck(this, TablesService);
      }

      _createClass(TablesService, [{
        key: "getTables$",
        value: function getTables$() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
        }
      }]);

      return TablesService;
    }();

    TablesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TablesService);
    /***/
  },

  /***/
  "./src/modules/tables/tables.module.ts":
  /*!*********************************************!*\
    !*** ./src/modules/tables/tables.module.ts ***!
    \*********************************************/

  /*! exports provided: TablesModule */

  /***/
  function srcModulesTablesTablesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablesModule", function () {
      return TablesModule;
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
    "./src/modules/tables/components/index.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/tables/containers/index.ts");
    /* harmony import */


    var _directives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./directives */
    "./src/modules/tables/directives/index.ts");
    /* harmony import */


    var _guards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./guards */
    "./src/modules/tables/guards/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services */
    "./src/modules/tables/services/index.ts");
    /* tslint:disable: ordered-imports*/

    /* Modules */

    /* Components */

    /* Containers */

    /* Directives */

    /* Guards */

    /* Services */


    var TablesModule = function TablesModule() {
      _classCallCheck(this, TablesModule);
    };

    TablesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_11__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_10__["guards"]), _toConsumableArray(_directives__WEBPACK_IMPORTED_MODULE_9__["directives"])),
      declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_8__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_7__["components"]), _toConsumableArray(_directives__WEBPACK_IMPORTED_MODULE_9__["directives"])),
      exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_8__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_7__["components"]))
    })], TablesModule);
    /***/
  }
}]);
//# sourceMappingURL=default~modules-dashboard-dashboard-routing-module~modules-tables-tables-routing-module-es5.js.map