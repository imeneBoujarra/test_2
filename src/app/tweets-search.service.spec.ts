import { TestBed } from '@angular/core/testing';

import { TweetsSearchService } from './tweets-search.service';

describe('TweetsSearchService', () => {
  let service: TweetsSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TweetsSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
