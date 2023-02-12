import { TestBed } from '@angular/core/testing';

import { ShopeameServicesService } from './shopeame-services.service';

describe('ShopeameServicesService', () => {
  let service: ShopeameServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopeameServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
