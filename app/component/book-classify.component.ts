import { Component,OnInit } from '@angular/core';
import { Router }    from '@angular/router';

import { Book }         from '../class/book';
import { BookService }  from '../service/book.service';
@Component({
  selector: 'book-classify',
  templateUrl: './../template/book-classify.component.html',
  styleUrls: ['./../style/book-classify.component.css']
})
export class BookClassifyComponent implements OnInit {
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
    this.router.navigate(['/cart']);
  }
}