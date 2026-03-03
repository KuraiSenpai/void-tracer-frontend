import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldState } from './world-state';

describe('WorldState', () => {
  let component: WorldState;
  let fixture: ComponentFixture<WorldState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldState]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldState);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
