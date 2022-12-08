import { TestBed } from '@angular/core/testing';

import { WalletspringService } from './walletspring.service';

describe('WalletspringService', () => {
  let service: WalletspringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletspringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
