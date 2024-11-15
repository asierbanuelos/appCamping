import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JarduerakPage } from './jarduerak.page';

describe('JarduerakPage', () => {
  let component: JarduerakPage;
  let fixture: ComponentFixture<JarduerakPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JarduerakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
