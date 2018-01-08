import { Injectable } from '@angular/core';
import { convertToParamMap } from '@angular/router';

import { mockIdentifier } from '../testing/mock-audiobooks';

@Injectable()
export class MockActivatedRoute {
  get snapshot() {
    return { paramMap: convertToParamMap({ identifier: mockIdentifier}) };
  }
}
