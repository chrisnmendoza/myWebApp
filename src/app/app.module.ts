import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';

// more imports
import { AppUiModule } from './app-ui.module';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent, MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, AppUiModule, MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

