import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Router }    from '@angular/router';

import { Book }         from '../../class/book';
import { BookService }  from '../../service/book.service';

@Component({
	selector: 'admin-evaluate',
	templateUrl: './../template/books-add.component.html',
	styleUrls: [ './../style/books-add.component.css' ]
})
export class BooksAddComponent implements OnInit {
	  book: Book;

	  constructor(
	    private bookService: BookService,
	    private route: ActivatedRoute,
	    private location: Location
	  ) {}

ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.bookService.getBook(+params['id']))
      .subscribe(book => this.book = book);
  }

  save(): void {
    this.bookService.update(this.book)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}