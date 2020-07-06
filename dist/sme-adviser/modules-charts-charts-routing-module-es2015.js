(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-charts-charts-routing-module"],{

/***/ "./src/modules/charts/charts-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/modules/charts/charts-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ROUTES, ChartsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsRoutingModule", function() { return ChartsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _charts_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts.module */ "./src/modules/charts/charts.module.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "./src/modules/charts/containers/index.ts");

/* tslint:disable: ordered-imports*/


/* Module */

/* Containers */

/* Routes */
const ROUTES = [
    {
        path: '',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["ChartsComponent"],
        data: {
            title: 'Statistics - SME Adviser',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Statistics',
                    active: true,
                },
            ],
        },
    },
];
let ChartsRoutingModule = class ChartsRoutingModule {
};
ChartsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_charts_module__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChartsRoutingModule);



/***/ })

}]);
//# sourceMappingURL=modules-charts-charts-routing-module-es2015.js.map