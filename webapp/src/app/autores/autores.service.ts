import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from './../../environments/environment';
import { Autor } from './autor.model';

@Injectable({
  providedIn: 'root',
})
export class AutoresService {
  baseUrl = environment.baseUrl;
  private autoresLista: Autor[] = [];

  private autoresSubject = new Subject<Autor[]>();

  constructor(private http: HttpClient) {}

  obtenerAutores() {
    this.http
      .get<Autor[]>(this.baseUrl + 'Autor')
      .subscribe((data) => {
        this.autoresLista = data;
        this.autoresSubject.next([...this.autoresLista]);
        console.log('login respuesta', data);
      });
  }

  obtenerActualListener() {
    return this.autoresSubject.asObservable();
  }
}
