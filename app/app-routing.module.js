"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//前台
var app_index_component_1 = require("./component/app-index.component");
var login_component_1 = require("./component/login.component");
var register_component_1 = require("./component/register.component");
var book_detail_component_1 = require("./component/book-detail.component");
var book_classify_component_1 = require("./component/book-classify.component");
var shopping_cart_component_1 = require("./component/shopping-cart.component");
//admin
var admin_affice_component_1 = require("./admin/component/admin-affice.component");
var admin_books_component_1 = require("./admin/component/admin-books.component");
var admin_order_component_1 = require("./admin/component/admin-order.component");
var admin_evaluate_component_1 = require("./admin/component/admin-evaluate.component");
var admin_user_component_1 = require("./admin/component/admin-user.component");
//新增、编辑
var user_edit_component_1 = require("./admin/component/user-edit.component");
var books_edit_component_1 = require("./admin/component/books-edit.component");
var books_add_component_1 = require("./admin/component/books-add.component");
var evaluate_edit_component_1 = require("./admin/component/evaluate-edit.component");
var affice_edit_component_1 = require("./admin/component/affice-edit.component");
var affice_add_component_1 = require("./admin/component/affice-add.component");
var routers = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: app_index_component_1.AppIndexComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'detail', component: book_detail_component_1.BookDetailComponent },
    { path: 'classify', component: book_classify_component_1.BookClassifyComponent },
    { path: 'cart', component: shopping_cart_component_1.ShoppingCartComponent },
    { path: 'muser', component: admin_user_component_1.AdminUserComponent },
    { path: 'mbooks', component: admin_books_component_1.AdminBooksComponent },
    { path: 'mevaluate', component: admin_evaluate_component_1.AdminEvaluateComponent },
    { path: 'morder', component: admin_order_component_1.AdminOrderComponent },
    { path: 'maffice', component: admin_affice_component_1.AdminAfficeComponent },
    { path: 'useredit', component: user_edit_component_1.UserEditComponent },
    { path: 'bookedit', component: books_edit_component_1.BooksEditComponent },
    { path: 'bookadd', component: books_add_component_1.BooksAddComponent },
    { path: 'evaluateedit', component: evaluate_edit_component_1.EvaluateEditComponent },
    { path: 'afficeedit', component: affice_edit_component_1.AfficeEditComponent },
    { path: 'afficeadd', component: affice_add_component_1.AfficeAddComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routers)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map