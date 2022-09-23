import { TestBed } from '@angular/core/testing';

import { PlantinhaService } from './plantinha.service';

describe('PlantinhaService', () => {
  let service: PlantinhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantinhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
