import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonOperativetreatementsComponent } from './non-operativetreatements.component';

describe('NonOperativetreatementsComponent', () => {
  let component: NonOperativetreatementsComponent;
  let fixture: ComponentFixture<NonOperativetreatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonOperativetreatementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonOperativetreatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
