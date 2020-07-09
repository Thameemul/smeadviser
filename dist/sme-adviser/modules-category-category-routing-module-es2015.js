(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-category-category-routing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/category/components/domain/domain.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/category/components/domain/domain.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Category wise Listing - Domain</h3>\n<ngb-accordion #acc=\"ngbAccordion\">\n    <ngb-panel *ngFor=\"let post of posts | async; let indexOfElement = index;\">\n        <ng-template ngbPanelHeader>\n            <button class=\"btn btn-link\" ngbPanelToggle>\n                <span>&#9733; <b> {{post.title}}</b></span>\n            </button>\n\n            <button type=\"button\" (click)=\"setAsFAQ(post)\" *ngIf=\"post.isFAQ == null || !post.isFAQ\"\n                class=\"btn btn-sm btn-outline-info float-lg-right\"\n                title=\"Add to Frequently Asked Questions\">&#43;</button>\n            <div class=\"float-lg-right\">\n                <span class=\"float-lg-right\" *ngIf=\"post.isFAQ != null && post.isFAQ\"\n                    class=\"badge badge-secondary\">FAQ</span>\n            </div>\n        </ng-template>\n\n        <ng-template ngbPanelContent>\n            <div [innerHTML]=\"post.postdesc\"></div>\n        </ng-template>\n    </ngb-panel>\n</ngb-accordion>\n<div class=\"d-flex justify-content-between p-2\">\n    <ngb-pagination [collectionSize]=\"10\" page=\"1\" [pageSize]=\"10\"> </ngb-pagination>\n    <select class=\"custom-select\" style=\"width: auto;\" name=\"pageSize\">\n        <option [ngValue]=\"10\" [selected]=\"true\">10 items per page</option>\n        <option [ngValue]=\"30\">30 items per page</option>\n        <option [ngValue]=\"50\">50 items per page</option>\n    </select>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/category/components/others/others.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/category/components/others/others.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Category wise Listing - Other than Technical and Domain</h3>\n<ngb-accordion #acc=\"ngbAccordion\">\n    <ngb-panel *ngFor=\"let post of posts | async; let indexOfElement = index;\">\n        <ng-template ngbPanelHeader>\n            <button class=\"btn btn-link\" ngbPanelToggle>\n                <span>&#9733; <b> {{post.title}}</b></span>\n            </button>\n\n            <button type=\"button\" (click)=\"setAsFAQ(post)\" *ngIf=\"post.isFAQ == null || !post.isFAQ\"\n                class=\"btn btn-sm btn-outline-info float-lg-right\"\n                title=\"Add to Frequently Asked Questions\">&#43;</button>\n            <div class=\"float-lg-right\">\n                <span class=\"float-lg-right\" *ngIf=\"post.isFAQ != null && post.isFAQ\"\n                    class=\"badge badge-secondary\">FAQ</span>\n            </div>\n        </ng-template>\n\n        <ng-template ngbPanelContent>\n            <div [innerHTML]=\"post.postdesc\"></div>\n        </ng-template>\n    </ngb-panel>\n</ngb-accordion>\n<div class=\"d-flex justify-content-between p-2\">\n    <ngb-pagination [collectionSize]=\"10\" page=\"1\" [pageSize]=\"10\"> </ngb-pagination>\n    <select class=\"custom-select\" style=\"width: auto;\" name=\"pageSize\">\n        <option [ngValue]=\"10\" [selected]=\"true\">10 items per page</option>\n        <option [ngValue]=\"30\">30 items per page</option>\n        <option [ngValue]=\"50\">50 items per page</option>\n    </select>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/category/components/tech/tech.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/category/components/tech/tech.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Category wise Listing - Technical</h3>\n<ngb-accordion #acc=\"ngbAccordion\">\n    <ngb-panel *ngFor=\"let post of posts | async; let indexOfElement = index;\">\n        <ng-template ngbPanelHeader>\n            <button class=\"btn btn-link\" ngbPanelToggle>\n                <span>&#9733; <b> {{post.title}}</b></span>\n            </button>\n\n            <button type=\"button\" (click)=\"setAsFAQ(post)\" *ngIf=\"post.isFAQ == null || !post.isFAQ\"\n                class=\"btn btn-sm btn-outline-info float-lg-right\"\n                title=\"Add to Frequently Asked Questions\">&#43;</button>\n            <div class=\"float-lg-right\">\n                <span class=\"float-lg-right\" *ngIf=\"post.isFAQ != null && post.isFAQ\"\n                    class=\"badge badge-secondary\">FAQ</span>\n            </div>\n        </ng-template>\n\n        <ng-template ngbPanelContent>\n            <div [innerHTML]=\"post.postdesc\"></div>\n        </ng-template>\n    </ngb-panel>\n</ngb-accordion>\n<div class=\"d-flex justify-content-between p-2\">\n    <ngb-pagination [collectionSize]=\"10\" page=\"1\" [pageSize]=\"10\"> </ngb-pagination>\n    <select class=\"custom-select\" style=\"width: auto;\" name=\"pageSize\">\n        <option [ngValue]=\"10\" [selected]=\"true\">10 items per page</option>\n        <option [ngValue]=\"30\">30 items per page</option>\n        <option [ngValue]=\"50\">50 items per page</option>\n    </select>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/category/containers/domaincat/domaincat.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/category/containers/domaincat/domaincat.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard\n    ><sb-dashboard-head ></sb-dashboard-head>\n         <div class=\"card-body\"><sb-domain ></sb-domain></div>\n</sb-layout-dashboard>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/category/containers/otherscat/otherscat.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/category/containers/otherscat/otherscat.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard\n    ><sb-dashboard-head ></sb-dashboard-head>\n         <div class=\"card-body\"><sb-others></sb-others></div>\n</sb-layout-dashboard>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/category/containers/techcat/techcat.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/category/containers/techcat/techcat.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard\n    ><sb-dashboard-head ></sb-dashboard-head>\n         <div class=\"card-body\"><sb-tech></sb-tech></div>\n</sb-layout-dashboard>\n");

/***/ }),

/***/ "./src/modules/category/category-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/modules/category/category-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, CategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryRoutingModule", function() { return CategoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.module */ "./src/modules/category/category.module.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "./src/modules/category/containers/index.ts");

/* tslint:disable: ordered-imports*/


/* Module */

/* Containers */

/* Routes */
const ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tech',
    },
    {
        path: 'tech',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["TechCatComponent"],
        data: {
            title: 'Technical Category',
        },
    },
    {
        path: 'domain',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["DomainCatComponent"],
        data: {
            title: 'Domain Category',
        },
    },
    {
        path: 'others',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["OthersCatComponent"],
        data: {
            title: 'Others Category',
        },
    },
];
let CategoryRoutingModule = class CategoryRoutingModule {
};
CategoryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_category_module__WEBPACK_IMPORTED_MODULE_3__["CategoryModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoryRoutingModule);



/***/ }),

/***/ "./src/modules/category/category.module.ts":
/*!*************************************************!*\
  !*** ./src/modules/category/category.module.ts ***!
  \*************************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/app-common.module */ "./src/modules/app-common/app-common.module.ts");
/* harmony import */ var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/navigation/navigation.module */ "./src/modules/navigation/navigation.module.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./src/modules/category/components/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers */ "./src/modules/category/containers/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards */ "./src/modules/category/guards/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services */ "./src/modules/category/services/index.ts");
/* harmony import */ var _addnewpost_services_post_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../addnewpost/services/post.service */ "./src/modules/addnewpost/services/post.service.ts");
/* harmony import */ var _addnewquery_services_query_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../addnewquery/services/query.service */ "./src/modules/addnewquery/services/query.service.ts");

/* tslint:disable: ordered-imports*/




/* Modules */


/* Components */

/* Containers */

/* Guards */

/* Services */



let CategoryModule = class CategoryModule {
};
CategoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
            _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"],
        ],
        providers: [..._services__WEBPACK_IMPORTED_MODULE_10__["services"], ..._guards__WEBPACK_IMPORTED_MODULE_9__["guards"], _addnewpost_services_post_service__WEBPACK_IMPORTED_MODULE_11__["PostService"], _addnewquery_services_query_service__WEBPACK_IMPORTED_MODULE_12__["QueryService"]],
        declarations: [..._containers__WEBPACK_IMPORTED_MODULE_8__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_7__["components"]],
        exports: [..._containers__WEBPACK_IMPORTED_MODULE_8__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_7__["components"]],
    })
], CategoryModule);



/***/ }),

/***/ "./src/modules/category/components/domain/domain.component.scss":
/*!**********************************************************************!*\
  !*** ./src/modules/category/components/domain/domain.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9jYXRlZ29yeS9jb21wb25lbnRzL2RvbWFpbi9kb21haW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/modules/category/components/domain/domain.component.ts":
/*!********************************************************************!*\
  !*** ./src/modules/category/components/domain/domain.component.ts ***!
  \********************************************************************/
/*! exports provided: DomainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainComponent", function() { return DomainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _addnewpost_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../addnewpost/services/post.service */ "./src/modules/addnewpost/services/post.service.ts");



let DomainComponent = class DomainComponent {
    constructor(postService) {
        this.postService = postService;
    }
    ngOnInit() {
        this.posts = this.postService.getPosts();
    }
    setAsFAQ(post) {
        post.isFAQ = true;
        this.postService.setFAQstatus(post);
    }
};
DomainComponent.ctorParameters = () => [
    { type: _addnewpost_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
DomainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-domain',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./domain.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/category/components/domain/domain.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./domain.component.scss */ "./src/modules/category/components/domain/domain.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_addnewpost_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
], DomainComponent);



/***/ }),

/***/ "./src/modules/category/components/index.ts":
/*!**************************************************!*\
  !*** ./src/modules/category/components/index.ts ***!
  \**************************************************/
/*! exports provided: components, OthersComponent, TechComponent, DomainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _domain_domain_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain/domain.component */ "./src/modules/category/components/domain/domain.component.ts");
/* harmony import */ var _others_others_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./others/others.component */ "./src/modules/category/components/others/others.component.ts");
/* harmony import */ var _tech_tech_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tech/tech.component */ "./src/modules/category/components/tech/tech.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OthersComponent", function() { return _others_others_component__WEBPACK_IMPORTED_MODULE_2__["OthersComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TechComponent", function() { return _tech_tech_component__WEBPACK_IMPORTED_MODULE_3__["TechComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomainComponent", function() { return _domain_domain_component__WEBPACK_IMPORTED_MODULE_1__["DomainComponent"]; });





const components = [_domain_domain_component__WEBPACK_IMPORTED_MODULE_1__["DomainComponent"], _tech_tech_component__WEBPACK_IMPORTED_MODULE_3__["TechComponent"], _others_others_component__WEBPACK_IMPORTED_MODULE_2__["OthersComponent"]];





/***/ }),

/***/ "./src/modules/category/components/others/others.component.scss":
/*!**********************************************************************!*\
  !*** ./src/modules/category/components/others/others.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9jYXRlZ29yeS9jb21wb25lbnRzL290aGVycy9vdGhlcnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/modules/category/components/others/others.component.ts":
/*!********************************************************************!*\
  !*** ./src/modules/category/components/others/others.component.ts ***!
  \********************************************************************/
/*! exports provided: OthersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersComponent", function() { return OthersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _addnewpost_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../addnewpost/services/post.service */ "./src/modules/addnewpost/services/post.service.ts");



let OthersComponent = class OthersComponent {
    constructor(postService) {
        this.postService = postService;
    }
    ngOnInit() {
        this.posts = this.postService.getPosts();
    }
    setAsFAQ(post) {
        post.isFAQ = true;
        this.postService.setFAQstatus(post);
    }
};
OthersComponent.ctorParameters = () => [
    { type: _addnewpost_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
OthersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-others',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./others.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/category/components/others/others.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./others.component.scss */ "./src/modules/category/components/others/others.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_addnewpost_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
], OthersComponent);



/***/ }),

/***/ "./src/modules/category/components/tech/tech.component.scss":
/*!******************************************************************!*\
  !*** ./src/modules/category/components/tech/tech.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9jYXRlZ29yeS9jb21wb25lbnRzL3RlY2gvdGVjaC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/modules/category/components/tech/tech.component.ts":
/*!****************************************************************!*\
  !*** ./src/modules/category/components/tech/tech.component.ts ***!
  \****************************************************************/
/*! exports provided: TechComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechComponent", function() { return TechComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _addnewpost_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../addnewpost/services/post.service */ "./src/modules/addnewpost/services/post.service.ts");



let TechComponent = class TechComponent {
    constructor(postService) {
        this.postService = postService;
    }
    ngOnInit() {
        this.posts = this.postService.getPosts();
    }
    setAsFAQ(post) {
        post.isFAQ = true;
        this.postService.setFAQstatus(post);
    }
};
TechComponent.ctorParameters = () => [
    { type: _addnewpost_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
TechComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-tech',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tech.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/category/components/tech/tech.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tech.component.scss */ "./src/modules/category/components/tech/tech.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_addnewpost_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
], TechComponent);



/***/ }),

/***/ "./src/modules/category/containers/domaincat/domaincat.component.scss":
/*!****************************************************************************!*\
  !*** ./src/modules/category/containers/domaincat/domaincat.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9jYXRlZ29yeS9jb250YWluZXJzL2RvbWFpbmNhdC9kb21haW5jYXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/modules/category/containers/domaincat/domaincat.component.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/category/containers/domaincat/domaincat.component.ts ***!
  \**************************************************************************/
/*! exports provided: DomainCatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainCatComponent", function() { return DomainCatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DomainCatComponent = class DomainCatComponent {
    constructor() { }
    ngOnInit() { }
};
DomainCatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-domaincat',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./domaincat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/category/containers/domaincat/domaincat.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./domaincat.component.scss */ "./src/modules/category/containers/domaincat/domaincat.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DomainCatComponent);



/***/ }),

/***/ "./src/modules/category/containers/index.ts":
/*!**************************************************!*\
  !*** ./src/modules/category/containers/index.ts ***!
  \**************************************************/
/*! exports provided: containers, OthersCatComponent, TechCatComponent, DomainCatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _domaincat_domaincat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domaincat/domaincat.component */ "./src/modules/category/containers/domaincat/domaincat.component.ts");
/* harmony import */ var _otherscat_otherscat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otherscat/otherscat.component */ "./src/modules/category/containers/otherscat/otherscat.component.ts");
/* harmony import */ var _techcat_techcat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./techcat/techcat.component */ "./src/modules/category/containers/techcat/techcat.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OthersCatComponent", function() { return _otherscat_otherscat_component__WEBPACK_IMPORTED_MODULE_2__["OthersCatComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TechCatComponent", function() { return _techcat_techcat_component__WEBPACK_IMPORTED_MODULE_3__["TechCatComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomainCatComponent", function() { return _domaincat_domaincat_component__WEBPACK_IMPORTED_MODULE_1__["DomainCatComponent"]; });





const containers = [_domaincat_domaincat_component__WEBPACK_IMPORTED_MODULE_1__["DomainCatComponent"], _techcat_techcat_component__WEBPACK_IMPORTED_MODULE_3__["TechCatComponent"], _otherscat_otherscat_component__WEBPACK_IMPORTED_MODULE_2__["OthersCatComponent"]];





/***/ }),

/***/ "./src/modules/category/containers/otherscat/otherscat.component.scss":
/*!****************************************************************************!*\
  !*** ./src/modules/category/containers/otherscat/otherscat.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9jYXRlZ29yeS9jb250YWluZXJzL290aGVyc2NhdC9vdGhlcnNjYXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/modules/category/containers/otherscat/otherscat.component.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/category/containers/otherscat/otherscat.component.ts ***!
  \**************************************************************************/
/*! exports provided: OthersCatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersCatComponent", function() { return OthersCatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OthersCatComponent = class OthersCatComponent {
    constructor() { }
    ngOnInit() { }
};
OthersCatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-otherscat',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./otherscat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/category/containers/otherscat/otherscat.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./otherscat.component.scss */ "./src/modules/category/containers/otherscat/otherscat.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], OthersCatComponent);



/***/ }),

/***/ "./src/modules/category/containers/techcat/techcat.component.scss":
/*!************************************************************************!*\
  !*** ./src/modules/category/containers/techcat/techcat.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9jYXRlZ29yeS9jb250YWluZXJzL3RlY2hjYXQvdGVjaGNhdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/modules/category/containers/techcat/techcat.component.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/category/containers/techcat/techcat.component.ts ***!
  \**********************************************************************/
/*! exports provided: TechCatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechCatComponent", function() { return TechCatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TechCatComponent = class TechCatComponent {
    constructor() { }
    ngOnInit() { }
};
TechCatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-techcat',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./techcat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/category/containers/techcat/techcat.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./techcat.component.scss */ "./src/modules/category/containers/techcat/techcat.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TechCatComponent);



/***/ }),

/***/ "./src/modules/category/guards/category.guard.ts":
/*!*******************************************************!*\
  !*** ./src/modules/category/guards/category.guard.ts ***!
  \*******************************************************/
/*! exports provided: CategoryGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryGuard", function() { return CategoryGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let CategoryGuard = class CategoryGuard {
    canActivate() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
};
CategoryGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CategoryGuard);



/***/ }),

/***/ "./src/modules/category/guards/index.ts":
/*!**********************************************!*\
  !*** ./src/modules/category/guards/index.ts ***!
  \**********************************************/
/*! exports provided: guards, CategoryGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _category_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.guard */ "./src/modules/category/guards/category.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryGuard", function() { return _category_guard__WEBPACK_IMPORTED_MODULE_1__["CategoryGuard"]; });



const guards = [_category_guard__WEBPACK_IMPORTED_MODULE_1__["CategoryGuard"]];



/***/ }),

/***/ "./src/modules/category/services/category.service.ts":
/*!***********************************************************!*\
  !*** ./src/modules/category/services/category.service.ts ***!
  \***********************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let CategoryService = class CategoryService {
    constructor() { }
    getAuth$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
    }
};
CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CategoryService);



/***/ }),

/***/ "./src/modules/category/services/index.ts":
/*!************************************************!*\
  !*** ./src/modules/category/services/index.ts ***!
  \************************************************/
/*! exports provided: services, CategoryService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.service */ "./src/modules/category/services/category.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/modules/category/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return _category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });




const services = [_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]];




/***/ }),

/***/ "./src/modules/category/services/user.service.ts":
/*!*******************************************************!*\
  !*** ./src/modules/category/services/user.service.ts ***!
  \*******************************************************/
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
//# sourceMappingURL=modules-category-category-routing-module-es2015.js.map