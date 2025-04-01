import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInstalacionComponent } from './menu-instalacion.component';

describe('MenuInstalacionComponent', () => {
  let component: MenuInstalacionComponent;
  let fixture: ComponentFixture<MenuInstalacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuInstalacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuInstalacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
