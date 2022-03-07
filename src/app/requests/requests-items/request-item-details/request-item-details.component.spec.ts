import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestItemDetailsComponent } from './request-item-details.component';

describe('RequestItemDetailsComponent', () => {
  let component: RequestItemDetailsComponent;
  let fixture: ComponentFixture<RequestItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
