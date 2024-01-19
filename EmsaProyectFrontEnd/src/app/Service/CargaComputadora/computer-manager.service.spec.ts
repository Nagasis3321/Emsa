import { TestBed } from '@angular/core/testing';

import { ComputerManagerService } from './computer-manager.service';

describe('ComputerManagerService', () => {
  let service: ComputerManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputerManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
