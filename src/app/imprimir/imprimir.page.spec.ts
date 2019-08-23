import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimirPage } from './imprimir.page';

describe('ImprimirPage', () => {
  let component: ImprimirPage;
  let fixture: ComponentFixture<ImprimirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimirPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
