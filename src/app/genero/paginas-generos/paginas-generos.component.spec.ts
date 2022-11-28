import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginasGenerosComponent } from './paginas-generos.component';

describe('PaginasGenerosComponent', () => {
  let component: PaginasGenerosComponent;
  let fixture: ComponentFixture<PaginasGenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginasGenerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginasGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
