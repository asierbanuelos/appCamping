import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AloIndividualPage } from './alo-individual.page';

describe('AloIndividualPage', () => {
  let component: AloIndividualPage;
  let fixture: ComponentFixture<AloIndividualPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AloIndividualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
