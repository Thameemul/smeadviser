(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-contribution-contribution-routing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/components/faq/faq.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/components/faq/faq.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5> FAQ Page Works</h5>\n\n\n<form>\n    <ul ngbnav=\"\" class=\"nav-tabs px-4 px-lg-5 content-tabset justify-content-md-start justify-content-end nav\" role=\"tablist\">\n        <li class=\"nav-item\">\n            <a href=\"#/components/alert/examples\" ngbnavlink=\"\" id=\"ngb-nav-0\" role=\"tab\" aria-controls=\"ngb-nav-0-panel\" aria-selected=\"true\" aria-disabled=\"false\" class=\"nav-link active\"> Today FAQ's</a>\n        </li>\n        <li class=\"nav-item\">\n            <a href=\"#/components/alert/api\" ngbnavlink=\"\" id=\"ngb-nav-1\" role=\"tab\" aria-selected=\"false\" aria-disabled=\"false\" class=\"nav-link\"> Older </a>\n        </li>\n    </ul>\n\n    <div class=\"d-flex justify-content-between p-2\">\n        <ngb-pagination [collectionSize]=\"total$ | async\" [(page)]=\"countryService.page\" [pageSize]=\"countryService.pageSize\"></ngb-pagination\n        ><select class=\"custom-select\" style=\"width: auto;\" name=\"pageSize\" [(ngModel)]=\"countryService.pageSize\"\n            ><option [ngValue]=\"10\">10 items per page</option\n            ><option [ngValue]=\"30\">30 items per page</option\n            ><option [ngValue]=\"50\">50 items per page</option></select\n        >\n    </div>\n</form>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/components/post/post.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/components/post/post.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5> Post List Page Works</h5>\n\n\n<div class=\"card text-center\">\n    <div class=\"card-header\">\n      <ul class=\"nav nav-tabs card-header-tabs\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\">Today's Post</a>\n\n          <table class=\"table table-hover\">\n            <thead>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Email</th>\n                <th>Phone</th>\n                <th>Category</th>\n                <th>Post Description</th>\n            </thead>\n\n            <tbody >\n                <tr *ngFor=\"let post of posts | async\">\n                  <td >{{post.firstname}}</td>\n                  <td >{{post.lastname}}</td>\n                  <td >{{post.email}}</td>\n                  <td >{{post.phone}}</td>\n                  <td >{{post.category}}</td>\n                  <td >{{post.postdesc}}</td>\n\n                 </tr>\n            </tbody>\n\n\n            </table>\n            <p>{{posts | json}}</p>\n\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Older</a>\n        </li>\n        <li class=\"nav-item\">\n            <a href=\"#\" class=\"btn btn-primary\" routerLink=\"/addnewpost\">Create New Post</a>\n        </li>\n      </ul>\n    </div>\n   </div>\n<!--\n  <div class=\"d-flex justify-content-between p-2\">\n        <ngb-pagination [collectionSize]=\"total$ | async\" [(page)]=\"countryService.page\" [pageSize]=\"countryService.pageSize\"></ngb-pagination\n        ><select class=\"custom-select\" style=\"width: auto;\" name=\"pageSize\" [(ngModel)]=\"countryService.pageSize\"\n            ><option [ngValue]=\"10\">10 items per page</option\n            ><option [ngValue]=\"30\">30 items per page</option\n            ><option [ngValue]=\"50\">50 items per page</option></select\n        >\n    </div> -->\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/components/query/query.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/components/query/query.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5> Query List Component Works </h5>\n\n\n<div class=\"card text-center\">\n    <div class=\"card-header\">\n      <ul class=\"nav nav-tabs card-header-tabs\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" href=\"#\">Today Queries</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Older</a>\n        </li>\n        <li class=\"nav-item\">\n            <a href=\"#\" class=\"btn btn-primary\" routerLink=\"/addnewquery\">Create New Query</a>\n        </li>\n      </ul>\n    </div>\n    <!-- <div class=\"card-body\">\n      <h5 class=\"card-title\">Special title treatment</h5>\n      <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n    </div> -->\n  </div>\n\n  <div class=\"d-flex justify-content-between p-2\">\n        <ngb-pagination [collectionSize]=\"total$ | async\" [(page)]=\"countryService.page\" [pageSize]=\"countryService.pageSize\"></ngb-pagination\n        ><select class=\"custom-select\" style=\"width: auto;\" name=\"pageSize\" [(ngModel)]=\"countryService.pageSize\"\n            ><option [ngValue]=\"10\">10 items per page</option\n            ><option [ngValue]=\"30\">30 items per page</option\n            ><option [ngValue]=\"50\">50 items per page</option></select\n        >\n    </div>\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/containers/Postcontri/postcontri.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/containers/Postcontri/postcontri.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard\n    ><sb-dashboard-head ></sb-dashboard-head>\n         <div class=\"card-body\"><sb-post ></sb-post></div>\n</sb-layout-dashboard>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/containers/faqcontri/faqcontri.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/containers/faqcontri/faqcontri.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard\n    ><sb-dashboard-head ></sb-dashboard-head>\n         <div class=\"card-body\"><sb-faq ></sb-faq></div>\n</sb-layout-dashboard>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/containers/querycontri/querycontri.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/containers/querycontri/querycontri.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard\n    ><sb-dashboard-head ></sb-dashboard-head>\n         <div class=\"card-body\"><sb-query ></sb-query></div>\n</sb-layout-dashboard>\n");

/***/ }),

/***/ "./src/modules/contribution/components/faq/faq.component.scss":
/*!********************************************************************!*\
  !*** ./src/modules/contribution/components/faq/faq.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9jb250cmlidXRpb24vY29tcG9uZW50cy9mYXEvZmFxLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/modules/contribution/components/faq/faq.component.ts":
/*!******************************************************************!*\
  !*** ./src/modules/contribution/components/faq/faq.component.ts ***!
  \******************************************************************/
/*! exports provided: FAQComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQComponent", function() { return FAQComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FAQComponent = class FAQComponent {
    constructor() { }
    ngOnInit() { }
};
FAQComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-faq',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/components/faq/faq.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./faq.component.scss */ "./src/modules/contribution/components/faq/faq.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], FAQComponent);



/***/ }),

/***/ "./src/modules/contribution/components/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/contribution/components/index.ts ***!
  \******************************************************/
/*! exports provided: components, PostComponent, QueryComponent, FAQComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq/faq.component */ "./src/modules/contribution/components/faq/faq.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post/post.component */ "./src/modules/contribution/components/post/post.component.ts");
/* harmony import */ var _query_query_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query/query.component */ "./src/modules/contribution/components/query/query.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return _post_post_component__WEBPACK_IMPORTED_MODULE_2__["PostComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryComponent", function() { return _query_query_component__WEBPACK_IMPORTED_MODULE_3__["QueryComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FAQComponent", function() { return _faq_faq_component__WEBPACK_IMPORTED_MODULE_1__["FAQComponent"]; });





const components = [_post_post_component__WEBPACK_IMPORTED_MODULE_2__["PostComponent"], _query_query_component__WEBPACK_IMPORTED_MODULE_3__["QueryComponent"], _faq_faq_component__WEBPACK_IMPORTED_MODULE_1__["FAQComponent"]];





/***/ }),

/***/ "./src/modules/contribution/components/post/post.component.scss":
/*!**********************************************************************!*\
  !*** ./src/modules/contribution/components/post/post.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9jb250cmlidXRpb24vY29tcG9uZW50cy9wb3N0L3Bvc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/modules/contribution/components/post/post.component.ts":
/*!********************************************************************!*\
  !*** ./src/modules/contribution/components/post/post.component.ts ***!
  \********************************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _addnewpost_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../addnewpost/services/post.service */ "./src/modules/addnewpost/services/post.service.ts");



let PostComponent = class PostComponent {
    constructor(postservice) {
        this.postservice = postservice;
    }
    ngOnInit() {
        this.posts = this.postservice.getPosts();
    }
};
PostComponent.ctorParameters = () => [
    { type: _addnewpost_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
PostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-post',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/components/post/post.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./post.component.scss */ "./src/modules/contribution/components/post/post.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_addnewpost_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
], PostComponent);



/***/ }),

/***/ "./src/modules/contribution/components/query/query.component.scss":
/*!************************************************************************!*\
  !*** ./src/modules/contribution/components/query/query.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9jb250cmlidXRpb24vY29tcG9uZW50cy9xdWVyeS9xdWVyeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/modules/contribution/components/query/query.component.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/contribution/components/query/query.component.ts ***!
  \**********************************************************************/
/*! exports provided: QueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryComponent", function() { return QueryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QueryComponent = class QueryComponent {
    constructor() { }
    ngOnInit() { }
};
QueryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-query',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./query.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/components/query/query.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./query.component.scss */ "./src/modules/contribution/components/query/query.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], QueryComponent);



/***/ }),

/***/ "./src/modules/contribution/containers/Postcontri/postcontri.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/modules/contribution/containers/Postcontri/postcontri.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9jb250cmlidXRpb24vY29udGFpbmVycy9Qb3N0Y29udHJpL3Bvc3Rjb250cmkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/modules/contribution/containers/Postcontri/postcontri.component.ts":
/*!********************************************************************************!*\
  !*** ./src/modules/contribution/containers/Postcontri/postcontri.component.ts ***!
  \********************************************************************************/
/*! exports provided: PostContriComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostContriComponent", function() { return PostContriComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostContriComponent = class PostContriComponent {
    constructor() { }
    ngOnInit() { }
};
PostContriComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-postcontri',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./postcontri.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/containers/Postcontri/postcontri.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./postcontri.component.scss */ "./src/modules/contribution/containers/Postcontri/postcontri.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PostContriComponent);



/***/ }),

/***/ "./src/modules/contribution/containers/faqcontri/faqcontri.component.scss":
/*!********************************************************************************!*\
  !*** ./src/modules/contribution/containers/faqcontri/faqcontri.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9jb250cmlidXRpb24vY29udGFpbmVycy9mYXFjb250cmkvZmFxY29udHJpLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/modules/contribution/containers/faqcontri/faqcontri.component.ts":
/*!******************************************************************************!*\
  !*** ./src/modules/contribution/containers/faqcontri/faqcontri.component.ts ***!
  \******************************************************************************/
/*! exports provided: FAQContriComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQContriComponent", function() { return FAQContriComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FAQContriComponent = class FAQContriComponent {
    constructor() { }
    ngOnInit() { }
};
FAQContriComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-faqcontri',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./faqcontri.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/containers/faqcontri/faqcontri.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./faqcontri.component.scss */ "./src/modules/contribution/containers/faqcontri/faqcontri.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], FAQContriComponent);



/***/ }),

/***/ "./src/modules/contribution/containers/index.ts":
/*!******************************************************!*\
  !*** ./src/modules/contribution/containers/index.ts ***!
  \******************************************************/
/*! exports provided: containers, QueryContriComponent, FAQContriComponent, PostContriComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _faqcontri_faqcontri_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faqcontri/faqcontri.component */ "./src/modules/contribution/containers/faqcontri/faqcontri.component.ts");
/* harmony import */ var _Postcontri_postcontri_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Postcontri/postcontri.component */ "./src/modules/contribution/containers/Postcontri/postcontri.component.ts");
/* harmony import */ var _querycontri_querycontri_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./querycontri/querycontri.component */ "./src/modules/contribution/containers/querycontri/querycontri.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryContriComponent", function() { return _querycontri_querycontri_component__WEBPACK_IMPORTED_MODULE_3__["QueryContriComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FAQContriComponent", function() { return _faqcontri_faqcontri_component__WEBPACK_IMPORTED_MODULE_1__["FAQContriComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostContriComponent", function() { return _Postcontri_postcontri_component__WEBPACK_IMPORTED_MODULE_2__["PostContriComponent"]; });





const containers = [_Postcontri_postcontri_component__WEBPACK_IMPORTED_MODULE_2__["PostContriComponent"], _querycontri_querycontri_component__WEBPACK_IMPORTED_MODULE_3__["QueryContriComponent"], _faqcontri_faqcontri_component__WEBPACK_IMPORTED_MODULE_1__["FAQContriComponent"]];





/***/ }),

/***/ "./src/modules/contribution/containers/querycontri/querycontri.component.scss":
/*!************************************************************************************!*\
  !*** ./src/modules/contribution/containers/querycontri/querycontri.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9jb250cmlidXRpb24vY29udGFpbmVycy9xdWVyeWNvbnRyaS9xdWVyeWNvbnRyaS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/modules/contribution/containers/querycontri/querycontri.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/modules/contribution/containers/querycontri/querycontri.component.ts ***!
  \**********************************************************************************/
/*! exports provided: QueryContriComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryContriComponent", function() { return QueryContriComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QueryContriComponent = class QueryContriComponent {
    constructor() { }
    ngOnInit() { }
};
QueryContriComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-querycontri',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./querycontri.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/containers/querycontri/querycontri.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./querycontri.component.scss */ "./src/modules/contribution/containers/querycontri/querycontri.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], QueryContriComponent);



/***/ }),

/***/ "./src/modules/contribution/contribution-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/contribution/contribution-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ROUTES, ContributionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributionRoutingModule", function() { return ContributionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contribution_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contribution.module */ "./src/modules/contribution/contribution.module.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "./src/modules/contribution/containers/index.ts");

/* tslint:disable: ordered-imports*/


/* Module */

/* Containers */

/* Routes */
const ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'post',
    },
    {
        path: 'post',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["PostContriComponent"],
        data: {
            title: 'Post - SME Adviser',
        },
    },
    {
        path: 'query',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["QueryContriComponent"],
        data: {
            title: 'Query - SME Adviser',
        },
    },
    {
        path: 'faq',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["FAQContriComponent"],
        data: {
            title: 'FAQ - SME Adviser',
        },
    },
];
let ContributionRoutingModule = class ContributionRoutingModule {
};
ContributionRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_contribution_module__WEBPACK_IMPORTED_MODULE_3__["ContributionModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContributionRoutingModule);



/***/ }),

/***/ "./src/modules/contribution/contribution.module.ts":
/*!*********************************************************!*\
  !*** ./src/modules/contribution/contribution.module.ts ***!
  \*********************************************************/
/*! exports provided: ContributionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributionModule", function() { return ContributionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @common/app-common.module */ "./src/modules/app-common/app-common.module.ts");
/* harmony import */ var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/navigation/navigation.module */ "./src/modules/navigation/navigation.module.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components */ "./src/modules/contribution/components/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers */ "./src/modules/contribution/containers/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards */ "./src/modules/contribution/guards/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services */ "./src/modules/contribution/services/index.ts");
/* harmony import */ var _addnewpost_services_post_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../addnewpost/services/post.service */ "./src/modules/addnewpost/services/post.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

/* tslint:disable: ordered-imports*/





//  Firebase




/* Modules */


/* Components */

/* Containers */

/* Guards */

/* Services */



let ContributionModule = class ContributionModule {
};
ContributionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_10__["AppCommonModule"],
            _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_11__["NavigationModule"],
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditorModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ],
        providers: [..._services__WEBPACK_IMPORTED_MODULE_15__["services"], _addnewpost_services_post_service__WEBPACK_IMPORTED_MODULE_16__["PostService"], ..._guards__WEBPACK_IMPORTED_MODULE_14__["guards"]],
        declarations: [..._containers__WEBPACK_IMPORTED_MODULE_13__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_12__["components"]],
        exports: [..._containers__WEBPACK_IMPORTED_MODULE_13__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_12__["components"]],
    })
], ContributionModule);



/***/ }),

/***/ "./src/modules/contribution/guards/contribution.guard.ts":
/*!***************************************************************!*\
  !*** ./src/modules/contribution/guards/contribution.guard.ts ***!
  \***************************************************************/
/*! exports provided: ContributionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributionGuard", function() { return ContributionGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ContributionGuard = class ContributionGuard {
    canActivate() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
};
ContributionGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ContributionGuard);



/***/ }),

/***/ "./src/modules/contribution/guards/index.ts":
/*!**************************************************!*\
  !*** ./src/modules/contribution/guards/index.ts ***!
  \**************************************************/
/*! exports provided: guards, ContributionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _contribution_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contribution.guard */ "./src/modules/contribution/guards/contribution.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContributionGuard", function() { return _contribution_guard__WEBPACK_IMPORTED_MODULE_1__["ContributionGuard"]; });



const guards = [_contribution_guard__WEBPACK_IMPORTED_MODULE_1__["ContributionGuard"]];



/***/ }),

/***/ "./src/modules/contribution/services/contribution.service.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/contribution/services/contribution.service.ts ***!
  \*******************************************************************/
/*! exports provided: ContributionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributionService", function() { return ContributionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ContributionService = class ContributionService {
    constructor() { }
    getAuth$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
    }
};
ContributionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ContributionService);



/***/ }),

/***/ "./src/modules/contribution/services/index.ts":
/*!****************************************************!*\
  !*** ./src/modules/contribution/services/index.ts ***!
  \****************************************************/
/*! exports provided: services, ContributionService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _contribution_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contribution.service */ "./src/modules/contribution/services/contribution.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/modules/contribution/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContributionService", function() { return _contribution_service__WEBPACK_IMPORTED_MODULE_1__["ContributionService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });




const services = [_contribution_service__WEBPACK_IMPORTED_MODULE_1__["ContributionService"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]];




/***/ }),

/***/ "./src/modules/contribution/services/user.service.ts":
/*!***********************************************************!*\
  !*** ./src/modules/contribution/services/user.service.ts ***!
  \***********************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



const userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
let UserService = class UserService {
    constructor() {
        this.user = {
            id: '123',
            firstName: 'Start',
            lastName: 'Bootstrap',
            email: 'no-reply@startbootstrap.com',
        };
    }
    set user(user) {
        userSubject.next(user);
    }
    get user$() {
        return userSubject.asObservable();
    }
};
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], UserService);



/***/ })

}]);
//# sourceMappingURL=modules-contribution-contribution-routing-module-es2015.js.map