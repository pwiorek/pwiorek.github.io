(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





const routes = [
    { path: 'grafik', component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");



class AppComponent {
    constructor() {
        this.title = 'stajnia-hubertus';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
    } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");







class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        ], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"]], exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                ],
                exports: [
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");










function NavbarComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r1.isCurrentOption(option_r4.name) ? "none" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", option_r4.name.toLowerCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r4.name);
} }
function NavbarComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_mat_sidenav_content_18_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-content", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_mat_sidenav_content_18_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(router, changeDetectorRef, media) {
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
        this.media = media;
        // TODO: Dynamic data from api
        this.username = 'Jan Kowalski';
        this.navOptions = [
            { name: 'Konto', icon: 'person' },
            { name: 'Grafik', icon: 'event' },
            { name: 'Wyszukiwarka terminów', icon: 'search' },
        ];
    }
    ngOnInit() {
        this.detectMediaQuery();
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    detectMediaQuery() {
        this.mobileQuery = this.media.matchMedia('(max-width: 1280px)');
        this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    isCurrentOption(option) {
        return this.router.url.includes(option.toLowerCase());
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 19, vars: 7, consts: [[1, "sidebar", 3, "mode", "opened", "fixedInViewport"], ["snav", ""], [1, "sidebar-container"], [1, "user"], ["alt", "User avatar", "src", "../../../assets/man.jpg", 1, "user__avatar"], [1, "user__name"], [1, "nav-menu"], ["mat-list-item", "", "class", "nav-menu__option", 3, "background-color", "routerLink", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "class", "sidebar__close-btn", 3, "click", 4, "ngIf"], [1, "sign-out"], [1, "sign-out__hr"], ["mat-button", "", 1, "sign-out__btn"], ["class", "content", 4, "ngIf"], ["mat-list-item", "", 1, "nav-menu__option", 3, "routerLink"], [1, "nav-menu__option-icon"], ["mat-icon-button", "", 1, "sidebar__close-btn", 3, "click"], [1, "content"], [1, "navbar"], ["mat-icon-button", "", "aria-label", "Icon-button with menu icon", 1, "example-icon", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-nav-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavbarComponent_a_9_Template, 5, 5, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_button_10_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Wyloguj si\u0119");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NavbarComponent_mat_sidenav_content_18_Template, 5, 0, "mat-sidenav-content", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "over" : "side")("opened", !ctx.mobileQuery.matches)("fixedInViewport", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobileQuery.matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobileQuery.matches);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"]], styles: [".sidebar[_ngcontent-%COMP%] {\n  width: 300px;\n  background-color: white;\n}\n@media (min-width: 1280px) {\n  .sidebar[_ngcontent-%COMP%] {\n    background-color: #455A64;\n    color: white;\n  }\n}\n.sidebar-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n}\n.sidebar__close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 7px;\n  right: 5px;\n  color: #455A64;\n}\n.user[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2rem 1rem;\n}\n.user__avatar[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 90px;\n  border-radius: 50%;\n  margin: 0.3rem;\n}\n.user__name[_ngcontent-%COMP%] {\n  font-weight: 300;\n  margin: 0;\n  cursor: pointer;\n}\n.user__name[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 0px;\n  height: 1px;\n  display: block;\n  background: white;\n  transition: 300ms;\n}\n.user__name[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n}\n.nav-menu[_ngcontent-%COMP%] {\n  margin-bottom: 140px;\n}\n@media (min-width: 1280px) {\n  .nav-menu__option[_ngcontent-%COMP%] {\n    color: white;\n  }\n}\n.nav-menu__option-icon[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  margin-left: 20px;\n  color: #455A64;\n}\n@media (min-width: 1280px) {\n  .nav-menu__option-icon[_ngcontent-%COMP%] {\n    color: white;\n  }\n}\n.sign-out[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n.sign-out__hr[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 2px;\n  border: none;\n  background-color: #455A64;\n}\n@media (min-width: 1280px) {\n  .sign-out__hr[_ngcontent-%COMP%] {\n    background-color: white;\n  }\n}\n.sign-out__btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 20px auto;\n}\n.sign-out__btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #455A64;\n  margin: 0 10px;\n}\n@media (min-width: 1280px) {\n  .sign-out__btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    color: white;\n  }\n}\n.navbar[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #455A64;\n}\n.content[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Njc3MvX21peGlucy5zY3NzIiwic3JjL2FwcC9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQUpKO0FDQ1E7RURDUjtJQUtRLHlCRVRLO0lGVUwsWUFBQTtFQUhOO0FBQ0Y7QUFNQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQUhKO0FBT0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsY0UxQlM7QUZzQmI7QUFPQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFKSjtBQU9BO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBSko7QUFPQTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFKSjtBQU1JO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFKUjtBQU9JO0VBQ0ksV0FBQTtBQUxSO0FBU0E7RUFDSSxvQkFBQTtBQU5KO0FDdERRO0VEK0RSO0lBRVEsWUFBQTtFQU5OO0FBQ0Y7QUFTQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRTNFUztBRnFFYjtBQ2xFUTtFRHFFUjtJQU1RLFlBQUE7RUFMTjtBQUNGO0FBUUE7RUFDSSxTQUFBO0FBTEo7QUFRQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRTFGUztBRnFGYjtBQ2xGUTtFRG1GUjtJQU9RLHVCQUFBO0VBSk47QUFDRjtBQU9BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUpKO0FBT0E7RUFDSSxjRXpHUztFRjBHVCxjQUFBO0FBSko7QUNuR1E7RURxR1I7SUFLUSxZQUFBO0VBSE47QUFDRjtBQU1BO0VBQ0ksdUJBQUE7RUFDQSxjRW5IUztBRmdIYjtBQU1BO0VBQ0kseUJBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2FwcC9zY3NzL21peGlucyc7XG5AaW1wb3J0ICdzcmMvYXBwL3Njc3MvdmFyaWFibGVzJztcblxuXG5cbi5zaWRlYmFyIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKCdsYXB0b3AnKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuXG4uc2lkZWJhci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbi5zaWRlYmFyX19jbG9zZS1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDdweDtcbiAgICByaWdodDogNXB4O1xuICAgIGNvbG9yOiAkbWFpbi1jb2xvcjtcbn1cblxuLnVzZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcbn1cblxuLnVzZXJfX2F2YXRhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMC4zcmVtO1xufVxuXG4udXNlcl9fbmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW46IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgd2lkdGg6IDBweDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgdHJhbnNpdGlvbjogMzAwbXM7XG4gICAgfVxuXG4gICAgJjpob3Zlcjo6YWZ0ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5uYXYtbWVudSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTQwcHg7XG59XG5cbi5uYXYtbWVudV9fb3B0aW9uIHtcbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKCdsYXB0b3AnKSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG5cbi5uYXYtbWVudV9fb3B0aW9uLWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBjb2xvcjogJG1haW4tY29sb3I7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKCdsYXB0b3AnKSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG5cbi5zaWduLW91dCB7XG4gICAgYm90dG9tOiAwO1xufVxuXG4uc2lnbi1vdXRfX2hyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvcjtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8oJ2xhcHRvcCcpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxufVxuXG4uc2lnbi1vdXRfX2J0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xufVxuXG4uc2lnbi1vdXRfX2J0biBtYXQtaWNvbiB7XG4gICAgY29sb3I6ICRtYWluLWNvbG9yO1xuICAgIG1hcmdpbjogMCAxMHB4O1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10bygnbGFwdG9wJykge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuXG4ubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogJG1haW4tY29sb3I7XG59XG5cbi5jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuXG4iLCJAaW1wb3J0ICcuL3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRicmVha3BvaW50KSB7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRtYXA6ICRicmVha3BvaW50cywgJGtleTogJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJG1hcDogJGJyZWFrcG9pbnRzLCAka2V5OiAkYnJlYWtwb2ludCkpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgICAgQHdhcm4gXCJUaGVyZSBpcyBubyBicmVha3BvaW50IG1hdGNoZWQgdG8gJyN7YnJlYWtwb2ludH0nLlwiXG4gICAgICAgICAgICArIFwiQXZhaWxhYmxlIGJyZWFrcG9pbnRzIGFyZTogI3ttYXAta2V5cygkYnJlYWtwb2ludHMpfS5cIjtcbiAgICB9XG59IiwiXG4kbWFpbi1jb2xvcjogIzQ1NUE2NDtcblxuXG4kYnJlYWtwb2ludHM6IChcbiAgICAncGhvbmUnOiA2ODhweCxcbiAgICAndGFibGV0JzogOTkycHgsXG4gICAgJ2xhcHRvcCc6IDEyODBweFxuKSAhZGVmYXVsdDsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/old-sidenav/old-sidenav.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/old-sidenav/old-sidenav.component.ts ***!
  \*************************************************************/
/*! exports provided: OldSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OldSidenavComponent", function() { return OldSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





function OldSidenavComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OldSidenavComponent_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.test(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", option_r1.toLowerCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r0.isCurrentOption(option_r1) ? "#4E626B" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1, " ");
} }
class OldSidenavComponent {
    constructor(router) {
        this.router = router;
        this.username = 'Jan Kowalski';
        this.navOptions = ['Grafik', 'Wyszukiwarka'];
        this.isSidebarExtended = false;
    }
    ngOnInit() {
    }
    isCurrentOption(option) {
        return this.router.url.includes(option.toLowerCase());
    }
    toggleSidebar() {
        if (this.isSidebarExtended) {
            let x = document.querySelector('.sidebar');
        }
    }
}
OldSidenavComponent.ɵfac = function OldSidenavComponent_Factory(t) { return new (t || OldSidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
OldSidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OldSidenavComponent, selectors: [["app-old-sidenav"]], decls: 10, vars: 2, consts: [[1, "sidebar"], [1, "user"], ["alt", "User avatar", "src", "../../../assets/man.jpg", 1, "user__avatar"], [1, "user__name"], [3, "routerLink", "click", 4, "ngFor", "ngForOf"], ["mat-fab", "", "aria-label", "Button that extends sidebar with menu", 1, "sidebar__toggle-btn", 3, "click"], [3, "routerLink", "click"], [1, "nav__option"]], template: function OldSidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OldSidenavComponent_a_7_Template, 3, 4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OldSidenavComponent_Template_button_click_8_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navOptions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["main[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  background-color: #455A64;\n  width: 270px;\n  height: 100%;\n}\n\n@media (min-width: 688px) {\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    left: -270px;\n  }\n}\n\n.sidebar__toggle-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (min-width: 992px) {\n  .sidebar__toggle-btn[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    top: 1rem;\n    left: 1rem;\n  }\n}\n\n.user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n}\n\n.user__avatar[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  margin-right: 1rem;\n}\n\n.user__name[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 300;\n  margin: 0;\n  cursor: pointer;\n}\n\n.user__name[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 0px;\n  height: 1px;\n  display: block;\n  background: white;\n  transition: 300ms;\n}\n\n.user__name[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 40%;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.nav__option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 2rem;\n  height: 3.5rem;\n  font-size: 25px;\n  font-weight: lighter;\n  color: white;\n  cursor: pointer;\n}\n\n.nav__option[_ngcontent-%COMP%]:hover {\n  box-shadow: 5px 0px 0px 0px white inset;\n  -webkit-box-shadow: 5px 0px 0px 0px white inset;\n  -moz-box-shadow: 5px 0px 0px 0px white inset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL29sZC1zaWRlbmF2L29sZC1zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zY3NzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc2Nzcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUtBO0VBQ0kseUJDUlM7RURTVCxZQUFBO0VBQ0EsWUFBQTtBQUZKOztBRUxRO0VGSVI7SUFNUSxlQUFBO0lBQ0EsWUFBQTtFQUROO0FBQ0Y7O0FBSUE7RUFDSSxhQUFBO0FBREo7O0FFZlE7RUZlUjtJQUlRLGNBQUE7SUFDQSxlQUFBO0lBRUEsU0FBQTtJQUNBLFVBQUE7RUFETjtBQUNGOztBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQURKOztBQUlBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0k7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQURSOztBQUlJO0VBQ0ksV0FBQTtBQUZSOztBQU1BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUhKOztBQU1BO0VBQ0kscUJBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUVBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSko7O0FBTUk7RUFDSSx1Q0FBQTtFQUNBLCtDQUFBO0VBQ0EsNENBQUE7QUFKUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9vbGQtc2lkZW5hdi9vbGQtc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hcHAvc2Nzcy9taXhpbnMnO1xuQGltcG9ydCAnc3JjL2FwcC9zY3NzL3ZhcmlhYmxlcyc7XG5cbm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8oJ3Bob25lJykge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IC0yNzBweDtcbiAgICB9XG59XG5cbi5zaWRlYmFyX190b2dnbGUtYnRuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10bygndGFibGV0Jykge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAvLyByaWdodDogMXJlbTtcbiAgICAgICAgdG9wOiAxcmVtO1xuICAgICAgICBsZWZ0OiAxcmVtO1xuICAgIH1cbn1cblxuLnVzZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4udXNlcl9fYXZhdGFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLnVzZXJfX25hbWUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcztcbiAgICB9XG5cbiAgICAmOmhvdmVyOjphZnRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogNDAlO1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5uYXZfX29wdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICBoZWlnaHQ6IDMuNXJlbTtcblxuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDVweCAwcHggMHB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LDEpIGluc2V0O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCAwcHggMHB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LDEpIGluc2V0O1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDVweCAwcHggMHB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LDEpIGluc2V0O1xuICAgIH1cbn0iLCJcbiRtYWluLWNvbG9yOiAjNDU1QTY0O1xuXG5cbiRicmVha3BvaW50czogKFxuICAgICdwaG9uZSc6IDY4OHB4LFxuICAgICd0YWJsZXQnOiA5OTJweCxcbiAgICAnbGFwdG9wJzogMTI4MHB4XG4pICFkZWZhdWx0OyIsIkBpbXBvcnQgJy4vdmFyaWFibGVzJztcblxuQG1peGluIHJlc3BvbmQtdG8oJGJyZWFrcG9pbnQpIHtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJG1hcDogJGJyZWFrcG9pbnRzLCAka2V5OiAkYnJlYWtwb2ludCkge1xuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkbWFwOiAkYnJlYWtwb2ludHMsICRrZXk6ICRicmVha3BvaW50KSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgICBAd2FybiBcIlRoZXJlIGlzIG5vIGJyZWFrcG9pbnQgbWF0Y2hlZCB0byAnI3ticmVha3BvaW50fScuXCJcbiAgICAgICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKCRicmVha3BvaW50cyl9LlwiO1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OldSidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-old-sidenav',
                templateUrl: './old-sidenav.component.html',
                styleUrls: ['./old-sidenav.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/shared/sidenav/sidenav.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _old_sidenav_old_sidenav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./old-sidenav/old-sidenav.component */ "./src/app/shared/old-sidenav/old-sidenav.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");








class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"], _old_sidenav_old_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["OldSidenavComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"],
        _old_sidenav_old_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["OldSidenavComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"], _old_sidenav_old_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["OldSidenavComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
                ],
                exports: [
                    _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"],
                    _old_sidenav_old_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["OldSidenavComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/sidenav/sidenav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidenav/sidenav.component.ts ***!
  \*****************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function SidenavComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r2);
} }
class SidenavComponent {
    constructor(router) {
        this.router = router;
        this.username = 'Jan Kowalski';
        this.navOptions = ['Grafik', 'Wyszukiwarka'];
        this.isSidebarExtended = false;
    }
    ngOnInit() {
    }
    isCurrentOption(option) {
        return this.router.url.includes(option.toLowerCase());
    }
    toggleSidebar() {
        if (this.isSidebarExtended) {
            let x = document.querySelector('.sidebar');
        }
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], decls: 8, vars: 2, consts: [[3, "click"], [3, "mode"], ["snav", ""], ["mat-list-item", "", 4, "ngFor", "ngForOf"], ["mat-list-item", ""]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidenavComponent_a_7_Template, 2, 1, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "side");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navOptions);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"]], styles: ["main[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  background-color: #455A64;\n  width: 270px;\n  height: 100%;\n}\n\n@media (min-width: 688px) {\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    left: -270px;\n  }\n}\n\n.sidebar__toggle-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (min-width: 992px) {\n  .sidebar__toggle-btn[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    top: 1rem;\n    left: 1rem;\n  }\n}\n\n.user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n}\n\n.user__avatar[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  margin-right: 1rem;\n}\n\n.user__name[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 300;\n  margin: 0;\n  cursor: pointer;\n}\n\n.user__name[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 0px;\n  height: 1px;\n  display: block;\n  background: white;\n  transition: 300ms;\n}\n\n.user__name[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 40%;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.nav__option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 2rem;\n  height: 3.5rem;\n  font-size: 25px;\n  font-weight: lighter;\n  color: white;\n  cursor: pointer;\n}\n\n.nav__option[_ngcontent-%COMP%]:hover {\n  box-shadow: 5px 0px 0px 0px white inset;\n  -webkit-box-shadow: 5px 0px 0px 0px white inset;\n  -moz-box-shadow: 5px 0px 0px 0px white inset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3Njc3MvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLQTtFQUNJLHlCQ1JTO0VEU1QsWUFBQTtFQUNBLFlBQUE7QUFGSjs7QUVMUTtFRklSO0lBTVEsZUFBQTtJQUNBLFlBQUE7RUFETjtBQUNGOztBQUlBO0VBQ0ksYUFBQTtBQURKOztBRWZRO0VGZVI7SUFJUSxjQUFBO0lBQ0EsZUFBQTtJQUVBLFNBQUE7SUFDQSxVQUFBO0VBRE47QUFDRjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFESjs7QUFJQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQURKOztBQUdJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFEUjs7QUFJSTtFQUNJLFdBQUE7QUFGUjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFISjs7QUFNQTtFQUNJLHFCQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFFQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUpKOztBQU1JO0VBQ0ksdUNBQUE7RUFDQSwrQ0FBQTtFQUNBLDRDQUFBO0FBSlIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2FwcC9zY3NzL21peGlucyc7XG5AaW1wb3J0ICdzcmMvYXBwL3Njc3MvdmFyaWFibGVzJztcblxubWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvcjtcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10bygncGhvbmUnKSB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogLTI3MHB4O1xuICAgIH1cbn1cblxuLnNpZGViYXJfX3RvZ2dsZS1idG4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKCd0YWJsZXQnKSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIC8vIHJpZ2h0OiAxcmVtO1xuICAgICAgICB0b3A6IDFyZW07XG4gICAgICAgIGxlZnQ6IDFyZW07XG4gICAgfVxufVxuXG4udXNlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi51c2VyX19hdmF0YXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4udXNlcl9fbmFtZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHdpZHRoOiAwcHg7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IDMwMG1zO1xuICAgIH1cblxuICAgICY6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm5hdl9fb3B0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgIGhlaWdodDogMy41cmVtO1xuXG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDBweCAwcHggMHB4IHJnYmEoMjU1LDI1NSwyNTUsMSkgaW5zZXQ7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDBweCAwcHggMHB4IHJnYmEoMjU1LDI1NSwyNTUsMSkgaW5zZXQ7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogNXB4IDBweCAwcHggMHB4IHJnYmEoMjU1LDI1NSwyNTUsMSkgaW5zZXQ7XG4gICAgfVxufSIsIlxuJG1haW4tY29sb3I6ICM0NTVBNjQ7XG5cblxuJGJyZWFrcG9pbnRzOiAoXG4gICAgJ3Bob25lJzogNjg4cHgsXG4gICAgJ3RhYmxldCc6IDk5MnB4LFxuICAgICdsYXB0b3AnOiAxMjgwcHhcbikgIWRlZmF1bHQ7IiwiQGltcG9ydCAnLi92YXJpYWJsZXMnO1xuXG5AbWl4aW4gcmVzcG9uZC10bygkYnJlYWtwb2ludCkge1xuICAgIEBpZiBtYXAtaGFzLWtleSgkbWFwOiAkYnJlYWtwb2ludHMsICRrZXk6ICRicmVha3BvaW50KSB7XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRtYXA6ICRicmVha3BvaW50cywgJGtleTogJGJyZWFrcG9pbnQpKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAgIEB3YXJuIFwiVGhlcmUgaXMgbm8gYnJlYWtwb2ludCBtYXRjaGVkIHRvICcje2JyZWFrcG9pbnR9Jy5cIlxuICAgICAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzKX0uXCI7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/piotr/Programming/Projects/Stajnia-hubertus/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map