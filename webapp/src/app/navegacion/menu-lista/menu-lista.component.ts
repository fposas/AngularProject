import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AutoresService } from 'src/app/autores/autores.service';
import { BooksService } from 'src/app/books/books.service';
import { SeguridadService } from '../../seguridad/seguridad.service';

@Component({
  selector: 'app-menu-lista',
  templateUrl: './menu-lista.component.html',
  styleUrls: ['./menu-lista.component.css'],
})
export class MenuListaComponent implements OnInit {
  @Output() menuToggle = new EventEmitter<void>();
  estadoUsuario: boolean;
  usuarioSusucripcion: Subscription;

  constructor(private seguridadServicio: SeguridadService, private autoresService: AutoresService, private bookService: BooksService) {}

  ngOnInit(): void {
    this.usuarioSusucripcion = this.seguridadServicio.seguridadCambio.subscribe(
      (status) => {
        this.estadoUsuario = status;
      }
    );
  }
  onCerrarMenu() {
    this.menuToggle.emit();
  }
  ngOnDestroy() {
    this.usuarioSusucripcion.unsubscribe();
  }
  terminarSesionMenu() {
    this.onCerrarMenu();
    this.seguridadServicio.salirSesion();
  }
}
