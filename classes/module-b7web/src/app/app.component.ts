import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';

import { ReceitaItem } from './components/receita-item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  // templateUrl: './app.component.html', // Exercícios das Aulas
  styleUrls: ['./app.component.css'],
  standalone: true,
  template: `<div class="main">
    <h1>{{ title }}</h1>

    <input
      type="text"
      #campo
      (keyup.enter)="addItem(campo.value); campo.value = ''"
    />
    <button (click)="addItem(campo.value); campo.value = ''">Adicionar</button>

    <hr />

    <p>Ingredientes:</p>
    <ul>
      @for (item of lista; track $index) {
      <li>{{ item }}</li>
      }
    </ul>
  </div>`,
})
export class AppComponent {
  title = 'Hello World!';
  loading = false;
  mostrarIngredientes = false;
  mostrarText = 'Mostrar Ingredientes';
  itens = [
    new ReceitaItem(1, 'Arroz', '5kg'),
    new ReceitaItem(2, 'Feijão', '1k'),
    new ReceitaItem(3, 'Carne', '2kg'),
    new ReceitaItem(4, 'Pães', '400g'),
  ];
  text = '';

  lista: string[] = [];

  addItem(item: string) {
    if (item != '') {
      this.lista.push(item);
    }
  }

  show() {
    if (this.mostrarIngredientes) {
      this.mostrarIngredientes = false;
      this.mostrarText = 'Mostrar Ingredientes';
    } else {
      this.mostrarIngredientes = true;
      this.mostrarText = 'Ocultar Ingredientes';
    }
  }

  atualizarTexto(value: string) {
    this.text = value;
  }
}
