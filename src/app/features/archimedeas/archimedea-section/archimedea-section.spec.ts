import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchimedeaSection } from './archimedea-section';

describe('ArchimedeaSection', () => {
  let component: ArchimedeaSection;
  let fixture: ComponentFixture<ArchimedeaSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchimedeaSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchimedeaSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
