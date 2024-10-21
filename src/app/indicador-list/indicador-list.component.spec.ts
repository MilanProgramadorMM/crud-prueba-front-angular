import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadorListComponent } from './indicador-list.component';

describe('IndicadorListComponent', () => {
  let component: IndicadorListComponent;
  let fixture: ComponentFixture<IndicadorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicadorListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
