import { Component } from '@angular/core';
import { ListService } from '../../services/list.service';

import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  constructor(private listService: ListService) {
    this.getAnimals();
  }

  animals: Animal[] = [];

  animalDetails = '';

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name}, tem ${animal.age} anos de idade.`;
  }

  getAnimals() {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

  removeAnimal(animal: Animal): void {
    this.animals = this.animals.filter((a) => a.name !== animal.name);
    this.listService.remove(animal.id).subscribe();
  }
}
