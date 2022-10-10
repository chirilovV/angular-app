import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ClientSideStatisticsComponent} from './client-side-statistics.component';

describe('ClientSideStatisticsComponent', () => {
  let component: ClientSideStatisticsComponent;
  let fixture: ComponentFixture<ClientSideStatisticsComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ClientSideStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSideStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
