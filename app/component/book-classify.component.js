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
var book_service_1 = require("../service/book.service");
var BookClassifyComponent = (function () {
    function BookClassifyComponent(bookService, router) {
        this.bookService = bookService;
        this.router = router;
    }
    BookClassifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getBooks()
            .then(function (books) { return _this.books = books.slice(1, 7); });
    };
    BookClassifyComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
    };
    BookClassifyComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/cart']);
    };
    return BookClassifyComponent;
}());
BookClassifyComponent = __decorate([
    core_1.Component({
        selector: 'book-classify',
        templateUrl: './../template/book-classify.component.html',
        styleUrls: ['./../style/book-classify.component.css']
    }),
    __metadata("design:paramtypes", [book_service_1.BookService,
        router_1.Router])
], BookClassifyComponent);
exports.BookClassifyComponent = BookClassifyComponent;
//# sourceMappingURL=book-classify.component.js.map