import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FissureSection } from './fissure-section';

describe('FissureSectionComponent', () => {
  let component: FissureSection;
  let fixture: ComponentFixture<FissureSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FissureSection],
    }).compileComponents();

    fixture = TestBed.createComponent(FissureSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
