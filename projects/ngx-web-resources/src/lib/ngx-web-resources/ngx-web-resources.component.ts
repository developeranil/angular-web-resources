import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-ngxWebResources',
  templateUrl: 'ngx-web-resources.component.html',
  styleUrls: ['./ngx-web-resources.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class NgxWebResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
