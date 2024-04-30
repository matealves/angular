import { Component } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css',
})
export class ChangeNumberComponent {
  myNumber: number = 0;

  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 10);
  }
}
