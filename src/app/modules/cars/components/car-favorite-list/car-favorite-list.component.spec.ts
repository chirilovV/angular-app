import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFavoriteListComponent } from './car-favorite-list.component';

describe('CarFavoriteListComponent', () => {
  let component: CarFavoriteListComponent;
  let fixture: ComponentFixture<CarFavoriteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarFavoriteListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarFavoriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
