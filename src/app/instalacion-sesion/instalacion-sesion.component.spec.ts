import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionSesionComponent } from './instalacion-sesion.component';

describe('InstalacionSesionComponent', () => {
  let component: InstalacionSesionComponent;
  let fixture: ComponentFixture<InstalacionSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstalacionSesionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstalacionSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
