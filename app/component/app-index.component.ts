import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';

import { Book }         from '../class/book';
import { BookService }  from '../service/book.service';

@Component({
  selector: 'app-index',
  templateUrl: './../template/app-index.component.html',
  styleUrls: ['./../style/app-index.component.css']
})
export class AppIndexComponent implements OnInit {
	books:Book[];
	selectedBook: Book;

	constructor(
	    private bookService: BookService,
	    private router: Router
	) { }
  ngOnInit(): void {
    this.bookService.getBooks()
      .then(books => this.books = books.slice(1, 7));
  }
  onSelect(book: Book): void {
    this.selectedBook = book;
  }
  gotoDetail(): void {
    this.router.navigate(['/', this.selectedBook.id]);
  }
}
