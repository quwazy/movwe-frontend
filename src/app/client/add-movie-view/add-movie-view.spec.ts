import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieView } from './add-movie-view';

describe('AddMovieView', () => {
  let component: AddMovieView;
  let fixture: ComponentFixture<AddMovieView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMovieView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMovieView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
