import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatSidenavModule,
    MatIconModule,
    MatButtonModule, MatMenuModule
  ],
  exports: [MatSidenavModule,
    MatIconModule,
    MatButtonModule, MatMenuModule], 
})
export class AppUiModule { }

