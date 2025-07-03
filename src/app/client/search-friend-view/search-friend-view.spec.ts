import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFriendView } from './search-friend-view';

describe('SearchFriendView', () => {
  let component: SearchFriendView;
  let fixture: ComponentFixture<SearchFriendView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFriendView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFriendView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
