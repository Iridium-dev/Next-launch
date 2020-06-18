import { TestBed } from '@angular/core/testing';

import { DataSearcherService } from './data-searcher.service';

describe('DataSearcherService', () => {
  let service: DataSearcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSearcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
