import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoggedOnlyLayoutComponent} from './logged-only-layout.component';

describe('LoggedOnlyLayoutComponent', () => {
  let component: LoggedOnlyLayoutComponent;
  let fixture: ComponentFixture<LoggedOnlyLayoutComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [LoggedOnlyLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedOnlyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
