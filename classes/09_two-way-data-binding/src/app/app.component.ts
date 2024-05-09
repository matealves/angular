import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userName = 'Joaquim'; // dado compartilhado para outro componente
  userData = {
    email: 'joaquim@gmail.com',
    role: 'Admin',
  }; // dado compartilhado para outro componente

  title = 'curso angular';
}
