import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioClubComponent } from './inicio-club.component';

describe('InicioClubComponent', () => {
  let component: InicioClubComponent;
  let fixture: ComponentFixture<InicioClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioClubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
