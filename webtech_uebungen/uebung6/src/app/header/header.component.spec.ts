import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeaderComponent } from './header.component';

describe('NeaderComponent', () => {
  let component: NeaderComponent;
  let fixture: ComponentFixture<NeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
