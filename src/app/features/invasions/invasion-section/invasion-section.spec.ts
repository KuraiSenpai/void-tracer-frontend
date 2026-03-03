import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvasionSection } from './invasion-section';

describe('InvasionSection', () => {
  let component: InvasionSection;
  let fixture: ComponentFixture<InvasionSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvasionSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvasionSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
