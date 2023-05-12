import { TestBed } from '@angular/core/testing';

import { CollectionsapiService } from './collectionsapi.service';

describe('CollectionsapiService', () => {
  let service: CollectionsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
