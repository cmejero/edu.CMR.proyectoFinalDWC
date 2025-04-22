import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

// Elimina RouterModule y RouterLink de aquí
const material = [
  MatListModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatIconModule,
  MatSortModule,
  MatTableModule,
  MatCardModule,
  MatDividerModule
];

@NgModule({
  imports:
    material
  ,
  exports:
    material

})
export class MaterialModule { }
