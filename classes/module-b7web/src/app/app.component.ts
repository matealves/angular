import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';

import { ReceitaItem } from './components/receita-item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  template: `<app-header></app-header>

    <div class="main">
      <h1>{{ title }}</h1>

      <button (click)="show()">{{ mostrarText }}</button>

      @if(mostrarIngredientes){ @if (loading) {
      <p>Carregando...</p>
      } @if (!loading) {
      <div class="list">
        <ul>
          @for (item of itens; track $index) {
          <li>{{ item.getLabel() }}</li>
          }
        </ul>

        @if (itens.length > 3) {
        <p>Receita possui muitos ingredientes.</p>
        }
      </div>
      } }
    </div>

    <router-outlet></router-outlet>`,
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

  show() {
    if (this.mostrarIngredientes) {
      this.mostrarIngredientes = false;
      this.mostrarText = 'Mostrar Ingredientes';
    } else {
      this.mostrarIngredientes = true;
      this.mostrarText = 'Ocultar Ingredientes';
    }
  }
}
