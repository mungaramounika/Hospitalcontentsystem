import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacetalrootblockComponent } from './facetalrootblock.component';

describe('FacetalrootblockComponent', () => {
  let component: FacetalrootblockComponent;
  let fixture: ComponentFixture<FacetalrootblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacetalrootblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacetalrootblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
