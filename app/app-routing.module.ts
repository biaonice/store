import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//前台
import { AppIndexComponent } from './component/app-index.component';
import { LoginComponent } from './component/login.component';
import { RegisterComponent } from './component/register.component';
import { BookDetailComponent } from './component/book-detail.component';
import { BookClassifyComponent } from './component/book-classify.component';
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


const routers: Routes =  [
  { path: '',redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: AppIndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'detail', component: BookDetailComponent },     //需传值 id
  { path: 'classify', component: BookClassifyComponent }, //需传值 类别
  { path: 'cart', component: ShoppingCartComponent },     
  { path: 'muser', component: AdminUserComponent },
  { path: 'mbooks', component: AdminBooksComponent },
  { path: 'mevaluate', component: AdminEvaluateComponent },
  { path: 'morder', component: AdminOrderComponent },
  { path: 'maffice', component: AdminAfficeComponent },

  { path: 'useredit', component: UserEditComponent },
  { path: 'bookedit', component: BooksEditComponent },
  { path: 'bookadd', component: BooksAddComponent },
  { path: 'evaluateedit', component: EvaluateEditComponent },
  { path: 'afficeedit', component: AfficeEditComponent },
  { path: 'afficeadd', component: AfficeAddComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routers) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}