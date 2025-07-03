import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendView } from './friend-view';

describe('FriendView', () => {
  let component: FriendView;
  let fixture: ComponentFixture<FriendView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
