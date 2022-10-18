import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { CartComponent } from './components/cart/cart.component';
import { BookComponent } from './components/create-book/book.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { UpdatebookComponent } from './components/updatebook/updatebook.component';
import { ViewbookComponent } from './components/viewbook/viewbook.component';

const routes: Routes = [
  { path: 'create', component: BookComponent },
  { path: 'contactus', component: FormComponent },
  { path: 'books', component: BookListComponent },
  { path: '', component: HomeComponent },
  { path: 'book/:id', component: ViewbookComponent },
  { path: 'cart', component: CartComponent },
  { path: 'update/:id', component: UpdatebookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
