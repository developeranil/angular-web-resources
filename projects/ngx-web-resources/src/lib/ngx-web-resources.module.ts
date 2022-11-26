import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay'

import { NgxWebResourcesComponent } from './ngx-web-resources/ngx-web-resources.component';
import { CalendarNavComponent } from './calendar-nav/calendar-nav.component';


@NgModule({
  declarations: [
    NgxWebResourcesComponent,
    CalendarNavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule
  ],
  exports: [
    NgxWebResourcesComponent
  ]
})
export class NgxWebResourcesModule { }
