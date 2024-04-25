import { Component } from '@angular/core';
import { ReceitaItem } from '../components/receita-item';

@Component({
  selector: 'app-header',
  // templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  template: `<header>
    <h2>{{ title.toUpperCase() }}</h2>
    <small>{{ subtitle }}</small>

    <ul>
      @for (item of menu; track $index) {
      <li>
        <a href="{{ item.url }}">{{ item.text }}</a>
      </li>
      }
    </ul>
  </header>`,
})
export class HeaderComponent {
  title;
  subtitle;
  menu;

  constructor() {
    this.title = 'test';
    this.subtitle = 'Meu primeiro component';
    this.menu = [
      { text: 'Home', url: './' },
      { text: 'Sobre', url: './' },
      { text: 'Contato', url: './' },
    ];
  }
}
