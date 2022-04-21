import { Component, Input, EventEmitter, Output } from '@angular/core';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: 'libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent {
  @Input() tituloLibro: string;
  @Output() libroCliked = new EventEmitter();

  constructor(private librosServices: LibrosService) {}

  onClicked() {
    //this.libroCliked.emit();
    this.librosServices.eliminarLibro(this.tituloLibro);
  }
}
