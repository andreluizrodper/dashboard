import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { PanelHeaderComponent } from './panel-header/panel-header.component';
import { PanelLeftSideComponent } from './panel-left-side/panel-left-side.component';
import { PanelMainComponent } from './panel-main/panel-main.component';
import { AdminRoutingModule } from '../admin/admin-routing/admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [ 
    PanelComponent, PanelHeaderComponent, PanelLeftSideComponent, PanelMainComponent,
  ],
  exports: [
    PanelComponent
  ]
})
export class PanelModule { }
