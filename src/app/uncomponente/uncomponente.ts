import { Component } from '@angular/core';
import { Libro } from '../common/types';

@Component({
  selector: 'app-uncomponente',
  imports: [],
  templateUrl: './uncomponente.html',
  styleUrls: ['./uncomponente.scss']  // ✅ plural
})
export class Uncomponente {
  title = 'angular-esencial';
  miVar = 0;
  miArr = [];

  miLibro: Libro;  // ✅ correcta declaración

  constructor() {
    this.miLibro = {
      id: 1,
      titulo: 'Libro 1',
      autor: 'Autor 1',
      descripcion: 'Descripcion 1'
    };
  }
}
