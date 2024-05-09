import { Component } from '@angular/core';
import { ListService } from '../../services/list.service';

import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  constructor(private listService: ListService) {}

  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 5 },
    { name: 'Tom', type: 'Cat', age: 2 },
    { name: 'Frida', type: 'Dog', age: 3 },
    { name: 'Bob', type: 'Horse', age: 8 },
  ];

  animalDetails = '';

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name}, tem ${animal.age} anos de idade.`;
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }
}
