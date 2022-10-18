import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/models/Book';
import { PageEvent } from '@angular/material/paginator';
import { BookService } from 'src/app/services/bookService/book.service';
import { CartService } from 'src/app/services/cartService/cart.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  subBooks: Subscription | undefined;

  totalBooks: number = 3;
  booksPerPage: number = 2;
  currentPage: number = 1;
  pageSizeOptions: number[] = [1, 2, 5, 10];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks(this.booksPerPage, this.currentPage);
    this.subBooks = this.bookService
      .getUpdatedBooksListener()
      .subscribe((books: Book[]) => {
        this.books = books;
      });
  }

  ngOnDestroy(): void {
    this.subBooks?.unsubscribe();
  }

  onPageChange(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.booksPerPage = pageData.pageSize;
    this.bookService.getBooks(this.booksPerPage, this.currentPage);
  }
}
