import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransforaminalinjectionsComponent } from './transforaminalinjections.component';

describe('TransforaminalinjectionsComponent', () => {
  let component: TransforaminalinjectionsComponent;
  let fixture: ComponentFixture<TransforaminalinjectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransforaminalinjectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransforaminalinjectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
