function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/modules/addnewpost/services/post.service.ts":
  /*!*********************************************************!*\
    !*** ./src/modules/addnewpost/services/post.service.ts ***!
    \*********************************************************/

  /*! exports provided: PostService */

  /***/
  function srcModulesAddnewpostServicesPostServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostService", function () {
      return PostService;
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


    var _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @modules/auth/services */
    "./src/modules/auth/services/index.ts");

    var PostService = /*#__PURE__*/function () {
      function PostService(fireStore, authService) {
        _classCallCheck(this, PostService);

        this.fireStore = fireStore;
        this.authService = authService;
      }

      _createClass(PostService, [{
        key: "getPosts",
        value: function getPosts() {
          var t = this.fireStore.collection('post');
          return t.valueChanges();
        }
      }, {
        key: "createPost",
        value: function createPost(post) {
          var date = new Date();
          var id = date.getFullYear() + '_' + +date.getMonth() + '_' + +date.getDate() + '_' + +date.getTime();
          post.id = id;
          return this.fireStore.collection('post').doc(id).set(post);
        }
      }, {
        key: "updatePost",
        value: function updatePost(post) {
          this.fireStore.doc('post/' + post.id).update(post);
        }
      }, {
        key: "setFAQstatus",
        value: function setFAQstatus(post) {
          this.fireStore.doc('post/' + post.id).update({
            isFAQ: 1
          });
        }
      }, {
        key: "deletePost",
        value: function deletePost(postId) {
          this.fireStore.doc('post/' + postId)["delete"]();
        }
      }]);

      return PostService;
    }();

    PostService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], PostService);
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
    /* harmony import */


    var _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @modules/auth/services */
    "./src/modules/auth/services/index.ts");

    var QueryService = /*#__PURE__*/function () {
      function QueryService(fireStore, authService) {
        _classCallCheck(this, QueryService);

        this.fireStore = fireStore;
        this.authService = authService;
      }

      _createClass(QueryService, [{
        key: "getQueries",
        value: function getQueries() {
          var t = this.fireStore.collection('query');
          return t.valueChanges();
        }
      }, {
        key: "createQuery",
        value: function createQuery(query) {
          var date = new Date();
          var id = date.getFullYear() + '_' + +date.getMonth() + '_' + +date.getDate() + '_' + +date.getTime();
          query.id = id;
          return this.fireStore.collection('query').doc(id).set(query);
        }
      }, {
        key: "updateQuery",
        value: function updateQuery(query) {
          this.fireStore.doc('query/' + query.id).update(query);
        }
      }, {
        key: "setFAQstatus",
        value: function setFAQstatus(query) {
          this.fireStore.doc('query/' + query.id).update({
            isFAQ: 1
          });
        }
      }, {
        key: "deleteQuery",
        value: function deleteQuery(queryId) {
          this.fireStore.doc('query/' + queryId)["delete"]();
        }
      }]);

      return QueryService;
    }();

    QueryService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    QueryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], QueryService);
    /***/
  },

  /***/
  "./src/modules/auth/services/userskill.service.ts":
  /*!********************************************************!*\
    !*** ./src/modules/auth/services/userskill.service.ts ***!
    \********************************************************/

  /*! exports provided: UserSkillService */

  /***/
  function srcModulesAuthServicesUserskillServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSkillService", function () {
      return UserSkillService;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserSkillService = /*#__PURE__*/function () {
      function UserSkillService(fireStore, router) {
        _classCallCheck(this, UserSkillService);

        this.fireStore = fireStore;
        this.router = router;
        this.userSkills = this.fireStore.collection('userskill').valueChanges();
      }

      _createClass(UserSkillService, [{
        key: "getUserSkills",
        value: function getUserSkills() {
          return this.userSkills;
        }
      }, {
        key: "createUserSkill",
        value: function createUserSkill(userskill) {
          return this.fireStore.collection('userskill').doc(userskill.id).set(userskill);
        }
      }, {
        key: "updateUserSkill",
        value: function updateUserSkill(userskill) {
          // delete userskill.id;
          this.fireStore.doc('userskill/' + userskill.id).update(userskill);
        }
      }, {
        key: "deleteUserSkill",
        value: function deleteUserSkill(userskillId) {
          this.fireStore.doc('userskill/' + userskillId)["delete"]();
        }
      }]);

      return UserSkillService;
    }();

    UserSkillService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    UserSkillService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], UserSkillService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map