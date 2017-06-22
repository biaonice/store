"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./service/in-memory-data.service");
var app_routing_module_1 = require("./app-routing.module");
//前台
var app_component_1 = require("./component/app.component");
var app_index_component_1 = require("./component/app-index.component");
var login_component_1 = require("./component/login.component");
var register_component_1 = require("./component/register.component");
var book_detail_component_1 = require("./component/book-detail.component");
var book_classify_component_1 = require("./component/book-classify.component");
var shopping_cart_component_1 = require("./component/shopping-cart.component");
var user_info_component_1 = require("./component/user-info.component");
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
//服务
// import { AdminService }  from './service/admin.service';
var book_service_1 = require("./service/book.service");
// import { UserService }  from './service/user.service';
// import { evaluateService }  from './service/evaluate.service';
// import { AfficeService }  from './service/affice.service';
// import { orderService }  from './service/order.service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            app_index_component_1.AppIndexComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
            book_detail_component_1.BookDetailComponent,
            book_classify_component_1.BookClassifyComponent,
            shopping_cart_component_1.ShoppingCartComponent,
            user_info_component_1.UserInfoComponent,
            admin_affice_component_1.AdminAfficeComponent,
            admin_books_component_1.AdminBooksComponent,
            admin_order_component_1.AdminOrderComponent,
            admin_evaluate_component_1.AdminEvaluateComponent,
            admin_user_component_1.AdminUserComponent,
            user_edit_component_1.UserEditComponent,
            books_edit_component_1.BooksEditComponent,
            books_add_component_1.BooksAddComponent,
            affice_add_component_1.AfficeAddComponent,
            affice_edit_component_1.AfficeEditComponent,
            evaluate_edit_component_1.EvaluateEditComponent
        ],
        providers: [book_service_1.BookService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map