import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaClubComponent } from './alta-club.component';

describe('AltaClubComponent', () => {
  let component: AltaClubComponent;
  let fixture: ComponentFixture<AltaClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaClubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
