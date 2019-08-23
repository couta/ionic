import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimir2Page } from './imprimir2.page';

describe('Imprimir2Page', () => {
  let component: Imprimir2Page;
  let fixture: ComponentFixture<Imprimir2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimir2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimir2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
