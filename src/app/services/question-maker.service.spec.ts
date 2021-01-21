import { TestBed } from '@angular/core/testing';

import { QuestionMakerService } from './question-maker.service';

describe('QuestionMakerService', () => {
  let service: QuestionMakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionMakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
