import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [];
  private updatedBooks = new Subject<Book[]>();
  constructor(private http: HttpClient) {}

  // GET BOOKS

  getBooks(booksPerPage: number, currentPage: number) {
    const queryParams = `?size=${booksPerPage}&page=${currentPage}`;
    this.http
      .get<{ books: any }>('http://localhost:3500/v1/api/books' + queryParams)
      .pipe(
        map((bookData) => {
          return bookData.books.map((book: any) => {
            return {
              id: book._id,
              title: book.title,
              author: book.author,
              price: book.price,
              description: book.description,
            };
          });
        })
      )
      .subscribe((transformedBooks) => {
        this.books = transformedBooks;
        this.updatedBooks.next([...this.books]);
      });
  }

  getUpdatedBooksListener() {
    return this.updatedBooks.asObservable();
  }

  // GET BOOK BY ID

  getBookById(id: string | null | undefined) {
    return this.http.get<{
      _id: string;
      title: string;
      author: string;
      price: string;
      img: string;
      description: string;
    }>(`http://localhost:3500/v1/api/book/${id}`);
  }

  // POST BOOK

  addBook(
    title: string,
    author: string,
    price: string,
    description: string,
    img: string
  ) {
    const book = {
      id: '',
      title: title,
      author: author,
      price: price,
      description: description,
      img: img,
    };

    this.http
      .post<{ message: string }>('http://localhost:3500/v1/api/book', book)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.books.push(book);
        this.updatedBooks.next([...this.books]);
      });
  }

  // DELETE BOOK

  deleteBook(bookId: string) {
    this.http
      .delete(`http://localhost:3500/v1/api/book/${bookId}`)
      .subscribe(() => {
        console.log('Deleted');
      });
  }

  // UPDATE BOOK

  updateBook(
    bookId: string | undefined | null,
    title: string,
    author: string,
    price: string,
    description: string,
    img: string
  ) {
    const book = {
      id: bookId,
      title: title,
      author: author,
      price: price,
      description: description,
      img: img,
    };

    this.http
      .put<{ message: string }>(
        `http://localhost:3500/v1/api/book/${bookId}`,
        book
      )
      .subscribe((response) => {
        console.log(response.message);
      });
  }
}
