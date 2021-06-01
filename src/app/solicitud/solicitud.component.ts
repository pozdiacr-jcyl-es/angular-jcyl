import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  constructor() { 
    setInterval(() => {
      this.solicitud.nombre = '' + Math.random();
      }, 2000)
     
  }

  ngOnInit(): void {
  }

  solicitud = {nombre: "Cristina",
              apellido1: "",
              apellido2: ""};
  
  delete() {
      console.log('Eliminar!')
  }

  pulsar($event: MouseEvent) {
    console.log('Hola!')    
  }

  apellido1($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement
    this.solicitud.apellido1 = element.value;    
   }

  apellido2($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement
    this.solicitud.apellido2 = element.value;    
   }

}
