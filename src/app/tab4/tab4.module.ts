import { Tab4RoutingModule } from './tab4-routing.module';
import { Tab4Component} from './tab4.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


@NgModule({
  declarations: [Tab4Component],
  imports: [
    IonicModule,
    CommonModule,
    ExploreContainerComponentModule,
    Tab4RoutingModule
  ]
})
export class Tab4Module { }
