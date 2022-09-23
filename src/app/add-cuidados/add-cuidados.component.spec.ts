import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCuidadosComponent } from './add-cuidados.component';

describe('AddCuidadosComponent', () => {
  let component: AddCuidadosComponent;
  let fixture: ComponentFixture<AddCuidadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCuidadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCuidadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
