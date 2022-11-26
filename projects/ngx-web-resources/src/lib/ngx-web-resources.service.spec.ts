import { TestBed } from '@angular/core/testing';

import { NgxWebResourcesService } from './ngx-web-resources.service';

describe('NgxWebResourcesService', () => {
  let service: NgxWebResourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxWebResourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
