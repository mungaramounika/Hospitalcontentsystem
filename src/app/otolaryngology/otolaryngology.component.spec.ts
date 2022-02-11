import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtolaryngologyComponent } from './otolaryngology.component';

describe('OtolaryngologyComponent', () => {
  let component: OtolaryngologyComponent;
  let fixture: ComponentFixture<OtolaryngologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtolaryngologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtolaryngologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
