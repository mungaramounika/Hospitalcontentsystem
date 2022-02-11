import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransforaminalrootblockComponent } from './transforaminalrootblock.component';

describe('TransforaminalrootblockComponent', () => {
  let component: TransforaminalrootblockComponent;
  let fixture: ComponentFixture<TransforaminalrootblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransforaminalrootblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransforaminalrootblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
