import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IgerilekuaPage } from './igerilekua.page';

describe('IgerilekuaPage', () => {
  let component: IgerilekuaPage;
  let fixture: ComponentFixture<IgerilekuaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IgerilekuaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
