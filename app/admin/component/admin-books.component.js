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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var book_service_1 = require("../../service/book.service");
var AdminBooksComponent = (function () {
    function AdminBooksComponent(bookService, router) {
        this.bookService = bookService;
        this.router = router;
    }
    AdminBooksComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService
            .getBooks()
            .then(function (books) { return _this.books = books; });
    };
    AdminBooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getBooks()
            .then(function (books) { return _this.books = books; });
    };
    AdminBooksComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
    };
    AdminBooksComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.bookService.create(name)
            .then(function (book) {
            _this.books.push(book);
            _this.selectedBook = null;
        });
    };
    AdminBooksComponent.prototype.delete = function (book) {
        var _this = this;
        this.bookService
            .delete(book.id)
            .then(function () {
            _this.books = _this.books.filter(function (h) { return h !== book; });
            if (_this.selectedBook === book) {
                _this.selectedBook = null;
            }
        });
    };
    AdminBooksComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/bookedit', this.selectedBook.id]);
    };
    return AdminBooksComponent;
}());
AdminBooksComponent = __decorate([
    core_1.Component({
        selector: 'admin-books',
        templateUrl: './../template/admin-books.component.html',
        styleUrls: ['./../style/admin-books.component.css']
    }),
    __metadata("design:paramtypes", [book_service_1.BookService,
        router_1.Router])
], AdminBooksComponent);
exports.AdminBooksComponent = AdminBooksComponent;
//# sourceMappingURL=admin-books.component.js.map