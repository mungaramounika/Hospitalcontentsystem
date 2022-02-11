import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimallyinvasiveComponent } from './minimallyinvasive.component';

describe('MinimallyinvasiveComponent', () => {
  let component: MinimallyinvasiveComponent;
  let fixture: ComponentFixture<MinimallyinvasiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinimallyinvasiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimallyinvasiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
