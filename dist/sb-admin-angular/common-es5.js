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

    var PostService = /*#__PURE__*/function () {
      function PostService(firestore) {
        _classCallCheck(this, PostService);

        this.firestore = firestore;
        this.posts = this.firestore.collection('post').valueChanges();
      }

      _createClass(PostService, [{
        key: "getPosts",
        value: function getPosts() {
          return this.posts;
        }
      }, {
        key: "createPost",
        value: function createPost(post) {
          return this.firestore.collection('post').add(post);
        }
      }, {
        key: "updatePost",
        value: function updatePost(post) {
          delete post.id;
          this.firestore.doc('post/' + post.id).update(post);
        }
      }, {
        key: "deletePost",
        value: function deletePost(postId) {
          this.firestore.doc('post/' + postId)["delete"]();
        }
      }]);

      return PostService;
    }();

    PostService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])], PostService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map