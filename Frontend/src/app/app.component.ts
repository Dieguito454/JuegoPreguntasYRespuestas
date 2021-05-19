import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 listadoEstudiantes: any[]=[
   {nombre: 'Juan', Estado:'Regular'},
   {nombre: 'Miguel', Estado:'Regular'},
   {nombre: 'Mario', Estado:'Promocionado'}
 ]




}
