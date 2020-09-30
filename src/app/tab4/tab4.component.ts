import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../providers/event-service.service';

import { Covidcol } from '../models/estudiantesModel.model'

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.component.html',
  styleUrls: ['./tab4.component.scss'],
})

export class Tab4Component implements OnInit {

  public data: Array<Covidcol>; 

  constructor(private event: EventServiceService) { 
    this.getData();
  }

  ngOnInit() {

  }

  public getData(){
    this.event.getMock().
    subscribe(resp => {
      this.data = resp.covidcol;
      //console.log(resp);
    }, error => {
      console.error(error);
    });
  }
 }
