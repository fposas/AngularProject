import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Books } from './books.model';
import { PaginationBooks } from './pagination-books.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  baseUrl = environment.baseUrl;

  private booksLista: Books[] = [];

  booksSubject = new Subject();
  bookPagination: PaginationBooks;
  bookPaginationSubject = new Subject<PaginationBooks>();

  constructor(private http: HttpClient) {}

  obtenerLibros(
    libroPorPagina: number,
    paginaActual: number,
    sort: string,
    sortDirection: string,
    filterValue: any
  ) {
    const request = {
      pageSize: libroPorPagina,
      page: paginaActual,
      sort,
      sortDirection,
      filterValue,
    };
    this.http
      .post<PaginationBooks>(this.baseUrl + 'Libro/Pagination', request)
      .subscribe((response) => {
        this.bookPagination = response;
        this.bookPaginationSubject.next(this.bookPagination);
      });
  }

  obtenerActualListener() {
    return this.bookPaginationSubject.asObservable();
  }

  guardarLibro(book: Books) {
    this.http.post(this.baseUrl + 'Libro', book).subscribe((Response) => {
      this.booksSubject.next(book);
    });
  }

  guardarLibroListener(){
    return this.booksSubject.asObservable();
  }
}
