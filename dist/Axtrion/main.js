(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_buy_tokens_buy_tokens_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/buy-tokens/buy-tokens.component */ "./src/app/components/buy-tokens/buy-tokens.component.ts");
/* harmony import */ var _components_ico_distribution_ico_distribution_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ico-distribution/ico-distribution.component */ "./src/app/components/ico-distribution/ico-distribution.component.ts");
/* harmony import */ var _components_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/transactions/transactions.component */ "./src/app/components/transactions/transactions.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_kyc_kyc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/kyc/kyc.component */ "./src/app/components/kyc/kyc.component.ts");
/* harmony import */ var _components_kyc_kyc_form_kyc_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/kyc/kyc-form/kyc-form.component */ "./src/app/components/kyc/kyc-form/kyc-form.component.ts");










var routes = [
    { path: '', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'buytokens', component: _components_buy_tokens_buy_tokens_component__WEBPACK_IMPORTED_MODULE_4__["BuyTokensComponent"] },
    { path: 'icodistribution', component: _components_ico_distribution_ico_distribution_component__WEBPACK_IMPORTED_MODULE_5__["IcoDistributionComponent"] },
    { path: 'transactions', component: _components_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_6__["TransactionsComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] },
    { path: 'kyc', component: _components_kyc_kyc_component__WEBPACK_IMPORTED_MODULE_8__["KycComponent"] },
    { path: 'kyc-form', component: _components_kyc_kyc_form_kyc_form_component__WEBPACK_IMPORTED_MODULE_9__["KycFormComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Axtrion';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_buy_tokens_buy_tokens_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/buy-tokens/buy-tokens.component */ "./src/app/components/buy-tokens/buy-tokens.component.ts");
/* harmony import */ var _components_ico_distribution_ico_distribution_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ico-distribution/ico-distribution.component */ "./src/app/components/ico-distribution/ico-distribution.component.ts");
/* harmony import */ var _components_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/transactions/transactions.component */ "./src/app/components/transactions/transactions.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_kyc_kyc_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/kyc/kyc.component */ "./src/app/components/kyc/kyc.component.ts");
/* harmony import */ var _components_kyc_kyc_form_kyc_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/kyc/kyc-form/kyc-form.component */ "./src/app/components/kyc/kyc-form/kyc-form.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _components_buy_tokens_buy_tokens_component__WEBPACK_IMPORTED_MODULE_6__["BuyTokensComponent"],
                _components_ico_distribution_ico_distribution_component__WEBPACK_IMPORTED_MODULE_7__["IcoDistributionComponent"],
                _components_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_8__["TransactionsComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _components_kyc_kyc_component__WEBPACK_IMPORTED_MODULE_12__["KycComponent"],
                _components_kyc_kyc_form_kyc_form_component__WEBPACK_IMPORTED_MODULE_13__["KycFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/buy-tokens/buy-tokens.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/buy-tokens/buy-tokens.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnV5LXRva2Vucy9idXktdG9rZW5zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/buy-tokens/buy-tokens.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/buy-tokens/buy-tokens.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"main-content col-lg-8\">\n              \n              <div class=\"d-lg-none\">\n                  <a href=\"#\" data-toggle=\"modal\" data-target=\"#add-wallet\" class=\"btn btn-danger btn-xl btn-between w-100 mgb-1-5x\">Add your wallet address before buy <em class=\"ti ti-arrow-right\"></em></a>\n                  <div class=\"gaps-1x mgb-0-5x d-lg-none d-none d-sm-block\"></div>\n              </div>\n              <div class=\"content-area card\">\n                  <div class=\"card-innr\">\n                      <div class=\"card-head\">\n                          <span class=\"card-sub-title text-primary font-mid\">Step 1</span>\n                          <h4 class=\"card-title\">Choose currency and calculate TWZ tokens price</h4>\n                      </div>\n                      <div class=\"card-text\">\n                          <p>You can buy our TWZ tokens using ETH, BTC, LTC or USD to become part of Our project.</p>\n                      </div>\n                      \n                      <div class=\"token-currency-choose\">\n                          <div class=\"row guttar-15px\">\n                              <div class=\"col-6\">\n                                  <div class=\"pay-option\">\n                                      <input class=\"pay-option-check\" type=\"radio\" id=\"payeth\" name=\"payOption\" checked>\n                                      <label class=\"pay-option-label\" for=\"payeth\">\n                                          <span class=\"pay-title\"><em class=\"pay-icon cf cf-eth\"></em><span class=\"pay-cur\">ETH</span></span>\n                                          <span class=\"pay-amount\">0.000800</span>\n                                      </label>\n                                  </div>       \n                              </div>\n                              <div class=\"col-6\">\n                                  <div class=\"pay-option\">\n                                      <input class=\"pay-option-check\" type=\"radio\" id=\"paylte\" name=\"payOption\">\n                                      <label class=\"pay-option-label\" for=\"paylte\">\n                                          <span class=\"pay-title\"><em class=\"pay-icon cf cf-ltc\"></em><span class=\"pay-cur\">LTC</span></span>\n                                          <span class=\"pay-amount\">0.001201</span>\n                                      </label>\n                                  </div>       \n                              </div>\n                              <div class=\"col-6\">\n                                  <div class=\"pay-option\">\n                                      <input class=\"pay-option-check\" type=\"radio\" id=\"paybtc\" name=\"payOption\">\n                                      <label class=\"pay-option-label\" for=\"paybtc\">\n                                          <span class=\"pay-title\"><em class=\"pay-icon cf cf-btc\"></em><span class=\"pay-cur\">BTC</span></span>\n                                          <span class=\"pay-amount\">0.000015</span>\n                                      </label>\n                                  </div>       \n                              </div>\n                              <div class=\"col-6\">\n                                  <div class=\"pay-option\">\n                                      <input class=\"pay-option-check\" type=\"radio\" id=\"payusd\" name=\"payOption\">\n                                      <label class=\"pay-option-label\" for=\"payusd\">\n                                          <span class=\"pay-title\"><em class=\"pay-icon fas fa-dollar-sign\"></em><span class=\"pay-cur\">USD</span></span>\n                                          <span class=\"pay-amount\">0.25</span>\n                                      </label>\n                                  </div>       \n                              </div>\n                          </div><!-- .row -->\n                      </div>\n                      <div class=\"card-head\">\n                          <span class=\"card-sub-title text-primary font-mid\">Step 2</span>\n                          <h4 class=\"card-title\">Amount of contribute</h4>\n                      </div>\n                      <div class=\"card-text\">\n                          <p>Enter your amount, you would like to contribute and calculate the amount of token you will received. The calculator helps to convert required currency to tokens.</p>\n                      </div>\n                      <div class=\"token-contribute\">\n                          <div class=\"token-calc\">\n                              <div class=\"token-pay-amount\">\n                                  <input id=\"token-base-amount\" class=\"input-bordered input-with-hint\" type=\"text\" value=\"1\">\n\n                                  <div class=\"token-pay-currency\">\n                                     <span class=\"input-hint input-hint-sap\">ETH</span>\n                                  </div>\n                              </div>\n                              <div class=\"token-received\">\n                                  <div class=\"token-eq-sign\">=</div>\n                                  <div class=\"token-received-amount\">\n                                      <h5 class=\"token-amount\">123,500.84</h5>\n                                      <div class=\"token-symbol\">TWZ</div>\n                                  </div>\n                              </div>\n                          </div>\n                          <div class=\"token-calc-note note note-plane\">\n                              <em class=\"fas fa-times-circle text-danger\"></em>\n                              <span class=\"note-text text-light\">0.35 ETH minimum contribution require.</span>\n                          </div>\n                      </div>\n                      \n                      <div class=\"token-bonus-ui\">\n                          <div class=\"bonus-bar\">\n                              <div class=\"bonus-base\">\n                              <span class=\"bonus-base-title\">Bonus</span>\n                              <span class=\"bonus-base-amount\">On Sale</span>\n                              <span class=\"bonus-base-percent\">20%</span>\n                          </div>\n                              <div class=\"bonus-extra\">\n                              <div class=\"bonus-extra-item active\" data-percent=\"10\">\n                                  <span class=\"bonus-extra-amount\">0.5 ETH</span>\n                                  <span class=\"bonus-extra-percent\">10%</span>\n                              </div>\n                              <div class=\"bonus-extra-item active\" data-percent=\"20\">\n                                  <span class=\"bonus-extra-amount\">1 ETH</span>\n                                  <span class=\"bonus-extra-percent\">30%</span>\n                              </div>\n                              <div class=\"bonus-extra-item active\" data-percent=\"20\">\n                                  <span class=\"bonus-extra-amount\">5 ETH</span>\n                                  <span class=\"bonus-extra-percent\">50%</span>\n                              </div>\n                              <div class=\"bonus-extra-item\" data-percent=\"20\">\n                                  <span class=\"bonus-extra-amount\">10 ETH</span>\n                                  <span class=\"bonus-extra-percent\">70%</span>\n                              </div>\n                              <div class=\"bonus-extra-item\" data-percent=\"30\">\n                                  <span class=\"bonus-extra-amount\">20 ETH</span>\n                                  <span class=\"bonus-extra-percent\">100%</span>\n                              </div>\n                          </div>\n                          </div>\n                      </div>\n                      <div class=\"token-overview-wrap\">\n                          <div class=\"token-overview\">\n                              <div class=\"row\">\n                                  <div class=\"col-md-4 col-sm-6\">\n                                      <div class=\"token-bonus token-bonus-sale\">\n                                          <span class=\"token-overview-title\">+ 20% Sale Bonus</span>\n                                          <span class=\"token-overview-value bonus-on-sale\">15,000.00</span>\n                                      </div>\n                                  </div>\n                                  <div class=\"col-md-4 col-sm-6\">\n                                      <div class=\"token-bonus token-bonus-amount\">\n                                          <span class=\"token-overview-title\">+ 30% Amount Bonus</span>\n                                          <span class=\"token-overview-value bonus-on-amount\">5,000.00</span>\n                                      </div>\n                                  </div>\n                                  <div class=\"col-md-4\">\n                                      <div class=\"token-total\">\n                                          <span class=\"token-overview-title font-bold\">Total TWZ</span>\n                                          <span class=\"token-overview-value token-total-amount text-primary\">1,823,500.84</span>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                          <div class=\"note note-plane note-danger note-sm pdt-1x pl-0\">\n                              <p>Your Contribution will be calculated based on exchange rate at the moment your transaction is confirm.</p>\n                          </div>\n                      </div>\n                      <div class=\"card-head\">\n                          <span class=\"card-sub-title text-primary font-mid\">Step 3</span>\n                          <h4 class=\"card-title\">Make a payment</h4>\n                      </div>\n                      <div class=\"card-text\">\n                          <p>To get tokens please make a payment. You can send payment directly to our address or you may pay online. Once you paid, you will receive an email about the successfull deposit. </p>\n                      </div>\n                      <div class=\"pay-buttons\">\n                          <div class=\"pay-button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#get-pay-address\" class=\"btn btn-light-alt btn-between w-100\">Get Address for Payment <em class=\"ti ti-wallet\"></em></a></div>\n                          <div class=\"pay-button-sap\">or</div>\n                          <div class=\"pay-button\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#pay-online\" class=\"btn btn-primary btn-between w-100\">Make Online Payment <em class=\"ti ti-arrow-right\"></em></a></div>\n                      </div>\n                      <div class=\"pay-notes\">\n                          <div class=\"note note-plane note-light note-md font-italic\">\n                              <em class=\"fas fa-info-circle\"></em>\n                              <p>Tokens will appear in your account after payment successfully made and approved by our team. <br class=\"d-none d-lg-block\"> Please note that, TWZ tokens will distributed end of ICO Token Sales. </p>\n                          </div>\n                      </div>\n                  </div> <!-- .card-innr -->\n              </div> <!-- .content-area -->\n              \n          </div><!-- .col -->\n          <div class=\"aside sidebar-right col-lg-4\">\n              <div class=\"d-none d-lg-block\">\n                  <a href=\"#\" data-toggle=\"modal\" data-target=\"#add-wallet\" class=\"btn btn-danger btn-xl btn-between w-100\">Add your wallet address before buy <em class=\"ti ti-arrow-right\"></em></a>\n                  <div class=\"gaps-3x\"></div>\n              </div>\n              <div class=\"token-statistics card card-token height-auto\">\n                  <div class=\"card-innr\">\n                      <div class=\"token-balance\">\n                          <div class=\"token-balance-text\">\n                              <h6 class=\"card-sub-title\">Tokens Balance</h6>\n                              <span class=\"lead\">120,000,000 <span>TWZ</span></span>\n                          </div>\n                      </div>\n                      <div class=\"token-balance token-balance-s2\">\n                          <h6 class=\"card-sub-title\">Your Contribution</h6>\n                          <ul class=\"token-balance-list\">\n                              <li class=\"token-balance-sub\">\n                                  <span class=\"lead\">2.646</span>\n                                  <span class=\"sub\">ETH</span>\n                              </li>\n                              <li class=\"token-balance-sub\">\n                                  <span class=\"lead\">1.265</span>\n                                  <span class=\"sub\">BTC</span>\n                              </li>\n                              <li class=\"token-balance-sub\">\n                                  <span class=\"lead\">6.506</span>\n                                  <span class=\"sub\">LTC</span>\n                              </li>\n                          </ul>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"token-sales card\">\n                  <div class=\"card-innr\">\n                      <div class=\"card-head\">\n                          <h5 class=\"card-title card-title-sm\">Pre-Sale Token Sales</h5>\n                      </div>\n                      <div class=\"token-rate-wrap row\">\n                          <div class=\"token-rate col-md-6 col-lg-12\">\n                              <span class=\"card-sub-title\">TWZ Token Price</span>\n                              <h4 class=\"font-mid text-dark\">1 ETH = <span>12500 TWZ</span></h4>\n                          </div>\n                          <div class=\"token-rate col-md-6 col-lg-12\">\n                              <span class=\"card-sub-title\">Exchange Rate</span>\n                              <span>1 ETH = 196.98 USD = 0.032 BTC</span>\n                          </div>\n                      </div>\n                      <div class=\"token-bonus-current\">\n                          <div class=\"fake-class\">\n                              <span class=\"card-sub-title\">Current Bonus</span>\n                              <div class=\"h3 mb-0\">20 %</div>\n                          </div>\n                          <div class=\"token-bonus-date\">End at <br> 10 Jan, 2019</div>\n                      </div>\n                  </div>\n                  <div class=\"sap\"></div>\n                  <div class=\"card-innr\">\n                      <div class=\"card-head\">\n                          <h5 class=\"card-title card-title-sm\">Token Sales Progress</h5>\n                      </div>\n                      <ul class=\"progress-info\">\n                          <li><span>Raised</span> 2,758 TWZ</li>\n                          <li class=\"text-right\"><span>TOTAL</span> 1,500,000 TWZ</li>\n                      </ul>\n                      <div class=\"progress-bar\">\n                          <div class=\"progress-hcap\" data-percent=\"83\">\n                              <div>Hard cap <span>1,400,000</span></div>\n                          </div>\n                          <div class=\"progress-scap\" data-percent=\"24\">\n                              <div>Soft cap <span>40,000</span></div>\n                          </div>\n                          <div class=\"progress-percent\" data-percent=\"28\"></div>\n                      </div>\n                      \n                      <span class=\"card-sub-title mgb-0-5x\">Sales END IN</span>\n                      <div class=\"countdown-clock\" data-date=\"2019/02/05\"></div>\n                  </div>\n                  \n              </div>\n          </div><!-- .col -->\n      </div><!-- .container -->\n  </div><!-- .container -->\n</div><!-- .page-content -->"

/***/ }),

/***/ "./src/app/components/buy-tokens/buy-tokens.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/buy-tokens/buy-tokens.component.ts ***!
  \***************************************************************/
/*! exports provided: BuyTokensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyTokensComponent", function() { return BuyTokensComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BuyTokensComponent = /** @class */ (function () {
    function BuyTokensComponent() {
    }
    BuyTokensComponent.prototype.ngOnInit = function () {
    };
    BuyTokensComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buy-tokens',
            template: __webpack_require__(/*! ./buy-tokens.component.html */ "./src/app/components/buy-tokens/buy-tokens.component.html"),
            styles: [__webpack_require__(/*! ./buy-tokens.component.css */ "./src/app/components/buy-tokens/buy-tokens.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BuyTokensComponent);
    return BuyTokensComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-lg-4\">\n              <div class=\"token-statistics card card-token height-auto\">\n                  <div class=\"card-innr\">\n                      <div class=\"token-balance token-balance-with-icon\">\n                          <div class=\"token-balance-icon\">\n                              <img src=\"../../../assets/images/logo-light-sm.png\" alt=\"logo\">\n                          </div>\n                          <div class=\"token-balance-text\">\n                              <h6 class=\"card-sub-title\">Tokens Balance</h6>\n                              <span class=\"lead\">120,000,000 <span>TWZ</span></span>\n                          </div>\n                      </div>\n                      <div class=\"token-balance token-balance-s2\">\n                          <h6 class=\"card-sub-title\">Your Contribution</h6>\n                          <ul class=\"token-balance-list\">\n                              <li class=\"token-balance-sub\">\n                                  <span class=\"lead\">2.646</span>\n                                  <span class=\"sub\">ETH</span>\n                              </li>\n                              <li class=\"token-balance-sub\">\n                                  <span class=\"lead\">1.265</span>\n                                  <span class=\"sub\">BTC</span>\n                              </li>\n                              <li class=\"token-balance-sub\">\n                                  <span class=\"lead\">6.506</span>\n                                  <span class=\"sub\">LTC</span>\n                              </li>\n                          </ul>\n                      </div>\n                  </div>\n              </div>\n          </div><!-- .col -->\n          <div class=\"col-lg-8\">\n              <div class=\"token-information card card-full-height\">\n                  <div class=\"row no-gutters height-100\">\n                      <div class=\"col-md-6 text-center\">\n                          <div class=\"token-info\">\n                              <img class=\"token-info-icon\" src=\"../../../assets/images/logo-sm.png\" alt=\"logo-sm\">\n                              <div class=\"gaps-2x\"></div>\n                              <h1 class=\"token-info-head text-light\">1 ETH = 1000 TWZ</h1>\n                              <h5 class=\"token-info-sub\">1 ETH = 254.05 USD</h5>\n                          </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <div class=\"token-info bdr-tl\">\n                              <div>\n                                  <ul class=\"token-info-list\">\n                                      <li><span>Token Name:</span>TokenWiz</li>\n                                      <li><span>Ticket Symbol:</span>TWZ</li>\n                                  </ul>   \n                                  <a href=\"#\" class=\"btn btn-primary\"><em class=\"fas fa-download mr-3\"></em>Download Whitepaper</a>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div><!-- .card -->\n          </div><!-- .col -->\n          <div class=\"col-xl-8 col-lg-7\">\n              <div class=\"token-transaction card card-full-height\">\n                  <div class=\"card-innr\">\n                      <div class=\"card-head has-aside\">\n                          <h4 class=\"card-title\">Transaction</h4>\n                          <div class=\"card-opt\">\n                              <a href=\"transactions.html\" class=\"link ucap\">View ALL <em class=\"fas fa-angle-right ml-2\"></em></a>\n                          </div>\n                      </div>\n                      <table class=\"table tnx-table\">\n                          <thead>\n                              <tr>\n                                  <th>TWZ Tokens</th>\n                                  <th>Amount</th>\n                                  <th class=\"d-none d-sm-table-cell tnx-date\">Date</th>\n                                  <th class=\"tnx-type\"><div class=\"tnx-type-text\"></div></th>\n                              </tr><!-- tr -->\n                          </thead><!-- thead -->\n                          <tbody>\n                              <tr>\n                                  <td>\n                                      <div class=\"d-flex align-items-center\">\n                                          <div class=\"data-state data-state-pending\">\n                                          </div>\n                                          <span class=\"lead\">18,750</span>\n                                      </div>\n                                  </td>\n                                  <td>\n                                      <span>\n                                          <span class=\"lead\">3.543</span>\n                                          <span class=\"sub\">ETH <em class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"1 ETH = 590.54 USD\"></em></span>\n                                      </span>\n                                  </td>\n                                  <td class=\"d-none d-sm-table-cell tnx-date\">\n                                      <span class=\"sub sub-s2\">2018-08-24 10:20 PM</span>\n                                  </td>\n                                  <td class=\"tnx-type\">\n                                      <span class=\"tnx-type-md badge badge-outline badge-success badge-md\">Purchase</span>\n                                      <span class=\"tnx-type-sm badge badge-sq badge-outline badge-success badge-md\">P</span>\n                                  </td>\n                              </tr><!-- tr -->\n                              <tr>\n                                  <td>\n                                      <div class=\"d-flex align-items-center\">\n                                          <div class=\"data-state data-state-progress\">\n                                          </div>\n                                          <span class=\"lead\">8,052</span>\n                                      </div>\n                                  </td>\n                                  <td>\n                                      <span>\n                                          <span class=\"lead\">0.165</span>\n                                          <span class=\"sub\">BTC <em class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"1 BTC = 5450.54 USD\"></em></span>\n                                      </span>\n                                  </td>\n                                  <td class=\"d-none d-sm-table-cell tnx-date\">\n                                      <span class=\"sub sub-s2\">2018-08-24 10:20 PM</span>\n                                  </td>\n                                  <td class=\"tnx-type\">\n                                      <span class=\"tnx-type-md badge badge-outline badge-warning badge-md\">Bonus</span>\n                                      <span class=\"tnx-type-sm badge badge-sq badge-outline badge-warning badge-md\">B</span>\n                                  </td>\n                              </tr><!-- tr -->\n                              <tr>\n                                  <td>\n                                      <div class=\"d-flex align-items-center\">\n                                          <div class=\"data-state data-state-approved\">\n                                          </div>\n                                          <span class=\"lead\">19,000</span>\n                                      </div>\n                                  </td>\n                                  <td>\n                                      <span>\n                                          <span class=\"lead\">3.141</span>\n                                          <span class=\"sub\">LTC <em class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"1 LTC = 180.54 USD\"></em></span>\n                                      </span>\n                                  </td>\n                                  <td class=\"d-none d-sm-table-cell tnx-date\">\n                                      <span class=\"sub sub-s2\">2018-08-24 10:20 PM</span>\n                                  </td>\n                                  <td class=\"tnx-type\">\n                                      <span class=\"tnx-type-md badge badge-outline badge-warning badge-md\">Bonus</span>\n                                      <span class=\"tnx-type-sm badge badge-sq badge-outline badge-warning badge-md\">B</span>\n                                  </td>\n                              </tr><!-- tr -->\n                          </tbody><!-- tbody -->\n                      </table><!-- .table -->\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-xl-4 col-lg-5\">\n              <div class=\"token-calculator card card-full-height\">\n                  <div class=\"card-innr\">\n                      <div class=\"card-head\">\n                          <h4 class=\"card-title\">Token Calculation</h4>\n                          <p class=\"card-title-text\">Enter amount to calculate token.</p>\n                      </div>\n                      <div class=\"token-calc\">\n                          <div class=\"token-pay-amount\">\n                              <input id=\"token-base-amount\" class=\"input-bordered input-with-hint\" type=\"text\" value=\"1\">\n                              <div class=\"token-pay-currency\">\n                                  <a href=\"#\" class=\"link ucap link-light toggle-tigger toggle-caret\">ETH</a>\n                                  <div class=\"toggle-class dropdown-content\">\n                                      <ul class=\"dropdown-list\">\n                                          <li><a href=\"#\">BTC</a></li>\n                                          <li><a href=\"#\">LTC</a></li>\n                                          <li><a href=\"#\">USD</a></li>\n                                      </ul>\n                                  </div>\n                              </div>\n                          </div>\n                          <div class=\"token-received\">\n                              <div class=\"token-eq-sign\">=</div>\n                              <div class=\"token-received-amount\">\n                                  <h5 class=\"token-amount\">123,500.84</h5>\n                                  <div class=\"token-symbol\">TWZ</div>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"token-calc-note note note-plane\">\n                          <em class=\"fas fa-info-circle text-light\"></em>\n                          <span class=\"note-text text-light\">Amount calculated based current tokens price</span>\n                      </div>\n                      <div class=\"token-buy\">\n                          <a [routerLink]=\"['/buytokens']\" class=\"btn btn-primary\">Buy Tokens</a>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div><!-- .row -->\n      <div class=\"row\">\n          <div class=\"col-xl-8 col-lg-7\">\n              <div class=\"token-sale-graph card card-full-height\">\n                  <div class=\"card-innr\">\n                      <div class=\"card-head has-aside\">\n                          <h4 class=\"card-title\">Tokens Sale Graph</h4>\n                          <div class=\"card-opt\">\n                              <a href=\"#\" class=\"link ucap link-light toggle-tigger toggle-caret\">7 Days</a>\n                              <div class=\"toggle-class dropdown-content\">\n                                  <ul class=\"dropdown-list\">\n                                      <li><a href=\"#\">30 days</a></li>\n                                      <li><a href=\"#\">1 years</a></li>\n                                  </ul>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"chart-tokensale\">\n                          <canvas id=\"tknSale\"></canvas>\n                      </div>\n                  </div>\n              </div><!-- .card -->\n          </div><!-- .col -->\n          <div class=\"col-xl-4 col-lg-5\">\n              <div class=\"token-sales card card-full-height\">\n                  <div class=\"card-innr\">\n                      <div class=\"card-head\">\n                          <h4 class=\"card-title\">Token Sales Progress</h4>\n                      </div>\n                      <ul class=\"progress-info\">\n                          <li><span>Raised</span> 2,758 TWZ</li>\n                          <li class=\"text-right\"><span>TOTAL</span> 1,500,000 TWZ</li>\n                      </ul>\n                      <div class=\"progress-bar\">\n                          <div class=\"progress-hcap\" data-percent=\"83\" style=\"width: 83%;\">\n                              <div>Hard cap <span>1,400,000</span></div>\n                          </div>\n                          <div class=\"progress-scap\" data-percent=\"24\" style=\"width: 24%;\">\n                              <div>Soft cap <span>40,000</span></div>\n                          </div>\n                          <div class=\"progress-percent\" data-percent=\"28\" style=\"width: 28%;\"></div>\n                      </div>\n                      \n                      <span class=\"card-sub-title mgb-0-5x\">Sales END IN</span>\n                      <div class=\"countdown-clock\" data-date=\"2019/02/05\"><div><span class=\"countdown-time countdown-time-first\">78</span><span class=\"countdown-text\">Day</span></div><div><span class=\"countdown-time\">08</span><span class=\"countdown-text\">Hour</span></div><div><span class=\"countdown-time\">30</span><span class=\"countdown-text\">Min</span></div><div><span class=\"countdown-time countdown-time-last\">38</span><span class=\"countdown-text\">Sec</span></div></div>\n                  </div>\n              </div>\n          </div>\n      </div><!-- .row -->\n  </div><!-- .container -->\n</div><!-- .page-content -->"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-bar\">\n  <div class=\"container\">\n      <div class=\"row align-items-center justify-content-center\">\n          <div class=\"col-md-8\">\n              <ul class=\"footer-links\">\n                  <li><a href=\"#\">Whitepaper</a></li>\n                  <li><a href=\"faq-page.html\">FAQs</a></li>\n                  <li><a href=\"regular-page.html\">Privacy Policy</a></li>\n                  <li><a href=\"regular-page.html\">Terms of Condition</a></li>\n              </ul>\n          </div><!-- .col -->\n          <div class=\"col-md-4 mt-2 mt-sm-0\">\n              <div class=\"d-flex justify-content-between justify-content-md-end align-items-center guttar-25px pdt-0-5x pdb-0-5x\">\n                  <div class=\"copyright-text\">&copy; 2018 TokenWiz.</div>\n                  <div class=\"lang-switch relative\">\n                      <a href=\"#\" class=\"lang-switch-btn toggle-tigger\">En <em class=\"ti ti-angle-up\"></em></a>\n                      <div class=\"toggle-class dropdown-content dropdown-content-up\">\n                          <ul class=\"lang-list\">\n                              <li><a href=\"#\">Fr</a></li>\n                              <li><a href=\"#\">Bn</a></li>\n                              <li><a href=\"#\">Lt</a></li>\n                          </ul>\n                      </div>\n                  </div>\n              </div>\n          </div><!-- .col -->\n      </div><!-- .row -->\n  </div><!-- .container -->\n</div><!-- .footer-bar -->"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topbar-wrap\">\n  <div class=\"topbar is-sticky\">\n      <div class=\"container\">\n          <div class=\"d-flex justify-content-between align-items-center\">\n              <ul class=\"topbar-nav d-lg-none\">\n                  <li class=\"topbar-nav-item relative\">\n                      <a class=\"toggle-nav\" href=\"#\">\n                          <div class=\"toggle-icon\">\n                              <span class=\"toggle-line\"></span>\n                              <span class=\"toggle-line\"></span>\n                              <span class=\"toggle-line\"></span>\n                              <span class=\"toggle-line\"></span>\n                          </div>\n                      </a>\n                  </li><!-- .topbar-nav-item -->\n              </ul><!-- .topbar-nav -->\n              <a class=\"topbar-logo\" href=\"./\">\n                 <img src=\"../../../assets/images/logo-light2x.png\" srcset=\"../../../assets/images/logo-light2x.png 2x\" alt=\"logo\">\n              </a>\n              <ul class=\"topbar-nav\">\n                  <li class=\"topbar-nav-item relative\">\n                      <span class=\"user-welcome d-none d-lg-inline-block\">Welcome! Stefan Harary</span>\n                      <a class=\"toggle-tigger user-thumb\" href=\"#\"><em class=\"ti ti-user\"></em></a>\n                      <div class=\"toggle-class dropdown-content dropdown-content-right dropdown-arrow-right user-dropdown\">\n                          <div class=\"user-status\">\n                              <h6 class=\"user-status-title\">Token balance</h6>\n                              <div class=\"user-status-balance\">12,000,000 <small>TWZ</small></div>\n                          </div>\n                          <ul class=\"user-links\">\n                              <li><a href=\"profile.html\"><i class=\"ti ti-id-badge\"></i>My Profile</a></li>\n                              <li><a href=\"#\"><i class=\"ti ti-infinite\"></i>Referral</a></li>\n                              <li><a href=\"#\"><i class=\"ti ti-eye\"></i>Activity</a></li>\n                          </ul>\n                          <ul class=\"user-links bg-light\">\n                              <li><a href=\"sign-in.html\"><i class=\"ti ti-power-off\"></i>Logout</a></li>\n                          </ul>\n                      </div>\n                  </li><!-- .topbar-nav-item -->\n              </ul><!-- .topbar-nav -->\n          </div>\n      </div><!-- .container -->\n  </div><!-- .topbar -->\n  <div class=\"navbar\">\n      <div class=\"container\">\n          <div class=\"navbar-innr\">\n              <ul class=\"navbar-menu\">\n                  <li><a [routerLink]=\"['/dashboard']\" routerLinkActive=\"router-link-active\" ><em class=\"ikon ikon-dashboard\"></em> Dashboard</a></li>\n                  <li><a [routerLink]=\"['/buytokens']\"><em class=\"ikon ikon-coins\"></em> Buy Tokens</a></li>\n                  <li><a [routerLink]=\"['/icodistribution']\"><em class=\"ikon ikon-distribution\"></em> ICO Distribution</a></li>\n                  <li><a [routerLink]=\"['/transactions']\"><em class=\"ikon ikon-transactions\"></em> Transactions</a></li>\n                  <li><a [routerLink]=\"['/profile']\"><em class=\"ikon ikon-user\"></em> Profile</a></li>\n                  <!-- <li class=\"has-dropdown page-links-all\"><a class=\"drop-toggle\" href=\"#\"><em class=\"ikon ikon-exchange\"></em> Pages</a>\n                      <ul class=\"navbar-dropdown\">\n                          <li class=\"has-dropdown\"><a class=\"drop-toggle\" href=\"#\">UI Elements</a>\n                              <ul class=\"navbar-dropdown\">\n                                  <li><a href=\"form-elements.html\">Form Elements</a></li>\n                                  <li><a href=\"form-layout.html\">Form Layout</a></li>\n                                  <li><a href=\"form-validation.html\">Form Validation <span class=\"badge badge-warning\">New</span></a></li>\n                                  <li><a href=\"form-wizard.html\">Form Wizard <span class=\"badge badge-warning\">New</span></a></li>\n                                  <li><a href=\"buttons.html\">Button</a></li>\n                                  <li><a href=\"badges.html\">Badge</a></li>\n                                  <li><a href=\"cards.html\">Cards <span class=\"badge badge-warning\">New</span></a></li>\n                                  <li><a href=\"tabs.html\">Tabs</a></li>\n                                  <li><a href=\"accordions.html\">Accordions</a></li>\n                                  <li><a href=\"modals.html\">Modals</a></li>\n                                  <li><a href=\"alerts.html\">Alerts</a></li>\n                                  <li><a href=\"alert-toastr.html\">Toastr Alerts</a></li>\n                                  <li><a href=\"alert-sweat.html\">Sweat Alerts <span class=\"badge badge-warning\">New</span></a></li>\n                              </ul>\n                          </li>\n                          <li class=\"has-dropdown\"><a class=\"drop-toggle\" href=\"#\">Misc Pages</a>\n                              <ul class=\"navbar-dropdown\">\n                                  <li><a href=\"404-error.html\">404 Error</a></li>\n                                  <li><a href=\"sign-in.html\">Sign In / Login</a></li>\n                                  <li><a href=\"sign-up.html\">Sign Up / Registration</a></li>\n                                  <li><a href=\"signup-success.html\">Signup Success</a></li>\n                                  <li><a href=\"email-verified.html\">Email Verified</a></li>\n                                  <li><a href=\"forgot.html\">Forgot Password</a></li>\n                                  <li><a href=\"faq-page.html\">Faq Page</a></li>\n                                  <li><a href=\"regular-page.html\">Regular Page - v1</a></li>\n                                  <li><a href=\"regular-page-v2.html\">Regular Page - v2</a></li>\n                                  <li><a href=\"thank-you.html\">Thank You <span class=\"badge badge-warning\">New</span></a></li>\n                                  <li><a href=\"_blank.html\">Blank Page</a></li>\n                              </ul>\n                          </li>\n                          <li class=\"has-dropdown\"><a class=\"drop-toggle\" href=\"#\">KYC / AML</a>\n                              <ul class=\"navbar-dropdown\">\n                                  <li><a href=\"kyc-application.html\">KYC Default</a></li>\n                                  <li><a href=\"kyc-form.html\">KYC Form</a></li>\n                                  <li><a href=\"kyc-thank-you.html\">KYC Thank You</a></li>\n                                  <li><a href=\"kyc-list.html\">KYC Lists - Admin</a></li>\n                                  <li><a href=\"kyc-details.html\">KYC Details - Admin</a></li>\n                              </ul>\n                          </li>\n                          <li class=\"has-dropdown\"><a class=\"drop-toggle\" href=\"#\">User Pages</a>\n                              <ul class=\"navbar-dropdown\">\n                                  <li><a href=\"profile.html\">Profile Page</a></li>\n                                  <li><a href=\"user-list.html\">User List - Admin</a></li>\n                                  <li><a href=\"user-details.html\">User Details - Admin</a></li>\n                              </ul>\n                          </li>\n                          <li class=\"has-dropdown\"><a class=\"drop-toggle\" href=\"#\">Transactions</a>\n                              <ul class=\"navbar-dropdown\">\n                                  <li><a href=\"transactions.html\">Transactions - User</a></li>\n                                  <li><a href=\"admin-transactions.html\">Transactions - Admin</a></li>\n                                  <li><a href=\"transaction-details.html\">Transaction Details</a></li>\n                              </ul>\n                          </li>\n                          <li class=\"has-dropdown\"><a class=\"drop-toggle\" href=\"#\">Token Purchase</a>\n                              <ul class=\"navbar-dropdown\">\n                                  <li><a href=\"buy-token.html\">Buy Token - Modern</a></li>\n                                  <li><a href=\"buy-token-s2.html\">Buy Token - Simple</a></li>\n                              </ul>\n                          </li>\n                          <li><a href=\"email-templates.html\">Email Templates <span class=\"badge badge-success\">Free</span></a></li>\n                      </ul>\n                  </li> -->\n              </ul>\n              <ul class=\"navbar-btns\">\n                  <li><a [routerLink]=\"['/kyc']\" class=\"btn btn-sm btn-outline btn-light\"><em class=\"text-primary ti ti-files\"></em><span>KYC Application</span></a></li>\n                  <li class=\"d-none\"><span class=\"badge badge-outline badge-success badge-lg\"><em class=\"text-success ti ti-files mgr-1x\"></em><span class=\"text-success\">KYC Approved</span></span></li>\n              </ul>\n          </div><!-- .navbar-innr -->\n      </div><!-- .container -->\n  </div><!-- .navbar -->\n</div><!-- .topbar-wrap -->"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/ico-distribution/ico-distribution.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/ico-distribution/ico-distribution.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaWNvLWRpc3RyaWJ1dGlvbi9pY28tZGlzdHJpYnV0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/ico-distribution/ico-distribution.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/ico-distribution/ico-distribution.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"main-content col-lg-8\">\n              <div class=\"content-area card\">\n                  <div class=\"card-innr\">\n                      <div class=\"card-head\">\n                          <h4 class=\"card-title\">ICO Distribution, Rate &amp; Sales Info</h4>\n                      </div>\n                      <div class=\"card-text\">\n                          <p>To become a part of TokenWiz project, you can found all details of ICO. <br class=\"d-none d-sm-block\"> You can contribute and <a href=\"#\">buy TWZ tokens</a>.</p>\n                          <p>You can get a quick response and chat with our team in Telegram: <a href=\"#\">htts://t.me/tokenwiz</a></p>\n                      </div>\n                      <div class=\"gaps-3x\"></div>\n                      <div class=\"card-head\">\n                          <h5 class=\"card-title card-title-md\">ICO Schedule</h5>\n                      </div>\n                      <div class=\"schedule-item\">\n                          <div class=\"row\">\n                              <div class=\"col-xl-5 col-md-5 col-lg-6\">\n                                  <div class=\"pdb-1x\">\n                                      <h5 class=\"schedule-title\"><span>Pre-Sale ICO</span><span class=\"badge badge-success ucap badge-xs\">Running</span></h5>\n                                      <span>Start at Dec 02, 2018 - 11:00 AM</span>\n                                      <span>End at Jan 15, 2019 - 11:00 AM</span>\n                                  </div>\n                              </div>\n                              <div class=\"col-xl-4 col-md col-lg-6\">\n                                  <div class=\"pdb-1x\">\n                                      <h5 class=\"schedule-title\"><span>0.00080 ETH</span></h5>\n                                      <span>Min purchase - 0.35 ETH</span>\n                                      <span>Token Distribute - 250,000</span>\n                                  </div>\n                              </div>\n                              <div class=\"col-xl-3 col-md-3 align-self-center text-xl-right\">\n                                  <div class=\"pdb-1x\">\n                                      <span class=\"schedule-bonus\">20% Bonus</span>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"schedule-item\">\n                          <div class=\"row\">\n                              <div class=\"col-xl-5 col-md-5 col-lg-6\">\n                                  <div class=\"pdb-1x\">\n                                      <h5 class=\"schedule-title\"><span>Main ICO Sale</span><span class=\"badge badge-disabled ucap badge-xs\">Upcomming</span></h5>\n                                      <span>Start at Dec 02, 2018 - 11:00 AM</span>\n                                      <span>End at Jan 15, 2019 - 11:00 AM</span>\n                                  </div>\n                              </div>\n                              <div class=\"col-xl-4 col-md col-lg-6\">\n                                  <div class=\"pdb-1x\">\n                                      <h5 class=\"schedule-title\"><span>0.00080 ETH</span></h5>\n                                      <span>Min purchase - 0.35 ETH</span>\n                                      <span>Token Distribute - 250,000</span>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                      <h6 class=\"text-light mb-0\">* Time zone set in (GMT +6) Dhaka, Bangladesh</h6>                            \n                  </div>\n              </div>\n    <div class=\"content-area card\">\n                  <div class=\"card-innr\">\n        <div class=\"card-head\">\n                          <h5 class=\"card-title card-title-md\">Invite your friends and family and receive free tokens</h5>\n                      </div>\n                      <div class=\"card-text\">\n                          <p>Each member have a unique TWZ referral link to share with friends and family and receive a <strong>bonus - 15% of the value of their contribution</strong>. \n                          If any one sign-up with this link, will be added to your referral program. \n                          The referral link may be used during a token sales running.</p>\n                      </div>\n                      <div class=\"referral-form\">\n                          <div class=\"d-flex justify-content-between align-items-center\">\n                              <h5 class=\"mb-0 font-bold\">Referral URL</h5>\n                              <a href=\"#\" class=\"link link-primary link-ucap\">See Your referral</a>\n                          </div>\n                          <div class=\"copy-wrap mgb-1-5x mgt-1-5x\">\n                              <span class=\"copy-feedback\"></span>\n                              <em class=\"fas fa-link\"></em>\n                              <input type=\"text\" class=\"copy-address\" value=\"https://demo.themenio.com/tokenwiz?ref=7d264f90653733592\" disabled>\n                              <button class=\"copy-trigger copy-clipboard\" data-clipboard-text=\"https://demo.themenio.com/tokenwiz?ref=7d264f90653733592\"><em class=\"ti ti-files\"></em></button>\n                          </div><!-- .copy-wrap -->\n                      </div>\n                      <ul class=\"share-links\">\n                          <li>Share with : </li>\n                          <li><a href=\"#\"><em class=\"fab fa-google-plus-g\"></em></a></li>\n                          <li><a href=\"#\"><em class=\"fab fa-twitter\"></em></a></li>\n                          <li><a href=\"#\"><em class=\"fab fa-facebook-f\"></em></a></li>\n                          <li><a href=\"#\"><em class=\"fab fa-linkedin-in\"></em></a></li>\n                      </ul>\n      </div>\n    </div>\n          </div><!-- .col -->\n          <div class=\"aside sidebar-right col-lg-4\">\n              <div class=\"token-statistics card card-token height-auto\">\n                  <div class=\"card-innr\">\n                      <div class=\"token-balance\">\n                          <div class=\"token-balance-text\">\n                              <h6 class=\"card-sub-title\">Tokens Balance</h6>\n                              <span class=\"lead\">120,000,000 <span>TWZ</span></span>\n                          </div>\n                      </div>\n                      <div class=\"token-balance token-balance-s2\">\n                          <h6 class=\"card-sub-title\">Your Contribution</h6>\n                          <ul class=\"token-balance-list\">\n                              <li class=\"token-balance-sub\">\n                                  <span class=\"lead\">2.646</span>\n                                  <span class=\"sub\">ETH</span>\n                              </li>\n                              <li class=\"token-balance-sub\">\n                                  <span class=\"lead\">1.265</span>\n                                  <span class=\"sub\">BTC</span>\n                              </li>\n                              <li class=\"token-balance-sub\">\n                                  <span class=\"lead\">6.506</span>\n                                  <span class=\"sub\">LTC</span>\n                              </li>\n                          </ul>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"token-sales card\">\n                  <div class=\"card-innr\">\n                      <div class=\"card-head\">\n                          <h5 class=\"card-title card-title-sm\">Pre-Sale Token Sales</h5>\n                      </div>\n                      <div class=\"token-rate-wrap row\">\n                          <div class=\"token-rate col-md-6 col-lg-12\">\n                              <span class=\"card-sub-title\">TWZ Token Price</span>\n                              <h4 class=\"font-mid text-dark\">1 ETH = <span>12500 TWZ</span></h4>\n                          </div>\n                          <div class=\"token-rate col-md-6 col-lg-12\">\n                              <span class=\"card-sub-title\">Exchange Rate</span>\n                              <span>1 ETH = 196.98 USD = 0.032 BTC</span>\n                          </div>\n                      </div>\n                      <div class=\"token-bonus-current\">\n                          <div class=\"fake-class\">\n                              <span class=\"card-sub-title\">Current Bonus</span>\n                              <div class=\"h3 mb-0\">20 %</div>\n                          </div>\n                          <div class=\"token-bonus-date\">End at <br> 10 Jan, 2019</div>\n                      </div>\n                  </div>\n                  <div class=\"sap\"></div>\n                  <div class=\"card-innr\">\n                      <div class=\"card-head\">\n                          <h5 class=\"card-title card-title-sm\">Token Sales Progress</h5>\n                      </div>\n                      <ul class=\"progress-info\">\n                          <li><span>Raised</span> 2,758 TWZ</li>\n                          <li class=\"text-right\"><span>TOTAL</span> 1,500,000 TWZ</li>\n                      </ul>\n                      <div class=\"progress-bar\">\n                          <div class=\"progress-hcap\" data-percent=\"83\">\n                              <div>Hard cap <span>1,400,000</span></div>\n                          </div>\n                          <div class=\"progress-scap\" data-percent=\"24\">\n                              <div>Soft cap <span>40,000</span></div>\n                          </div>\n                          <div class=\"progress-percent\" data-percent=\"28\"></div>\n                      </div>\n                      \n                      <span class=\"card-sub-title mgb-0-5x\">Sales END IN</span>\n                      <div class=\"countdown-clock\" data-date=\"2019/02/05\"></div>\n                  </div>\n                  \n              </div>\n          </div><!-- .col -->\n      </div><!-- .container -->\n  </div><!-- .container -->\n</div><!-- .page-content -->\n"

/***/ }),

/***/ "./src/app/components/ico-distribution/ico-distribution.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/ico-distribution/ico-distribution.component.ts ***!
  \***************************************************************************/
/*! exports provided: IcoDistributionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IcoDistributionComponent", function() { return IcoDistributionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IcoDistributionComponent = /** @class */ (function () {
    function IcoDistributionComponent() {
    }
    IcoDistributionComponent.prototype.ngOnInit = function () {
    };
    IcoDistributionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ico-distribution',
            template: __webpack_require__(/*! ./ico-distribution.component.html */ "./src/app/components/ico-distribution/ico-distribution.component.html"),
            styles: [__webpack_require__(/*! ./ico-distribution.component.css */ "./src/app/components/ico-distribution/ico-distribution.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IcoDistributionComponent);
    return IcoDistributionComponent;
}());



/***/ }),

/***/ "./src/app/components/kyc/kyc-form/kyc-form.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/kyc/kyc-form/kyc-form.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMva3ljL2t5Yy1mb3JtL2t5Yy1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/kyc/kyc-form/kyc-form.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/kyc/kyc-form/kyc-form.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"page-header page-header-kyc\">\n      <div class=\"container\">\n          <div class=\"row justify-content-center\">\n              <div class=\"col-lg-8 col-xl-7 text-center\">\n                  <h2 class=\"page-title\">Begin your ID-Verification</h2>\n                  <p class=\"large\">Verify your identity to participate in tokensale.</p>\n              </div>\n          </div>\n      </div><!-- .container -->\n  </div><!-- .page-header -->\n  <div class=\"page-content\">\n      <div class=\"container\">\n          <div class=\"row justify-content-center\">\n              <div class=\"col-lg-10 col-xl-9\">\n                  <div class=\"kyc-form-steps card mx-lg-4\">\n                      <div class=\"form-step form-step1\">\n                          <div class=\"form-step-head card-innr\">\n                              <div class=\"step-head\">\n                                  <div class=\"step-number\">01</div>\n                                  <div class=\"step-head-text\">\n                                      <h4>Personal Details</h4>\n                                      <p>Your simple personal information required for identification</p>\n                                  </div>\n                              </div>\n                          </div><!-- .step-head -->\n                          <div class=\"form-step-fields card-innr\">\n                              <div class=\"note note-plane note-light-alt note-md pdb-1x\">\n                                  <em class=\"fas fa-info-circle\"></em>\n                                  <p>Please type carefully and fill out the form with your personal details. Your can’t edit these details once you submitted the form.</p>\n                              </div>\n                              <div class=\"row\">\n                                  <div class=\"col-md-6\">\n                                      <div class=\"input-item input-with-label\">\n                                          <label class=\"input-item-label\">First Name <span class=\"text-danger\">*</span></label>\n                                          <input class=\"input-bordered\" type=\"text\">\n                                      </div><!-- .input-item -->\n                                  </div><!-- .col -->\n                                  <div class=\"col-md-6\">\n                                      <div class=\"input-item input-with-label\">\n                                          <label class=\"input-item-label\">Last Name <span class=\"text-danger\">*</span></label>\n                                          <input class=\"input-bordered\" type=\"text\">\n                                      </div><!-- .input-item -->\n                                  </div><!-- .col -->\n                                  <div class=\"col-md-6\">\n                                      <div class=\"input-item input-with-label\">\n                                          <label class=\"input-item-label\">Email Address <span class=\"text-danger\">*</span></label>\n                                          <input class=\"input-bordered\" type=\"text\">\n                                      </div><!-- .input-item -->\n                                  </div><!-- .col -->\n                                  <div class=\"col-md-6\">\n                                      <div class=\"input-item input-with-label\">\n                                          <label class=\"input-item-label\">Phone Number <span class=\"text-danger\">*</span></label>\n                                          <input class=\"input-bordered\" type=\"text\">\n                                      </div><!-- .input-item -->\n                                  </div><!-- .col -->\n                                  <div class=\"col-md-6\">\n                                      <div class=\"input-item input-with-label\">\n                                          <label class=\"input-item-label\">Date of Birth <span class=\"text-danger\">*</span></label>\n                                          <input class=\"input-bordered date-picker\" type=\"text\">\n                                      </div><!-- .input-item -->\n                                  </div><!-- .col -->\n                                  <div class=\"col-md-6\">\n                                      <div class=\"input-item input-with-label\">\n                                          <label class=\"input-item-label\">Telegram Username</label>\n                                          <input class=\"input-bordered\" type=\"text\">\n                                      </div><!-- .input-item -->\n                                  </div><!-- .col -->\n                              </div><!-- .row -->\n                              <h4 class=\"text-secondary mgt-0-5x\">Your Address</h4>\n                              <div class=\"row\">\n                                  <div class=\"col-md-6\">\n                                      <div class=\"input-item input-with-label\">\n                                          <label class=\"input-item-label\">Address Line 1 <span class=\"text-danger\">*</span></label>\n                                          <input class=\"input-bordered\" type=\"text\">\n                                      </div><!-- .input-item -->\n                                  </div><!-- .col -->\n                                  <div class=\"col-md-6\">\n                                      <div class=\"input-item input-with-label\">\n                                          <label class=\"input-item-label\">Address Line 2</label>\n                                          <input class=\"input-bordered\" type=\"text\">\n                                      </div><!-- .input-item -->\n                                  </div><!-- .col -->\n                                  <div class=\"col-md-6\">\n                                      <div class=\"input-item input-with-label\">\n                                          <label class=\"input-item-label\">City <span class=\"text-danger\">*</span></label>\n                                          <input class=\"input-bordered\" type=\"text\">\n                                      </div><!-- .input-item -->\n                                  </div><!-- .col -->\n                                  <div class=\"col-md-6\">\n                                      <div class=\"input-item input-with-label\">\n                                          <label class=\"input-item-label\">State <span class=\"text-danger\">*</span></label>\n                                          <input class=\"input-bordered\" type=\"text\">\n                                      </div><!-- .input-item -->\n                                  </div><!-- .col -->\n                                  <div class=\"col-md-6\">\n                                      <div class=\"input-item input-with-label\">\n                                          <label for=\"nationality\" class=\"input-item-label\">Nationality <span class=\"text-danger\">*</span></label>\n                                          <select class=\"select-bordered select-block\" name=\"nationality\" id=\"nationality\">\n                                              <option value=\"us\">United State</option>\n                                              <option value=\"uk\">United KingDom</option>\n                                              <option value=\"fr\">France</option>\n                                              <option value=\"ch\">China</option>\n                                              <option value=\"cr\">Czech Republic</option>\n                                              <option value=\"cb\">Colombia</option>\n                                          </select>\n                                      </div><!-- .input-item -->\n                                  </div><!-- .col -->\n                                  <div class=\"col-md-6\">\n                                      <div class=\"input-item input-with-label\">\n                                          <label class=\"input-item-label\">Zip Code <span class=\"text-danger\">*</span></label>\n                                          <input class=\"input-bordered\" type=\"text\">\n                                      </div><!-- .input-item -->\n                                  </div><!-- .col -->\n                              </div><!-- .row -->\n                          </div><!-- .step-fields -->\n                      </div>\n                      <div class=\"form-step form-step2\">\n                          <div class=\"form-step-head card-innr\">\n                              <div class=\"step-head\">\n                                  <div class=\"step-number\">02</div>\n                                  <div class=\"step-head-text\">\n                                      <h4>Document Upload</h4>\n                                      <p>To verify your identity, please upload any of your document</p>\n                                  </div>\n                              </div>\n                          </div><!-- .step-head -->\n                          <div class=\"form-step-fields card-innr\">\n                              <div class=\"note note-plane note-light-alt note-md pdb-0-5x\">\n                                  <em class=\"fas fa-info-circle\"></em>\n                                  <p>In order to complete, please upload any of the following personal document.</p>\n                              </div>\n                              <div class=\"gaps-2x\"></div>\n                              <ul class=\"nav nav-tabs nav-tabs-bordered row flex-wrap guttar-20px\" role=\"tablist\">\n                                  <li class=\"nav-item flex-grow-0\">\n                                      <a class=\"nav-link d-flex align-items-center active\" data-toggle=\"tab\" href=\"#passport\">\n                                          <div class=\"nav-tabs-icon\">\n                                              <img src=\"../../../assets/images/icon-passport.png\" alt=\"icon\">\n                                              <img src=\"../../../assets/images/icon-passport-color.png\" alt=\"icon\">\n                                          </div>\n                                          <span>Passport</span>\n                                      </a>\n                                  </li>\n                                  <li class=\"nav-item flex-grow-0\">\n                                      <a class=\"nav-link d-flex align-items-center\" data-toggle=\"tab\" href=\"#national-card\">\n                                          <div class=\"nav-tabs-icon\">\n                                              <img src=\"../../../assets/images/icon-national-id.png\" alt=\"icon\">\n                                              <img src=\"../../../assets/images/icon-national-id-color.png\" alt=\"icon\">\n                                          </div>\n                                          <span>National Card</span>\n                                      </a>\n                                  </li>\n                                  <li class=\"nav-item flex-grow-0\">\n                                      <a class=\"nav-link d-flex align-items-center\" data-toggle=\"tab\" href=\"#driver-licence\">\n                                          <div class=\"nav-tabs-icon\">\n                                              <img src=\"../../../assets/images/icon-licence.png\" alt=\"icon\">\n                                              <img src=\"../../../assets/images/icon-licence-color.png\" alt=\"icon\">\n                                          </div>\n                                          <span>Driver’s License</span>\n                                      </a>\n                                  </li>\n                              </ul><!-- .nav-tabs-line -->\n                              <div class=\"tab-content\" id=\"myTabContent\">\n                                  <div class=\"tab-pane fade show active\" id=\"passport\">\n                                      <h5 class=\"text-secondary font-bold\">To avoid delays when verifying account, Please make sure bellow:</h5>\n                                      <ul class=\"list-check\">\n                                          <li>Chosen credential must not be expaired.</li>\n                                          <li>Document should be good condition and clearly visible.</li>\n                                          <li>Make sure that there is no light glare on the card.</li>\n                                      </ul>\n                                      <div class=\"gaps-2x\"></div>\n                                      <h5 class=\"font-mid\">Upload Here Your Passport Copy</h5>\n                                      <div class=\"row align-items-center\">\n                                          <div class=\"col-sm-8\">\n                                              <div class=\"upload-box\">\n                                                  <div class=\"upload-zone\">\n                                                      <div class=\"dz-message\" data-dz-message>\n                                                          <span class=\"dz-message-text\">Drag and drop file</span>\n                                                          <span class=\"dz-message-or\">or</span>\n                                                          <button class=\"btn btn-primary\">SELECT</button>\n                                                      </div>\n                                                  </div>\n                                              </div>\n                                          </div>\n                                          <div class=\"col-sm-4 d-none d-sm-block\">\n                                              <div class=\"mx-md-4\">\n                                                  <img src=\"../../../assets/images/vector-passport.png\" alt=\"vector\">\n                                              </div>\n                                          </div>\n                                      </div>\n                                  </div><!-- .tab-pane -->\n                                  <div class=\"tab-pane fade\" id=\"national-card\">\n                                      <h5 class=\"text-secondary font-bold\">To avoid delays when verifying account, Please make sure bellow:</h5>\n                                      <ul class=\"list-check\">\n                                          <li>Chosen credential must not be expaired.</li>\n                                          <li>Document should be good condition and clearly visible.</li>\n                                          <li>Make sure that there is no light glare on the card.</li>\n                                      </ul>\n                                      <div class=\"gaps-2x\"></div>\n                                      <h5 class=\"font-mid\">Upload Here Your National id Front Side</h5>\n                                      <div class=\"row align-items-center\">\n                                          <div class=\"col-sm-8\">\n                                              <div class=\"upload-box\">\n                                                  <div class=\"upload-zone\">\n                                                      <div class=\"dz-message\" data-dz-message>\n                                                          <span class=\"dz-message-text\">Drag and drop file</span>\n                                                          <span class=\"dz-message-or\">or</span>\n                                                          <button class=\"btn btn-primary\">SELECT</button>\n                                                      </div>\n                                                  </div>\n                                              </div>\n                                          </div>\n                                          <div class=\"col-sm-4 d-none d-sm-block\">\n                                              <div class=\"mx-md-4\">\n                                                  <img src=\"../../../assets/images/vector-id-front.png\" alt=\"vector\">\n                                              </div>\n                                          </div>\n                                      </div>\n                                      <div class=\"gaps-3x\"></div>\n                                      <h5 class=\"font-mid\">Upload Here Your National id Back Side</h5>\n                                      <div class=\"row align-items-center\">\n                                          <div class=\"col-sm-8\">\n                                              <div class=\"upload-box\">\n                                                  <div class=\"upload-zone\">\n                                                      <div class=\"dz-message\" data-dz-message>\n                                                          <span class=\"dz-message-text\">Drag and drop file</span>\n                                                          <span class=\"dz-message-or\">or</span>\n                                                          <button class=\"btn btn-primary\">SELECT</button>\n                                                      </div>\n                                                  </div>\n                                              </div>\n                                          </div>\n                                          <div class=\"col-sm-4 d-none d-sm-block\">\n                                              <div class=\"mx-md-4\">\n                                                  <img src=\"../../../assets/images/vector-id-back.png\" alt=\"vector\">\n                                              </div>\n                                          </div>\n                                      </div>\n                                  </div><!-- .tab-pane -->\n                                  <div class=\"tab-pane fade\" id=\"driver-licence\">\n                                      <h5 class=\"text-secondary font-bold\">To avoid delays when verifying account, Please make sure bellow:</h5>\n                                      <ul class=\"list-check\">\n                                          <li>Chosen credential must not be expaired.</li>\n                                          <li>Document should be good condition and clearly visible.</li>\n                                          <li>Make sure that there is no light glare on the card.</li>\n                                      </ul>\n                                      <div class=\"gaps-2x\"></div>\n                                      <h5 class=\"font-mid\">Upload Here Your Driving Licence Copy</h5>\n                                      <div class=\"row align-items-center\">\n                                          <div class=\"col-sm-8\">\n                                              <div class=\"upload-box\">\n                                                  <div class=\"upload-zone\">\n                                                      <div class=\"dz-message\" data-dz-message>\n                                                          <span class=\"dz-message-text\">Drag and drop file</span>\n                                                          <span class=\"dz-message-or\">or</span>\n                                                          <button class=\"btn btn-primary\">SELECT</button>\n                                                      </div>\n                                                  </div>\n                                              </div>\n                                          </div>\n                                          <div class=\"col-sm-4 d-none d-sm-block\">\n                                              <div class=\"mx-md-4\">\n                                                  <img src=\"../../../assets/images/vector-licence.png\" alt=\"vector\">\n                                              </div>\n                                          </div>\n                                      </div>\n                                  </div><!-- .tab-pane -->\n                              </div><!-- .tab-content -->\n                          </div><!-- .step-fields -->\n                      </div>\n                      <div class=\"form-step form-step3\">\n                          <div class=\"form-step-head card-innr\">\n                              <div class=\"step-head\">\n                                  <div class=\"step-number\">03</div>\n                                  <div class=\"step-head-text\">\n                                      <h4>Your Paying Wallet</h4>\n                                      <p>Submit your wallet address that you are going to send funds</p>\n                                  </div>\n                              </div>\n                          </div><!-- .step-head -->\n                          <div class=\"form-step-fields card-innr\">\n                              <div class=\"row\">\n                                  <div class=\"col-md-6\">\n                                      <div class=\"input-item input-with-label\">\n                                          <label for=\"swalllet\" class=\"input-item-label\">Select Wallet </label>\n                                          <select class=\"select-bordered select-block\" name=\"swalllet\" id=\"swalllet\">\n                                              <option value=\"eth\">Ethereum</option>\n                                              <option value=\"dac\">DashCoin</option>\n                                              <option value=\"bic\">BitCoin</option>\n                                          </select>\n                                      </div><!-- .input-item -->\n                                  </div><!-- .col -->\n                              </div><!-- .row -->\n                              <div class=\"input-item input-with-label\">\n                                  <label for=\"token-address\" class=\"input-item-label\">Your Address for tokens:</label>\n                                  <input class=\"input-bordered\" type=\"text\" id=\"token-address\" name=\"token-address\" value=\"0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae\">\n                                  <span class=\"input-note\">Note: Address should be ERC20-compliant.</span>\n                              </div><!-- .input-item -->\n                          </div><!-- .step-fields -->\n                      </div>\n                      <div class=\"form-step form-step-final\">\n                          <div class=\"form-step-fields card-innr\">\n                              <div class=\"input-item\">\n                                  <input class=\"input-checkbox input-checkbox-md\" id=\"term-condition\" type=\"checkbox\">\n                                  <label for=\"term-condition\">I have read the <a href=\"#\">Terms of Condition</a> and <a href=\"#\">Privary Policy.</a></label>\n                              </div>\n                              <div class=\"input-item\">\n                                  <input class=\"input-checkbox input-checkbox-md\" id=\"info-currect\" type=\"checkbox\">\n                                  <label for=\"info-currect\">All the personal information I have entered is correct.</label>\n                              </div>\n                              <div class=\"gaps-1x\"></div>\n                              <a href=\"kyc-thank-you.html\" class=\"btn btn-primary\">Process for Verify</a>\n                          </div><!-- .step-fields -->\n                      </div>\n                  </div><!-- .card -->\n              </div>\n          </div>\n      </div><!-- .container -->\n  </div><!-- .page-content -->"

/***/ }),

/***/ "./src/app/components/kyc/kyc-form/kyc-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/kyc/kyc-form/kyc-form.component.ts ***!
  \***************************************************************/
/*! exports provided: KycFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycFormComponent", function() { return KycFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KycFormComponent = /** @class */ (function () {
    function KycFormComponent() {
    }
    KycFormComponent.prototype.ngOnInit = function () {
    };
    KycFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kyc-form',
            template: __webpack_require__(/*! ./kyc-form.component.html */ "./src/app/components/kyc/kyc-form/kyc-form.component.html"),
            styles: [__webpack_require__(/*! ./kyc-form.component.css */ "./src/app/components/kyc/kyc-form/kyc-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KycFormComponent);
    return KycFormComponent;
}());



/***/ }),

/***/ "./src/app/components/kyc/kyc.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/kyc/kyc.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMva3ljL2t5Yy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/kyc/kyc.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/kyc/kyc.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header page-header-kyc\">\n  <div class=\"container\">\n      <div class=\"row justify-content-center\">\n          <div class=\"col-lg-8 col-xl-7 text-center\">\n              <h2 class=\"page-title\">KYC Verification</h2>\n              <p class=\"large\">To comply with regulation each participant will have to go through indentity verification (KYC/AML) to prevent fraud causes. Please, complete our fast and secure verification process to participate in our token sale.</p>\n          </div>\n      </div>\n  </div><!-- .container -->\n</div><!-- .page-header -->\n<div class=\"page-content\">\n  <div class=\"container\">\n      <div class=\"row justify-content-center\">\n          <div class=\"col-lg-10 col-xl-9\">\n              <div class=\"kyc-status card mx-lg-4\">\n                  <div class=\"card-innr\">\n                      <div class=\"status status-empty\">\n                          <div class=\"status-icon\">\n                              <em class=\"ti ti-files\"></em>\n                          </div>\n                          <span class=\"status-text text-dark\">You have not submitted your necessary documents to verify your identity. In order to purchase our tokens, please verify your identity.</span>\n                          <a [routerLink]=\"['/kyc-form']\" routerLinkActive=\"router-link-active\"  class=\"btn btn-primary\">Click here to complete your KYC</a>\n                      </div>\n                  </div>\n              </div><!-- .card -->\n              <p class=\"text-light text-center\">If you have any question, please contact our support team <a href=\"#\">info@tokenwiz.com</a>.</p>\n              <div class=\"gaps-1x\"></div>\n              <div class=\"gaps-3x d-none d-sm-block\"></div>\n          </div>\n      </div>\n  </div><!-- .container -->\n</div><!-- .page-content -->"

/***/ }),

/***/ "./src/app/components/kyc/kyc.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/kyc/kyc.component.ts ***!
  \*************************************************/
/*! exports provided: KycComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycComponent", function() { return KycComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KycComponent = /** @class */ (function () {
    function KycComponent() {
    }
    KycComponent.prototype.ngOnInit = function () {
    };
    KycComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kyc',
            template: __webpack_require__(/*! ./kyc.component.html */ "./src/app/components/kyc/kyc.component.html"),
            styles: [__webpack_require__(/*! ./kyc.component.css */ "./src/app/components/kyc/kyc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KycComponent);
    return KycComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"main-content col-lg-8\">\n              <div class=\"content-area card\">\n                  <div class=\"card-innr\">\n                      <div class=\"card-head\">\n                          <h4 class=\"card-title\">Profile Details</h4>\n                      </div>\n                      <ul class=\"nav nav-tabs nav-tabs-line\" role=\"tablist\">\n                          <li class=\"nav-item\">\n                              <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#personal-data\">Personal Data</a>\n                          </li>\n                          <li class=\"nav-item\">\n                              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#settings\">Settings</a>\n                          </li>\n                          <li class=\"nav-item\">\n                              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#password\">Password</a>\n                          </li>\n                      </ul><!-- .nav-tabs-line -->\n                      <div class=\"tab-content\" id=\"profile-details\">\n                          <div class=\"tab-pane fade show active\" id=\"personal-data\">\n                              <form action=\"#\">\n                                  <div class=\"row\">\n                                      <div class=\"col-md-6\">\n                                          <div class=\"input-item input-with-label\">\n                                              <label for=\"full-name\" class=\"input-item-label\">Full Name</label>\n                                              <input class=\"input-bordered\" type=\"text\" id=\"full-name\" name=\"full-name\" value=\"Stefan Harary\">\n                                          </div><!-- .input-item -->\n                                      </div>\n                                      <div class=\"col-md-6\">\n                                          <div class=\"input-item input-with-label\">\n                                              <label for=\"email-address\" class=\"input-item-label\">Email Address</label>\n                                              <input class=\"input-bordered\" type=\"text\" id=\"email-address\" name=\"email-address\" value=\"info@softnio.com\" disabled>\n                                          </div><!-- .input-item -->\n                                      </div>\n                                      <div class=\"col-md-6\">\n                                          <div class=\"input-item input-with-label\">\n                                              <label for=\"mobile-number\" class=\"input-item-label\">Mobile Number</label>\n                                              <input class=\"input-bordered\" type=\"text\" id=\"mobile-number\" name=\"mobile-number\">\n                                          </div><!-- .input-item -->\n                                      </div>\n                                      <div class=\"col-md-6\">\n                                          <div class=\"input-item input-with-label\">\n                                              <label for=\"date-of-birth\" class=\"input-item-label\">Date of Birth</label>\n                                              <input class=\"input-bordered date-picker-dob\" type=\"text\" id=\"date-of-birth\" name=\"date-of-birth\">\n                                          </div><!-- .input-item -->\n                                      </div><!-- .col -->\n                                      <div class=\"col-md-6\">\n                                          <div class=\"input-item input-with-label\">\n                                              <label for=\"nationality\" class=\"input-item-label\">Nationality</label>\n                                              <select class=\"select-bordered select-block\" name=\"nationality\" id=\"nationality\">\n                                                  <option value=\"us\">United State</option>\n                                                  <option value=\"uk\">United KingDom</option>\n                                                  <option value=\"fr\">France</option>\n                                                  <option value=\"ch\">China</option>\n                                                  <option value=\"cr\">Czech Republic</option>\n                                                  <option value=\"cb\">Colombia</option>\n                                              </select>\n                                          </div><!-- .input-item -->\n                                      </div><!-- .col -->\n                                  </div><!-- .row -->\n                                  <div class=\"gaps-1x\"></div><!-- 10px gap -->\n                                  <div class=\"d-sm-flex justify-content-between align-items-center\">\n                                      <button class=\"btn btn-primary\">Update Profile</button>\n                                      <div class=\"gaps-2x d-sm-none\"></div>\n                                      <span class=\"text-success\"><em class=\"ti ti-check-box\"></em> All Changes are saved</span>\n                                  </div>\n                              </form><!-- form -->\n                          </div><!-- .tab-pane -->\n                          <div class=\"tab-pane fade\" id=\"settings\">\n                              <div class=\"pdb-1-5x\">\n                                  <h5 class=\"card-title card-title-sm text-dark\">Security Settings</h5>    \n                              </div>\n                              <div class=\"input-item\">\n                                  <input type=\"checkbox\" class=\"input-switch input-switch-sm\" id=\"save-log\" checked>\n                                  <label for=\"save-log\">Save my Activities Log</label>\n                              </div>\n                              <div class=\"input-item\">\n                                  <input type=\"checkbox\" class=\"input-switch input-switch-sm\" id=\"pass-change-confirm\">\n                                  <label for=\"pass-change-confirm\">Confirm me through email before password change</label>\n                              </div>\n                              <div class=\"pdb-1-5x\">\n                                  <h5 class=\"card-title card-title-sm text-dark\">Manage Notification</h5>    \n                              </div>\n                              <div class=\"input-item\">\n                                  <input type=\"checkbox\" class=\"input-switch input-switch-sm\" id=\"latest-news\" checked>\n                                  <label for=\"latest-news\">Notify me by email about sales and latest news</label>\n                              </div>\n                              <div class=\"input-item\">\n                                  <input type=\"checkbox\" class=\"input-switch input-switch-sm\" id=\"activity-alert\" checked>\n                                  <label for=\"activity-alert\">Alert me by email for unusual activity.</label>\n                              </div>\n                              <div class=\"gaps-1x\"></div>\n                              <div class=\"d-flex justify-content-between align-items-center\">\n                                  <span></span>\n                                  <span class=\"text-success\"><em class=\"ti ti-check-box\"></em> Setting has been updated</span>\n                              </div>\n                          </div><!-- .tab-pane -->\n\n                          <div class=\"tab-pane fade\" id=\"password\">\n                              <div class=\"row\">\n                                  <div class=\"col-md-6\">\n                                      <div class=\"input-item input-with-label\">\n                                          <label for=\"old-pass\" class=\"input-item-label\">Old Password</label>\n                                          <input class=\"input-bordered\" type=\"password\" id=\"old-pass\" name=\"old-pass\">\n                                      </div><!-- .input-item -->\n                                  </div><!-- .col -->\n                              </div><!-- .row -->\n                              <div class=\"row\">\n                                  <div class=\"col-md-6\">\n                                      <div class=\"input-item input-with-label\">\n                                          <label for=\"new-pass\" class=\"input-item-label\">New Password</label>\n                                          <input class=\"input-bordered\" type=\"password\" id=\"new-pass\" name=\"new-pass\">\n                                      </div><!-- .input-item -->\n                                  </div><!-- .col -->\n                                  <div class=\"col-md-6\">\n                                      <div class=\"input-item input-with-label\">\n                                          <label for=\"confirm-pass\" class=\"input-item-label\">Confirm New Password</label>\n                                          <input class=\"input-bordered\" type=\"password\" id=\"confirm-pass\" name=\"confirm-pass\">\n                                      </div><!-- .input-item -->\n                                  </div><!-- .col -->\n                              </div><!-- .row -->\n                              <div class=\"note note-plane note-info pdb-1x\">\n                                  <em class=\"fas fa-info-circle\"></em>\n                                  <p>Password should be minmum 8 letter and include lower and uppercase letter.</p>\n                              </div>\n                              <div class=\"gaps-1x\"></div><!-- 10px gap -->\n                              <div class=\"d-sm-flex justify-content-between align-items-center\">\n                                  <button class=\"btn btn-primary\">Update</button>\n                                  <div class=\"gaps-2x d-sm-none\"></div>\n                                  <span class=\"text-success\"><em class=\"ti ti-check-box\"></em>  Changed Password</span>\n                              </div>\n                          </div><!-- .tab-pane -->\n                      </div><!-- .tab-content -->\n                  </div><!-- .card-innr -->\n              </div><!-- .card -->\n              <div class=\"content-area card\">\n                  <div class=\"card-innr\">\n                      <div class=\"card-head\">\n                          <h4 class=\"card-title\">Two-Factor Verification</h4>\n                      </div>\n                      <p>Two-factor authentication is a method for protection your web account. When it is activated you need to enter not only your password, but also a special code. You can receive this code by in mobile app. Even if third person will find your password, then can't access with that code.</p>\n                      <div class=\"d-sm-flex justify-content-between align-items-center pdt-1-5x\">\n                          <span class=\"text-light ucap d-inline-flex align-items-center\">\n                              <span class=\"mb-0\"><small>Current Status:</small></span> \n                              <span class=\"badge badge-disabled ml-2\">Disabled</span>\n                          </span>\n                          <div class=\"gaps-2x d-sm-none\"></div>\n                          <button class=\"order-sm-first btn btn-primary\">Enable 2FA</button>\n                      </div>\n                  </div><!-- .card-innr -->\n              </div><!-- .card -->\n          </div><!-- .col -->\n          <div class=\"aside sidebar-right col-lg-4\">\n              <div class=\"account-info card\">\n                  <div class=\"card-innr\">\n                      <h6 class=\"card-title card-title-sm\">Your Account Status</h6>\n                      <ul class=\"btn-grp\">\n                          <li><a href=\"#\" class=\"btn btn-auto btn-xs btn-success\">Email Verified</a></li>\n                          <li><a href=\"#\" class=\"btn btn-auto btn-xs btn-warning\">KYC Pending</a></li>\n                      </ul>\n                      <div class=\"gaps-2-5x\"></div>\n                      <h6 class=\"card-title card-title-sm\">Receiving Wallet</h6>\n                      <div class=\"d-flex justify-content-between\">\n                          <span><span>0x39deb3.....e2ac64rd</span> <em class=\"fas fa-info-circle text-exlight\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"1 ETH = 100 TWZ\"></em></span>\n                          <a href=\"#\" data-toggle=\"modal\" data-target=\"#edit-wallet\" class=\"link link-ucap\">Edit</a>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"referral-info card\">\n                  <div class=\"card-innr\">\n                      <h6 class=\"card-title card-title-sm\">Earn with Referral</h6>\n                      <p class=\" pdb-0-5x\">Invite your friends &amp; family and receive a <strong><span class=\"text-primary\">bonus - 15%</span> of the value of contribution.</strong></p>\n                      <div class=\"copy-wrap mgb-0-5x\">\n                          <span class=\"copy-feedback\"></span>\n                          <em class=\"fas fa-link\"></em>\n                          <input type=\"text\" class=\"copy-address\" value=\"https://demo.themenio.com/ico?ref=7d264f90653733592\" disabled>\n                          <button class=\"copy-trigger copy-clipboard\" data-clipboard-text=\"https://demo.themenio.com/ico?ref=7d264f90653733592\"><em class=\"ti ti-files\"></em></button>\n                      </div><!-- .copy-wrap -->\n                  </div>\n              </div>\n              <div class=\"kyc-info card\">\n                  <div class=\"card-innr\">\n                      <h6 class=\"card-title card-title-sm\">Identity Verification - KYC</h6>\n                      <p>To comply with regulation, participant will have to go through indentity verification.</p>\n                      <p class=\"lead text-light pdb-0-5x\">You have not submitted your KYC application to verify your indentity.</p>\n                      <a href=\"#\" class=\"btn btn-primary btn-block\">Click to Proceed</a>\n                      <h6 class=\"kyc-alert text-danger\">* KYC verification required for purchase token</h6>\n                  </div>\n              </div>\n          </div><!-- .col -->\n      </div><!-- .container -->\n  </div><!-- .container -->\n</div><!-- .page-content -->"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/transactions/transactions.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/transactions/transactions.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/transactions/transactions.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/transactions/transactions.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\n  <div class=\"container\">\n      <div class=\"card content-area\">\n          <div class=\"card-innr\">\n              <div class=\"card-head\">\n                  <h4 class=\"card-title\">User Transactions</h4>\n              </div>\n              <table class=\"data-table dt-init user-tnx\">\n                  <thead>\n                      <tr class=\"data-item data-head\">\n                          <th class=\"data-col dt-tnxno\">Tranx NO</th>\n                          <th class=\"data-col dt-token\">Tokens</th>\n                          <th class=\"data-col dt-amount\">Amount</th>\n                          <th class=\"data-col dt-usd-amount\">USD Amount</th>\n                          <th class=\"data-col dt-account\">From</th>\n                          <th class=\"data-col dt-type\"><div class=\"dt-type-text\">Type</div></th>\n                          <th class=\"data-col\"></th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <tr class=\"data-item\">\n                          <td class=\"data-col dt-tnxno\">\n                              <div class=\"d-flex align-items-center\">\n                                  <div class=\"data-state data-state-pending\">\n                                      <span class=\"d-none\">Pending</span>\n                                  </div>\n                                  <div class=\"fake-class\">\n                                      <span class=\"lead tnx-id\">TNX1002</span>\n                                      <span class=\"sub sub-date\">2018-08-24 10:45PM</span>\n                                  </div>\n                              </div>\n                          </td>\n                          <td class=\"data-col dt-token\">\n                              <span class=\"lead token-amount\">18,750</span>\n                              <span class=\"sub sub-symbol\">TWZ</span>\n                          </td>\n                          <td class=\"data-col dt-amount\">\n                              <span class=\"lead amount-pay\">50.00</span>\n                              <span class=\"sub sub-symbol\">ETH <em class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"1 ETH = 1250 TWZ\"></em></span>\n                          </td>\n                          <td class=\"data-col dt-usd-amount\">\n                              <span class=\"lead amount-pay\">245.52</span>\n                              <span class=\"sub sub-symbol\">USD <em class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"1 ETH = 350.54 USD\"></em></span>\n                          </td>\n                          <td class=\"data-col dt-account\">\n                              <span class=\"lead user-info\">1F1T....4XQX</span>\n                              <span class=\"sub sub-date\">08 Jul, 18 10:20PM</span>\n                          </td>\n                          <td class=\"data-col dt-type\">\n                              <span class=\"dt-type-md badge badge-outline badge-success badge-md\">Purchase</span>\n                              <span class=\"dt-type-sm badge badge-sq badge-outline badge-success badge-md\">P</span>\n                          </td>\n                          <td class=\"data-col text-right\">\n                              <div class=\"relative d-inline-block d-md-none\">\n                                  <a href=\"#\" class=\"btn btn-light-alt btn-xs btn-icon toggle-tigger\"><em class=\"ti ti-more-alt\"></em></a>\n                                  <div class=\"toggle-class dropdown-content dropdown-content-center-left pd-2x\">\n                                      <ul class=\"data-action-list\">\n                                          <li><a href=\"#\" class=\"btn btn-auto btn-primary btn-xs\"><span>Pay <span class=\"d-none d-xl-inline-block\">Now</span></span><em class=\"ti ti-wallet\"></em></a></li>\n                                          <li><a href=\"#\" class=\"btn btn-danger-alt btn-xs btn-icon\"><em class=\"ti ti-trash\"></em></a></li>\n                                      </ul>\n                                  </div>\n                              </div>\n                              <ul class=\"data-action-list d-none d-md-inline-flex\">\n                                  <li><a href=\"#\" class=\"btn btn-auto btn-primary btn-xs\"><span>Pay <span class=\"d-none d-xl-inline-block\">Now</span></span><em class=\"ti ti-wallet\"></em></a></li>\n                                  <li><a href=\"#\" class=\"btn btn-danger-alt btn-xs btn-icon\"><em class=\"ti ti-trash\"></em></a></li>\n                              </ul>\n                          </td>\n                      </tr><!-- .data-item -->\n                      <tr class=\"data-item\">\n                          <td class=\"data-col dt-tnxno\">\n                              <div class=\"d-flex align-items-center\">\n                                  <div class=\"data-state data-state-approved\">\n                                      <span class=\"d-none\">Approved</span>\n                                  </div>\n                                  <div class=\"fake-class\">\n                                      <span class=\"lead tnx-id\">TNX1002</span>\n                                      <span class=\"sub sub-date\">2018-08-24 10:45PM</span>\n                                  </div>\n                              </div>\n                          </td>\n                          <td class=\"data-col dt-token\">\n                              <span class=\"lead token-amount\">18,750</span>\n                              <span class=\"sub sub-symbol\">TWZ</span>\n                          </td>\n                          <td class=\"data-col dt-amount\">\n                              <span class=\"lead amount-pay\">50.00</span>\n                              <span class=\"sub sub-symbol\">ETH <em class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"1 ETH = 1250 TWZ\"></em></span>\n                          </td>\n                          <td class=\"data-col dt-usd-amount\">\n                              <span class=\"lead amount-pay\">245.52</span>\n                              <span class=\"sub sub-symbol\">USD <em class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"1 ETH = 350.54 USD\"></em></span>\n                          </td>\n                          <td class=\"data-col dt-account\">\n                              <span class=\"lead user-info\">1F1T....4XQX</span>\n                              <span class=\"sub sub-date\">08 Jul, 18 10:20PM</span>\n                          </td>\n                          <td class=\"data-col dt-type\">\n                              <span class=\"dt-type-md badge badge-outline badge-success badge-md\">Purchase</span>\n                              <span class=\"dt-type-sm badge badge-sq badge-outline badge-success badge-md\">P</span>\n                          </td>\n                          <td class=\"data-col text-right\">\n                              <a href=\"transaction-details.html\" class=\"btn btn-light-alt btn-xs btn-icon\"><em class=\"ti ti-eye\"></em></a>\n                          </td>\n                      </tr><!-- .data-item -->\n                      <tr class=\"data-item\">\n                          <td class=\"data-col dt-tnxno\">\n                              <div class=\"d-flex align-items-center\">\n                                  <div class=\"data-state data-state-canceled\">\n                                      <span class=\"d-none\">Canceled</span>\n                                  </div>\n                                  <div class=\"fake-class\">\n                                      <span class=\"lead tnx-id\">TNX1002</span>\n                                      <span class=\"sub sub-date\">2018-08-24 10:45PM</span>\n                                  </div>\n                              </div>\n                          </td>\n                          <td class=\"data-col dt-token\">\n                              <span class=\"lead token-amount\">18,750</span>\n                              <span class=\"sub sub-symbol\">TWZ</span>\n                          </td>\n                          <td class=\"data-col dt-amount\">\n                              <span class=\"lead amount-pay\">50.00</span>\n                              <span class=\"sub sub-symbol\">ETH <em class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"1 ETH = 1250 TWZ\"></em></span>\n                          </td>\n                          <td class=\"data-col dt-usd-amount\">\n                              <span class=\"lead amount-pay\">245.52</span>\n                              <span class=\"sub sub-symbol\">USD <em class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"1 ETH = 350.54 USD\"></em></span>\n                          </td>\n                          <td class=\"data-col dt-account\">\n                              <span class=\"lead user-info\">1F1T....4XQX</span>\n                              <span class=\"sub sub-date\">08 Jul, 18 10:20PM</span>\n                          </td>\n                          <td class=\"data-col dt-type\">\n                              <span class=\"dt-type-md badge badge-outline badge-success badge-md\">Purchase</span>\n                              <span class=\"dt-type-sm badge badge-sq badge-outline badge-success badge-md\">P</span>\n                          </td>\n                          <td class=\"data-col text-right\">\n                              <a href=\"transaction-details.html\" class=\"btn btn-light-alt btn-xs btn-icon\"><em class=\"ti ti-eye\"></em></a>\n                          </td>\n                      </tr><!-- .data-item -->\n                      <tr class=\"data-item\">\n                          <td class=\"data-col dt-tnxno\">\n                              <div class=\"d-flex align-items-center\">\n                                  <div class=\"data-state data-state-progress\">\n                                      <span class=\"d-none\">Progress</span>\n                                  </div>\n                                  <div class=\"fake-class\">\n                                      <span class=\"lead tnx-id\">TNX1002</span>\n                                      <span class=\"sub sub-date\">2018-08-24 10:45PM</span>\n                                  </div>\n                              </div>\n                          </td>\n                          <td class=\"data-col dt-token\">\n                              <span class=\"lead token-amount\">18,750</span>\n                              <span class=\"sub sub-symbol\">TWZ</span>\n                          </td>\n                          <td class=\"data-col dt-amount\">\n                              <span class=\"lead amount-pay\">50.00</span>\n                              <span class=\"sub sub-symbol\">ETH <em class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"1 ETH = 1250 TWZ\"></em></span>\n                          </td>\n                          <td class=\"data-col dt-usd-amount\">\n                              <span class=\"lead amount-pay\">245.52</span>\n                              <span class=\"sub sub-symbol\">USD <em class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"1 ETH = 350.54 USD\"></em></span>\n                          </td>\n                          <td class=\"data-col dt-account\">\n                              <span class=\"lead user-info\">1F1T....4XQX</span>\n                              <span class=\"sub sub-date\">08 Jul, 18 10:20PM</span>\n                          </td>\n                          <td class=\"data-col dt-type\">\n                              <span class=\"dt-type-md badge badge-outline badge-success badge-md\">Purchase</span>\n                              <span class=\"dt-type-sm badge badge-sq badge-outline badge-success badge-md\">P</span>\n                          </td>\n                          <td class=\"data-col text-right\">\n                              <a href=\"transaction-details.html\" class=\"btn btn-light-alt btn-xs btn-icon\"><em class=\"ti ti-eye\"></em></a>\n                          </td>\n                      </tr><!-- .data-item -->\n                      <tr class=\"data-item\">\n                          <td class=\"data-col dt-tnxno\">\n                              <div class=\"d-flex align-items-center\">\n                                  <div class=\"data-state data-state-approved\">\n                                      <span class=\"d-none\">Approved</span>\n                                  </div>\n                                  <div class=\"fake-class\">\n                                      <span class=\"lead tnx-id\">TNX1002</span>\n                                      <span class=\"sub sub-date\">2018-08-24 10:45PM</span>\n                                  </div>\n                              </div>\n                          </td>\n                          <td class=\"data-col dt-token\">\n                              <span class=\"lead token-amount\">1,050</span>\n                              <span class=\"sub sub-symbol\">TWZ</span>\n                          </td>\n                          <td class=\"data-col dt-amount\">\n                              <span class=\"lead amount-pay\">0.85</span>\n                              <span class=\"sub sub-symbol\">ETH <em class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"1 ETH = 1250 TWZ\"></em></span>\n                          </td>\n                          <td class=\"data-col dt-usd-amount\">\n                              <span class=\"lead amount-pay\">2.54</span>\n                              <span class=\"sub sub-symbol\">USD <em class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"1 ETH = 350.54 USD\"></em></span>\n                          </td>\n                          <td class=\"data-col dt-account\">\n                              <span class=\"lead user-info\">Bounty Bonus</span>\n                              <span class=\"sub sub-date\">Campaign Name</span>\n                          </td>\n                          <td class=\"data-col dt-type\">\n                              <span class=\"dt-type-md badge badge-outline badge-info badge-md\">Bonus</span>\n                              <span class=\"dt-type-sm badge badge-sq badge-outline badge-info badge-md\">B</span>\n                          </td>\n                          <td class=\"data-col text-right\">\n                              <a href=\"transaction-details.html\" class=\"btn btn-light-alt btn-xs btn-icon\"><em class=\"ti ti-eye\"></em></a>\n                          </td>\n                      </tr><!-- .data-item -->\n                      <tr class=\"data-item\">\n                          <td class=\"data-col dt-tnxno\">\n                              <div class=\"d-flex align-items-center\">\n                                  <div class=\"data-state data-state-progress\">\n                                      <span class=\"d-none\">Progress</span>\n                                  </div>\n                                  <div class=\"fake-class\">\n                                      <span class=\"lead tnx-id\">TNX1002</span>\n                                      <span class=\"sub sub-date\">2018-08-24 10:45PM</span>\n                                  </div>\n                              </div>\n                          </td>\n                          <td class=\"data-col dt-token\">\n                              <span class=\"lead token-amount\">18,750</span>\n                              <span class=\"sub sub-symbol\">TWZ</span>\n                          </td>\n                          <td class=\"data-col dt-amount\">\n                              <span class=\"lead amount-pay\">50.00</span>\n                              <span class=\"sub sub-symbol\">ETH <em class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"1 ETH = 1250 TWZ\"></em></span>\n                          </td>\n                          <td class=\"data-col dt-usd-amount\">\n                              <span class=\"lead amount-pay\">245.52</span>\n                              <span class=\"sub sub-symbol\">USD <em class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"1 ETH = 350.54 USD\"></em></span>\n                          </td>\n                          <td class=\"data-col dt-account\">\n                              <span class=\"lead user-info\">1F1T....4XQX</span>\n                              <span class=\"sub sub-date\">08 Jul, 18 10:20PM</span>\n                          </td>\n                          <td class=\"data-col dt-type\">\n                              <span class=\"dt-type-md badge badge-outline badge-success badge-md\">Purchase</span>\n                              <span class=\"dt-type-sm badge badge-sq badge-outline badge-success badge-md\">P</span>\n                          </td>\n                          <td class=\"data-col text-right\">\n                              <a href=\"transaction-details.html\" class=\"btn btn-light-alt btn-xs btn-icon\"><em class=\"ti ti-eye\"></em></a>\n                          </td>\n                      </tr><!-- .data-item -->\n                      <tr class=\"data-item\">\n                          <td class=\"data-col dt-tnxno\">\n                              <div class=\"d-flex align-items-center\">\n                                  <div class=\"data-state data-state-canceled\">\n                                      <span class=\"d-none\">Canceled</span>\n                                  </div>\n                                  <div class=\"fake-class\">\n                                      <span class=\"lead tnx-id\">TNX1002</span>\n                                      <span class=\"sub sub-date\">2018-08-24 10:45PM</span>\n                                  </div>\n                              </div>\n                          </td>\n                          <td class=\"data-col dt-token\">\n                              <span class=\"lead token-amount\">18,750</span>\n                              <span class=\"sub sub-symbol\">TWZ</span>\n                          </td>\n                          <td class=\"data-col dt-amount\">\n                              <span class=\"lead amount-pay\">50.00</span>\n                              <span class=\"sub sub-symbol\">ETH <em class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"1 ETH = 1250 TWZ\"></em></span>\n                          </td>\n                          <td class=\"data-col dt-usd-amount\">\n                              <span class=\"lead amount-pay\">245.52</span>\n                              <span class=\"sub sub-symbol\">USD <em class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"1 ETH = 350.54 USD\"></em></span>\n                          </td>\n                          <td class=\"data-col dt-account\">\n                              <span class=\"lead user-info\">1F1T....4XQX</span>\n                              <span class=\"sub sub-date\">08 Jul, 18 10:20PM</span>\n                          </td>\n                          <td class=\"data-col dt-type\">\n                              <span class=\"dt-type-md badge badge-outline badge-success badge-md\">Purchase</span>\n                              <span class=\"dt-type-sm badge badge-sq badge-outline badge-success badge-md\">P</span>\n                          </td>\n                          <td class=\"data-col text-right\">\n                              <a href=\"transaction-details.html\" class=\"btn btn-light-alt btn-xs btn-icon\"><em class=\"ti ti-eye\"></em></a>\n                          </td>\n                      </tr><!-- .data-item -->\n                      <tr class=\"data-item\">\n                          <td class=\"data-col dt-tnxno\">\n                              <div class=\"d-flex align-items-center\">\n                                  <div class=\"data-state data-state-progress\">\n                                      <span class=\"d-none\">Progress</span>\n                                  </div>\n                                  <div class=\"fake-class\">\n                                      <span class=\"lead tnx-id\">TNX1002</span>\n                                      <span class=\"sub sub-date\">2018-08-24 10:45PM</span>\n                                  </div>\n                              </div>\n                          </td>\n                          <td class=\"data-col dt-token\">\n                              <span class=\"lead token-amount\">18,750</span>\n                              <span class=\"sub sub-symbol\">TWZ</span>\n                          </td>\n                          <td class=\"data-col dt-amount\">\n                              <span class=\"lead amount-pay\">50.00</span>\n                              <span class=\"sub sub-symbol\">ETH <em class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"1 ETH = 1250 TWZ\"></em></span>\n                          </td>\n                          <td class=\"data-col dt-usd-amount\">\n                              <span class=\"lead amount-pay\">245.52</span>\n                              <span class=\"sub sub-symbol\">USD <em class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"1 ETH = 350.54 USD\"></em></span>\n                          </td>\n                          <td class=\"data-col dt-account\">\n                              <span class=\"lead user-info\">1F1T....4XQX</span>\n                              <span class=\"sub sub-date\">08 Jul, 18 10:20PM</span>\n                          </td>\n                          <td class=\"data-col dt-type\">\n                              <span class=\"dt-type-md badge badge-outline badge-success badge-md\">Purchase</span>\n                              <span class=\"dt-type-sm badge badge-sq badge-outline badge-success badge-md\">P</span>\n                          </td>\n                          <td class=\"data-col text-right\">\n                              <a href=\"transaction-details.html\" class=\"btn btn-light-alt btn-xs btn-icon\"><em class=\"ti ti-eye\"></em></a>\n                          </td>\n                      </tr><!-- .data-item -->\n                  </tbody>\n              </table>\n          </div><!-- .card-innr -->\n      </div><!-- .card -->\n  </div><!-- .container -->\n</div><!-- .page-content -->"

/***/ }),

/***/ "./src/app/components/transactions/transactions.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/transactions/transactions.component.ts ***!
  \*******************************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent() {
    }
    TransactionsComponent.prototype.ngOnInit = function () {
    };
    TransactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transactions',
            template: __webpack_require__(/*! ./transactions.component.html */ "./src/app/components/transactions/transactions.component.html"),
            styles: [__webpack_require__(/*! ./transactions.component.css */ "./src/app/components/transactions/transactions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nani/freelancing/ICO-STO-DSO/AxtrionDev/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map