import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicionesListComponent } from './mediciones-list.component';

describe('MedicionesListComponent', () => {
  let component: MedicionesListComponent;
  let fixture: ComponentFixture<MedicionesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicionesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
