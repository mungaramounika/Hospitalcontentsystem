import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinalinjectionsComponent } from './spinalinjections.component';

describe('SpinalinjectionsComponent', () => {
  let component: SpinalinjectionsComponent;
  let fixture: ComponentFixture<SpinalinjectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinalinjectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinalinjectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
