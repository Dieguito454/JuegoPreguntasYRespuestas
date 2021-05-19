import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 listadoEstudiantes: any[]=[
   {nombre: 'Juan', Estado:'Regular'},
   {nombre: 'Ana', Estado:'Libre'},
   {nombre: 'Miguel', Estado:'Regular'},
   {nombre: 'Mario', Estado:'Promocionado'},
   {nombre: 'Nicolas', Estado:'Libre'}
 ]

mostrar = true;

 toggle() :void{

    this.mostrar = !this.mostrar;
 }


}
