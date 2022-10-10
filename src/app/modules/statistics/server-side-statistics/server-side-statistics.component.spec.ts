import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ServerSideStatisticsComponent} from './server-side-statistics.component';

describe('ServerSideStatisticsComponent', () => {
  let component: ServerSideStatisticsComponent;
  let fixture: ComponentFixture<ServerSideStatisticsComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ServerSideStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerSideStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
