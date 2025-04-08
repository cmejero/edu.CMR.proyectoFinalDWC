import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioInstalacionComponent } from './inicio-instalacion.component';

describe('InicioInstalacionComponent', () => {
  let component: InicioInstalacionComponent;
  let fixture: ComponentFixture<InicioInstalacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioInstalacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioInstalacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
