import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';

import { Book }         from '../../class/book';
import { BookService }  from '../../service/book.service';
@Component({
	selector: 'admin-books',
	templateUrl: './../template/admin-books.component.html',
	styleUrls: [ './../style/admin-books.component.css' ]
})
export class AdminBooksComponent implements OnInit {
	books:Book[];
	selectedBook: Book;

	constructor(
	    private bookService: BookService,
	    private router: Router
	) { }

	getBooks(): void {
     this.bookService
        .getBooks()
        .then(books => this.books = books);
    }
	ngOnInit(): void {
	  this.bookService.getBooks()
	    .then(books => this.books = books);
	}

	onSelect(book: Book): void {
    	this.selectedBook = book;
  	}

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.bookService.create(name)
      .then(book => {
        this.books.push(book);
        this.selectedBook = null;
      });
  }

  	delete(book: Book): void {
	  	this.bookService
	      .delete(book.id)
	      .then(() => {
	        this.books = this.books.filter(h => h !== book);
	        if (this.selectedBook === book) { this.selectedBook = null;}
	    });
   }
  	gotoDetail(): void {
    	this.router.navigate(['/bookedit',this.selectedBook.id]);
  	}
}