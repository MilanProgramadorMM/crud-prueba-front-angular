import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMedicionesComponent } from './form-mediciones.component';

describe('FormMedicionesComponent', () => {
  let component: FormMedicionesComponent;
  let fixture: ComponentFixture<FormMedicionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMedicionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMedicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
