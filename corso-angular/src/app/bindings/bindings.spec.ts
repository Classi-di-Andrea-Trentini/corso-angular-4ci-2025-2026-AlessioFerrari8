import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bindings } from './bindings';

describe('Bindings', () => {
  let component: Bindings;
  let fixture: ComponentFixture<Bindings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bindings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bindings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
