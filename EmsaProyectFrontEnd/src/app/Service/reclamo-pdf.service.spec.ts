import { TestBed } from '@angular/core/testing';

import { ReclamoPDFService } from './reclamo-pdf.service';

describe('ReclamoPDFService', () => {
  let service: ReclamoPDFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamoPDFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
