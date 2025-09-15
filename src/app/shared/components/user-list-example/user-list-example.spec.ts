import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListExample } from './user-list-example';

describe('UserListExample', () => {
  let component: UserListExample;
  let fixture: ComponentFixture<UserListExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
