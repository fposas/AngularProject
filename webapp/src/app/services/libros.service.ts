import { Subject } from 'rxjs';

export class LibrosService {
  librosSubject = new Subject();
  private libros = [
    'Libro de Faustino 1',
    'Libro de aritmetica',
    'El Grafico Revistas',
  ];

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
    this.librosSubject.next(0);
  }
  eliminarLibro(libroNombre: String) {
    this.libros = this.libros.filter(x => x !== libroNombre);
    this.librosSubject.next(0);
  }
  obtenerLibros() {
    return [...this.libros];
  }
}
