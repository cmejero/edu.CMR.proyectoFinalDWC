import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubRoutingModule } from './club-routing.module';
import { ClubComponent } from './club.component';
import { InicioClubComponent } from './inicio-club/inicio-club.component';
import { MenuClubComponent } from './menu-club/menu-club.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    ClubComponent, 
    InicioClubComponent,
    MenuClubComponent
  ],
  imports: [
    CommonModule,
    ClubRoutingModule, 
    MaterialModule
  ],
    exports: [
      MenuClubComponent,
      
    ]
})
export class ClubModule { }
