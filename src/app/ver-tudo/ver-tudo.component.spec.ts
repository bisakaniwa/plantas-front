import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTudoComponent } from './ver-tudo.component';

describe('VerTudoComponent', () => {
  let component: VerTudoComponent;
  let fixture: ComponentFixture<VerTudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTudoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerTudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
