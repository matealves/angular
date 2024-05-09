import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css',
})
export class FirstComponentComponent {
  name: string = 'Mateus';
  age: string = '25';
  job: string = 'Desenvolvedor';
  hobbies: string[] = ['Futebol', 'Séries', 'Tecnologia'];
  car = { name: 'Chevrolet Onix', year: 2015 };
  loading = false;
}
