import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterialdashboardComponent } from './meterialdashboard.component';

describe('MeterialdashboardComponent', () => {
  let component: MeterialdashboardComponent;
  let fixture: ComponentFixture<MeterialdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterialdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterialdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
