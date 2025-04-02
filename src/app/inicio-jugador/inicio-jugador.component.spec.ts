import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioJugadorComponent } from './inicio-jugador.component';

describe('InicioJugadorComponent', () => {
  let component: InicioJugadorComponent;
  let fixture: ComponentFixture<InicioJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioJugadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
