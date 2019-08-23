import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarELerQrcodePage } from './gerar-e-ler-qrcode.page';

describe('GerarELerQrcodePage', () => {
  let component: GerarELerQrcodePage;
  let fixture: ComponentFixture<GerarELerQrcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerarELerQrcodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerarELerQrcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
