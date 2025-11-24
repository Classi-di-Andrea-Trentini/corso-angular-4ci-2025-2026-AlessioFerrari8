import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicazioneFraComponenti } from './comunicazione-fra-componenti';

describe('ComunicazioneFraComponenti', () => {
  let component: ComunicazioneFraComponenti;
  let fixture: ComponentFixture<ComunicazioneFraComponenti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComunicazioneFraComponenti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunicazioneFraComponenti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
