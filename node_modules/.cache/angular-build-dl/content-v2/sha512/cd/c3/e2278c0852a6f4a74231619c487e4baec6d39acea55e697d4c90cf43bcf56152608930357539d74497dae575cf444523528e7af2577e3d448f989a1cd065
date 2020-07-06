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
/* harmony import */ var _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/auth/services */ "./src/modules/auth/services/index.ts");




let PostService = class PostService {
    constructor(fireStore, authService) {
        this.fireStore = fireStore;
        this.authService = authService;
    }
    getPosts() {
        const t = this.fireStore.collection('post');
        return t.valueChanges();
    }
    createPost(post) {
        const date = new Date();
        const id = date.getFullYear() +
            '_' +
            +date.getMonth() +
            '_' +
            +date.getDate() +
            '_' +
            +date.getTime();
        post.id = id;
        return this.fireStore.collection('post').doc(id).set(post);
    }
    updatePost(post) {
        this.fireStore.doc('post/' + post.id).update(post);
    }
    setFAQstatus(post) {
        this.fireStore.doc('post/' + post.id).update({ isFAQ: 1 });
    }
    deletePost(postId) {
        this.fireStore.doc('post/' + postId).delete();
    }
};
PostService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], PostService);



/***/ }),

/***/ "./src/modules/addnewquery/services/query.service.ts":
/*!***********************************************************!*\
  !*** ./src/modules/addnewquery/services/query.service.ts ***!
  \***********************************************************/
/*! exports provided: QueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryService", function() { return QueryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/auth/services */ "./src/modules/auth/services/index.ts");




let QueryService = class QueryService {
    constructor(fireStore, authService) {
        this.fireStore = fireStore;
        this.authService = authService;
    }
    getQueries() {
        const t = this.fireStore.collection('query');
        return t.valueChanges();
    }
    createQuery(query) {
        const date = new Date();
        const id = date.getFullYear() +
            '_' +
            +date.getMonth() +
            '_' +
            +date.getDate() +
            '_' +
            +date.getTime();
        query.id = id;
        return this.fireStore.collection('query').doc(id).set(query);
    }
    updateQuery(query) {
        this.fireStore.doc('query/' + query.id).update(query);
    }
    setFAQstatus(query) {
        this.fireStore.doc('query/' + query.id).update({ isFAQ: 1 });
    }
    deleteQuery(queryId) {
        this.fireStore.doc('query/' + queryId).delete();
    }
};
QueryService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
QueryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], QueryService);



/***/ }),

/***/ "./src/modules/auth/services/userskill.service.ts":
/*!********************************************************!*\
  !*** ./src/modules/auth/services/userskill.service.ts ***!
  \********************************************************/
/*! exports provided: UserSkillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSkillService", function() { return UserSkillService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UserSkillService = class UserSkillService {
    constructor(fireStore, router) {
        this.fireStore = fireStore;
        this.router = router;
        this.userSkills = this.fireStore.collection('userskill').valueChanges();
    }
    getUserSkills() {
        return this.userSkills;
    }
    createUserSkill(userskill) {
        return this.fireStore.collection('userskill').add(userskill);
    }
    updateUserSkill(userskill) {
        delete userskill.id;
        this.fireStore.doc('userskill/' + userskill.id).update(userskill);
    }
    deleteUserSkill(userskillId) {
        this.fireStore.doc('userskill/' + userskillId).delete();
    }
};
UserSkillService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UserSkillService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], UserSkillService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map