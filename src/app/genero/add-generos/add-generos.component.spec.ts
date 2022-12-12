import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGenerosComponent } from './add-generos.component';

describe('AddGenerosComponent', () => {
  let component: AddGenerosComponent;
  let fixture: ComponentFixture<AddGenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGenerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
