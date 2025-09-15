import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCounterExample } from './homepage-counter-example';

describe('HomepageCounterExample', () => {
  let component: HomepageCounterExample;
  let fixture: ComponentFixture<HomepageCounterExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageCounterExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageCounterExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
