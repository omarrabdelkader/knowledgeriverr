import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/bookService/book.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  form!: FormGroup;
  imagePreview!: string;
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(undefined, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      author: new FormControl(undefined, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      price: new FormControl(undefined, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      description: new FormControl(undefined, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      img: new FormControl(undefined, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
    });
  }

  onPreviewImage() {
    this.imagePreview = this.form.value.img;
  }

  onAddBook() {
    const { title, author, price, description, img } = this.form.value;

    if (this.form.invalid) {
      return;
    }

    this.bookService.addBook(title, author, price, description, img);

    alert('The book has been posted sucessfully!');

    this.form.reset();
  }
}
