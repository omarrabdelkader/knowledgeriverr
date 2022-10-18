import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from 'src/app/models/Message';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: Message[] = [];
  private updatedMessages = new Subject<Message[]>();
  constructor(private http: HttpClient) {}

  getUpdatedMessagesListener() {
    return this.updatedMessages.asObservable();
  }

  // POST MESSAGE

  addMessage(name: string, email: string, message: string) {
    const sentMessage: Message = {
      id: '',
      name: name,
      email: email,
      message: message,
    };

    this.http
      .post<{ message: string }>(
        'http://localhost:3500/v1/api/message',
        sentMessage
      )
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.messages.push(sentMessage);
        this.updatedMessages.next([...this.messages]);
      });
  }
}
