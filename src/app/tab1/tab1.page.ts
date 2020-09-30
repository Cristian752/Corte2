import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  data = [
    {
      value: 'Fiebre de 38°C o más',
      selected: false
    },
    {
      value: 'Dificultad para respirar',
      selected: false
    },
    {
      value: 'Dolor de garganta',
      selected: false
    },
    {
      value: 'Perdida del olfato',
      selected: false
    },
    {
      value: 'Tos',
      selected: false
    },
    {
      value: 'Fatiga o Decaimiento',
      selected: false
    },
    {
      value: 'Perdida del gusto',
      selected: false
    }
  ];

  dataYN = [
    {
      value: 'Si',
      selected: true
    },
    {
      value: 'No',
      selected: false
    }
  ];

  constructor() {}

  public datosSelect: Array<any>; 
  public datosRadio: Array<any>; 

  ngOnInit(){

  }

  onClick(check){
    //console.log(check);
    
    this.datosSelect =  check ;
  }

  onClick2(rad){
    //console.log(rad);
    this.datosRadio = rad;
  }

  datos(){
    console.log(this.datosRadio);
    console.log(this.datosSelect);
  }
}
