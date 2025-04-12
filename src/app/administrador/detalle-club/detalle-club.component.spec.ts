import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleClubComponent } from './detalle-club.component';

describe('DetalleClubComponent', () => {
  let component: DetalleClubComponent;
  let fixture: ComponentFixture<DetalleClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleClubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
