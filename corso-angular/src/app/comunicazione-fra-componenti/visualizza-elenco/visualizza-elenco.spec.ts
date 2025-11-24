import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaElenco } from './visualizza-elenco';

describe('VisualizzaElenco', () => {
  let component: VisualizzaElenco;
  let fixture: ComponentFixture<VisualizzaElenco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizzaElenco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizzaElenco);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
