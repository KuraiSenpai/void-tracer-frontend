import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FissureList } from './fissure-list';

describe('FissureList', () => {
  let component: FissureList;
  let fixture: ComponentFixture<FissureList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FissureList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FissureList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
