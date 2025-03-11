import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubSesionComponent } from './club-sesion.component';

describe('ClubSesionComponent', () => {
  let component: ClubSesionComponent;
  let fixture: ComponentFixture<ClubSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubSesionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
