import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  size = 20;
  font = 'Arial';
  color = 'red';

  classes = ['green-title', 'small-title'];
  underline = 'underline-title'
}
