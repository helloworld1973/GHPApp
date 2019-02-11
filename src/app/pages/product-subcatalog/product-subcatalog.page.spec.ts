import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSubcatalogPage } from './product-subcatalog.page';

describe('ProductSubcatalogPage', () => {
  let component: ProductSubcatalogPage;
  let fixture: ComponentFixture<ProductSubcatalogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSubcatalogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSubcatalogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
