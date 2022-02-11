import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatementsComponent } from './treatements.component';

describe('TreatementsComponent', () => {
  let component: TreatementsComponent;
  let fixture: ComponentFixture<TreatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
