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
/* harmony import */ var _auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/services/auth-guard.service */ "./src/app/auth/services/auth-guard.service.ts");
/* harmony import */ var _core_components_authorisation_authorisation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/authorisation/authorisation.component */ "./src/app/core/components/authorisation/authorisation.component.ts");
/* harmony import */ var _modules_exchanges_layouts_exchanges_exchanges_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/exchanges/layouts/exchanges/exchanges.component */ "./src/app/modules/exchanges/layouts/exchanges/exchanges.component.ts");
/* harmony import */ var _modules_exchanges_layouts_incoming_exchanges_incoming_exchanges_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/exchanges/layouts/incoming-exchanges/incoming-exchanges.component */ "./src/app/modules/exchanges/layouts/incoming-exchanges/incoming-exchanges.component.ts");
/* harmony import */ var _modules_exchanges_layouts_outgoing_exchanges_outgoing_exchanges_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/exchanges/layouts/outgoing-exchanges/outgoing-exchanges.component */ "./src/app/modules/exchanges/layouts/outgoing-exchanges/outgoing-exchanges.component.ts");
/* harmony import */ var _modules_mobile_blocker_components_mobile_blocker_mobile_blocker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/mobile-blocker/components/mobile-blocker/mobile-blocker.component */ "./src/app/modules/mobile-blocker/components/mobile-blocker/mobile-blocker.component.ts");
/* harmony import */ var _modules_mobile_blocker_services_mobile_blocker_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/mobile-blocker/services/mobile-blocker.service */ "./src/app/modules/mobile-blocker/services/mobile-blocker.service.ts");
/* harmony import */ var _modules_queues_layouts_queue_queue_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/queues/layouts/queue/queue.component */ "./src/app/modules/queues/layouts/queue/queue.component.ts");
/* harmony import */ var _modules_schedule_components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/schedule/components/schedule/schedule.component */ "./src/app/modules/schedule/components/schedule/schedule.component.ts");
/* harmony import */ var _modules_settings_layouts_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/settings/layouts/change-password/change-password.component */ "./src/app/modules/settings/layouts/change-password/change-password.component.ts");
/* harmony import */ var _modules_settings_layouts_credits_credits_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/settings/layouts/credits/credits.component */ "./src/app/modules/settings/layouts/credits/credits.component.ts");















const routes = [
    { path: 'auth', component: _core_components_authorisation_authorisation_component__WEBPACK_IMPORTED_MODULE_3__["AuthorisationComponent"] },
    { path: 'exchanges', component: _modules_exchanges_layouts_exchanges_exchanges_component__WEBPACK_IMPORTED_MODULE_4__["ExchangesComponent"], canActivate: [_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"] && _modules_mobile_blocker_services_mobile_blocker_service__WEBPACK_IMPORTED_MODULE_8__["MobileBlockerService"]] },
    { path: 'exchanges/incoming', component: _modules_exchanges_layouts_incoming_exchanges_incoming_exchanges_component__WEBPACK_IMPORTED_MODULE_5__["IncomingExchangesComponent"], canActivate: [_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"] && _modules_mobile_blocker_services_mobile_blocker_service__WEBPACK_IMPORTED_MODULE_8__["MobileBlockerService"]] },
    { path: 'exchanges/outgoing', component: _modules_exchanges_layouts_outgoing_exchanges_outgoing_exchanges_component__WEBPACK_IMPORTED_MODULE_6__["OutgoingExchangesComponent"], canActivate: [_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"] && _modules_mobile_blocker_services_mobile_blocker_service__WEBPACK_IMPORTED_MODULE_8__["MobileBlockerService"]] },
    { path: 'schedule', component: _modules_schedule_components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_10__["ScheduleComponent"], canActivate: [_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]] },
    { path: 'settings/change-password', component: _modules_settings_layouts_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_11__["ChangePasswordComponent"], canActivate: [_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"] && _modules_mobile_blocker_services_mobile_blocker_service__WEBPACK_IMPORTED_MODULE_8__["MobileBlockerService"]] },
    { path: 'settings/credits', component: _modules_settings_layouts_credits_credits_component__WEBPACK_IMPORTED_MODULE_12__["CreditsComponent"], canActivate: [_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"] && _modules_mobile_blocker_services_mobile_blocker_service__WEBPACK_IMPORTED_MODULE_8__["MobileBlockerService"]] },
    { path: 'settings', redirectTo: '/settings/change-password', pathMatch: 'full' },
    { path: 'queue', component: _modules_queues_layouts_queue_queue_component__WEBPACK_IMPORTED_MODULE_9__["QueueComponent"], canActivate: [_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"] && _modules_mobile_blocker_services_mobile_blocker_service__WEBPACK_IMPORTED_MODULE_8__["MobileBlockerService"]] },
    { path: 'mobile-block', component: _modules_mobile_blocker_components_mobile_blocker_mobile_blocker_component__WEBPACK_IMPORTED_MODULE_7__["MobileBlockerComponent"] },
    { path: '**', redirectTo: '/schedule', pathMatch: 'full' },
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'QueueAngular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _modules_exchanges_exchanges_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/exchanges/exchanges.module */ "./src/app/modules/exchanges/exchanges.module.ts");
/* harmony import */ var _modules_schedule_schedule_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/schedule/schedule.module */ "./src/app/modules/schedule/schedule.module.ts");
/* harmony import */ var _app_data_data_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/data/data.module */ "./src/app/data/data.module.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _auth_services_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/services/jwt-interceptor.service */ "./src/app/auth/services/jwt-interceptor.service.ts");
/* harmony import */ var _shared_services_error_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/services/error.service */ "./src/app/shared/services/error.service.ts");
/* harmony import */ var _modules_settings_settings_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/settings/settings.module */ "./src/app/modules/settings/settings.module.ts");
/* harmony import */ var _modules_queues_queues_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/queues/queues.module */ "./src/app/modules/queues/queues.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _modules_mobile_blocker_mobile_blocker_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/mobile-blocker/mobile-blocker.module */ "./src/app/modules/mobile-blocker/mobile-blocker.module.ts");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
        _globals__WEBPACK_IMPORTED_MODULE_13__["Globals"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _auth_services_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["JwtInterceptor"],
            multi: true
        },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
            useClass: _shared_services_error_service__WEBPACK_IMPORTED_MODULE_15__["ErrorService"]
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _modules_exchanges_exchanges_module__WEBPACK_IMPORTED_MODULE_10__["ExchangesModule"],
            _modules_schedule_schedule_module__WEBPACK_IMPORTED_MODULE_11__["ScheduleModule"],
            _app_data_data_module__WEBPACK_IMPORTED_MODULE_12__["DataModule"],
            _modules_settings_settings_module__WEBPACK_IMPORTED_MODULE_16__["SettingsModule"],
            _modules_queues_queues_module__WEBPACK_IMPORTED_MODULE_17__["QueuesModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_18__["PipesModule"],
            _modules_mobile_blocker_mobile_blocker_module__WEBPACK_IMPORTED_MODULE_19__["MobileBlockerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        _modules_exchanges_exchanges_module__WEBPACK_IMPORTED_MODULE_10__["ExchangesModule"],
        _modules_schedule_schedule_module__WEBPACK_IMPORTED_MODULE_11__["ScheduleModule"],
        _app_data_data_module__WEBPACK_IMPORTED_MODULE_12__["DataModule"],
        _modules_settings_settings_module__WEBPACK_IMPORTED_MODULE_16__["SettingsModule"],
        _modules_queues_queues_module__WEBPACK_IMPORTED_MODULE_17__["QueuesModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_18__["PipesModule"],
        _modules_mobile_blocker_mobile_blocker_module__WEBPACK_IMPORTED_MODULE_19__["MobileBlockerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                    _modules_exchanges_exchanges_module__WEBPACK_IMPORTED_MODULE_10__["ExchangesModule"],
                    _modules_schedule_schedule_module__WEBPACK_IMPORTED_MODULE_11__["ScheduleModule"],
                    _app_data_data_module__WEBPACK_IMPORTED_MODULE_12__["DataModule"],
                    _modules_settings_settings_module__WEBPACK_IMPORTED_MODULE_16__["SettingsModule"],
                    _modules_queues_queues_module__WEBPACK_IMPORTED_MODULE_17__["QueuesModule"],
                    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_18__["PipesModule"],
                    _modules_mobile_blocker_mobile_blocker_module__WEBPACK_IMPORTED_MODULE_19__["MobileBlockerModule"]
                ],
                providers: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
                    _globals__WEBPACK_IMPORTED_MODULE_13__["Globals"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _auth_services_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["JwtInterceptor"],
                        multi: true
                    },
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
                        useClass: _shared_services_error_service__WEBPACK_IMPORTED_MODULE_15__["ErrorService"]
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/services/auth-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/services/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/auth/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (this.auth.isUserAuthenticated()) {
            return true;
        }
        this.router.navigateByUrl('/auth');
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/services/authentication.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/auth/services/authentication.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_data_api_user_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data/api/user-api.service */ "./src/app/data/api/user-api.service.ts");






class AuthenticationService {
    constructor(router, userApi) {
        this.router = router;
        this.userApi = userApi;
    }
    logIn(username, password) {
        if (localStorage.getItem('token') != null)
            this.logOut();
        return this.userApi.authUser(username, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(authResponse => {
            localStorage.setItem('token', authResponse.token);
        }));
    }
    logOut() {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/auth');
    }
    isUserAuthenticated() {
        if (localStorage.getItem('token') == null || this.isTokenExpired(Object(jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(localStorage.getItem('token')).exp))
            return false;
        else
            return true;
    }
    isTokenExpired(token) {
        return (Math.floor((new Date).getTime() / 1000)) >= token;
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_data_api_user_api_service__WEBPACK_IMPORTED_MODULE_4__["UserApiService"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_data_api_user_api_service__WEBPACK_IMPORTED_MODULE_4__["UserApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/services/jwt-interceptor.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/services/jwt-interceptor.service.ts ***!
  \**********************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_snack_bar_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/snack-bar-handler.service */ "./src/app/shared/services/snack-bar-handler.service.ts");






class JwtInterceptor {
    constructor(router, snackBar) {
        this.router = router;
        this.snackBar = snackBar;
    }
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((event) => { }, (err) => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    this.router.navigateByUrl('/auth');
                    if (err.error.message != '')
                        this.snackBar.openBasicSnackBar(err.error.message);
                    else
                        this.snackBar.openBasicSnackBar('Session expired, log in again.');
                }
            }
        }));
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_shared_services_snack_bar_handler_service__WEBPACK_IMPORTED_MODULE_4__["SnackBarHandlerService"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_shared_services_snack_bar_handler_service__WEBPACK_IMPORTED_MODULE_4__["SnackBarHandlerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/components/authorisation/authorisation.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/components/authorisation/authorisation.component.ts ***!
  \**************************************************************************/
/*! exports provided: AuthorisationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorisationComponent", function() { return AuthorisationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/services/authentication.service */ "./src/app/auth/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/globals */ "./src/app/globals.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");












function AuthorisationComponent_mat_spinner_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 16);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 24);
} }
function AuthorisationComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AuthorisationComponent {
    constructor(authenticationService, formBuilder, router, globals) {
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.globals = globals;
        this.loading = false;
        this.version = this.globals.VERSION;
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ngOnInit() { }
    logIn(form) {
        this.loading = true;
        this.authenticationService.logIn(form.value.username, form.value.password).subscribe(() => this.router.navigateByUrl('schedule'), error => this.loading = false);
    }
}
AuthorisationComponent.ɵfac = function AuthorisationComponent_Factory(t) { return new (t || AuthorisationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_globals__WEBPACK_IMPORTED_MODULE_4__["Globals"])); };
AuthorisationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthorisationComponent, selectors: [["app-authorisation"]], decls: 28, vars: 5, consts: [[1, "layout-organizer"], [1, "triangle", "triangle-left", "triangle__big--left"], [1, "triangle", "triangle-right", "triangle__big--right"], [1, "login-container"], [1, "logo"], [1, "login-form", 3, "formGroup", "ngSubmit"], ["form", "ngForm"], ["matInput", "", "type", "text", "maxlength", "25", "name", "username", "formControlName", "username", "autocomplete", "off"], ["matInput", "", "type", "password", "maxlength", "30", "name", "password", "formControlName", "password", "autocomplete", "off"], ["mat-raised-button", "", "type", "submit", 1, "login-button", 3, "disabled"], ["class", "loading", 3, "diameter", 4, "ngIf", "ngIfElse"], ["login", ""], [1, "logo-container"], [1, "triangle", "triangle-left"], [1, "triangle", "triangle-right"], [1, "version"], [1, "loading", 3, "diameter"], [1, "login-text"]], template: function AuthorisationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Que");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthorisationComponent_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.logIn(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AuthorisationComponent_mat_spinner_18_Template, 1, 1, "mat-spinner", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AuthorisationComponent_ng_template_19_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Que");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("v", ctx.version, "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"]], styles: [".layout-organizer[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f4f4f4;\n  position: relative;\n}\n\nsection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 60vh;\n  width: 65vw;\n  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;\n}\n\n.login-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 45%;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n@media (max-width: 688px) {\n  .login-container[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n  }\n}\n\n.login-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 688px) {\n  .login-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    display: block;\n    top: 20px;\n  }\n}\n\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 60%;\n}\n\n@media (max-width: 688px) {\n  .login-form[_ngcontent-%COMP%] {\n    margin-top: 10%;\n  }\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n\n  .mat-form-field.mat-focused .mat-form-field-label {\n  color: #72272A !important;\n}\n\n\n\n  .mat-focused .mat-form-field-underline .mat-form-field-ripple {\n  background-color: #72272A !important;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  width: 50%;\n  background-color: #1a2f33;\n  color: white;\n  margin-top: 10%;\n}\n\n.loading[_ngcontent-%COMP%] {\n  margin: 6px auto;\n}\n\n.login-text[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.logo-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 55%;\n  background-color: #f4f4f4;\n  position: relative;\n  display: flex;\n  justify-content: center;\n}\n\n@media (max-width: 688px) {\n  .logo-container[_ngcontent-%COMP%] {\n    width: 0;\n    height: 0;\n    display: none;\n  }\n}\n\n.logo[_ngcontent-%COMP%] {\n  font-family: \"Lobster Two\", cursive;\n  font-size: 4em;\n  margin: 0;\n  position: absolute;\n  align-self: center;\n}\n\n.triangle[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  position: absolute;\n}\n\n.triangle-left[_ngcontent-%COMP%] {\n  border-width: 38vh 28vw 0 0;\n  border-color: #72272A transparent transparent transparent;\n  left: 0;\n  top: 0;\n}\n\n.triangle-right[_ngcontent-%COMP%] {\n  border-width: 0 0 38vh 28vw;\n  border-color: transparent transparent #1a2f33 transparent;\n  right: 0;\n  bottom: 0;\n}\n\n.triangle__big--left[_ngcontent-%COMP%] {\n  border-width: 70vh 75vw 0 0;\n  display: none;\n}\n\n@media (max-width: 688px) {\n  .triangle__big--left[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.triangle__big--right[_ngcontent-%COMP%] {\n  border-width: 0 0 70vh 75vw;\n  display: none;\n}\n\n@media (max-width: 688px) {\n  .triangle__big--right[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.version[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 1%;\n  bottom: 1%;\n  color: grey;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2F1dGhvcmlzYXRpb24vYXV0aG9yaXNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2Nzcy9fbWl4aW5zLnNjc3MiLCJzcmMvYXBwL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkZBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUZKOztBQ3ZCSTtFRGlCSjtJQVdJLFdBQUE7SUFDQSxrQkFBQTtFQURGO0FBQ0Y7O0FBR0U7RUFDRSxhQUFBO0FBREo7O0FDaENJO0VEZ0NGO0lBSUksY0FBQTtJQUNBLFNBQUE7RUFBSjtBQUNGOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFESjs7QUM5Q0k7RUQwQ0o7SUFRTSxlQUFBO0VBQUo7QUFDRjs7QUFHQTtFQUNJLFdBQUE7QUFBSjs7QUFHQSxrQ0FBQTs7QUFDQTtFQUNJLHlCQUFBO0FBQUo7O0FBR0Esc0NBQUE7O0FBQ0E7RUFDSSxvQ0FBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLHlCRXpFUTtFRjBFUixZQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLFNBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUFKOztBQ3pGSTtFRG1GSjtJQVNNLFFBQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtFQUNKO0FBQ0Y7O0FBRUE7RUFDSSxtQ0VuR087RUZvR1AsY0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNJLDJCQUFBO0VBQ0EseURBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7RUFDQSx5REFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUNsSUk7RUQrSEo7SUFLSSxjQUFBO0VBRUY7QUFDRjs7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsYUFBQTtBQUVGOztBQzVJSTtFRHdJSjtJQUtJLGNBQUE7RUFHRjtBQUNGOztBQUFBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9hdXRob3Jpc2F0aW9uL2F1dGhvcmlzYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXBwL3Njc3MvdmFyaWFibGVzJztcbkBpbXBvcnQgJ3NyYy9hcHAvc2Nzcy9taXhpbnMnO1xuXG4ubGF5b3V0LW9yZ2FuaXplciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGhlaWdodDogNjB2aDtcbiAgICB3aWR0aDogNjV2dztcbiAgICBib3gtc2hhZG93OiByZ2JhKDE0LCAzMCwgMzcsIDAuMTIpIDBweCAycHggNHB4IDBweCwgcmdiYSgxNCwgMzAsIDM3LCAwLjMyKSAwcHggMnB4IDE2cHggMHB4O1xufVxuXG4ubG9naW4tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDAwO1xuXG4gIEBpbmNsdWRlIHJlc3BvbmQtdG8oJ3Bob25lJykge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10bygncGhvbmUnKSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRvcDogMjBweDtcbiAgICB9XG4gIH1cbn1cblxuLmxvZ2luLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA2MCU7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKCdwaG9uZScpIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICB9XG4gIH1cblxubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBDaGFuZ2UgbGFiZWwgY29sb3Igb24gZm9jdXNlZCAqL1xuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAkc2Vjb25kY29sb3IgIWltcG9ydGFudDtcbn1cblxuLyogdW5kZXJsaW5lIGJvcmRlciBjb2xvciBvbiBmb2N1c2VkICovXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmxvZ2luLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbmNvbG9yO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5sb2FkaW5nIHtcbiAgICBtYXJnaW46IDZweCBhdXRvO1xufVxuXG4ubG9naW4tdGV4dCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubG9nby1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNTUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKCdwaG9uZScpIHtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgaGVpZ2h0OiAwO1xuICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cbn1cblxuLmxvZ28ge1xuICAgIGZvbnQtZmFtaWx5OiAkbG9nb2ZvbnQ7XG4gICAgZm9udC1zaXplOiA0ZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi50cmlhbmdsZSB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnRyaWFuZ2xlLWxlZnQge1xuICAgIGJvcmRlci13aWR0aDogMzh2aCAyOHZ3IDAgMDtcbiAgICBib3JkZXItY29sb3I6ICRzZWNvbmRjb2xvciB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbn1cblxuLnRyaWFuZ2xlLXJpZ2h0IHtcbiAgICBib3JkZXItd2lkdGg6IDAgMCAzOHZoIDI4dnc7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAkbWFpbmNvbG9yIHRyYW5zcGFyZW50O1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbn1cblxuLnRyaWFuZ2xlX19iaWctLWxlZnQge1xuICBib3JkZXItd2lkdGg6IDcwdmggNzV2dyAwIDA7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgQGluY2x1ZGUgcmVzcG9uZC10bygncGhvbmUnKSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLnRyaWFuZ2xlX19iaWctLXJpZ2h0IHtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgNzB2aCA3NXZ3O1xuICBkaXNwbGF5OiBub25lO1xuXG4gIEBpbmNsdWRlIHJlc3BvbmQtdG8oJ3Bob25lJykge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi52ZXJzaW9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMSU7XG4gICAgYm90dG9tOiAxJTtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBtYXJnaW46IDA7XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gcmVzcG9uZC10bygkYnJlYWtwb2ludCkge1xuICBAaWYgbWFwLWhhcy1rZXkoJG1hcDogJGJyZWFrcG9pbnRzLCAka2V5OiAkYnJlYWtwb2ludCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiBtYXAtZ2V0KCRtYXA6ICRicmVha3BvaW50cywgJGtleTogJGJyZWFrcG9pbnQpKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbiAgQGVsc2Uge1xuICAgIEB3YXJuIFwiVGhlcmUgaXMgbm8gYnJlYWtwb2ludCBtYXRjaGVkIHRvICcje2JyZWFrcG9pbnR9Jy5cIlxuICAgICAgICAgICAgKyBcIkF2YWlsYWJsZSBicmVha3BvaW50cyBhcmU6ICN7bWFwLWtleXMoJGJyZWFrcG9pbnRzKX0uXCI7XG4gIH1cbn1cbiIsIi8vR2xvYmFsXG4kbWFpbmNvbG9yOiAjMWEyZjMzO1xuJHNlY29uZGNvbG9yOiAjNzIyNzJBO1xuXG4kbG9nb2ZvbnQ6ICdMb2JzdGVyIFR3bycsIGN1cnNpdmU7XG4kbWFpbmZvbnQ6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG5cbi8vTmF2YmFyXG4kbmF2YmFyaGVpZ2h0OiAxNTBweDtcblxuJGJyZWFrcG9pbnRzOiAoXG4gICdwaG9uZSc6IDY4OHB4LFxuICAndGFibGV0JzogOTkycHgsXG4gICdsYXB0b3AnOiAxMjgwcHhcbikgIWRlZmF1bHQ7XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorisationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-authorisation',
                templateUrl: './authorisation.component.html',
                styleUrls: ['./authorisation.component.scss']
            }]
    }], function () { return [{ type: src_app_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_globals__WEBPACK_IMPORTED_MODULE_4__["Globals"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_authorisation_authorisation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/authorisation/authorisation.component */ "./src/app/core/components/authorisation/authorisation.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");







class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_components_authorisation_authorisation_component__WEBPACK_IMPORTED_MODULE_4__["AuthorisationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], exports: [_components_authorisation_authorisation_component__WEBPACK_IMPORTED_MODULE_4__["AuthorisationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_authorisation_authorisation_component__WEBPACK_IMPORTED_MODULE_4__["AuthorisationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ],
                exports: [
                    _components_authorisation_authorisation_component__WEBPACK_IMPORTED_MODULE_4__["AuthorisationComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/data/api/exchange-api.service.ts":
/*!**************************************************!*\
  !*** ./src/app/data/api/exchange-api.service.ts ***!
  \**************************************************/
/*! exports provided: ExchangeApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeApiService", function() { return ExchangeApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");




class ExchangeApiService {
    constructor(http, globals) {
        this.http = http;
        this.globals = globals;
    }
    submitRequest(fromUserId, fromLessonId, fromIndex, toUserId, toLessonId, toIndex) {
        const requestUrl = `${this.globals.BASE_URL}/exchanges/requests/submit`;
        return this.http.post(requestUrl, { fromUserId, fromLessonId, fromIndex, toUserId, toLessonId, toIndex }, { observe: 'response' });
    }
    getRequestsToUser() {
        const requestUrl = `${this.globals.BASE_URL}/exchanges/requests/to`;
        return this.http.get(requestUrl);
    }
    getRequestsFromUser() {
        const requestUrl = `${this.globals.BASE_URL}/exchanges/requests/from`;
        return this.http.get(requestUrl);
    }
    acceptRequest(requestId) {
        const requestUrl = `${this.globals.BASE_URL}/exchanges/requests/accept/${requestId}`;
        return this.http.get(requestUrl);
    }
    declineRequest(requestId) {
        const requestUrl = `${this.globals.BASE_URL}/exchanges/requests/decline/${requestId}`;
        return this.http.get(requestUrl);
    }
}
ExchangeApiService.ɵfac = function ExchangeApiService_Factory(t) { return new (t || ExchangeApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"])); };
ExchangeApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExchangeApiService, factory: ExchangeApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExchangeApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }]; }, null); })();


/***/ }),

/***/ "./src/app/data/api/lesson-api.service.ts":
/*!************************************************!*\
  !*** ./src/app/data/api/lesson-api.service.ts ***!
  \************************************************/
/*! exports provided: LessonApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonApiService", function() { return LessonApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");




class LessonApiService {
    constructor(http, globals) {
        this.http = http;
        this.globals = globals;
    }
    getLessons(subjectId) {
        const requestUrl = `${this.globals.BASE_URL}/subjects/${subjectId}/lessons`;
        return this.http.get(requestUrl);
    }
    getLesson(lessonId) {
        const requestUrl = `${this.globals.BASE_URL}/lessons/${lessonId}`;
        return this.http.get(requestUrl);
    }
    getUsers(lessonId) {
        const requestUrl = `${this.globals.BASE_URL}/lessons/${lessonId}/users`;
        return this.http.get(requestUrl);
    }
}
LessonApiService.ɵfac = function LessonApiService_Factory(t) { return new (t || LessonApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"])); };
LessonApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LessonApiService, factory: LessonApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LessonApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }]; }, null); })();


/***/ }),

/***/ "./src/app/data/api/occurrence-api.service.ts":
/*!****************************************************!*\
  !*** ./src/app/data/api/occurrence-api.service.ts ***!
  \****************************************************/
/*! exports provided: OccurrenceApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccurrenceApiService", function() { return OccurrenceApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");





class OccurrenceApiService {
    constructor(http, globals) {
        this.http = http;
        this.globals = globals;
    }
    getPast(num) {
        const requestUrl = `${this.globals.BASE_URL}/occurrences/past/${num}`;
        return this.http.get(requestUrl);
    }
    getPastForLesson(lessonId, num) {
        const requestUrl = `${this.globals.BASE_URL}/occurrences/past/${lessonId}/${num}`;
        return this.http.get(requestUrl);
    }
    getLastOccurrence() {
        const requestUrl = `${this.globals.BASE_URL}/occurrences/past/1`;
        return this.http.get(requestUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(occurrences => occurrences), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
    getNext(lessonId, num) {
        const requestUrl = `${this.globals.BASE_URL}/occurrences/next/${lessonId}/${num}`;
        return this.http.get(requestUrl);
    }
    filterOccurrences(lessonId, predicate, num) {
        return this.getNext(lessonId, num)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(occurrences => occurrences), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(predicate), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["toArray"])());
    }
    updateOccurrences() {
        const requestUrl = `${this.globals.BASE_URL}/occurrences/update`;
        return this.http.get(requestUrl);
    }
}
OccurrenceApiService.ɵfac = function OccurrenceApiService_Factory(t) { return new (t || OccurrenceApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_globals__WEBPACK_IMPORTED_MODULE_3__["Globals"])); };
OccurrenceApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OccurrenceApiService, factory: OccurrenceApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OccurrenceApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"] }]; }, null); })();


/***/ }),

/***/ "./src/app/data/api/subject-api.service.ts":
/*!*************************************************!*\
  !*** ./src/app/data/api/subject-api.service.ts ***!
  \*************************************************/
/*! exports provided: SubjectApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectApiService", function() { return SubjectApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/globals */ "./src/app/globals.ts");




class SubjectApiService {
    constructor(http, globals) {
        this.http = http;
        this.globals = globals;
    }
    getAllSubjects() {
        const requestUrl = `${this.globals.BASE_URL}/subjects`;
        return this.http.get(requestUrl);
    }
    getSubject(subjectId) {
        const requestUrl = `${this.globals.BASE_URL}/subjects/${subjectId}`;
        return this.http.get(requestUrl);
    }
}
SubjectApiService.ɵfac = function SubjectApiService_Factory(t) { return new (t || SubjectApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"])); };
SubjectApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SubjectApiService, factory: SubjectApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubjectApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: src_app_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }]; }, null); })();


/***/ }),

/***/ "./src/app/data/api/user-api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/data/api/user-api.service.ts ***!
  \**********************************************/
/*! exports provided: UserApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApiService", function() { return UserApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/globals */ "./src/app/globals.ts");




class UserApiService {
    constructor(http, globals) {
        this.http = http;
        this.globals = globals;
    }
    authUser(username, password) {
        const requestUrl = `${this.globals.BASE_URL}/auth`;
        return this.http.post(requestUrl, { username, password });
    }
    getUsername(userId) {
        const requestUrl = `${this.globals.BASE_URL}/user/${userId}`;
        return this.http.get(requestUrl);
    }
    changePassword(oldPassword, newPassword) {
        const requestUrl = `${this.globals.BASE_URL}/account/changepass`;
        return this.http.post(requestUrl, { oldPassword, newPassword }, { observe: 'response' });
    }
}
UserApiService.ɵfac = function UserApiService_Factory(t) { return new (t || UserApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"])); };
UserApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserApiService, factory: UserApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: src_app_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }]; }, null); })();


/***/ }),

/***/ "./src/app/data/data.module.ts":
/*!*************************************!*\
  !*** ./src/app/data/data.module.ts ***!
  \*************************************/
/*! exports provided: DataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModule", function() { return DataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class DataModule {
}
DataModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataModule });
DataModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DataModule_Factory(t) { return new (t || DataModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/data/entities/exchangeRequest.ts":
/*!**************************************************!*\
  !*** ./src/app/data/entities/exchangeRequest.ts ***!
  \**************************************************/
/*! exports provided: RequestStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestStatus", function() { return RequestStatus; });
var RequestStatus;
(function (RequestStatus) {
    RequestStatus["PENDING"] = "PENDING";
    RequestStatus["ACCEPTED"] = "ACCEPTED";
    RequestStatus["DECLINED"] = "DECLINED";
    RequestStatus["INVALID"] = "INVALID";
})(RequestStatus || (RequestStatus = {}));


/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Globals {
    constructor() {
        this.BASE_URL = 'https://queapi.jupw.net/api/v1';
        this.VERSION = '1.0.0';
    }
}
Globals.ɵfac = function Globals_Factory(t) { return new (t || Globals)(); };
Globals.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Globals, factory: Globals.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Globals, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
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
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");













class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]
        ], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]], exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]
                ],
                exports: [
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/exchanges/components/exchange-request-status-filter/exchange-request-status-filter.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/exchanges/components/exchange-request-status-filter/exchange-request-status-filter.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ExchangeRequestStatusFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeRequestStatusFilterComponent", function() { return ExchangeRequestStatusFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_data_entities_exchangeRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data/entities/exchangeRequest */ "./src/app/data/entities/exchangeRequest.ts");
/* harmony import */ var _services_order_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/order-handler.service */ "./src/app/modules/exchanges/services/order-handler.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");









function ExchangeRequestStatusFilterComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", status_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](status_r1);
} }
class ExchangeRequestStatusFilterComponent {
    constructor(orderHandler) {
        this.orderHandler = orderHandler;
        this.requestStatuses = ['All', src_app_data_entities_exchangeRequest__WEBPACK_IMPORTED_MODULE_2__["RequestStatus"].PENDING, src_app_data_entities_exchangeRequest__WEBPACK_IMPORTED_MODULE_2__["RequestStatus"].ACCEPTED, src_app_data_entities_exchangeRequest__WEBPACK_IMPORTED_MODULE_2__["RequestStatus"].DECLINED, src_app_data_entities_exchangeRequest__WEBPACK_IMPORTED_MODULE_2__["RequestStatus"].INVALID];
        this.selectedFilter = this.requestStatuses[0];
        this.allRequestsChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.filteredRequests = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.subscription = this.allRequestsChange.subscribe(requests => {
            this.allRequests = requests;
            this.filterRequests();
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    addFilteredRequests(requests) {
        this.filteredRequests.emit(this.orderHandler.setPendingFirst(requests));
    }
    filterRequests() {
        switch (this.selectedFilter) {
            case 'All':
                this.addFilteredRequests(this.allRequests);
                break;
            case src_app_data_entities_exchangeRequest__WEBPACK_IMPORTED_MODULE_2__["RequestStatus"].PENDING:
                this.addFilteredRequests(this.allRequests.filter(request => request.status === src_app_data_entities_exchangeRequest__WEBPACK_IMPORTED_MODULE_2__["RequestStatus"].PENDING.toString()));
                break;
            case src_app_data_entities_exchangeRequest__WEBPACK_IMPORTED_MODULE_2__["RequestStatus"].ACCEPTED:
                this.addFilteredRequests(this.allRequests.filter(request => request.status === src_app_data_entities_exchangeRequest__WEBPACK_IMPORTED_MODULE_2__["RequestStatus"].ACCEPTED.toString()));
                break;
            case src_app_data_entities_exchangeRequest__WEBPACK_IMPORTED_MODULE_2__["RequestStatus"].DECLINED:
                this.addFilteredRequests(this.allRequests.filter(request => request.status === src_app_data_entities_exchangeRequest__WEBPACK_IMPORTED_MODULE_2__["RequestStatus"].DECLINED.toString()));
                break;
            case src_app_data_entities_exchangeRequest__WEBPACK_IMPORTED_MODULE_2__["RequestStatus"].INVALID:
                this.addFilteredRequests(this.allRequests.filter(request => request.status === src_app_data_entities_exchangeRequest__WEBPACK_IMPORTED_MODULE_2__["RequestStatus"].INVALID.toString()));
                break;
        }
    }
}
ExchangeRequestStatusFilterComponent.ɵfac = function ExchangeRequestStatusFilterComponent_Factory(t) { return new (t || ExchangeRequestStatusFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_handler_service__WEBPACK_IMPORTED_MODULE_3__["OrderHandlerService"])); };
ExchangeRequestStatusFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExchangeRequestStatusFilterComponent, selectors: [["app-exchange-request-status-filter"]], inputs: { allRequests: "allRequests", allRequestsChange: ["requestsChange", "allRequestsChange"] }, outputs: { filteredRequests: "filteredRequests" }, decls: 6, vars: 2, consts: [["appearance", "fill"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function ExchangeRequestStatusFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filter by status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ExchangeRequestStatusFilterComponent_Template_mat_select_valueChange_4_listener($event) { return ctx.selectedFilter = $event; })("selectionChange", function ExchangeRequestStatusFilterComponent_Template_mat_select_selectionChange_4_listener() { return ctx.filterRequests(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExchangeRequestStatusFilterComponent_mat_option_5_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.requestStatuses);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]], styles: ["section[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 2%;\n  top: 170px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leGNoYW5nZXMvY29tcG9uZW50cy9leGNoYW5nZS1yZXF1ZXN0LXN0YXR1cy1maWx0ZXIvZXhjaGFuZ2UtcmVxdWVzdC1zdGF0dXMtZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2V4Y2hhbmdlcy9jb21wb25lbnRzL2V4Y2hhbmdlLXJlcXVlc3Qtc3RhdHVzLWZpbHRlci9leGNoYW5nZS1yZXF1ZXN0LXN0YXR1cy1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcblxuc2VjdGlvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDIlO1xuICAgIHRvcDogJG5hdmJhcmhlaWdodCArIDIwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExchangeRequestStatusFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exchange-request-status-filter',
                templateUrl: './exchange-request-status-filter.component.html',
                styleUrls: ['./exchange-request-status-filter.component.scss']
            }]
    }], function () { return [{ type: _services_order_handler_service__WEBPACK_IMPORTED_MODULE_3__["OrderHandlerService"] }]; }, { allRequests: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allRequestsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['requestsChange']
        }], filteredRequests: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['filteredRequests']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/exchanges/components/request-tail/request-tail.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/exchanges/components/request-tail/request-tail.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RequestTailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestTailComponent", function() { return RequestTailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_data_entities_exchangeRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data/entities/exchangeRequest */ "./src/app/data/entities/exchangeRequest.ts");
/* harmony import */ var src_app_data_api_exchange_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data/api/exchange-api.service */ "./src/app/data/api/exchange-api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _pipes_hour_printer_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../pipes/hour-printer.pipe */ "./src/app/pipes/hour-printer.pipe.ts");








function RequestTailComponent_h4_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.request.fromUsername);
} }
function RequestTailComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.request.toUsername);
} }
function RequestTailComponent_h4_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "hourPrinter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r3.request.toSubjectName, ", ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r3.request.toDate, "dd.MM.yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx_r3.request.toTime), " ");
} }
function RequestTailComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "hourPrinter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r5.request.fromSubjectName, ", ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r5.request.fromDate, "dd.MM.yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx_r5.request.fromTime), " ");
} }
function RequestTailComponent_h4_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "hourPrinter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r6.request.fromSubjectName, ", ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r6.request.fromDate, "dd.MM.yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx_r6.request.fromTime), " ");
} }
function RequestTailComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "hourPrinter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r8.request.toSubjectName, ", ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r8.request.toDate, "dd.MM.yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx_r8.request.toTime), " ");
} }
function RequestTailComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r9.request.resolvementTime, "dd.MM.yyyy"));
} }
function RequestTailComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No action yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestTailComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestTailComponent_div_34_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.acceptRequest(ctx_r13.request.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " check_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestTailComponent_div_34_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.declineRequest(ctx_r15.request.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", ctx_r12.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", ctx_r12.position);
} }
class RequestTailComponent {
    constructor(exchangeApi) {
        this.exchangeApi = exchangeApi;
        this.position = 'right';
    }
    ngOnInit() {
        this.person = this.requestType === 'incoming' ? 'Sender' : 'Receiver';
    }
    acceptRequest(requestId) {
        this.exchangeApi.acceptRequest(requestId).subscribe(() => window.location.reload());
    }
    declineRequest(requestId) {
        this.exchangeApi.declineRequest(requestId).subscribe(() => window.location.reload());
    }
    getStatusColor(status) {
        switch (status) {
            case src_app_data_entities_exchangeRequest__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].ACCEPTED: return 'darkgreen';
            case src_app_data_entities_exchangeRequest__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].DECLINED: return '#C13745';
            case src_app_data_entities_exchangeRequest__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].PENDING: return 'grey';
            case src_app_data_entities_exchangeRequest__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].INVALID: return 'orange';
        }
    }
}
RequestTailComponent.ɵfac = function RequestTailComponent_Factory(t) { return new (t || RequestTailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_api_exchange_api_service__WEBPACK_IMPORTED_MODULE_2__["ExchangeApiService"])); };
RequestTailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestTailComponent, selectors: [["app-request-tail"]], inputs: { request: "request", requestType: "requestType" }, decls: 35, vars: 13, consts: [[1, "request-container"], [1, "container", "text-container"], [1, "positioner"], [1, "description"], ["class", "value", 4, "ngIf", "ngIfElse"], ["printReceiver", ""], ["id", "lesson-container", 1, "container"], ["outgoingFrom", ""], ["outgoingTo", ""], [1, "container"], [4, "ngIf", "ngIfElse"], ["noAction", ""], [1, "value"], ["class", "action-container", 4, "ngIf"], [1, "action-container"], ["id", "accept-icon", "fontSet", "material-icons-outlined", "matTooltip", "Accept request", 1, "icon", 3, "matTooltipPosition", "click"], ["id", "decline-icon", "fontSet", "material-icons-outlined", "matTooltip", "Decline request", 1, "icon", 3, "matTooltipPosition", "click"]], template: function RequestTailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RequestTailComponent_h4_6_Template, 2, 1, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RequestTailComponent_ng_template_7_Template, 2, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "From:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RequestTailComponent_h4_13_Template, 4, 8, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RequestTailComponent_ng_template_14_Template, 4, 8, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "To:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RequestTailComponent_h4_19_Template, 4, 8, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RequestTailComponent_ng_template_20_Template, 4, 8, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Resolvement date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RequestTailComponent_div_26_Template, 4, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RequestTailComponent_ng_template_27_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, RequestTailComponent_div_34_Template, 5, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.person, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.person === "Sender")("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.requestType === "incoming")("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.requestType === "incoming")("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.request.resolvementTime)("ngIfElse", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.getStatusColor(ctx.request.status));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.request.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.requestType === "incoming" && ctx.request.status === "PENDING");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _pipes_hour_printer_pipe__WEBPACK_IMPORTED_MODULE_6__["HourPrinterPipe"]], styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin-bottom: 30px;\n}\n\n.request-container[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 42px 14px rgba(170, 167, 167, 0.2);\n  border-radius: 5px;\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  height: 120px;\n  width: 100%;\n}\n\n.action-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n.icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n}\n\n#accept-icon[_ngcontent-%COMP%] {\n  color: darkgreen;\n}\n\n#decline-icon[_ngcontent-%COMP%] {\n  color: #C13745;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.positioner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  align-self: center;\n}\n\n.text-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  align-self: center;\n}\n\n#lesson-container[_ngcontent-%COMP%] {\n  width: 180%;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin: 0;\n  color: gray;\n  font-size: 0.8em;\n}\n\n.value[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-top: 5px;\n  align-self: flex-start;\n  justify-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leGNoYW5nZXMvY29tcG9uZW50cy9yZXF1ZXN0LXRhaWwvcmVxdWVzdC10YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxzREFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2V4Y2hhbmdlcy9jb21wb25lbnRzL3JlcXVlc3QtdGFpbC9yZXF1ZXN0LXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnJlcXVlc3QtY29udGFpbmVyIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDQycHggMTRweCByZ2JhKDE3MCwgMTY3LCAxNjcsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY3Rpb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5pY29uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbn1cblxuI2FjY2VwdC1pY29uIHtcbiAgICBjb2xvcjogZGFya2dyZWVuOyAgXG59XG5cbiNkZWNsaW5lLWljb24ge1xuICAgIGNvbG9yOiAjQzEzNzQ1O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wb3NpdGlvbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4udGV4dC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4jbGVzc29uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDE4MCU7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi52YWx1ZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestTailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-request-tail',
                templateUrl: './request-tail.component.html',
                styleUrls: ['./request-tail.component.scss']
            }]
    }], function () { return [{ type: src_app_data_api_exchange_api_service__WEBPACK_IMPORTED_MODULE_2__["ExchangeApiService"] }]; }, { request: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['request']
        }], requestType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['requestType']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/exchanges/enums/entityType.enum.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/exchanges/enums/entityType.enum.ts ***!
  \************************************************************/
/*! exports provided: EntityType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityType", function() { return EntityType; });
var EntityType;
(function (EntityType) {
    EntityType["SUBJECT"] = "subject";
    EntityType["LESSON"] = "lesson";
    EntityType["OCCURRENCE"] = "occurrence";
})(EntityType || (EntityType = {}));


/***/ }),

/***/ "./src/app/modules/exchanges/exchanges.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/exchanges/exchanges.module.ts ***!
  \*******************************************************/
/*! exports provided: ExchangesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangesModule", function() { return ExchangesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layouts_exchanges_exchanges_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/exchanges/exchanges.component */ "./src/app/modules/exchanges/layouts/exchanges/exchanges.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _layouts_incoming_exchanges_incoming_exchanges_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/incoming-exchanges/incoming-exchanges.component */ "./src/app/modules/exchanges/layouts/incoming-exchanges/incoming-exchanges.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_exchange_request_status_filter_exchange_request_status_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/exchange-request-status-filter/exchange-request-status-filter.component */ "./src/app/modules/exchanges/components/exchange-request-status-filter/exchange-request-status-filter.component.ts");
/* harmony import */ var _components_request_tail_request_tail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/request-tail/request-tail.component */ "./src/app/modules/exchanges/components/request-tail/request-tail.component.ts");
/* harmony import */ var _layouts_outgoing_exchanges_outgoing_exchanges_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/outgoing-exchanges/outgoing-exchanges.component */ "./src/app/modules/exchanges/layouts/outgoing-exchanges/outgoing-exchanges.component.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");













class ExchangesModule {
}
ExchangesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExchangesModule });
ExchangesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExchangesModule_Factory(t) { return new (t || ExchangesModule)(); }, providers: [
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"]
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExchangesModule, { declarations: [_layouts_exchanges_exchanges_component__WEBPACK_IMPORTED_MODULE_2__["ExchangesComponent"], _layouts_incoming_exchanges_incoming_exchanges_component__WEBPACK_IMPORTED_MODULE_6__["IncomingExchangesComponent"], _components_exchange_request_status_filter_exchange_request_status_filter_component__WEBPACK_IMPORTED_MODULE_8__["ExchangeRequestStatusFilterComponent"], _components_request_tail_request_tail_component__WEBPACK_IMPORTED_MODULE_9__["RequestTailComponent"], _layouts_outgoing_exchanges_outgoing_exchanges_component__WEBPACK_IMPORTED_MODULE_10__["OutgoingExchangesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
        src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"]], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExchangesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_layouts_exchanges_exchanges_component__WEBPACK_IMPORTED_MODULE_2__["ExchangesComponent"], _layouts_incoming_exchanges_incoming_exchanges_component__WEBPACK_IMPORTED_MODULE_6__["IncomingExchangesComponent"], _components_exchange_request_status_filter_exchange_request_status_filter_component__WEBPACK_IMPORTED_MODULE_8__["ExchangeRequestStatusFilterComponent"], _components_request_tail_request_tail_component__WEBPACK_IMPORTED_MODULE_9__["RequestTailComponent"], _layouts_outgoing_exchanges_outgoing_exchanges_component__WEBPACK_IMPORTED_MODULE_10__["OutgoingExchangesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                    src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"]
                ],
                providers: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
                ],
                exports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/exchanges/layouts/exchanges/exchanges.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/exchanges/layouts/exchanges/exchanges.component.ts ***!
  \****************************************************************************/
/*! exports provided: ExchangesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangesComponent", function() { return ExchangesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _enums_entityType_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../enums/entityType.enum */ "./src/app/modules/exchanges/enums/entityType.enum.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var src_app_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");
/* harmony import */ var src_app_data_api_subject_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/api/subject-api.service */ "./src/app/data/api/subject-api.service.ts");
/* harmony import */ var src_app_data_api_lesson_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/data/api/lesson-api.service */ "./src/app/data/api/lesson-api.service.ts");
/* harmony import */ var src_app_data_api_occurrence_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/data/api/occurrence-api.service */ "./src/app/data/api/occurrence-api.service.ts");
/* harmony import */ var src_app_data_api_exchange_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/data/api/exchange-api.service */ "./src/app/data/api/exchange-api.service.ts");
/* harmony import */ var src_app_shared_services_snack_bar_handler_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/snack-bar-handler.service */ "./src/app/shared/services/snack-bar-handler.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pipes_hour_printer_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../pipes/hour-printer.pipe */ "./src/app/pipes/hour-printer.pipe.ts");






















function ExchangesComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExchangesComponent_mat_option_13_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const subject_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.setCurrentSenderObject("subject", subject_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", subject_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subject_r7.name, " ");
} }
function ExchangesComponent_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExchangesComponent_mat_option_18_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const lesson_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.setCurrentSenderObject("lesson", lesson_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "hourPrinter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lesson_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", lesson_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, lesson_r10.nextDate, "EEEE"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, lesson_r10.time), " ");
} }
function ExchangesComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExchangesComponent_mat_option_23_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const occurrence_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.setCurrentSenderObject("occurrence", occurrence_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const occurrence_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", occurrence_r13.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, occurrence_r13.date, "dd.MM.yyyy"), " ");
} }
function ExchangesComponent_mat_option_33_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExchangesComponent_mat_option_33_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const subject_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.setCurrentReceiverObject("subject", subject_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", subject_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subject_r16.name, " ");
} }
function ExchangesComponent_mat_option_38_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExchangesComponent_mat_option_38_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const lesson_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.setCurrentReceiverObject("lesson", lesson_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "hourPrinter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lesson_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", lesson_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, lesson_r19.nextDate, "EEEE"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, lesson_r19.time), " ");
} }
function ExchangesComponent_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExchangesComponent_mat_option_43_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const occurrence_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.setCurrentReceiverObject("occurrence", occurrence_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const occurrence_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", occurrence_r22.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", occurrence_r22.username, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, occurrence_r22.date, "dd.MM.yyyy"), " ");
} }
class ExchangesComponent {
    constructor(subjectApi, lessonApi, occurrenceApi, exchangeApi, snackBar) {
        this.subjectApi = subjectApi;
        this.lessonApi = lessonApi;
        this.occurrenceApi = occurrenceApi;
        this.exchangeApi = exchangeApi;
        this.snackBar = snackBar;
        this.activeNavElement = src_app_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["ActiveNavElement"].EXCHANGE_SEND;
        this.exchangeNavIcon = 'sendRequest';
        this.userId = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_5__["default"])(localStorage.getItem('token')).sub;
        //Fields for sender
        this.senderSubjects = [];
        this.senderLessons = [];
        this.senderLessonsChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.senderQueue = [];
        this.senderQueueChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentSenderSubjectChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentSenderLessonChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentSenderOccurrenceChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        //Fields for receiver
        this.receiverSubjects = [];
        this.receiverLessons = [];
        this.receiverLessonsChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.receiverQueue = [];
        this.receiverQueueChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentReceiverSubjectChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentReceiverLessonChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentReceiverOccurrenceChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            senderSubject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            senderLesson: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            senderDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            receiverSubject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            receiverLesson: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            receiverDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    ngOnInit() {
        this.subscriptionHandlerForSender();
        this.subscriptionHandlerForReceiver();
        this.registerFormControlCallbacks();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    subscriptionHandlerForSender() {
        //Subscribe changes for lessons
        this.subscription = this.senderLessonsChange.subscribe(lessons => this.senderLessons = lessons);
        this.subscription.add(this.senderQueueChange.subscribe(queue => this.senderQueue = queue));
        //Get entities of subjects, lessons and occurrences from API
        this.subscription.add(this.subjectApi.getAllSubjects().subscribe(subjects => this.senderSubjects = subjects));
        this.subscription.add(this.currentSenderSubjectChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(subject => this.lessonApi.getLessons(subject.id))).subscribe(lessons => {
            this.senderLessons = lessons;
            this.senderQueue = [];
        }));
        this.subscription.add(this.currentSenderLessonChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(lesson => this.occurrenceApi.filterOccurrences(lesson.id, (occurrence => occurrence.userId === (+this.userId)), 21)))
            .subscribe(occurrences => {
            this.senderQueue = occurrences;
        }));
    }
    subscriptionHandlerForReceiver() {
        //Subscribe changes for lessons
        this.subscription.add(this.receiverLessonsChange.subscribe(lessons => this.receiverLessons = lessons));
        this.subscription.add(this.receiverQueueChange.subscribe(queue => this.receiverQueue = queue));
        //Get entities of subjects, lessons and occurrences from API
        this.subscription.add(this.subjectApi.getAllSubjects().subscribe(subjects => this.receiverSubjects = subjects));
        this.subscription.add(this.currentReceiverSubjectChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(subject => this.lessonApi.getLessons(subject.id))).subscribe(lessons => {
            this.receiverLessons = lessons;
            this.receiverQueue = [];
        }));
        this.subscription.add(this.currentReceiverLessonChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(lesson => this.occurrenceApi.filterOccurrences(lesson.id, (occurrence => occurrence.userId !== (+this.userId)), 21)))
            .subscribe(occurrences => {
            this.receiverQueue = occurrences;
        }));
    }
    setCurrentSenderObject(type, object) {
        switch (type) {
            case _enums_entityType_enum__WEBPACK_IMPORTED_MODULE_4__["EntityType"].SUBJECT: {
                this.currentSenderSubject = object;
                this.currentSenderSubjectChange.next(this.currentSenderSubject);
                break;
            }
            case _enums_entityType_enum__WEBPACK_IMPORTED_MODULE_4__["EntityType"].LESSON: {
                this.currentSenderLesson = object;
                this.currentSenderLessonChange.next(this.currentSenderLesson);
                break;
            }
            case _enums_entityType_enum__WEBPACK_IMPORTED_MODULE_4__["EntityType"].OCCURRENCE: {
                this.currentSenderOccurrence = object;
                this.currentSenderOccurrenceChange.next(this.currentSenderOccurrence);
                break;
            }
        }
    }
    setCurrentReceiverObject(type, object) {
        switch (type) {
            case _enums_entityType_enum__WEBPACK_IMPORTED_MODULE_4__["EntityType"].SUBJECT: {
                this.currentReceiverSubject = object;
                this.currentReceiverSubjectChange.next(this.currentReceiverSubject);
                break;
            }
            case _enums_entityType_enum__WEBPACK_IMPORTED_MODULE_4__["EntityType"].LESSON: {
                this.currentReceiverLesson = object;
                this.currentReceiverLessonChange.next(this.currentReceiverLesson);
                break;
            }
            case _enums_entityType_enum__WEBPACK_IMPORTED_MODULE_4__["EntityType"].OCCURRENCE: {
                this.currentReceiverOccurrence = object;
                this.currentReceiverOccurrenceChange.next(this.currentReceiverOccurrence);
                break;
            }
        }
    }
    registerFormControlCallbacks() {
        this.formGroup.get('senderSubject').valueChanges.subscribe(() => this.formGroup.get('senderLesson').reset('')),
            this.formGroup.get('senderLesson').valueChanges.subscribe(() => this.formGroup.get('senderDate').reset('')),
            this.formGroup.get('receiverSubject').valueChanges.subscribe(() => this.formGroup.get('receiverLesson').reset('')),
            this.formGroup.get('receiverLesson').valueChanges.subscribe(() => this.formGroup.get('receiverDate').reset(''));
    }
    sendExchangeRequest(formDirective) {
        this.exchangeApi.submitRequest(+(this.userId), +(this.currentSenderLesson.id), this.currentSenderOccurrence.lessonIndex, +(this.currentReceiverOccurrence.userId), +(this.currentReceiverLesson.id), this.currentReceiverOccurrence.lessonIndex).subscribe(response => {
            if (response.status === 200) {
                this.snackBar.openBasicSnackBar('Exchange request has been sent successfully.');
                formDirective.resetForm();
                this.formGroup.reset();
            }
            else
                this.snackBar.openErrorSnackBar('Something went wrong.');
        });
    }
}
ExchangesComponent.ɵfac = function ExchangesComponent_Factory(t) { return new (t || ExchangesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_api_subject_api_service__WEBPACK_IMPORTED_MODULE_7__["SubjectApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_api_lesson_api_service__WEBPACK_IMPORTED_MODULE_8__["LessonApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_api_occurrence_api_service__WEBPACK_IMPORTED_MODULE_9__["OccurrenceApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_api_exchange_api_service__WEBPACK_IMPORTED_MODULE_10__["ExchangeApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_snack_bar_handler_service__WEBPACK_IMPORTED_MODULE_11__["SnackBarHandlerService"])); };
ExchangesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExchangesComponent, selectors: [["app-exchanges"]], decls: 46, vars: 9, consts: [[1, "layout-organizer"], [3, "active"], [1, "forms-container"], [3, "formGroup", "ngSubmit"], ["formDirective", "ngForm"], [1, "form-part"], ["appearance", "fill"], ["formControlName", "senderSubject"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["formControlName", "senderLesson"], ["formControlName", "senderDate"], ["formControlName", "receiverSubject"], ["formControlName", "receiverLesson"], ["formControlName", "receiverDate"], ["mat-raised-button", "", "type", "submit", 3, "disabled"], [3, "value", "click"]], template: function ExchangesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Your lesson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ExchangesComponent_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.sendExchangeRequest(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExchangesComponent_mat_option_13_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lesson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ExchangesComponent_mat_option_18_Template, 4, 8, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ExchangesComponent_mat_option_23_Template, 3, 5, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Receiver's lesson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ExchangesComponent_mat_option_33_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Lesson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ExchangesComponent_mat_option_38_Template, 4, 8, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "User and Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ExchangesComponent_mat_option_43_Template, 3, 6, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Send request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.activeNavElement);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.senderSubjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.senderLessons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.senderQueue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.receiverSubjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.receiverLessons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.receiverQueue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formGroup.valid);
    } }, directives: [src_app_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"], _pipes_hour_printer_pipe__WEBPACK_IMPORTED_MODULE_18__["HourPrinterPipe"]], styles: ["*[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.layout-organizer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nsection[_ngcontent-%COMP%] {\n  margin-top: 150px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.forms-container[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 0px 0px 42px 14px rgba(170, 167, 167, 0.4);\n  padding: 50px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.form-part[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 100px;\n  height: 100px;\n  width: 100px;\n  color: #72272A;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #72272A;\n  color: white;\n  font-size: 1.3em;\n  margin-top: 2em;\n}\n\n@media only screen and (max-height: 680px) {\n  .forms-container[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n    padding: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leGNoYW5nZXMvbGF5b3V0cy9leGNoYW5nZXMvZXhjaGFuZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLGlCQ0xXO0VETVgsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFJQTtFQUNJLHVCQUFBO0VBQ0Esc0RBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNDbkRVO0FEa0RkOztBQUlBO0VBQ0kseUJDdkRVO0VEd0RWLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxhQUFBO0VBRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXhjaGFuZ2VzL2xheW91dHMvZXhjaGFuZ2VzL2V4Y2hhbmdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xuXG4qIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5sYXlvdXQtb3JnYW5pemVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAkbmF2YmFyaGVpZ2h0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvcm1zLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0MnB4IDE0cHggcmdiYSgxNzAsMTY3LDE2NywwLjQpO1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3JtLXBhcnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG5tYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBjb2xvcjogJHNlY29uZGNvbG9yO1xufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRjb2xvcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDY4MHB4KSB7XG4gICAgLmZvcm1zLWNvbnRhaW5lciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgfVxufVxuIiwiLy9HbG9iYWxcbiRtYWluY29sb3I6ICMxYTJmMzM7XG4kc2Vjb25kY29sb3I6ICM3MjI3MkE7XG5cbiRsb2dvZm9udDogJ0xvYnN0ZXIgVHdvJywgY3Vyc2l2ZTtcbiRtYWluZm9udDogJ0ludGVyJywgc2Fucy1zZXJpZjtcblxuLy9OYXZiYXJcbiRuYXZiYXJoZWlnaHQ6IDE1MHB4O1xuXG4kYnJlYWtwb2ludHM6IChcbiAgJ3Bob25lJzogNjg4cHgsXG4gICd0YWJsZXQnOiA5OTJweCxcbiAgJ2xhcHRvcCc6IDEyODBweFxuKSAhZGVmYXVsdDtcblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExchangesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exchanges',
                templateUrl: './exchanges.component.html',
                styleUrls: ['./exchanges.component.scss']
            }]
    }], function () { return [{ type: src_app_data_api_subject_api_service__WEBPACK_IMPORTED_MODULE_7__["SubjectApiService"] }, { type: src_app_data_api_lesson_api_service__WEBPACK_IMPORTED_MODULE_8__["LessonApiService"] }, { type: src_app_data_api_occurrence_api_service__WEBPACK_IMPORTED_MODULE_9__["OccurrenceApiService"] }, { type: src_app_data_api_exchange_api_service__WEBPACK_IMPORTED_MODULE_10__["ExchangeApiService"] }, { type: src_app_shared_services_snack_bar_handler_service__WEBPACK_IMPORTED_MODULE_11__["SnackBarHandlerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/exchanges/layouts/incoming-exchanges/incoming-exchanges.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/exchanges/layouts/incoming-exchanges/incoming-exchanges.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: IncomingExchangesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomingExchangesComponent", function() { return IncomingExchangesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");
/* harmony import */ var src_app_data_api_exchange_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data/api/exchange-api.service */ "./src/app/data/api/exchange-api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_exchange_request_status_filter_exchange_request_status_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/exchange-request-status-filter/exchange-request-status-filter.component */ "./src/app/modules/exchanges/components/exchange-request-status-filter/exchange-request-status-filter.component.ts");
/* harmony import */ var _components_request_tail_request_tail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/request-tail/request-tail.component */ "./src/app/modules/exchanges/components/request-tail/request-tail.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");










function IncomingExchangesComponent_ng_container_3_div_3_app_request_tail_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-request-tail", 10);
} if (rf & 2) {
    const request_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("request", request_r7)("requestType", ctx_r6.requestType);
} }
function IncomingExchangesComponent_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IncomingExchangesComponent_ng_container_3_div_3_app_request_tail_1_Template, 1, 2, "app-request-tail", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.filteredRequests);
} }
function IncomingExchangesComponent_ng_container_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "There is no request that matched selected filters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IncomingExchangesComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-exchange-request-status-filter", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filteredRequests", function IncomingExchangesComponent_ng_container_3_Template_app_exchange_request_status_filter_filteredRequests_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.setFilteredRequests($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IncomingExchangesComponent_ng_container_3_div_3_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IncomingExchangesComponent_ng_container_3_ng_template_4_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("requestsChange", ctx_r0.allRequestsChange);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.filteredRequests.length > 0)("ngIfElse", _r4);
} }
function IncomingExchangesComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
class IncomingExchangesComponent {
    constructor(exchangeApi) {
        this.exchangeApi = exchangeApi;
        this.activeNavElement = src_app_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["ActiveNavElement"].EXCHANGE_INCOMING;
        this.exchangeNavIcon = 'incomingRequests';
        this.requestType = 'incoming';
        this.allRequestsChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        this.filteredRequests = [];
    }
    ngOnInit() {
        this.fetchRequests();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    fetchRequests() {
        this.subscription = this.exchangeApi.getRequestsToUser().subscribe(requests => {
            this.allRequests = requests;
            this.allRequestsChange.next(requests);
        });
    }
    setFilteredRequests(requests) {
        this.filteredRequests = requests;
    }
}
IncomingExchangesComponent.ɵfac = function IncomingExchangesComponent_Factory(t) { return new (t || IncomingExchangesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_api_exchange_api_service__WEBPACK_IMPORTED_MODULE_3__["ExchangeApiService"])); };
IncomingExchangesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IncomingExchangesComponent, selectors: [["app-incoming-exchanges"]], decls: 6, vars: 3, consts: [[1, "layout-organizer"], [3, "active"], [4, "ngIf", "ngIfElse"], ["loading", ""], [1, "filter-container"], [3, "requestsChange", "filteredRequests"], ["class", "requests-container", 4, "ngIf", "ngIfElse"], ["noRequestInfo", ""], [1, "requests-container"], [3, "request", "requestType", 4, "ngFor", "ngForOf"], [3, "request", "requestType"], [1, "no-request-info"]], template: function IncomingExchangesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IncomingExchangesComponent_ng_container_3_Template, 6, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IncomingExchangesComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.activeNavElement);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allRequests)("ngIfElse", _r1);
    } }, directives: [src_app_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_exchange_request_status_filter_exchange_request_status_filter_component__WEBPACK_IMPORTED_MODULE_5__["ExchangeRequestStatusFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_request_tail_request_tail_component__WEBPACK_IMPORTED_MODULE_6__["RequestTailComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"]], styles: [".layout-organizer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nsection[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 150px;\n}\n\n.requests-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  padding-top: 20px;\n}\n\n.no-request-info[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\nmat-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\napp-request-tail[_ngcontent-%COMP%] {\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leGNoYW5nZXMvbGF5b3V0cy9pbmNvbWluZy1leGNoYW5nZXMvaW5jb21pbmctZXhjaGFuZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJDTlc7QURLZjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFJQTtFQUNJLFVBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXhjaGFuZ2VzL2xheW91dHMvaW5jb21pbmctZXhjaGFuZ2VzL2luY29taW5nLWV4Y2hhbmdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xuXG4ubGF5b3V0LW9yZ2FuaXplciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuc2VjdGlvbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tdG9wOiAkbmF2YmFyaGVpZ2h0O1xufVxuXG4ucmVxdWVzdHMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ubm8tcmVxdWVzdC1pbmZvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG5tYXQtc3Bpbm5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuYXBwLXJlcXVlc3QtdGFpbCB7XG4gICAgd2lkdGg6IDYwJTtcbn1cblxuIiwiLy9HbG9iYWxcbiRtYWluY29sb3I6ICMxYTJmMzM7XG4kc2Vjb25kY29sb3I6ICM3MjI3MkE7XG5cbiRsb2dvZm9udDogJ0xvYnN0ZXIgVHdvJywgY3Vyc2l2ZTtcbiRtYWluZm9udDogJ0ludGVyJywgc2Fucy1zZXJpZjtcblxuLy9OYXZiYXJcbiRuYXZiYXJoZWlnaHQ6IDE1MHB4O1xuXG4kYnJlYWtwb2ludHM6IChcbiAgJ3Bob25lJzogNjg4cHgsXG4gICd0YWJsZXQnOiA5OTJweCxcbiAgJ2xhcHRvcCc6IDEyODBweFxuKSAhZGVmYXVsdDtcblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IncomingExchangesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-incoming-exchanges',
                templateUrl: './incoming-exchanges.component.html',
                styleUrls: ['./incoming-exchanges.component.scss']
            }]
    }], function () { return [{ type: src_app_data_api_exchange_api_service__WEBPACK_IMPORTED_MODULE_3__["ExchangeApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/exchanges/layouts/outgoing-exchanges/outgoing-exchanges.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/exchanges/layouts/outgoing-exchanges/outgoing-exchanges.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: OutgoingExchangesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutgoingExchangesComponent", function() { return OutgoingExchangesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");
/* harmony import */ var src_app_data_api_exchange_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data/api/exchange-api.service */ "./src/app/data/api/exchange-api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_exchange_request_status_filter_exchange_request_status_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/exchange-request-status-filter/exchange-request-status-filter.component */ "./src/app/modules/exchanges/components/exchange-request-status-filter/exchange-request-status-filter.component.ts");
/* harmony import */ var _components_request_tail_request_tail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/request-tail/request-tail.component */ "./src/app/modules/exchanges/components/request-tail/request-tail.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");










function OutgoingExchangesComponent_ng_container_3_div_3_app_request_tail_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-request-tail", 10);
} if (rf & 2) {
    const request_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("request", request_r7)("requestType", ctx_r6.requestType);
} }
function OutgoingExchangesComponent_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OutgoingExchangesComponent_ng_container_3_div_3_app_request_tail_1_Template, 1, 2, "app-request-tail", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.filteredRequests);
} }
function OutgoingExchangesComponent_ng_container_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "There is no request that matched selected filters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OutgoingExchangesComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-exchange-request-status-filter", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filteredRequests", function OutgoingExchangesComponent_ng_container_3_Template_app_exchange_request_status_filter_filteredRequests_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.setFilteredRequests($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OutgoingExchangesComponent_ng_container_3_div_3_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OutgoingExchangesComponent_ng_container_3_ng_template_4_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("requestsChange", ctx_r0.allRequestsChange);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.filteredRequests.length > 0)("ngIfElse", _r4);
} }
function OutgoingExchangesComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
class OutgoingExchangesComponent {
    constructor(exchangeApi) {
        this.exchangeApi = exchangeApi;
        this.activeNavElement = src_app_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["ActiveNavElement"].EXCHANGE_OUTGOING;
        this.exchangeNavIcon = 'outgoingRequests';
        this.requestType = 'outgoing';
        this.allRequestsChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        this.filteredRequests = [];
    }
    ngOnInit() {
        this.fetchRequests();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    fetchRequests() {
        this.subscription = this.exchangeApi.getRequestsFromUser().subscribe(requests => {
            this.allRequests = requests;
            this.allRequestsChange.next(requests);
        });
    }
    setFilteredRequests(requests) {
        this.filteredRequests = requests;
    }
}
OutgoingExchangesComponent.ɵfac = function OutgoingExchangesComponent_Factory(t) { return new (t || OutgoingExchangesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_api_exchange_api_service__WEBPACK_IMPORTED_MODULE_3__["ExchangeApiService"])); };
OutgoingExchangesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutgoingExchangesComponent, selectors: [["app-outgoing-exchanges"]], decls: 6, vars: 3, consts: [[1, "layout-organizer"], [3, "active"], [4, "ngIf", "ngIfElse"], ["loading", ""], [1, "filter-container"], [3, "requestsChange", "filteredRequests"], ["class", "requests-container", 4, "ngIf", "ngIfElse"], ["noRequestInfo", ""], [1, "requests-container"], [3, "request", "requestType", 4, "ngFor", "ngForOf"], [3, "request", "requestType"], [1, "no-request-info"]], template: function OutgoingExchangesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OutgoingExchangesComponent_ng_container_3_Template, 6, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OutgoingExchangesComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.activeNavElement);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allRequests)("ngIfElse", _r1);
    } }, directives: [src_app_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_exchange_request_status_filter_exchange_request_status_filter_component__WEBPACK_IMPORTED_MODULE_5__["ExchangeRequestStatusFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_request_tail_request_tail_component__WEBPACK_IMPORTED_MODULE_6__["RequestTailComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"]], styles: [".layout-organizer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nsection[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 150px;\n}\n\n.requests-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  padding-top: 20px;\n}\n\n.no-request-info[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\nmat-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\napp-request-tail[_ngcontent-%COMP%] {\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leGNoYW5nZXMvbGF5b3V0cy9vdXRnb2luZy1leGNoYW5nZXMvb3V0Z29pbmctZXhjaGFuZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJDTlc7QURLZjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFJQTtFQUNJLFVBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXhjaGFuZ2VzL2xheW91dHMvb3V0Z29pbmctZXhjaGFuZ2VzL291dGdvaW5nLWV4Y2hhbmdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xuXG4ubGF5b3V0LW9yZ2FuaXplciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuc2VjdGlvbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tdG9wOiAkbmF2YmFyaGVpZ2h0O1xufVxuXG4ucmVxdWVzdHMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ubm8tcmVxdWVzdC1pbmZvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG5tYXQtc3Bpbm5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuYXBwLXJlcXVlc3QtdGFpbCB7XG4gICAgd2lkdGg6IDYwJTtcbn1cblxuIiwiLy9HbG9iYWxcbiRtYWluY29sb3I6ICMxYTJmMzM7XG4kc2Vjb25kY29sb3I6ICM3MjI3MkE7XG5cbiRsb2dvZm9udDogJ0xvYnN0ZXIgVHdvJywgY3Vyc2l2ZTtcbiRtYWluZm9udDogJ0ludGVyJywgc2Fucy1zZXJpZjtcblxuLy9OYXZiYXJcbiRuYXZiYXJoZWlnaHQ6IDE1MHB4O1xuXG4kYnJlYWtwb2ludHM6IChcbiAgJ3Bob25lJzogNjg4cHgsXG4gICd0YWJsZXQnOiA5OTJweCxcbiAgJ2xhcHRvcCc6IDEyODBweFxuKSAhZGVmYXVsdDtcblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutgoingExchangesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-outgoing-exchanges',
                templateUrl: './outgoing-exchanges.component.html',
                styleUrls: ['./outgoing-exchanges.component.scss']
            }]
    }], function () { return [{ type: src_app_data_api_exchange_api_service__WEBPACK_IMPORTED_MODULE_3__["ExchangeApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/exchanges/services/order-handler.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/exchanges/services/order-handler.service.ts ***!
  \*********************************************************************/
/*! exports provided: OrderHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHandlerService", function() { return OrderHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_data_entities_exchangeRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data/entities/exchangeRequest */ "./src/app/data/entities/exchangeRequest.ts");



class OrderHandlerService {
    constructor() { }
    orderByResolvmentDate(requests) {
        return requests.sort((a, b) => new Date(b.resolvementTime).getTime() - new Date(a.resolvementTime).getTime());
    }
    setPendingFirst(requests) {
        let pendingQueue = requests.filter(request => request.status === src_app_data_entities_exchangeRequest__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].PENDING);
        let queueWithoutPending = this.orderByResolvmentDate(requests.filter(request => request.status !== src_app_data_entities_exchangeRequest__WEBPACK_IMPORTED_MODULE_1__["RequestStatus"].PENDING));
        return pendingQueue.concat(queueWithoutPending);
    }
}
OrderHandlerService.ɵfac = function OrderHandlerService_Factory(t) { return new (t || OrderHandlerService)(); };
OrderHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderHandlerService, factory: OrderHandlerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/mobile-blocker/components/mobile-blocker/mobile-blocker.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/mobile-blocker/components/mobile-blocker/mobile-blocker.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: MobileBlockerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileBlockerComponent", function() { return MobileBlockerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MobileBlockerComponent {
    constructor() { }
    ngOnInit() {
    }
}
MobileBlockerComponent.ɵfac = function MobileBlockerComponent_Factory(t) { return new (t || MobileBlockerComponent)(); };
MobileBlockerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileBlockerComponent, selectors: [["app-mobile-blocker"]], decls: 10, vars: 0, consts: [[1, "title"], [1, "message-container"], [1, "message"], [1, "triangle-left"], [1, "triangle-right"]], template: function MobileBlockerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Que");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mobile version is not available yet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "We are working hard to finish it as fast as possible!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["section[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #f4f4f4;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-family: \"Lobster Two\", cursive;\n  font-size: 3em;\n  margin: 0;\n}\n\n.message-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.triangle-left[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 38vh 38vh 0 0;\n  border-color: #72272A transparent transparent transparent;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.triangle-right[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 0 38vh 38vh;\n  border-color: transparent transparent #1a2f33 transparent;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n\n.version[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 1%;\n  bottom: 1%;\n  color: grey;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tb2JpbGUtYmxvY2tlci9jb21wb25lbnRzL21vYmlsZS1ibG9ja2VyL21vYmlsZS1ibG9ja2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBREo7O0FBSUE7RUFDSSxtQ0NUTztFRFVQLGNBQUE7RUFDQSxTQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EseURBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FBREo7O0FBSUE7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx5REFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21vYmlsZS1ibG9ja2VyL2NvbXBvbmVudHMvbW9iaWxlLWJsb2NrZXIvbW9iaWxlLWJsb2NrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlcyc7XG5cbnNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xufVxuXG4udGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAkbG9nb2ZvbnQ7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubWVzc2FnZS1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRyaWFuZ2xlLWxlZnQge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMzh2aCAzOHZoIDAgMDtcbiAgICBib3JkZXItY29sb3I6ICRzZWNvbmRjb2xvciB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG59XG5cbi50cmlhbmdsZS1yaWdodCB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMzh2aCAzOHZoO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgJG1haW5jb2xvciB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xufVxuXG4udmVyc2lvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDElO1xuICAgIGJvdHRvbTogMSU7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgbWFyZ2luOiAwO1xufVxuIiwiLy9HbG9iYWxcbiRtYWluY29sb3I6ICMxYTJmMzM7XG4kc2Vjb25kY29sb3I6ICM3MjI3MkE7XG5cbiRsb2dvZm9udDogJ0xvYnN0ZXIgVHdvJywgY3Vyc2l2ZTtcbiRtYWluZm9udDogJ0ludGVyJywgc2Fucy1zZXJpZjtcblxuLy9OYXZiYXJcbiRuYXZiYXJoZWlnaHQ6IDE1MHB4O1xuXG4kYnJlYWtwb2ludHM6IChcbiAgJ3Bob25lJzogNjg4cHgsXG4gICd0YWJsZXQnOiA5OTJweCxcbiAgJ2xhcHRvcCc6IDEyODBweFxuKSAhZGVmYXVsdDtcblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileBlockerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mobile-blocker',
                templateUrl: './mobile-blocker.component.html',
                styleUrls: ['./mobile-blocker.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/mobile-blocker/mobile-blocker.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/mobile-blocker/mobile-blocker.module.ts ***!
  \*****************************************************************/
/*! exports provided: MobileBlockerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileBlockerModule", function() { return MobileBlockerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_mobile_blocker_mobile_blocker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mobile-blocker/mobile-blocker.component */ "./src/app/modules/mobile-blocker/components/mobile-blocker/mobile-blocker.component.ts");




class MobileBlockerModule {
}
MobileBlockerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MobileBlockerModule });
MobileBlockerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MobileBlockerModule_Factory(t) { return new (t || MobileBlockerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MobileBlockerModule, { declarations: [_components_mobile_blocker_mobile_blocker_component__WEBPACK_IMPORTED_MODULE_2__["MobileBlockerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_components_mobile_blocker_mobile_blocker_component__WEBPACK_IMPORTED_MODULE_2__["MobileBlockerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileBlockerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_mobile_blocker_mobile_blocker_component__WEBPACK_IMPORTED_MODULE_2__["MobileBlockerComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _components_mobile_blocker_mobile_blocker_component__WEBPACK_IMPORTED_MODULE_2__["MobileBlockerComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/mobile-blocker/services/mobile-blocker.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/mobile-blocker/services/mobile-blocker.service.ts ***!
  \***************************************************************************/
/*! exports provided: MobileBlockerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileBlockerService", function() { return MobileBlockerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_snack_bar_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/snack-bar-handler.service */ "./src/app/shared/services/snack-bar-handler.service.ts");





class MobileBlockerService {
    constructor(breakpointObserver, router, snackBar) {
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.snackBar = snackBar;
        this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
        this.isMediumScreen = this.breakpointObserver.isMatched('(max-width: 1279px)');
    }
    canActivate() {
        if (this.isSmallScreen) {
            this.router.navigateByUrl('/mobile-block');
            return false;
        }
        else if (this.isMediumScreen && sessionStorage.getItem('firstVisit') == null) {
            this.snackBar.openNoClosingErrorSnackBar('You may encounter some issues with user interface on you screen size. We are working to fix it, we apologise for inconvinience.');
            sessionStorage.setItem('firstVisit', 'false');
            return true;
        }
        return true;
    }
}
MobileBlockerService.ɵfac = function MobileBlockerService_Factory(t) { return new (t || MobileBlockerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_snack_bar_handler_service__WEBPACK_IMPORTED_MODULE_3__["SnackBarHandlerService"])); };
MobileBlockerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MobileBlockerService, factory: MobileBlockerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileBlockerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_shared_services_snack_bar_handler_service__WEBPACK_IMPORTED_MODULE_3__["SnackBarHandlerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/queues/components/occurrence-tail/occurrence-tail.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/queues/components/occurrence-tail/occurrence-tail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: OccurrenceTailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccurrenceTailComponent", function() { return OccurrenceTailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_hour_printer_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../pipes/hour-printer.pipe */ "./src/app/pipes/hour-printer.pipe.ts");




class OccurrenceTailComponent {
    constructor() { }
    ngOnInit() {
    }
}
OccurrenceTailComponent.ɵfac = function OccurrenceTailComponent_Factory(t) { return new (t || OccurrenceTailComponent)(); };
OccurrenceTailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OccurrenceTailComponent, selectors: [["app-occurrence-tail"]], inputs: { occurrence: "occurrence", pointer: "pointer" }, decls: 19, vars: 9, consts: [[1, "date-container"], [1, "date"], [1, "info-container"], [1, "value-container"], [1, "description"], [1, "value"], [1, "number"]], template: function OccurrenceTailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Subject: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Hour: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "hourPrinter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 4, ctx.occurrence.date, "dd.MM"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.occurrence["lesson"]["subject"]["name"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 7, ctx.occurrence["lesson"]["time"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pointer + 1);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _pipes_hour_printer_pipe__WEBPACK_IMPORTED_MODULE_2__["HourPrinterPipe"]], styles: ["section[_ngcontent-%COMP%] {\n  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  height: 90px;\n}\n\n.date-container[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #1a2f33;\n  font-size: 1.8em;\n  width: 90px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.number[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  position: absolute;\n  right: 2px;\n  bottom: 2px;\n}\n\n.info-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 200px;\n  padding-left: 30px;\n}\n\n.value-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 5px;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9xdWV1ZXMvY29tcG9uZW50cy9vY2N1cnJlbmNlLXRhaWwvb2NjdXJyZW5jZS10YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksMkZBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNJLFNBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9xdWV1ZXMvY29tcG9uZW50cy9vY2N1cnJlbmNlLXRhaWwvb2NjdXJyZW5jZS10YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXMnO1xuXG5zZWN0aW9uIHtcbiAgICBib3gtc2hhZG93OiByZ2JhKDE0LCAzMCwgMzcsIDAuMTIpIDBweCAycHggNHB4IDBweCwgcmdiYSgxNCwgMzAsIDM3LCAwLjMyKSAwcHggMnB4IDE2cHggMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgaGVpZ2h0OiA5MHB4O1xufVxuXG4uZGF0ZS1jb250YWluZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWEyZjMzO1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubnVtYmVyIHtcbiAgICBmb250LXNpemU6IDAuN2VtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMnB4O1xuICAgIGJvdHRvbTogMnB4O1xufVxuXG4uaW5mby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLnZhbHVlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBjb2xvcjogZ3JheTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OccurrenceTailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-occurrence-tail',
                templateUrl: './occurrence-tail.component.html',
                styleUrls: ['./occurrence-tail.component.scss']
            }]
    }], function () { return []; }, { occurrence: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['occurrence']
        }], pointer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['pointer']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/queues/layouts/queue/queue.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/queues/layouts/queue/queue.component.ts ***!
  \*****************************************************************/
/*! exports provided: QueueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueComponent", function() { return QueueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var src_app_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");
/* harmony import */ var src_app_data_api_subject_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data/api/subject-api.service */ "./src/app/data/api/subject-api.service.ts");
/* harmony import */ var src_app_data_api_lesson_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/api/lesson-api.service */ "./src/app/data/api/lesson-api.service.ts");
/* harmony import */ var src_app_data_api_occurrence_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/api/occurrence-api.service */ "./src/app/data/api/occurrence-api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_occurrence_tail_occurrence_tail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/occurrence-tail/occurrence-tail.component */ "./src/app/modules/queues/components/occurrence-tail/occurrence-tail.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");













function QueueComponent_section_2_app_occurrence_tail_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-occurrence-tail", 5);
} if (rf & 2) {
    const occurrence_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("occurrence", occurrence_r4)("pointer", i_r5);
} }
function QueueComponent_section_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QueueComponent_section_2_app_occurrence_tail_1_Template, 1, 2, "app-occurrence-tail", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.userOccurrences);
} }
function QueueComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
class QueueComponent {
    constructor(subjectApi, lessonApi, occurrenceApi, datePipe) {
        this.subjectApi = subjectApi;
        this.lessonApi = lessonApi;
        this.occurrenceApi = occurrenceApi;
        this.datePipe = datePipe;
        this.activeNavElement = src_app_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["ActiveNavElement"].QUEUE;
        this.userId = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_3__["default"])(localStorage.getItem('token')).sub;
    }
    ngOnInit() {
        this.fetchOccurrences(8);
    }
    fetchOccurrences(num) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.fetchNextUserOccurrences(num), this.fetchPastUserOccurrence()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["toArray"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(occurrences => occurrences.sort((a, b) => (+this.datePipe.transform(a.date, 'yyyyMMdd')) - (+this.datePipe.transform(b.date, 'yyyyMMdd'))))).subscribe(occurrences => this.userOccurrences = occurrences);
    }
    fetchPastUserOccurrence() {
        return this.occurrenceApi.updateOccurrences().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(() => this.occurrenceApi.getLastOccurrence()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(occurrence => this.isLessonOccurrenceCurrent(occurrence)));
    }
    fetchNextUserOccurrences(num) {
        return this.subjectApi.getAllSubjects().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(subjects => subjects), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(subject => this.lessonApi.getLessons(subject.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(lessons => lessons), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(lesson => lesson["subject"] = subject))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(lesson => this.occurrenceApi.getNext(lesson.id, 21).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(occurrences => occurrences), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(occurrence => occurrence["lesson"] = lesson))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(occurrence => occurrence.userId === (+this.userId)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(num));
    }
    isLessonOccurrenceCurrent(occurrence) {
        return new Date(this.datePipe.transform(occurrence.date + ', ' + occurrence.time)).getTime() >= new Date().setMinutes(new Date().getMinutes() - 45);
    }
}
QueueComponent.ɵfac = function QueueComponent_Factory(t) { return new (t || QueueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_api_subject_api_service__WEBPACK_IMPORTED_MODULE_5__["SubjectApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_api_lesson_api_service__WEBPACK_IMPORTED_MODULE_6__["LessonApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_api_occurrence_api_service__WEBPACK_IMPORTED_MODULE_7__["OccurrenceApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"])); };
QueueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QueueComponent, selectors: [["app-queue"]], decls: 5, vars: 3, consts: [[1, "layout-organizer"], [3, "active"], [4, "ngIf", "ngIfElse"], ["loading", ""], [3, "occurrence", "pointer", 4, "ngFor", "ngForOf"], [3, "occurrence", "pointer"]], template: function QueueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QueueComponent_section_2_Template, 2, 1, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QueueComponent_ng_template_3_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.activeNavElement);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userOccurrences)("ngIfElse", _r1);
    } }, directives: [src_app_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _components_occurrence_tail_occurrence_tail_component__WEBPACK_IMPORTED_MODULE_9__["OccurrenceTailComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]], styles: [".layout-organizer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nsection[_ngcontent-%COMP%] {\n  margin-top: 150px;\n  height: 100%;\n  width: 60%;\n  align-self: center;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto;\n  justify-items: center;\n  align-items: center;\n  justify-content: space-between;\n}\n\nmat-spinner[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 46%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9xdWV1ZXMvbGF5b3V0cy9xdWV1ZS9xdWV1ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSxpQkNEVztFREVYLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3F1ZXVlcy9sYXlvdXRzL3F1ZXVlL3F1ZXVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXMnO1xuXG4ubGF5b3V0LW9yZ2FuaXplciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogJG5hdmJhcmhlaWdodDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxubWF0LXNwaW5uZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA0NiU7XG59XG4iLCIvL0dsb2JhbFxuJG1haW5jb2xvcjogIzFhMmYzMztcbiRzZWNvbmRjb2xvcjogIzcyMjcyQTtcblxuJGxvZ29mb250OiAnTG9ic3RlciBUd28nLCBjdXJzaXZlO1xuJG1haW5mb250OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuXG4vL05hdmJhclxuJG5hdmJhcmhlaWdodDogMTUwcHg7XG5cbiRicmVha3BvaW50czogKFxuICAncGhvbmUnOiA2ODhweCxcbiAgJ3RhYmxldCc6IDk5MnB4LFxuICAnbGFwdG9wJzogMTI4MHB4XG4pICFkZWZhdWx0O1xuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QueueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-queue',
                templateUrl: './queue.component.html',
                styleUrls: ['./queue.component.scss']
            }]
    }], function () { return [{ type: src_app_data_api_subject_api_service__WEBPACK_IMPORTED_MODULE_5__["SubjectApiService"] }, { type: src_app_data_api_lesson_api_service__WEBPACK_IMPORTED_MODULE_6__["LessonApiService"] }, { type: src_app_data_api_occurrence_api_service__WEBPACK_IMPORTED_MODULE_7__["OccurrenceApiService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/queues/queues.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/queues/queues.module.ts ***!
  \*************************************************/
/*! exports provided: QueuesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueuesModule", function() { return QueuesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layouts_queue_queue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/queue/queue.component */ "./src/app/modules/queues/layouts/queue/queue.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_occurrence_tail_occurrence_tail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/occurrence-tail/occurrence-tail.component */ "./src/app/modules/queues/components/occurrence-tail/occurrence-tail.component.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








class QueuesModule {
}
QueuesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: QueuesModule });
QueuesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function QueuesModule_Factory(t) { return new (t || QueuesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QueuesModule, { declarations: [_layouts_queue_queue_component__WEBPACK_IMPORTED_MODULE_2__["QueueComponent"], _components_occurrence_tail_occurrence_tail_component__WEBPACK_IMPORTED_MODULE_5__["OccurrenceTailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QueuesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_layouts_queue_queue_component__WEBPACK_IMPORTED_MODULE_2__["QueueComponent"], _components_occurrence_tail_occurrence_tail_component__WEBPACK_IMPORTED_MODULE_5__["OccurrenceTailComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                    src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/schedule/components/divider/divider.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/schedule/components/divider/divider.component.ts ***!
  \**************************************************************************/
/*! exports provided: DividerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividerComponent", function() { return DividerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");



class DividerComponent {
    constructor() { }
    ngOnInit() {
    }
}
DividerComponent.ɵfac = function DividerComponent_Factory(t) { return new (t || DividerComponent)(); };
DividerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DividerComponent, selectors: [["app-divider"]], decls: 5, vars: 0, consts: [[1, "line"]], template: function DividerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "navigate_next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: ["section[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n}\n\n.line[_ngcontent-%COMP%] {\n  border-left: solid 1px black;\n  width: 1px;\n  height: 100%;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 50px;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;\n  background-color: white;\n  color: #72272A;\n  cursor: default;\n  z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zY2hlZHVsZS9jb21wb25lbnRzL2RpdmlkZXIvZGl2aWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwyRkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0NyQlU7RURzQlYsZUFBQTtFQUNBLGFBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2NoZWR1bGUvY29tcG9uZW50cy9kaXZpZGVyL2RpdmlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlcyc7XG5cbnNlY3Rpb24ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5saW5lIHtcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4IGJsYWNrO1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMTQsIDMwLCAzNywgMC4xMikgMHB4IDJweCA0cHggMHB4LCByZ2JhKDE0LCAzMCwgMzcsIDAuMzIpIDBweCAycHggMTZweCAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICRzZWNvbmRjb2xvcjtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgei1pbmRleDogMTAwMDtcbn1cbiIsIi8vR2xvYmFsXG4kbWFpbmNvbG9yOiAjMWEyZjMzO1xuJHNlY29uZGNvbG9yOiAjNzIyNzJBO1xuXG4kbG9nb2ZvbnQ6ICdMb2JzdGVyIFR3bycsIGN1cnNpdmU7XG4kbWFpbmZvbnQ6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG5cbi8vTmF2YmFyXG4kbmF2YmFyaGVpZ2h0OiAxNTBweDtcblxuJGJyZWFrcG9pbnRzOiAoXG4gICdwaG9uZSc6IDY4OHB4LFxuICAndGFibGV0JzogOTkycHgsXG4gICdsYXB0b3AnOiAxMjgwcHhcbikgIWRlZmF1bHQ7XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DividerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-divider',
                templateUrl: './divider.component.html',
                styleUrls: ['./divider.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/schedule/components/schedule/schedule.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/schedule/components/schedule/schedule.component.ts ***!
  \****************************************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _enums_entityType_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/entityType.enum */ "./src/app/modules/schedule/enums/entityType.enum.ts");
/* harmony import */ var src_app_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");
/* harmony import */ var src_app_data_api_subject_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data/api/subject-api.service */ "./src/app/data/api/subject-api.service.ts");
/* harmony import */ var src_app_data_api_lesson_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/api/lesson-api.service */ "./src/app/data/api/lesson-api.service.ts");
/* harmony import */ var src_app_data_api_occurrence_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/api/occurrence-api.service */ "./src/app/data/api/occurrence-api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _divider_divider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../divider/divider.component */ "./src/app/modules/schedule/components/divider/divider.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _pipes_hour_printer_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../pipes/hour-printer.pipe */ "./src/app/pipes/hour-printer.pipe.ts");















function ScheduleComponent_ng_container_3_mat_list_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleComponent_ng_container_3_mat_list_option_4_Template_mat_list_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const subject_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.setCurrentObject("subject", subject_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subject_r9.name, " ");
} }
function ScheduleComponent_ng_container_3_mat_list_option_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleComponent_ng_container_3_mat_list_option_9_Template_mat_list_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const lesson_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.setCurrentObject("lesson", lesson_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "hourPrinter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lesson_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, lesson_r12.nextDate, "EEEE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, lesson_r12.time), " ");
} }
function ScheduleComponent_ng_container_3_mat_list_item_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const occurrence_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", occurrence_r15.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, occurrence_r15.date, "dd.MM.yyyy"), " ");
} }
function ScheduleComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-selection-list", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ScheduleComponent_ng_container_3_mat_list_option_4_Template, 2, 1, "mat-list-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-selection-list", 5, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ScheduleComponent_ng_container_3_mat_list_option_9_Template, 6, 7, "mat-list-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-list", null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ScheduleComponent_ng_container_3_mat_list_item_14_Template, 5, 5, "mat-list-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.subjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.lessons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.queue);
} }
function ScheduleComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
class ScheduleComponent {
    constructor(subjectApi, lessonApi, occurrenceApi) {
        this.subjectApi = subjectApi;
        this.lessonApi = lessonApi;
        this.occurrenceApi = occurrenceApi;
        this.activeNavElement = src_app_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["ActiveNavElement"].SCHEDULE;
        this.lessonsChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.queueChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.currentSubjectChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.currentLessonChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        //Subscribe changes for lessons and queue
        this.subscription = this.lessonsChange.subscribe(lessons => this.lessons = lessons);
        this.subscription.add(this.queueChange.subscribe(queue => this.queue = queue));
        //Get entities of subjects, lessons and occurrences from API
        this.subscription.add(this.subjectApi.getAllSubjects().subscribe(subjects => this.subjects = subjects));
        this.subscription.add(this.currentSubjectChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(subject => this.lessonApi.getLessons(subject.id))).subscribe(lessons => {
            this.lessons = lessons;
            this.queue = [];
        }));
        this.subscription.add(this.currentLessonChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(lesson => this.occurrenceApi.getNext(lesson.id, 21))).subscribe(occurrences => this.queue = occurrences));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    setCurrentObject(type, object) {
        switch (type) {
            case _enums_entityType_enum__WEBPACK_IMPORTED_MODULE_3__["EntityType"].SUBJECT: {
                this.currentSubject = object;
                this.currentSubjectChange.next(this.currentSubject);
                break;
            }
            case _enums_entityType_enum__WEBPACK_IMPORTED_MODULE_3__["EntityType"].LESSON: {
                this.currentLesson = object;
                this.currentLessonChange.next(this.currentLesson);
                break;
            }
        }
    }
}
ScheduleComponent.ɵfac = function ScheduleComponent_Factory(t) { return new (t || ScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_api_subject_api_service__WEBPACK_IMPORTED_MODULE_5__["SubjectApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_api_lesson_api_service__WEBPACK_IMPORTED_MODULE_6__["LessonApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_api_occurrence_api_service__WEBPACK_IMPORTED_MODULE_7__["OccurrenceApiService"])); };
ScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScheduleComponent, selectors: [["app-schedule"]], decls: 6, vars: 3, consts: [[1, "layout-organizer"], [3, "active"], [4, "ngIf", "ngIfElse"], ["loading", ""], [1, "container"], [3, "multiple"], ["subject", ""], [3, "click", 4, "ngFor", "ngForOf"], ["lesson", ""], ["occurrences", ""], ["class", "occurrence-tile", 4, "ngFor", "ngForOf"], [3, "click"], [1, "occurrence-tile"]], template: function ScheduleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScheduleComponent_ng_container_3_Template, 15, 5, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ScheduleComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.activeNavElement);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subjects)("ngIfElse", _r1);
    } }, directives: [src_app_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _divider_divider_component__WEBPACK_IMPORTED_MODULE_10__["DividerComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListOption"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _pipes_hour_printer_pipe__WEBPACK_IMPORTED_MODULE_12__["HourPrinterPipe"]], styles: [".layout-organizer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nsection[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1px 1fr 1px 1fr;\n  grid-template-rows: 1fr;\n  overflow: hidden;\n  margin-top: 150px;\n}\n\n.container[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.occurrence-tile[_ngcontent-%COMP%]:hover {\n  background-color: whitesmoke;\n}\n\nmat-spinner[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 47%;\n  top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zY2hlZHVsZS9jb21wb25lbnRzL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQ1BXO0FETWY7O0FBSUE7RUFDSSxjQUFBO0FBREo7O0FBSUE7RUFDSSw0QkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NjaGVkdWxlL2NvbXBvbmVudHMvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcblxuLmxheW91dC1vcmdhbml6ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbnNlY3Rpb24ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFweCAxZnIgMXB4IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi10b3A6ICRuYXZiYXJoZWlnaHQ7XG59XG5cbi5jb250YWluZXIge1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ub2NjdXJyZW5jZS10aWxlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XG59XG5cbm1hdC1zcGlubmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogNDclO1xuICAgIHRvcDogNTAlO1xufVxuIiwiLy9HbG9iYWxcbiRtYWluY29sb3I6ICMxYTJmMzM7XG4kc2Vjb25kY29sb3I6ICM3MjI3MkE7XG5cbiRsb2dvZm9udDogJ0xvYnN0ZXIgVHdvJywgY3Vyc2l2ZTtcbiRtYWluZm9udDogJ0ludGVyJywgc2Fucy1zZXJpZjtcblxuLy9OYXZiYXJcbiRuYXZiYXJoZWlnaHQ6IDE1MHB4O1xuXG4kYnJlYWtwb2ludHM6IChcbiAgJ3Bob25lJzogNjg4cHgsXG4gICd0YWJsZXQnOiA5OTJweCxcbiAgJ2xhcHRvcCc6IDEyODBweFxuKSAhZGVmYXVsdDtcblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScheduleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-schedule',
                templateUrl: './schedule.component.html',
                styleUrls: ['./schedule.component.scss']
            }]
    }], function () { return [{ type: src_app_data_api_subject_api_service__WEBPACK_IMPORTED_MODULE_5__["SubjectApiService"] }, { type: src_app_data_api_lesson_api_service__WEBPACK_IMPORTED_MODULE_6__["LessonApiService"] }, { type: src_app_data_api_occurrence_api_service__WEBPACK_IMPORTED_MODULE_7__["OccurrenceApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/schedule/enums/entityType.enum.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/schedule/enums/entityType.enum.ts ***!
  \***********************************************************/
/*! exports provided: EntityType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityType", function() { return EntityType; });
var EntityType;
(function (EntityType) {
    EntityType["SUBJECT"] = "subject";
    EntityType["LESSON"] = "lesson";
})(EntityType || (EntityType = {}));


/***/ }),

/***/ "./src/app/modules/schedule/schedule.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/schedule/schedule.module.ts ***!
  \*****************************************************/
/*! exports provided: ScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleModule", function() { return ScheduleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/schedule/schedule.component */ "./src/app/modules/schedule/components/schedule/schedule.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_divider_divider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/divider/divider.component */ "./src/app/modules/schedule/components/divider/divider.component.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








class ScheduleModule {
}
ScheduleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ScheduleModule });
ScheduleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ScheduleModule_Factory(t) { return new (t || ScheduleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScheduleModule, { declarations: [_components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleComponent"], _components_divider_divider_component__WEBPACK_IMPORTED_MODULE_5__["DividerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]], exports: [_components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScheduleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleComponent"], _components_divider_divider_component__WEBPACK_IMPORTED_MODULE_5__["DividerComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                    src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]
                ],
                exports: [
                    _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/settings/components/settings-navbar/settings-navbar.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/settings/components/settings-navbar/settings-navbar.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SettingsSidebarOptionName, SettingsNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsSidebarOptionName", function() { return SettingsSidebarOptionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsNavbarComponent", function() { return SettingsNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");






function SettingsNavbarComponent_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsNavbarComponent_mat_icon_1_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const element_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.routeTo(element_r1.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", element_r1.verifier === ctx_r0.activeIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", element_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", ctx_r0.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r1.icon, " ");
} }
var SettingsSidebarOptionName;
(function (SettingsSidebarOptionName) {
    SettingsSidebarOptionName["CHANGE_PSSWD"] = "change_password";
    SettingsSidebarOptionName["CREDITS"] = "credits";
})(SettingsSidebarOptionName || (SettingsSidebarOptionName = {}));
class SettingsNavbarComponent {
    constructor(router) {
        this.router = router;
        this.position = 'right';
        this.navList = [
            { icon: 'lock', description: 'Change password', link: 'settings/change-password', verifier: SettingsSidebarOptionName.CHANGE_PSSWD },
            { icon: 'integration_instructions', description: 'Credits', link: 'settings/credits', verifier: SettingsSidebarOptionName.CREDITS }
        ];
    }
    ngOnInit() { }
    routeTo(link) {
        this.router.navigateByUrl(link);
    }
}
SettingsNavbarComponent.ɵfac = function SettingsNavbarComponent_Factory(t) { return new (t || SettingsNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SettingsNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsNavbarComponent, selectors: [["app-settings-navbar"]], inputs: { activeIcon: ["verifier", "activeIcon"] }, decls: 2, vars: 1, consts: [["fontSet", "material-icons-outlined", 3, "active", "matTooltip", "matTooltipPosition", "click", 4, "ngFor", "ngForOf"], ["fontSet", "material-icons-outlined", 3, "matTooltip", "matTooltipPosition", "click"]], template: function SettingsNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingsNavbarComponent_mat_icon_1_Template, 2, 5, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"]], styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.25);\n  z-index: 1000;\n  width: 49px;\n  border-radius: 20px;\n  position: fixed;\n  left: 2%;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 37px;\n  height: 37px;\n  width: 37px;\n  padding: 6px;\n}\n\nmat-icon[_ngcontent-%COMP%]:hover {\n  background-color: rgba(170, 167, 167, 0.4);\n  cursor: pointer;\n}\n\nmat-icon[_ngcontent-%COMP%]:first-child {\n  padding-top: 15px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n\nmat-icon[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 15px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #72272A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL3NldHRpbmdzLW5hdmJhci9zZXR0aW5ncy1uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFHSTtFQUNJLDBDQUFBO0VBQ0EsZUFBQTtBQURSOztBQUlJO0VBQ0ksaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBRlI7O0FBS0k7RUFDSSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUFIUjs7QUFPQTtFQUNJLGNDdENVO0FEa0NkIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL3NldHRpbmdzLW5hdmJhci9zZXR0aW5ncy1uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlcyc7XG5cbnNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICB3aWR0aDogNDlweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAyJTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbm1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDM3cHg7XG4gICAgaGVpZ2h0OiAzN3B4O1xuICAgIHdpZHRoOiAzN3B4O1xuICAgIHBhZGRpbmc6IDZweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MCwgMTY3LCAxNjcsIDAuNCk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICB9XG59XG5cbi5hY3RpdmUge1xuICAgIGNvbG9yOiAkc2Vjb25kY29sb3I7XG59XG4iLCIvL0dsb2JhbFxuJG1haW5jb2xvcjogIzFhMmYzMztcbiRzZWNvbmRjb2xvcjogIzcyMjcyQTtcblxuJGxvZ29mb250OiAnTG9ic3RlciBUd28nLCBjdXJzaXZlO1xuJG1haW5mb250OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xuXG4vL05hdmJhclxuJG5hdmJhcmhlaWdodDogMTUwcHg7XG5cbiRicmVha3BvaW50czogKFxuICAncGhvbmUnOiA2ODhweCxcbiAgJ3RhYmxldCc6IDk5MnB4LFxuICAnbGFwdG9wJzogMTI4MHB4XG4pICFkZWZhdWx0O1xuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsNavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings-navbar',
                templateUrl: './settings-navbar.component.html',
                styleUrls: ['./settings-navbar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { activeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['verifier']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/settings/layouts/change-password/change-password.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/settings/layouts/change-password/change-password.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_settings_navbar_settings_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/settings-navbar/settings-navbar.component */ "./src/app/modules/settings/components/settings-navbar/settings-navbar.component.ts");
/* harmony import */ var src_app_data_api_user_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data/api/user-api.service */ "./src/app/data/api/user-api.service.ts");
/* harmony import */ var src_app_shared_services_snack_bar_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/snack-bar-handler.service */ "./src/app/shared/services/snack-bar-handler.service.ts");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












class ChangePasswordComponent {
    constructor(userApi, snackBar) {
        this.userApi = userApi;
        this.snackBar = snackBar;
        this.settingsSidebarVerfier = _components_settings_navbar_settings_navbar_component__WEBPACK_IMPORTED_MODULE_2__["SettingsSidebarOptionName"].CHANGE_PSSWD;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            currentPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
            confirmedNewPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.passwordMatch]),
        });
    }
    ngOnInit() {
        this.formGroup.get('newPassword').valueChanges.subscribe(() => {
            this.formGroup.get('confirmedNewPassword').updateValueAndValidity();
        });
    }
    passwordMatch(control) {
        let newPaswd = control.root.get('newPassword');
        if (newPaswd && control.value != newPaswd.value)
            return { passwordMatch: false };
        return null;
    }
    changePassword(form, formDirective) {
        this.userApi.changePassword(form.value.currentPassword, form.value.newPassword)
            .subscribe(response => {
            if (response.status === 200) {
                this.snackBar.openBasicSnackBar("Password has been changed successfully.");
                formDirective.resetForm();
                this.formGroup.reset();
            }
            else if (response.status !== 403)
                this.snackBar.openErrorSnackBar("Something went wrong.");
        });
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_api_user_api_service__WEBPACK_IMPORTED_MODULE_3__["UserApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_snack_bar_handler_service__WEBPACK_IMPORTED_MODULE_4__["SnackBarHandlerService"])); };
ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 28, vars: 3, consts: [[1, "layout-organizer"], [3, "verifier"], [1, "main-container"], [3, "formGroup", "ngSubmit"], ["form", "ngForm", "formDirective", "ngForm"], ["matInput", "", "type", "password", "name", "currentPassword", "formControlName", "currentPassword", "required", ""], ["matInput", "", "type", "password", "name", "newPassword", "formControlName", "newPassword", "minlength", "5", "required", ""], ["matInput", "", "type", "password", "name", "confirmedNewPassword", "formControlName", "confirmedNewPassword", "required", ""], ["mat-raised-button", "", "type", "submit", 3, "disabled"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-settings-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Change password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.changePassword(_r0, _r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Current password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "New password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " New password is too short! (5) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Confirm new password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Passwords don't match ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Change password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("verifier", ctx.settingsSidebarVerfier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formGroup.valid);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _components_settings_navbar_settings_navbar_component__WEBPACK_IMPORTED_MODULE_2__["SettingsNavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: [".layout-organizer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nsection[_ngcontent-%COMP%] {\n  margin-top: 150px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 20px;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 0px 0px 42px 14px rgba(170, 167, 167, 0.4);\n  padding: 50px 75px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin: 5px auto;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background-color: #72272A;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9sYXlvdXRzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0ksaUJDRFc7RURFWCxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSx1QkFBQTtFQUNBLHNEQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EseUJDMUNVO0VEMkNWLFlBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvbGF5b3V0cy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXMnO1xuXG4ubGF5b3V0LW9yZ2FuaXplciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogJG5hdmJhcmhlaWdodDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmg0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDQycHggMTRweCByZ2JhKDE3MCwxNjcsMTY3LDAuNCk7XG4gICAgcGFkZGluZzogNTBweCA3NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW46IDVweCBhdXRvO1xufVxuXG5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kY29sb3I7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuIiwiLy9HbG9iYWxcbiRtYWluY29sb3I6ICMxYTJmMzM7XG4kc2Vjb25kY29sb3I6ICM3MjI3MkE7XG5cbiRsb2dvZm9udDogJ0xvYnN0ZXIgVHdvJywgY3Vyc2l2ZTtcbiRtYWluZm9udDogJ0ludGVyJywgc2Fucy1zZXJpZjtcblxuLy9OYXZiYXJcbiRuYXZiYXJoZWlnaHQ6IDE1MHB4O1xuXG4kYnJlYWtwb2ludHM6IChcbiAgJ3Bob25lJzogNjg4cHgsXG4gICd0YWJsZXQnOiA5OTJweCxcbiAgJ2xhcHRvcCc6IDEyODBweFxuKSAhZGVmYXVsdDtcblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-password',
                templateUrl: './change-password.component.html',
                styleUrls: ['./change-password.component.scss']
            }]
    }], function () { return [{ type: src_app_data_api_user_api_service__WEBPACK_IMPORTED_MODULE_3__["UserApiService"] }, { type: src_app_shared_services_snack_bar_handler_service__WEBPACK_IMPORTED_MODULE_4__["SnackBarHandlerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/settings/layouts/credits/credits.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/settings/layouts/credits/credits.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreditsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditsComponent", function() { return CreditsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_settings_navbar_settings_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/settings-navbar/settings-navbar.component */ "./src/app/modules/settings/components/settings-navbar/settings-navbar.component.ts");
/* harmony import */ var src_app_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/globals */ "./src/app/globals.ts");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");






class CreditsComponent {
    constructor(globals) {
        this.globals = globals;
        this.settingsSidebarVerfier = _components_settings_navbar_settings_navbar_component__WEBPACK_IMPORTED_MODULE_1__["SettingsSidebarOptionName"].CREDITS;
        this.version = this.globals.VERSION;
    }
    ngOnInit() {
    }
}
CreditsComponent.ɵfac = function CreditsComponent_Factory(t) { return new (t || CreditsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"])); };
CreditsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreditsComponent, selectors: [["app-credits"]], decls: 34, vars: 2, consts: [[1, "layout-organizer"], [3, "verifier"], [1, "main-container"], [1, "authors-container"], [1, "author"], [1, "name"], [1, "icons-container"], ["href", "https://github.com/xsw2-2wsx"], ["src", "../../../../../assets/icon-github.svg", 1, "icon"], ["href", "https://www.linkedin.com/in/jan-undrych-98a8b5204/"], ["src", "../../../../../assets/icon-linkedin.svg", 1, "icon"], ["href", "https://github.com/pwiorek"], ["href", "https://www.linkedin.com/in/piotr-wi%C3%B3rek-6448ab196/"], ["href", "https://github.com/Que-App"], ["src", "../../../../../assets/icon-github.svg", 1, "big-icon"], [1, "version"]], template: function CreditsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-settings-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Credits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Que is a tool that allows for even, fair and organized distribution of cyclic tasks among the members of a group. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Authors:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Jan Undrych");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Piotr Wi\u00F3rek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Project's Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("verifier", ctx.settingsSidebarVerfier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Version: ", ctx.version, "");
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _components_settings_navbar_settings_navbar_component__WEBPACK_IMPORTED_MODULE_1__["SettingsNavbarComponent"]], styles: [".layout-organizer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nsection[_ngcontent-%COMP%] {\n  margin-top: 150px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 0px 0px 42px 14px rgba(170, 167, 167, 0.4);\n  padding: 35px 75px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  text-align: justify;\n  text-justify: auto;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 15px;\n}\n\nh4[_ngcontent-%COMP%] {\n  color: #72272A;\n  text-align: center;\n  margin: 10;\n}\n\n.authors-container[_ngcontent-%COMP%] {\n  width: 60%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.name[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.icons-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.icon[_ngcontent-%COMP%] {\n  width: 1.5em;\n}\n\n.big-icon[_ngcontent-%COMP%] {\n  width: 3em;\n  margin-top: 3em;\n}\n\n.version[_ngcontent-%COMP%] {\n  transform: translateY(150%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9sYXlvdXRzL2NyZWRpdHMvY3JlZGl0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSxpQkNEVztFREVYLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSSx1QkFBQTtFQUNBLHNEQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxjQ25DVTtFRG9DVixrQkFBQTtFQUNBLFVBQUE7QUFESjs7QUFJQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQURKOztBQUlBO0VBQ0ksU0FBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFJQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSwyQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zZXR0aW5ncy9sYXlvdXRzL2NyZWRpdHMvY3JlZGl0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzJztcblxuLmxheW91dC1vcmdhbml6ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbnNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6ICRuYXZiYXJoZWlnaHQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNDJweCAxNHB4IHJnYmEoMTcwLDE2NywxNjcsMC40KTtcbiAgICBwYWRkaW5nOiAzNXB4IDc1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgdGV4dC1qdXN0aWZ5OiBhdXRvO1xufVxuXG5oMiB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5oNCB7XG4gICAgY29sb3I6ICRzZWNvbmRjb2xvcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMDtcbn1cblxuLmF1dGhvcnMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLm5hbWUge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmljb25zLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaWNvbiB7XG4gICAgd2lkdGg6IDEuNWVtO1xufVxuXG4uYmlnLWljb24ge1xuICAgIHdpZHRoOiAzZW07XG4gICAgbWFyZ2luLXRvcDogM2VtO1xufVxuXG4udmVyc2lvbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1MCUpO1xufVxuIiwiLy9HbG9iYWxcbiRtYWluY29sb3I6ICMxYTJmMzM7XG4kc2Vjb25kY29sb3I6ICM3MjI3MkE7XG5cbiRsb2dvZm9udDogJ0xvYnN0ZXIgVHdvJywgY3Vyc2l2ZTtcbiRtYWluZm9udDogJ0ludGVyJywgc2Fucy1zZXJpZjtcblxuLy9OYXZiYXJcbiRuYXZiYXJoZWlnaHQ6IDE1MHB4O1xuXG4kYnJlYWtwb2ludHM6IChcbiAgJ3Bob25lJzogNjg4cHgsXG4gICd0YWJsZXQnOiA5OTJweCxcbiAgJ2xhcHRvcCc6IDEyODBweFxuKSAhZGVmYXVsdDtcblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreditsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-credits',
                templateUrl: './credits.component.html',
                styleUrls: ['./credits.component.scss']
            }]
    }], function () { return [{ type: src_app_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/settings/settings.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/settings/settings.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layouts_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/change-password/change-password.component */ "./src/app/modules/settings/layouts/change-password/change-password.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_settings_navbar_settings_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/settings-navbar/settings-navbar.component */ "./src/app/modules/settings/components/settings-navbar/settings-navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _layouts_credits_credits_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/credits/credits.component */ "./src/app/modules/settings/layouts/credits/credits.component.ts");









class SettingsModule {
}
SettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SettingsModule });
SettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SettingsModule_Factory(t) { return new (t || SettingsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingsModule, { declarations: [_layouts_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordComponent"], _components_settings_navbar_settings_navbar_component__WEBPACK_IMPORTED_MODULE_5__["SettingsNavbarComponent"], _layouts_credits_credits_component__WEBPACK_IMPORTED_MODULE_7__["CreditsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_layouts_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordComponent"], _components_settings_navbar_settings_navbar_component__WEBPACK_IMPORTED_MODULE_5__["SettingsNavbarComponent"], _layouts_credits_credits_component__WEBPACK_IMPORTED_MODULE_7__["CreditsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/hour-printer.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/hour-printer.pipe.ts ***!
  \********************************************/
/*! exports provided: HourPrinterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HourPrinterPipe", function() { return HourPrinterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HourPrinterPipe {
    transform(value, ...args) {
        let stringArray = value.split(':');
        return stringArray[0] + ':' + stringArray[1];
    }
}
HourPrinterPipe.ɵfac = function HourPrinterPipe_Factory(t) { return new (t || HourPrinterPipe)(); };
HourPrinterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "hourPrinter", type: HourPrinterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HourPrinterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'hourPrinter'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _hour_printer_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hour-printer.pipe */ "./src/app/pipes/hour-printer.pipe.ts");




class PipesModule {
}
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_hour_printer_pipe__WEBPACK_IMPORTED_MODULE_2__["HourPrinterPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_hour_printer_pipe__WEBPACK_IMPORTED_MODULE_2__["HourPrinterPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_hour_printer_pipe__WEBPACK_IMPORTED_MODULE_2__["HourPrinterPipe"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _hour_printer_pipe__WEBPACK_IMPORTED_MODULE_2__["HourPrinterPipe"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: ActiveNavElement, NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveNavElement", function() { return ActiveNavElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/services/authentication.service */ "./src/app/auth/services/authentication.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function NavbarComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const tail_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.routeTo(tail_r1.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tail_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active-navbar-tail", tail_r1.verifier === ctx_r0.activeNavElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tail_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tail_r1.text);
} }
var ActiveNavElement;
(function (ActiveNavElement) {
    ActiveNavElement["SCHEDULE"] = "schedule";
    ActiveNavElement["EXCHANGE_SEND"] = "exchange_send";
    ActiveNavElement["EXCHANGE_INCOMING"] = "exchange_incoming";
    ActiveNavElement["EXCHANGE_OUTGOING"] = "exchange_outgoing";
    ActiveNavElement["QUEUE"] = "queue";
    ActiveNavElement["NOTES"] = "notes";
})(ActiveNavElement || (ActiveNavElement = {}));
class NavbarComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.list = [
            { icon: 'event', text: 'SCHEDULE', link: 'schedule', verifier: ActiveNavElement.SCHEDULE },
            { icon: 'swap_horiz', text: 'EXCHANGE' + '\n' + 'REQUEST', link: 'exchanges', verifier: ActiveNavElement.EXCHANGE_SEND },
            { icon: 'save_alt', text: 'INCOMING' + '\n' + 'REQUESTS', link: 'exchanges/incoming', verifier: ActiveNavElement.EXCHANGE_INCOMING },
            { icon: 'publish', text: 'OUTGOING' + '\n' + 'REQUESTS', link: 'exchanges/outgoing', verifier: ActiveNavElement.EXCHANGE_OUTGOING },
            { icon: 'accessibility_new', text: 'YOUR' + '\n' + 'QUEUE', link: 'queue', verifier: ActiveNavElement.QUEUE },
            { icon: 'description', text: 'NOTES', link: 'https://zskpoznan.sharepoint.com/sites/Notatki2B/Shared%20Documents/Forms/AllItems.aspx', verifier: ActiveNavElement.NOTES }
        ];
    }
    ngOnInit() { }
    routeTo(location) {
        if (location.includes('https://'))
            window.open(location, '_blank');
        else
            this.router.navigateByUrl(location);
    }
    logOut() {
        this.authenticationService.logOut();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { activeNavElement: ["active", "activeNavElement"] }, decls: 11, vars: 1, consts: [[1, "titlebar"], [1, "titlebar-item", "title"], [1, "titlebar-item", "icons-container"], ["fontSet", "material-icons-outlined", 1, "icon", 3, "click"], ["id", "settings-icon", "fontSet", "material-icons-outlined", 1, "icon", 3, "click"], [1, "navbar"], ["class", "navbar-tail", 3, "active-navbar-tail", "click", 4, "ngFor", "ngForOf"], [1, "navbar-tail", 3, "click"], ["fontSet", "material-icons-outlined"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Que");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_mat_icon_click_5_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "meeting_room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_mat_icon_click_7_listener() { return ctx.routeTo("settings"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_div_10_Template, 5, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["section[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 150px;\n  display: flex;\n  flex-direction: column;\n  z-index: 1000;\n}\n\n.titlebar[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 50px;\n  width: 100%;\n  position: relative;\n}\n\n.titlebar-item[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  height: 100%;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-family: \"Lobster Two\", cursive;\n  font-size: 2.3em;\n  margin: 0;\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.icons-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  right: 1%;\n  position: absolute;\n}\n\n.icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.icon[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n}\n\n.icon[_ngcontent-%COMP%]:hover {\n  font-family: \"Material Icons\";\n}\n\n#settings-icon[_ngcontent-%COMP%] {\n  transition: transform 1s;\n}\n\n#settings-icon[_ngcontent-%COMP%]:hover {\n  transform: rotate(180deg);\n}\n\n.navbar[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.navbar-tail[_ngcontent-%COMP%] {\n  color: #99ABA0;\n  flex-basis: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background-color: #1a2f33;\n  white-space: pre-line;\n  cursor: pointer;\n}\n\n.navbar-tail[_ngcontent-%COMP%]:hover {\n  background-color: #142427;\n  color: white;\n}\n\n.navbar-tail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.active-navbar-tail[_ngcontent-%COMP%] {\n  background-color: #101e20;\n  color: white;\n  box-shadow: inset 0px -5px 0px 0px #72272A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUZKOztBQUtBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLQTtFQUNJLG1DQ3RCTztFRHVCUCxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0FBRko7O0FBSUk7RUFDSSxrQkFBQTtBQUZSOztBQUtJO0VBQ0ksNkJBQUE7QUFIUjs7QUFPQTtFQUNJLHdCQUFBO0FBSko7O0FBTUk7RUFDSSx5QkFBQTtBQUpSOztBQVVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFVQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBUEo7O0FBU0k7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFQUjs7QUFXSTtFQUNJLFNBQUE7QUFUUjs7QUFhQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0FBVkoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XG5cblxuc2VjdGlvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4udGl0bGViYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50aXRsZWJhci1pdGVtIHtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJGxvZ29mb250O1xuICAgIGZvbnQtc2l6ZTogMi4zZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLmljb25zLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICByaWdodDogMSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uaWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gICAgfVxufVxuXG4jc2V0dGluZ3MtaWNvbiB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxufVxuXG5cblxuLm5hdmJhciB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5uYXZiYXItdGFpbCB7XG4gICAgY29sb3I6ICM5OUFCQTA7XG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI2LDQ3LDUxKTtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwzNiwzOSk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgIH1cblxuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufVxuXG4uYWN0aXZlLW5hdmJhci10YWlsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYsIDMwLCAzMik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtNXB4IDBweCAwcHggJHNlY29uZGNvbG9yO1xufVxuIiwiLy9HbG9iYWxcbiRtYWluY29sb3I6ICMxYTJmMzM7XG4kc2Vjb25kY29sb3I6ICM3MjI3MkE7XG5cbiRsb2dvZm9udDogJ0xvYnN0ZXIgVHdvJywgY3Vyc2l2ZTtcbiRtYWluZm9udDogJ0ludGVyJywgc2Fucy1zZXJpZjtcblxuLy9OYXZiYXJcbiRuYXZiYXJoZWlnaHQ6IDE1MHB4O1xuXG4kYnJlYWtwb2ludHM6IChcbiAgJ3Bob25lJzogNjg4cHgsXG4gICd0YWJsZXQnOiA5OTJweCxcbiAgJ2xhcHRvcCc6IDEyODBweFxuKSAhZGVmYXVsdDtcblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, { activeNavElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['active']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/services/error.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/error.service.ts ***!
  \**************************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _snack_bar_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snack-bar-handler.service */ "./src/app/shared/services/snack-bar-handler.service.ts");




class ErrorService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    handleError(error) {
        console.error(error);
        if (Error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
            this.snackBar.openErrorSnackBar('Sorry, something went wrong.');
            console.error(error);
        }
        else {
            if (error.status != 401) {
                this.snackBar.openErrorSnackBar(error.error.message);
                console.error(error);
            }
        }
    }
}
ErrorService.ɵfac = function ErrorService_Factory(t) { return new (t || ErrorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_snack_bar_handler_service__WEBPACK_IMPORTED_MODULE_2__["SnackBarHandlerService"])); };
ErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ErrorService, factory: ErrorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ErrorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _snack_bar_handler_service__WEBPACK_IMPORTED_MODULE_2__["SnackBarHandlerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/snack-bar-handler.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/snack-bar-handler.service.ts ***!
  \**************************************************************/
/*! exports provided: SnackBarHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarHandlerService", function() { return SnackBarHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");



class SnackBarHandlerService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    openBasicSnackBar(message) {
        this.snackBar.open(message, '', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: ['basic-snackbar']
        });
    }
    openErrorSnackBar(message) {
        this.snackBar.open(message, '', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: ['error-snackbar']
        });
    }
    openNoClosingErrorSnackBar(message) {
        this.snackBar.open(message, 'Close', {
            duration: 0,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: ['error-snackbar']
        });
    }
}
SnackBarHandlerService.ɵfac = function SnackBarHandlerService_Factory(t) { return new (t || SnackBarHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
SnackBarHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SnackBarHandlerService, factory: SnackBarHandlerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackBarHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


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
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");





class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]], exports: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
                ],
                exports: [
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"],
                ]
            }]
    }], null, null); })();


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

module.exports = __webpack_require__(/*! /home/piotr/Programming/Projects/Que/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map