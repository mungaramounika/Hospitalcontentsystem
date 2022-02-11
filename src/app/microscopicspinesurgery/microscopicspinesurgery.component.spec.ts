import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroscopicspinesurgeryComponent } from './microscopicspinesurgery.component';

describe('MicroscopicspinesurgeryComponent', () => {
  let component: MicroscopicspinesurgeryComponent;
  let fixture: ComponentFixture<MicroscopicspinesurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroscopicspinesurgeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroscopicspinesurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
