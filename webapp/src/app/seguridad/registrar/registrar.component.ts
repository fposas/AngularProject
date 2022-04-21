import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  constructor(private seguridadService: SeguridadService) {}

  ngOnInit(): void {}
  registrarUsuario(form: NgForm) {
    //console.log(form);
    this.seguridadService.registrar({
      email: form.value.email,
      password: form.value.password,
      name: form.value.name,
      surname: form.value.surname,
      username: form.value.username,
      usuarioId: '',
      token: '',
    });
  }
}
