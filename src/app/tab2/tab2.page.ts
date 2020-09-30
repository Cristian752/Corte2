import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../providers/event-service.service';

import { Covidcol } from '../models/estudiantesModel.model'
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  public data: Array<Covidcol>; 

  constructor(private event: EventServiceService) { 
    this.getData();
  }

  ngOnInit() {

  }

  public getData(){
    this.event.getMock().
    subscribe(resp => {
      this.data = resp.agenda;
      //console.log(resp);
    }, error => {
      console.error(error);
    });
  }
}
