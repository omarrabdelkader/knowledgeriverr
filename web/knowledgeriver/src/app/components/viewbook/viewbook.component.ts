import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/bookService/book.service';
import { CartService } from 'src/app/services/cartService/cart.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css'],
})
export class ViewbookComponent implements OnInit {
  book!: Book;
  bookId: string | null | undefined;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.bookId = routeParams.get('id');
    this.bookService.getBookById(this.bookId).subscribe((bookData) => {
      this.book = {
        id: bookData._id,
        title: bookData.title,
        author: bookData.author,
        price: bookData.price,
        img: bookData.img,
        description: bookData.description,
      };
    });
  }

  onAddToCart(book: Book) {
    this.cartService.addCustomerCart(book);
    alert('This product has been added to your cart!');
  }

  onDeleteBook(bookId: string) {
    this.bookService.deleteBook(bookId);
    alert('Book has been deleted successfully!');
  }
}
