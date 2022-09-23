import { TestBed } from '@angular/core/testing';

import { CuidadosServiceService } from './cuidados-service.service';

describe('CuidadosServiceService', () => {
  let service: CuidadosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuidadosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
