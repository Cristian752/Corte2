import { Component, OnInit } from '@angular/core';

import { EventServiceService } from '../providers/event-service.service';

import { Agenda } from '../models/estudiantesModel.model'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  public data: Array<Agenda>; 

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
