import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';

import { BookService }  from '../service/book.service';

@Component({
	selector: 'app-login',
	templateUrl: './../template/login.component.html',
	styleUrls: [ './../style/login.component.css' ]
})

export class LoginComponent {
	// user:User[];

	// constructor(
	//     private bookService: UserService,
	//     private router: Router
	// ) { }

  // ngOnInit(): void {
  //   this.userService.getUsers()
  //     .then(users => this.users = users);
  // }
 //  onSelect(book: Book): void {
 //    this.selectedUser = user;
 //  }
 //  gotoDetail(): void {
 //    this.router.navigate(['/', this.selectedUser.id]);
 //  }
}