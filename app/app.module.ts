import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

//前台
import { AppComponent }  from './component/app.component';
import { AppIndexComponent }  from './component/app-index.component';
import { LoginComponent }  from './component/login.component';
import { RegisterComponent }  from './component/register.component';
import { BookDetailComponent }  from './component/book-detail.component';
import { BookClassifyComponent }  from './component/book-classify.component';
import { ShoppingCartComponent } from './component/shopping-cart.component';
import { UserInfoComponent } from './component/user-info.component';

//admin
import { AdminAfficeComponent } from './admin/component/admin-affice.component';
import { AdminBooksComponent } from './admin/component/admin-books.component';
import { AdminOrderComponent } from './admin/component/admin-order.component';
import { AdminEvaluateComponent } from './admin/component/admin-evaluate.component';
import { AdminUserComponent } from './admin/component/admin-user.component';

//新增、编辑
import { UserEditComponent } from './admin/component/user-edit.component';
import { BooksEditComponent } from './admin/component/books-edit.component';
import { BooksAddComponent } from './admin/component/books-add.component';
import { EvaluateEditComponent } from './admin/component/evaluate-edit.component';
import { AfficeEditComponent } from './admin/component/affice-edit.component';
import { AfficeAddComponent } from './admin/component/affice-add.component';

//服务
// import { AdminService }  from './service/admin.service';
import { BookService }  from './service/book.service';
// import { UserService }  from './service/user.service';
// import { evaluateService }  from './service/evaluate.service';
// import { AfficeService }  from './service/affice.service';
// import { orderService }  from './service/order.service';

@NgModule({
  imports:[ 
	  	BrowserModule,
	    FormsModule,
	    HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
	    AppRoutingModule
  ],
  declarations: [ 
  		AppComponent,
      AppIndexComponent,
  		LoginComponent,
  		RegisterComponent,
      BookDetailComponent,
      BookClassifyComponent,
      ShoppingCartComponent,
      UserInfoComponent,
      
      AdminAfficeComponent,
      AdminBooksComponent,
      AdminOrderComponent,
      AdminEvaluateComponent,
      AdminUserComponent,

      UserEditComponent,
      BooksEditComponent,
      BooksAddComponent,
      AfficeAddComponent,
      AfficeEditComponent,
      EvaluateEditComponent
  	],
  providers: [ BookService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
