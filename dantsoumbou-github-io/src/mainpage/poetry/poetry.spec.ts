import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poetry } from './poetry';

describe('Poetry', () => {
  let component: Poetry;
  let fixture: ComponentFixture<Poetry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Poetry],
    }).compileComponents();

    fixture = TestBed.createComponent(Poetry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
