(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/modules/addnewpost/services/post.service.ts":
/*!*********************************************************!*\
  !*** ./src/modules/addnewpost/services/post.service.ts ***!
  \*********************************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");



let PostService = class PostService {
    constructor(firestore) {
        this.firestore = firestore;
        this.posts = this.firestore.collection('post').valueChanges();
    }
    getPosts() {
        return this.posts;
    }
    createPost(post) {
        return this.firestore.collection('post').add(post);
    }
    updatePost(post) {
        delete post.id;
        this.firestore.doc('post/' + post.id).update(post);
    }
    deletePost(postId) {
        this.firestore.doc('post/' + postId).delete();
    }
};
PostService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], PostService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map