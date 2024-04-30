import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  someText = 'TESTANDO UM PIPE OPERATOR';
  today = new Date();
}
