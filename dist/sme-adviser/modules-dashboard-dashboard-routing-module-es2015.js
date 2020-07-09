(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-dashboard-routing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-sm-4\">\n        <sb-card-view-details link=\"/contribution/query\" background=\"bg-primary\"><div class=\"card-body\">Today's Queries</div></sb-card-view-details>\n    </div>\n    <div class=\"col-sm-4\">\n        <sb-card-view-details link=\"/dashboard\" background=\"bg-warning\"><div class=\"card-body\">Most Viewed</div></sb-card-view-details>\n    </div>\n    <div class=\"col-sm-4\">\n        <sb-card-view-details link=\"/contribution/post\" background=\"bg-success\"><div class=\"card-body\">Today's Posts</div></sb-card-view-details>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xl-4\">\n        <sb-card\n            ><div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"chart-area\"]'></fa-icon> No of Questions Posted </div>\n            <div class=\"card-body\"><sb-charts-area></sb-charts-area></div\n        ></sb-card>\n    </div>\n    <div class=\"col-xl-4\">\n        <sb-card\n            ><div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"chart-bar\"]'></fa-icon>No of Posts</div>\n            <div class=\"card-body\"><sb-charts-bar></sb-charts-bar></div\n        ></sb-card>\n    </div>\n    <div class=\"col-xl-4\">\n        <sb-card\n            ><div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"chart-bar\"]'></fa-icon> Statistics </div>\n            <div class=\"card-body\"><sb-charts-pie></sb-charts-pie></div\n        ></sb-card>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <sb-card\n    ><div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>DataTable Example</div>\n    <div class=\"card-body\"><sb-ng-bootstrap-table [pageSize]=\"4\"></sb-ng-bootstrap-table></div\n></sb-card> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/dashboard/dashboard.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/dashboard/dashboard.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard>\n    <sb-dashboard-head ></sb-dashboard-head>\n    <sb-breadcrumbs ></sb-breadcrumbs>\n    <sb-dashboard-charts></sb-dashboard-charts>\n    <sb-dashboard-cards></sb-dashboard-cards>\n</sb-layout-dashboard>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/light/light.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/light/light.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard [light]=\"true\"><sb-dashboard-head title=\"Dashboard Light\" [hideBreadcrumbs]=\"false\"></sb-dashboard-head><sb-dashboard-cards></sb-dashboard-cards><sb-dashboard-charts></sb-dashboard-charts><sb-dashboard-tables></sb-dashboard-tables></sb-layout-dashboard>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/static/static.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/static/static.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard [static]=\"true\"\n    ><sb-dashboard-head title=\"Dashboard Static\" [hideBreadcrumbs]=\"false\"></sb-dashboard-head><sb-dashboard-cards></sb-dashboard-cards><sb-dashboard-charts></sb-dashboard-charts><sb-dashboard-tables></sb-dashboard-tables\n    ><sb-card\n        ><div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"chart-pie\"]'></fa-icon>Pie Chart Example</div>\n        <div class=\"card-body\"><sb-charts-pie></sb-charts-pie></div>\n        <div class=\"card-footer small text-muted\">Updated yesterday at 11:59 PM</div></sb-card\n    ></sb-layout-dashboard\n>\n");

/***/ }),

/***/ "./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQtY2FyZHMvZGFzaGJvYXJkLWNhcmRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DashboardCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCardsComponent", function() { return DashboardCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardCardsComponent = class DashboardCardsComponent {
    constructor() { }
    ngOnInit() { }
};
DashboardCardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-dashboard-cards',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard-cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard-cards.component.scss */ "./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DashboardCardsComponent);



/***/ }),

/***/ "./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQtY2hhcnRzL2Rhc2hib2FyZC1jaGFydHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DashboardChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardChartsComponent", function() { return DashboardChartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardChartsComponent = class DashboardChartsComponent {
    constructor() { }
    ngOnInit() { }
};
DashboardChartsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-dashboard-charts',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard-charts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard-charts.component.scss */ "./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DashboardChartsComponent);



/***/ }),

/***/ "./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQtdGFibGVzL2Rhc2hib2FyZC10YWJsZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DashboardTablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardTablesComponent", function() { return DashboardTablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardTablesComponent = class DashboardTablesComponent {
    constructor() { }
    ngOnInit() { }
};
DashboardTablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-dashboard-tables',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard-tables.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard-tables.component.scss */ "./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DashboardTablesComponent);



/***/ }),

/***/ "./src/modules/dashboard/components/index.ts":
/*!***************************************************!*\
  !*** ./src/modules/dashboard/components/index.ts ***!
  \***************************************************/
/*! exports provided: components, DashboardCardsComponent, DashboardChartsComponent, DashboardTablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dashboard_cards_dashboard_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-cards/dashboard-cards.component */ "./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.ts");
/* harmony import */ var _dashboard_charts_dashboard_charts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-charts/dashboard-charts.component */ "./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.ts");
/* harmony import */ var _dashboard_tables_dashboard_tables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-tables/dashboard-tables.component */ "./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardCardsComponent", function() { return _dashboard_cards_dashboard_cards_component__WEBPACK_IMPORTED_MODULE_1__["DashboardCardsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardChartsComponent", function() { return _dashboard_charts_dashboard_charts_component__WEBPACK_IMPORTED_MODULE_2__["DashboardChartsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardTablesComponent", function() { return _dashboard_tables_dashboard_tables_component__WEBPACK_IMPORTED_MODULE_3__["DashboardTablesComponent"]; });





const components = [
    _dashboard_cards_dashboard_cards_component__WEBPACK_IMPORTED_MODULE_1__["DashboardCardsComponent"],
    _dashboard_charts_dashboard_charts_component__WEBPACK_IMPORTED_MODULE_2__["DashboardChartsComponent"],
    _dashboard_tables_dashboard_tables_component__WEBPACK_IMPORTED_MODULE_3__["DashboardTablesComponent"],
];





/***/ }),

/***/ "./src/modules/dashboard/containers/dashboard/dashboard.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/modules/dashboard/containers/dashboard/dashboard.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29udGFpbmVycy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/modules/dashboard/containers/dashboard/dashboard.component.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/dashboard/containers/dashboard/dashboard.component.ts ***!
  \***************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() { }
};
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-dashboard',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/dashboard/dashboard.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.component.scss */ "./src/modules/dashboard/containers/dashboard/dashboard.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DashboardComponent);



/***/ }),

/***/ "./src/modules/dashboard/containers/index.ts":
/*!***************************************************!*\
  !*** ./src/modules/dashboard/containers/index.ts ***!
  \***************************************************/
/*! exports provided: containers, DashboardComponent, StaticComponent, LightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/modules/dashboard/containers/dashboard/dashboard.component.ts");
/* harmony import */ var _light_light_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./light/light.component */ "./src/modules/dashboard/containers/light/light.component.ts");
/* harmony import */ var _static_static_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static/static.component */ "./src/modules/dashboard/containers/static/static.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticComponent", function() { return _static_static_component__WEBPACK_IMPORTED_MODULE_3__["StaticComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LightComponent", function() { return _light_light_component__WEBPACK_IMPORTED_MODULE_2__["LightComponent"]; });





const containers = [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"], _static_static_component__WEBPACK_IMPORTED_MODULE_3__["StaticComponent"], _light_light_component__WEBPACK_IMPORTED_MODULE_2__["LightComponent"]];





/***/ }),

/***/ "./src/modules/dashboard/containers/light/light.component.scss":
/*!*********************************************************************!*\
  !*** ./src/modules/dashboard/containers/light/light.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29udGFpbmVycy9saWdodC9saWdodC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/modules/dashboard/containers/light/light.component.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/dashboard/containers/light/light.component.ts ***!
  \*******************************************************************/
/*! exports provided: LightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightComponent", function() { return LightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LightComponent = class LightComponent {
    constructor() { }
    ngOnInit() { }
};
LightComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-light',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./light.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/light/light.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./light.component.scss */ "./src/modules/dashboard/containers/light/light.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], LightComponent);



/***/ }),

/***/ "./src/modules/dashboard/containers/static/static.component.scss":
/*!***********************************************************************!*\
  !*** ./src/modules/dashboard/containers/static/static.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29udGFpbmVycy9zdGF0aWMvc3RhdGljLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/modules/dashboard/containers/static/static.component.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/dashboard/containers/static/static.component.ts ***!
  \*********************************************************************/
/*! exports provided: StaticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticComponent", function() { return StaticComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StaticComponent = class StaticComponent {
    constructor() { }
    ngOnInit() { }
};
StaticComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-static',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./static.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/static/static.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./static.component.scss */ "./src/modules/dashboard/containers/static/static.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], StaticComponent);



/***/ }),

/***/ "./src/modules/dashboard/dashboard-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/modules/dashboard/dashboard-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ROUTES, DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.module */ "./src/modules/dashboard/dashboard.module.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "./src/modules/dashboard/containers/index.ts");

/* tslint:disable: ordered-imports*/


/* Module */

/* Containers */

/* Routes */
const ROUTES = [
    {
        path: '',
        data: {
            title: 'Dashboard - SME Adviser',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    active: true,
                },
            ],
        },
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
    },
    {
        path: 'static',
        data: {
            title: 'Dashboard - SME Adviser',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Static',
                    active: true,
                },
            ],
        },
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["StaticComponent"],
    },
    {
        path: 'light',
        data: {
            title: 'Dashboard - SME Adviser',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Light',
                    active: true,
                },
            ],
        },
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["LightComponent"],
    },
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_dashboard_module__WEBPACK_IMPORTED_MODULE_3__["DashboardModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/modules/dashboard/dashboard.module.ts":
/*!***************************************************!*\
  !*** ./src/modules/dashboard/dashboard.module.ts ***!
  \***************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/app-common.module */ "./src/modules/app-common/app-common.module.ts");
/* harmony import */ var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/navigation/navigation.module */ "./src/modules/navigation/navigation.module.ts");
/* harmony import */ var _modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/charts/charts.module */ "./src/modules/charts/charts.module.ts");
/* harmony import */ var _modules_tables_tables_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/tables/tables.module */ "./src/modules/tables/tables.module.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components */ "./src/modules/dashboard/components/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers */ "./src/modules/dashboard/containers/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards */ "./src/modules/dashboard/guards/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services */ "./src/modules/dashboard/services/index.ts");

/* tslint:disable: ordered-imports*/




/* Modules */




/* Components */

/* Containers */

/* Guards */

/* Services */

let DashboardModule = class DashboardModule {
};
DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
            _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"],
            _modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
            _modules_tables_tables_module__WEBPACK_IMPORTED_MODULE_8__["TablesModule"],
        ],
        providers: [..._services__WEBPACK_IMPORTED_MODULE_12__["services"], ..._guards__WEBPACK_IMPORTED_MODULE_11__["guards"]],
        declarations: [..._containers__WEBPACK_IMPORTED_MODULE_10__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_9__["components"]],
        exports: [..._containers__WEBPACK_IMPORTED_MODULE_10__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_9__["components"]],
    })
], DashboardModule);



/***/ }),

/***/ "./src/modules/dashboard/guards/dashboard.guard.ts":
/*!*********************************************************!*\
  !*** ./src/modules/dashboard/guards/dashboard.guard.ts ***!
  \*********************************************************/
/*! exports provided: DashboardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardGuard", function() { return DashboardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let DashboardGuard = class DashboardGuard {
    canActivate() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
};
DashboardGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DashboardGuard);



/***/ }),

/***/ "./src/modules/dashboard/guards/index.ts":
/*!***********************************************!*\
  !*** ./src/modules/dashboard/guards/index.ts ***!
  \***********************************************/
/*! exports provided: guards, DashboardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dashboard_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.guard */ "./src/modules/dashboard/guards/dashboard.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardGuard", function() { return _dashboard_guard__WEBPACK_IMPORTED_MODULE_1__["DashboardGuard"]; });



const guards = [_dashboard_guard__WEBPACK_IMPORTED_MODULE_1__["DashboardGuard"]];



/***/ })

}]);
//# sourceMappingURL=modules-dashboard-dashboard-routing-module-es2015.js.map