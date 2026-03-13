import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchimedeaList } from './archimedea-list';

describe('ArchimedeaList', () => {
  let component: ArchimedeaList;
  let fixture: ComponentFixture<ArchimedeaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchimedeaList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchimedeaList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
