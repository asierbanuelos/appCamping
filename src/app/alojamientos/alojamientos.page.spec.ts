import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlojamientosPage } from './alojamientos.page';

describe('AlojamientosPage', () => {
  let component: AlojamientosPage;
  let fixture: ComponentFixture<AlojamientosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlojamientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
