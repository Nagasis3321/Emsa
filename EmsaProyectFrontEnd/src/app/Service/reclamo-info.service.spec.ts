import { TestBed } from '@angular/core/testing';

import { ReclamoInfoService } from './reclamo-info.service';

describe('ReclamoInfoService', () => {
  let service: ReclamoInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamoInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
