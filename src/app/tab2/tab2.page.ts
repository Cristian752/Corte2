import { Component } from '@angular/core';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private Ser: ServicioService) {}

}