import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinalrootblockComponent } from './spinalrootblock.component';

describe('SpinalrootblockComponent', () => {
  let component: SpinalrootblockComponent;
  let fixture: ComponentFixture<SpinalrootblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinalrootblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinalrootblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
