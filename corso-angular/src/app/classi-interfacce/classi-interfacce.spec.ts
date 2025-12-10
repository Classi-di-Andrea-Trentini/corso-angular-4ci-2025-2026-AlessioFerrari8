import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassiInterfacce } from './classi-interfacce';

describe('ClassiInterfacce', () => {
  let component: ClassiInterfacce;
  let fixture: ComponentFixture<ClassiInterfacce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassiInterfacce]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassiInterfacce);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
