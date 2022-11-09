import { TestBed } from '@angular/core/testing';

import { CssHandlerService } from './css-handler.service';

describe('CssHandlerService', () => {
  let service: CssHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CssHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
