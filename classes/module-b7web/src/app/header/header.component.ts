import { Component } from '@angular/core';
import { ReceitaItem } from '../components/receita-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
})
export class HeaderComponent {
  title;
  subtitle;
  menu;
  itens;

  constructor() {
    this.title = 'test';
    this.subtitle = 'Meu primeiro component';
    this.menu = [
      { text: 'Home', url: './' },
      { text: 'Sobre', url: './' },
      { text: 'Contato', url: './' },
    ];
    this.itens = [
      new ReceitaItem(1, 'Arroz', '5kg'),
      new ReceitaItem(2, 'Feijão', '1k'),
      new ReceitaItem(3, 'Carne', '2kg'),
    ];
  }
}
