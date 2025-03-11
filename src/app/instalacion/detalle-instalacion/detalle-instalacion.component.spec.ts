import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleInstalacionComponent } from './detalle-instalacion.component';

describe('DetalleInstalacionComponent', () => {
  let component: DetalleInstalacionComponent;
  let fixture: ComponentFixture<DetalleInstalacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleInstalacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleInstalacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
