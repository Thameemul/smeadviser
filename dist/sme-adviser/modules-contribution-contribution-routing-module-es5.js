function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-contribution-contribution-routing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/components/faq/faq.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/components/faq/faq.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesContributionComponentsFaqFaqComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Frequently Asked Questions</h3>\n<ngb-accordion #acc=\"ngbAccordion\">\n    <ngb-panel *ngFor=\"let faq of faqs | async; let indexOfElement = index;\">\n        <ng-template ngbPanelHeader>\n            <button class=\"btn btn-link\" ngbPanelToggle>\n                <span>&#9733; <b> {{faq.title}}</b></span>\n            </button>\n        </ng-template>\n\n        <ng-template ngbPanelContent>\n            <div [innerHTML]=\"faq.postdesc\"></div>\n        </ng-template>\n    </ngb-panel>\n</ngb-accordion>\n<div class=\"d-flex justify-content-between p-2\">\n    <ngb-pagination [collectionSize]=\"10\" page=\"1\" [pageSize]=\"10\"> </ngb-pagination>\n    <select class=\"custom-select\" style=\"width: auto;\" name=\"pageSize\">\n        <option [ngValue]=\"10\" [selected]=\"true\">10 items per page</option>\n        <option [ngValue]=\"30\">30 items per page</option>\n        <option [ngValue]=\"50\">50 items per page</option>\n    </select>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/components/post/post.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/components/post/post.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesContributionComponentsPostPostComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Posts</h1>\n<ngb-accordion #acc=\"ngbAccordion\">\n    <ngb-panel *ngFor=\"let post of posts | async; let indexOfElement = index;\">\n        <ng-template ngbPanelHeader>\n            <button class=\"btn btn-link\" ngbPanelToggle>\n                <span>&#9733; <b> {{post.title}}</b></span>\n            </button>\n\n            <button type=\"button\" (click)=\"setAsFAQ(post)\" *ngIf=\"post.isFAQ == null || !post.isFAQ\"\n                class=\"btn btn-sm btn-outline-info float-lg-right\"\n                title=\"Add to Frequently Asked Questions\">&#43;</button>\n            <div class=\"float-lg-right\">\n                <span class=\"float-lg-right\" *ngIf=\"post.isFAQ != null && post.isFAQ\"\n                    class=\"badge badge-secondary\">FAQ</span>\n            </div>\n        </ng-template>\n\n        <ng-template ngbPanelContent>\n            <div [innerHTML]=\"post.postdesc\"></div>\n        </ng-template>\n    </ngb-panel>\n</ngb-accordion>\n<div class=\"d-flex justify-content-between p-2\">\n    <ngb-pagination [collectionSize]=\"10\" page=\"1\" [pageSize]=\"10\"> </ngb-pagination>\n    <select class=\"custom-select\" style=\"width: auto;\" name=\"pageSize\">\n        <option [ngValue]=\"10\" [selected]=\"true\">10 items per page</option>\n        <option [ngValue]=\"30\">30 items per page</option>\n        <option [ngValue]=\"50\">50 items per page</option>\n    </select>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/components/query/detailquery.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/components/query/detailquery.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesContributionComponentsQueryDetailqueryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\r\n    <div class=\"card-header\" >\r\n        <!-- style=\"background-color:slategrey\" -->\r\n        <h5 style=\"color:rgb(47, 0, 255)\"      class=\"card-title\">  {{ (query | async).title }}</h5>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <!-- <h6 style=\"color:rgb(47, 0, 255)\" class=\"medium mb-1 \">Query Description</h6> -->\r\n        <div   [innerHTML]=\"(query | async).querydesc\"></div>\r\n    </div>\r\n    <hr>\r\n    <ul class=\"list-group list-group-flush\">\r\n        <!-- <h6 style=\"color:rgb(47, 0, 255)\" class=\"medium mb-1 \">Responses</h6> -->\r\n        <li *ngFor=\"let r of replies | async; let indexOfElement = index;\" class=\"list-group-item\">\r\n            <h6 style=\"color:rgb(47, 0, 255)\" class=\"medium mb-1 \">Response {{indexOfElement + 1}}</h6>\r\n            <div [innerHTML]=\"r.desc\"></div>\r\n        </li>\r\n    </ul>\r\n    <div class=\"card-body\">\r\n        <!-- <h6 style=\"color:rgb(47, 0, 255)\" class=\"medium mb-1 \">Add Response</h6> -->\r\n        <angular-editor [config]=\"config\"></angular-editor>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n            <button type=\"submit\"  class=\"btn btn-primary \"  routerLink=\"/dashboard\"> Cancel</button>\r\n            <button type=\"submit\" class=\"btn btn-success  float-right\" autofocus> Add Response</button>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/components/query/query.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/components/query/query.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesContributionComponentsQueryQueryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<h1>querys</h1>\n<ngb-accordion #acc=\"ngbAccordion\">\n    <ngb-panel *ngFor=\"let query of queries | async; let indexOfElement = index;\">\n        <ng-template ngbPanelHeader>\n            <a [routerLink]=\"['/contribution/query',query.id]\" routerLinkActive=\"router-link-active\" ss=\"btn btn-link\" ngbPanelToggle>\n                <span>&#9733; <b> {{query.title}}</b></span>\n            </a>\n\n            <button type=\"button\" (click)=\"setAsFAQ(query)\" *ngIf=\"query.isFAQ == null || !query.isFAQ\"\n                class=\"btn btn-sm btn-outline-info float-lg-right\"\n                title=\"Add to Frequently Asked Questions\">&#43;</button>\n            <div class=\"float-lg-right\">\n                <span class=\"float-lg-right\" *ngIf=\"query.isFAQ != null && query.isFAQ\"\n                    class=\"badge badge-secondary\">FAQ</span>\n            </div>\n        </ng-template>\n\n        <ng-template ngbPanelContent>\n            <div [innerHTML]=\"query.querydesc\"></div>\n        </ng-template>\n    </ngb-panel>\n</ngb-accordion>\n<div class=\"d-flex justify-content-between p-2\">\n    <ngb-pagination [collectionSize]=\"10\" page=\"1\" [pageSize]=\"10\"> </ngb-pagination>\n    <select class=\"custom-select\" style=\"width: auto;\" name=\"pageSize\">\n        <option [ngValue]=\"10\" [selected]=\"true\">10 items per page</option>\n        <option [ngValue]=\"30\">30 items per page</option>\n        <option [ngValue]=\"50\">50 items per page</option>\n    </select>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/containers/Postcontri/postcontri.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/containers/Postcontri/postcontri.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesContributionContainersPostcontriPostcontriComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard\n    ><sb-dashboard-head ></sb-dashboard-head>\n         <div class=\"card-body\"><sb-post ></sb-post></div>\n</sb-layout-dashboard>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/containers/faqcontri/faqcontri.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/containers/faqcontri/faqcontri.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesContributionContainersFaqcontriFaqcontriComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard\n    ><sb-dashboard-head ></sb-dashboard-head>\n         <div class=\"card-body\"><sb-faq ></sb-faq></div>\n</sb-layout-dashboard>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/containers/querycontri/querycontri.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/containers/querycontri/querycontri.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesContributionContainersQuerycontriQuerycontriComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard\n    ><sb-dashboard-head ></sb-dashboard-head>\n         <div class=\"card-body\"><router-outlet></router-outlet></div>\n</sb-layout-dashboard>\n\n\n<!-- <sb-layout-dashboard\n    ><sb-dashboard-head ></sb-dashboard-head>\n         <div class=\"card-body\"><sb-query ></sb-query></div>\n</sb-layout-dashboard> -->\n";
    /***/
  },

  /***/
  "./src/modules/contribution/components/faq/faq.component.scss":
  /*!********************************************************************!*\
    !*** ./src/modules/contribution/components/faq/faq.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesContributionComponentsFaqFaqComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9jb250cmlidXRpb24vY29tcG9uZW50cy9mYXEvZmFxLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/contribution/components/faq/faq.component.ts":
  /*!******************************************************************!*\
    !*** ./src/modules/contribution/components/faq/faq.component.ts ***!
    \******************************************************************/

  /*! exports provided: FAQComponent */

  /***/
  function srcModulesContributionComponentsFaqFaqComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FAQComponent", function () {
      return FAQComponent;
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


    var _modules_contribution_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @modules/contribution/services */
    "./src/modules/contribution/services/index.ts");

    var FAQComponent = /*#__PURE__*/function () {
      function FAQComponent(contributionService) {
        _classCallCheck(this, FAQComponent);

        this.contributionService = contributionService;
      }

      _createClass(FAQComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.faqs = this.contributionService.getFAQs();
        }
      }]);

      return FAQComponent;
    }();

    FAQComponent.ctorParameters = function () {
      return [{
        type: _modules_contribution_services__WEBPACK_IMPORTED_MODULE_2__["ContributionService"]
      }];
    };

    FAQComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-faq',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./faq.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/components/faq/faq.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./faq.component.scss */
      "./src/modules/contribution/components/faq/faq.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_contribution_services__WEBPACK_IMPORTED_MODULE_2__["ContributionService"]])], FAQComponent);
    /***/
  },

  /***/
  "./src/modules/contribution/components/index.ts":
  /*!******************************************************!*\
    !*** ./src/modules/contribution/components/index.ts ***!
    \******************************************************/

  /*! exports provided: components, PostComponent, QueryComponent, FAQComponent, DetailqueryComponent */

  /***/
  function srcModulesContributionComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _faq_faq_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./faq/faq.component */
    "./src/modules/contribution/components/faq/faq.component.ts");
    /* harmony import */


    var _post_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./post/post.component */
    "./src/modules/contribution/components/post/post.component.ts");
    /* harmony import */


    var _query_detailquery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./query/detailquery.component */
    "./src/modules/contribution/components/query/detailquery.component.ts");
    /* harmony import */


    var _query_query_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./query/query.component */
    "./src/modules/contribution/components/query/query.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PostComponent", function () {
      return _post_post_component__WEBPACK_IMPORTED_MODULE_2__["PostComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "QueryComponent", function () {
      return _query_query_component__WEBPACK_IMPORTED_MODULE_4__["QueryComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FAQComponent", function () {
      return _faq_faq_component__WEBPACK_IMPORTED_MODULE_1__["FAQComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DetailqueryComponent", function () {
      return _query_detailquery_component__WEBPACK_IMPORTED_MODULE_3__["DetailqueryComponent"];
    });

    var components = [_post_post_component__WEBPACK_IMPORTED_MODULE_2__["PostComponent"], _query_query_component__WEBPACK_IMPORTED_MODULE_4__["QueryComponent"], _faq_faq_component__WEBPACK_IMPORTED_MODULE_1__["FAQComponent"], _query_detailquery_component__WEBPACK_IMPORTED_MODULE_3__["DetailqueryComponent"]];
    /***/
  },

  /***/
  "./src/modules/contribution/components/post/post.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/modules/contribution/components/post/post.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesContributionComponentsPostPostComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9jb250cmlidXRpb24vY29tcG9uZW50cy9wb3N0L3Bvc3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/contribution/components/post/post.component.ts":
  /*!********************************************************************!*\
    !*** ./src/modules/contribution/components/post/post.component.ts ***!
    \********************************************************************/

  /*! exports provided: PostComponent */

  /***/
  function srcModulesContributionComponentsPostPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostComponent", function () {
      return PostComponent;
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


    var _addnewpost_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../addnewpost/services/post.service */
    "./src/modules/addnewpost/services/post.service.ts");

    var PostComponent = /*#__PURE__*/function () {
      function PostComponent(postService) {
        _classCallCheck(this, PostComponent);

        this.postService = postService;
      }

      _createClass(PostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.posts = this.postService.getPosts();
        }
      }, {
        key: "setAsFAQ",
        value: function setAsFAQ(post) {
          post.isFAQ = true;
          this.postService.setFAQstatus(post);
        }
      }]);

      return PostComponent;
    }();

    PostComponent.ctorParameters = function () {
      return [{
        type: _addnewpost_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]
      }];
    };

    PostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-post',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./post.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/components/post/post.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./post.component.scss */
      "./src/modules/contribution/components/post/post.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_addnewpost_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])], PostComponent);
    /***/
  },

  /***/
  "./src/modules/contribution/components/query/detailquery.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/modules/contribution/components/query/detailquery.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesContributionComponentsQueryDetailqueryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9jb250cmlidXRpb24vY29tcG9uZW50cy9xdWVyeS9kZXRhaWxxdWVyeS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/contribution/components/query/detailquery.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/modules/contribution/components/query/detailquery.component.ts ***!
    \****************************************************************************/

  /*! exports provided: DetailqueryComponent */

  /***/
  function srcModulesContributionComponentsQueryDetailqueryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailqueryComponent", function () {
      return DetailqueryComponent;
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


    var _modules_contribution_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @modules/contribution/services */
    "./src/modules/contribution/services/index.ts");

    var DetailqueryComponent = /*#__PURE__*/function () {
      function DetailqueryComponent(contributionService, route) {
        _classCallCheck(this, DetailqueryComponent);

        this.contributionService = contributionService;
        this.route = route;
        this.htmlContent = '';
        this.config = {
          editable: true,
          spellcheck: true,
          height: '5rem',
          minHeight: '15rem',
          placeholder: '',
          translate: 'no',
          defaultParagraphSeparator: 'p',
          defaultFontName: 'Arial'
        };
      }

      _createClass(DetailqueryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.params.subscribe(function (params) {
            _this.query = _this.contributionService.getQuery(params.docid);
            _this.replies = _this.contributionService.getReplies(params.docid);
          });
        }
      }]);

      return DetailqueryComponent;
    }();

    DetailqueryComponent.ctorParameters = function () {
      return [{
        type: _modules_contribution_services__WEBPACK_IMPORTED_MODULE_3__["ContributionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    DetailqueryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-detailquery',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./detailquery.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/components/query/detailquery.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./detailquery.component.scss */
      "./src/modules/contribution/components/query/detailquery.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_contribution_services__WEBPACK_IMPORTED_MODULE_3__["ContributionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], DetailqueryComponent);
    /***/
  },

  /***/
  "./src/modules/contribution/components/query/query.component.scss":
  /*!************************************************************************!*\
    !*** ./src/modules/contribution/components/query/query.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesContributionComponentsQueryQueryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9jb250cmlidXRpb24vY29tcG9uZW50cy9xdWVyeS9xdWVyeS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/contribution/components/query/query.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/modules/contribution/components/query/query.component.ts ***!
    \**********************************************************************/

  /*! exports provided: QueryComponent */

  /***/
  function srcModulesContributionComponentsQueryQueryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QueryComponent", function () {
      return QueryComponent;
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


    var _addnewquery_services_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../addnewquery/services/query.service */
    "./src/modules/addnewquery/services/query.service.ts");

    var QueryComponent = /*#__PURE__*/function () {
      function QueryComponent(queryService) {
        _classCallCheck(this, QueryComponent);

        this.queryService = queryService;
      }

      _createClass(QueryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.queries = this.queryService.getQueries();
        }
      }, {
        key: "setAsFAQ",
        value: function setAsFAQ(query) {
          query.isFAQ = true;
          this.queryService.setFAQstatus(query);
        }
      }]);

      return QueryComponent;
    }();

    QueryComponent.ctorParameters = function () {
      return [{
        type: _addnewquery_services_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"]
      }];
    };

    QueryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-query',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./query.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/components/query/query.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./query.component.scss */
      "./src/modules/contribution/components/query/query.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_addnewquery_services_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"]])], QueryComponent);
    /***/
  },

  /***/
  "./src/modules/contribution/containers/Postcontri/postcontri.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/modules/contribution/containers/Postcontri/postcontri.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesContributionContainersPostcontriPostcontriComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9jb250cmlidXRpb24vY29udGFpbmVycy9Qb3N0Y29udHJpL3Bvc3Rjb250cmkuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/contribution/containers/Postcontri/postcontri.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/modules/contribution/containers/Postcontri/postcontri.component.ts ***!
    \********************************************************************************/

  /*! exports provided: PostContriComponent */

  /***/
  function srcModulesContributionContainersPostcontriPostcontriComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostContriComponent", function () {
      return PostContriComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PostContriComponent = /*#__PURE__*/function () {
      function PostContriComponent() {
        _classCallCheck(this, PostContriComponent);
      }

      _createClass(PostContriComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PostContriComponent;
    }();

    PostContriComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-postcontri',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./postcontri.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/containers/Postcontri/postcontri.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./postcontri.component.scss */
      "./src/modules/contribution/containers/Postcontri/postcontri.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PostContriComponent);
    /***/
  },

  /***/
  "./src/modules/contribution/containers/faqcontri/faqcontri.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/modules/contribution/containers/faqcontri/faqcontri.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesContributionContainersFaqcontriFaqcontriComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9jb250cmlidXRpb24vY29udGFpbmVycy9mYXFjb250cmkvZmFxY29udHJpLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/contribution/containers/faqcontri/faqcontri.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/modules/contribution/containers/faqcontri/faqcontri.component.ts ***!
    \******************************************************************************/

  /*! exports provided: FAQContriComponent */

  /***/
  function srcModulesContributionContainersFaqcontriFaqcontriComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FAQContriComponent", function () {
      return FAQContriComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FAQContriComponent = /*#__PURE__*/function () {
      function FAQContriComponent() {
        _classCallCheck(this, FAQContriComponent);
      }

      _createClass(FAQContriComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FAQContriComponent;
    }();

    FAQContriComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-faqcontri',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./faqcontri.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/containers/faqcontri/faqcontri.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./faqcontri.component.scss */
      "./src/modules/contribution/containers/faqcontri/faqcontri.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FAQContriComponent);
    /***/
  },

  /***/
  "./src/modules/contribution/containers/index.ts":
  /*!******************************************************!*\
    !*** ./src/modules/contribution/containers/index.ts ***!
    \******************************************************/

  /*! exports provided: containers, QueryContriComponent, FAQContriComponent, PostContriComponent */

  /***/
  function srcModulesContributionContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _faqcontri_faqcontri_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./faqcontri/faqcontri.component */
    "./src/modules/contribution/containers/faqcontri/faqcontri.component.ts");
    /* harmony import */


    var _Postcontri_postcontri_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Postcontri/postcontri.component */
    "./src/modules/contribution/containers/Postcontri/postcontri.component.ts");
    /* harmony import */


    var _querycontri_querycontri_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./querycontri/querycontri.component */
    "./src/modules/contribution/containers/querycontri/querycontri.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "QueryContriComponent", function () {
      return _querycontri_querycontri_component__WEBPACK_IMPORTED_MODULE_3__["QueryContriComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FAQContriComponent", function () {
      return _faqcontri_faqcontri_component__WEBPACK_IMPORTED_MODULE_1__["FAQContriComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PostContriComponent", function () {
      return _Postcontri_postcontri_component__WEBPACK_IMPORTED_MODULE_2__["PostContriComponent"];
    });

    var containers = [_Postcontri_postcontri_component__WEBPACK_IMPORTED_MODULE_2__["PostContriComponent"], _querycontri_querycontri_component__WEBPACK_IMPORTED_MODULE_3__["QueryContriComponent"], _faqcontri_faqcontri_component__WEBPACK_IMPORTED_MODULE_1__["FAQContriComponent"]];
    /***/
  },

  /***/
  "./src/modules/contribution/containers/querycontri/querycontri.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/modules/contribution/containers/querycontri/querycontri.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesContributionContainersQuerycontriQuerycontriComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9jb250cmlidXRpb24vY29udGFpbmVycy9xdWVyeWNvbnRyaS9xdWVyeWNvbnRyaS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/contribution/containers/querycontri/querycontri.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/modules/contribution/containers/querycontri/querycontri.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: QueryContriComponent */

  /***/
  function srcModulesContributionContainersQuerycontriQuerycontriComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QueryContriComponent", function () {
      return QueryContriComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var QueryContriComponent = /*#__PURE__*/function () {
      function QueryContriComponent() {
        _classCallCheck(this, QueryContriComponent);
      }

      _createClass(QueryContriComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return QueryContriComponent;
    }();

    QueryContriComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-querycontri',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./querycontri.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/contribution/containers/querycontri/querycontri.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./querycontri.component.scss */
      "./src/modules/contribution/containers/querycontri/querycontri.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], QueryContriComponent);
    /***/
  },

  /***/
  "./src/modules/contribution/contribution-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/modules/contribution/contribution-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ROUTES, ContributionRoutingModule */

  /***/
  function srcModulesContributionContributionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContributionRoutingModule", function () {
      return ContributionRoutingModule;
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


    var _contribution_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contribution.module */
    "./src/modules/contribution/contribution.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/contribution/containers/index.ts");
    /* harmony import */


    var _guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./guards */
    "./src/modules/contribution/guards/index.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components */
    "./src/modules/contribution/components/index.ts");
    /* tslint:disable: ordered-imports*/

    /* Module */

    /* Containers */

    /* Guards */

    /* Components */

    /* Routes */


    var ROUTES = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'post'
    }, {
      path: 'post',
      canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["ContributionGuard"]],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["PostContriComponent"],
      data: {
        title: 'Post - SME Adviser'
      }
    }, {
      path: 'query',
      canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["ContributionGuard"]],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["QueryContriComponent"],
      children: [{
        path: '',
        component: _components__WEBPACK_IMPORTED_MODULE_6__["QueryComponent"]
      }, {
        path: ':docid',
        component: _components__WEBPACK_IMPORTED_MODULE_6__["DetailqueryComponent"]
      }],
      data: {
        title: 'Query - SME Adviser'
      }
    }, {
      path: 'faq',
      canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["ContributionGuard"]],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["FAQContriComponent"],
      data: {
        title: 'FAQ - SME Adviser'
      }
    }];

    var ContributionRoutingModule = function ContributionRoutingModule() {
      _classCallCheck(this, ContributionRoutingModule);
    };

    ContributionRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_contribution_module__WEBPACK_IMPORTED_MODULE_3__["ContributionModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContributionRoutingModule);
    /***/
  },

  /***/
  "./src/modules/contribution/contribution.module.ts":
  /*!*********************************************************!*\
    !*** ./src/modules/contribution/contribution.module.ts ***!
    \*********************************************************/

  /*! exports provided: ContributionModule */

  /***/
  function srcModulesContributionContributionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContributionModule", function () {
      return ContributionModule;
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


    var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _common_app_common_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @common/app-common.module */
    "./src/modules/app-common/app-common.module.ts");
    /* harmony import */


    var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @modules/navigation/navigation.module */
    "./src/modules/navigation/navigation.module.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components */
    "./src/modules/contribution/components/index.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/contribution/containers/index.ts");
    /* harmony import */


    var _guards__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./guards */
    "./src/modules/contribution/guards/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services */
    "./src/modules/contribution/services/index.ts");
    /* harmony import */


    var _addnewpost_services_post_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../addnewpost/services/post.service */
    "./src/modules/addnewpost/services/post.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _addnewquery_services_query_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../addnewquery/services/query.service */
    "./src/modules/addnewquery/services/query.service.ts");
    /* tslint:disable: ordered-imports*/
    //  Firebase

    /* Modules */

    /* Components */

    /* Containers */

    /* Guards */

    /* Services */


    var ContributionModule = function ContributionModule() {
      _classCallCheck(this, ContributionModule);
    };

    ContributionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_10__["AppCommonModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_11__["NavigationModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditorModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
      providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_15__["services"]), [_addnewpost_services_post_service__WEBPACK_IMPORTED_MODULE_16__["PostService"], _addnewquery_services_query_service__WEBPACK_IMPORTED_MODULE_18__["QueryService"]], _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_14__["guards"])),
      declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_13__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_12__["components"])),
      exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_13__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_12__["components"]))
    })], ContributionModule);
    /***/
  },

  /***/
  "./src/modules/contribution/guards/contribution.guard.ts":
  /*!***************************************************************!*\
    !*** ./src/modules/contribution/guards/contribution.guard.ts ***!
    \***************************************************************/

  /*! exports provided: ContributionGuard */

  /***/
  function srcModulesContributionGuardsContributionGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContributionGuard", function () {
      return ContributionGuard;
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


    var _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @modules/auth/services */
    "./src/modules/auth/services/index.ts");

    var ContributionGuard = /*#__PURE__*/function () {
      function ContributionGuard(authService, router) {
        _classCallCheck(this, ContributionGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(ContributionGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['auth/login']);
          }

          return true;
        }
      }]);

      return ContributionGuard;
    }();

    ContributionGuard.ctorParameters = function () {
      return [{
        type: _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ContributionGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ContributionGuard);
    /***/
  },

  /***/
  "./src/modules/contribution/guards/index.ts":
  /*!**************************************************!*\
    !*** ./src/modules/contribution/guards/index.ts ***!
    \**************************************************/

  /*! exports provided: guards, ContributionGuard */

  /***/
  function srcModulesContributionGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _contribution_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./contribution.guard */
    "./src/modules/contribution/guards/contribution.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ContributionGuard", function () {
      return _contribution_guard__WEBPACK_IMPORTED_MODULE_1__["ContributionGuard"];
    });

    var guards = [_contribution_guard__WEBPACK_IMPORTED_MODULE_1__["ContributionGuard"]];
    /***/
  },

  /***/
  "./src/modules/contribution/services/contribution.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/modules/contribution/services/contribution.service.ts ***!
    \*******************************************************************/

  /*! exports provided: ContributionService */

  /***/
  function srcModulesContributionServicesContributionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContributionService", function () {
      return ContributionService;
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

    var ContributionService = /*#__PURE__*/function () {
      function ContributionService() {
        _classCallCheck(this, ContributionService);
      }

      _createClass(ContributionService, [{
        key: "getAuth$",
        value: function getAuth$() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
      }, {
        key: "getFAQs",
        value: function getFAQs() {
          // const t: AngularFirestoreCollection = this.firestore.collection<Post>('post');
          // return t.valueChanges();
          var o = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var t = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('post').where('isFAQ', '==', 1).get().then(function (querySnapshot) {
              var faqs = [];
              querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                faqs.push(doc.data()); //console.log(doc.id, ' => ', doc.data());
              });
              observer.next(faqs);
            });
          });
          return o;
        }
      }, {
        key: "getReplies",
        value: function getReplies(docId) {
          var o = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var t = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('query').doc(docId).collection('replies') // .where('isFAQ', '==', 1)
            .get().then(function (querySnapshot) {
              var replies = [];
              querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, ' => ', doc.data());
                replies.push(doc.data());
              });
              observer.next(replies);
            });
          });
          return o;
        }
      }, {
        key: "getQueries",
        value: function getQueries() {
          var o = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var t = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('query') // .where('isFAQ', '==', 1)
            .get().then(function (querySnapshot) {
              var queries = [];
              querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                queries.push(Object.assign({
                  id: doc.id
                }, doc.data())); // console.log(doc.id, ' => ', doc.data());
              });
              observer.next(queries);
            });
          });
          return o;
        }
      }, {
        key: "getQuery",
        value: function getQuery(id) {
          var o = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var t = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('query').doc(id).get({
              source: 'server'
            }).then(function (querySnapshot) {
              var _query = Object.assign({}, querySnapshot.data());

              console.log(_query);
              observer.next(_query);
            });
          });
          return o;
        }
      }]);

      return ContributionService;
    }();

    ContributionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ContributionService);
    /***/
  },

  /***/
  "./src/modules/contribution/services/index.ts":
  /*!****************************************************!*\
    !*** ./src/modules/contribution/services/index.ts ***!
    \****************************************************/

  /*! exports provided: services, ContributionService, UserService */

  /***/
  function srcModulesContributionServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _contribution_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./contribution.service */
    "./src/modules/contribution/services/contribution.service.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user.service */
    "./src/modules/contribution/services/user.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ContributionService", function () {
      return _contribution_service__WEBPACK_IMPORTED_MODULE_1__["ContributionService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"];
    });

    var services = [_contribution_service__WEBPACK_IMPORTED_MODULE_1__["ContributionService"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]];
    /***/
  },

  /***/
  "./src/modules/contribution/services/user.service.ts":
  /*!***********************************************************!*\
    !*** ./src/modules/contribution/services/user.service.ts ***!
    \***********************************************************/

  /*! exports provided: UserService */

  /***/
  function srcModulesContributionServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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

    var userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);

    var UserService = /*#__PURE__*/function () {
      function UserService() {
        _classCallCheck(this, UserService);

        this.user = {
          id: '123',
          firstName: 'Start',
          lastName: 'Bootstrap',
          email: 'no-reply@startbootstrap.com'
        };
      }

      _createClass(UserService, [{
        key: "user",
        set: function set(user) {
          userSubject.next(user);
        }
      }, {
        key: "user$",
        get: function get() {
          return userSubject.asObservable();
        }
      }]);

      return UserService;
    }();

    UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], UserService);
    /***/
  }
}]);
//# sourceMappingURL=modules-contribution-contribution-routing-module-es5.js.map