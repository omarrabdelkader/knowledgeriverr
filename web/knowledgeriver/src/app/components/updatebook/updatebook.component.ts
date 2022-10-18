import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/bookService/book.service';
@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css'],
})
export class UpdatebookComponent implements OnInit {
  form!: FormGroup;
  imagePreview!: string;
  bookId: string | null | undefined;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // book id
    const routeParams = this.route.snapshot.paramMap;
    this.bookId = routeParams.get('id');
    console.log(this.bookId);
    //  Update Form
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

  onUpdateBook() {
    const { title, author, price, description, img } = this.form.value;

    if (this.form.invalid) {
      return;
    }

    this.bookService.updateBook(
      this.bookId,
      title,
      author,
      price,
      description,
      img
    );

    alert('The book has been posted sucessfully!');

    this.form.reset();
  }
}
