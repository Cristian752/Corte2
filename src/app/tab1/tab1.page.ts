import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup , Validators,FormBuilder  } from '@angular/forms';
import { ServicioService } from '../services/servicio.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
lista:string[]=["Si","No",];
usuario = this.fb.group ({
  Nombre:[" ",[Validators.required, Validators.minLength(3)]],
  Correo:[" ",[Validators.required, Validators.minLength(3)]],
  edad:[" ",[Validators.required, Validators.minLength(1)]],
  Tos: ['',Validators.required],
  FalDif: ['',Validators.required],
  Resfriado: [''],
  Escalofrio: [''],
  DolMusc: [''],
  DolCabe: [''],
  DolGar: [''],
  PerdOlfa: [''],
  PerdSab: [''],
  Ninguno: [''],
  Covid: ['',Validators.required],
  SintCovid: ['',Validators.required],
  Viajo: ['',Validators.required],

 });
  constructor(private fb: FormBuilder, private Ser: ServicioService) {}
  guardarDatos (){
    console.log(this.usuario.value)
    this.Ser.GuardarForm(this.usuario.value);

    
  }

}