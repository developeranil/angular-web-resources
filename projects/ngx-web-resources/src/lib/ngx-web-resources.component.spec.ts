import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWebResourcesComponent } from './ngx-web-resources.component';

describe('NgxWebResourcesComponent', () => {
  let component: NgxWebResourcesComponent;
  let fixture: ComponentFixture<NgxWebResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxWebResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxWebResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
