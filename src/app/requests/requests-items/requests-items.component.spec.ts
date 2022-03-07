import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsItemsComponent } from './requests-items.component';

describe('RequestsItemsComponent', () => {
  let component: RequestsItemsComponent;
  let fixture: ComponentFixture<RequestsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestsItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
