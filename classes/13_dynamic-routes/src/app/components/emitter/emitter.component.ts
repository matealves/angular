import { Component, Output, EventEmitter } from '@angular/core';
// Para exportar um dado, importar Output
// Para exportar um evento, importar Output e EventEmitter

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css',
})
export class EmitterComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  handleClick(): void {
    this.changeNumber.emit();
  }
}
