import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Documentacao } from './documentacao';

describe('Documentacao', () => {
  let component: Documentacao;
  let fixture: ComponentFixture<Documentacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Documentacao],
    }).compileComponents();

    fixture = TestBed.createComponent(Documentacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
