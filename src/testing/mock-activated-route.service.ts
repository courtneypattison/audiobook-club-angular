import { Injectable } from '@angular/core';
import { convertToParamMap } from '@angular/router';

export const mockIdentifier = 'art_of_war';

@Injectable()
export class MockActivatedRoute {
  get snapshot() {
    return { paramMap: convertToParamMap({ identifier: mockIdentifier}) };
  }
}
