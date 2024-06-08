import { TestBed } from '@angular/core/testing';

import { DesignTokensService } from './design-tokens.service';

describe('DesignTokensService', () => {
  let service: DesignTokensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignTokensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
