import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor() {}

  message: string = '';

  add(message: string) {
    this.message = message;

    setTimeout(() => {
      this.clear();
    }, 2500);
  }

  clear() {
    this.message = '';
  }
}
