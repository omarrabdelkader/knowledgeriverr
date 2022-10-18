import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/messageService/message.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(undefined, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      email: new FormControl(undefined, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      message: new FormControl(undefined, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
    });
  }

  onSubmitMessage() {
    const { name, email, message } = this.form.value;

    if (this.form.invalid) {
      return;
    }

    this.messageService.addMessage(name, email, message);

    alert('Your message has been sent successfully!');

    this.form.reset();
  }
}
