"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var book_service_1 = require("../../service/book.service");
var BooksAddComponent = (function () {
    function BooksAddComponent(bookService, route, location) {
        this.bookService = bookService;
        this.route = route;
        this.location = location;
    }
    BooksAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.bookService.getBook(+params['id']); })
            .subscribe(function (book) { return _this.book = book; });
    };
    BooksAddComponent.prototype.save = function () {
        var _this = this;
        this.bookService.update(this.book)
            .then(function () { return _this.goBack(); });
    };
    BooksAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    return BooksAddComponent;
}());
BooksAddComponent = __decorate([
    core_1.Component({
        selector: 'admin-evaluate',
        templateUrl: './../template/books-add.component.html',
        styleUrls: ['./../style/books-add.component.css']
    }),
    __metadata("design:paramtypes", [book_service_1.BookService,
        router_1.ActivatedRoute,
        common_1.Location])
], BooksAddComponent);
exports.BooksAddComponent = BooksAddComponent;
//# sourceMappingURL=books-add.component.js.map