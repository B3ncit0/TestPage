import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMakerComponent } from './question-maker.component';

describe('QuestionMakerComponent', () => {
  let component: QuestionMakerComponent;
  let fixture: ComponentFixture<QuestionMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
