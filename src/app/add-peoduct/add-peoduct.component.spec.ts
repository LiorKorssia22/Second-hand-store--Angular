import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPeoductComponent } from './add-peoduct.component';

describe('AddPeoductComponent', () => {
  let component: AddPeoductComponent;
  let fixture: ComponentFixture<AddPeoductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPeoductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPeoductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
