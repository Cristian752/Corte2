import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
Formulario: any[]=[]
  constructor() { }

  GuardarForm (form:string){
    this.Formulario.unshift(form);
    console.log("Servicio:", this.Formulario);
    
  }
  
}