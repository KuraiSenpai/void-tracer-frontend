import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvasionList } from './invasion-list';

describe('InvasionList', () => {
  let component: InvasionList;
  let fixture: ComponentFixture<InvasionList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvasionList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvasionList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
