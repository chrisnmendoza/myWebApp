import { Component, Directive, Input, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
    selector: 'main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.css']
    
})
export class MainNavComponent {
    @ViewChild('clickHoverMenuTrigger') clickHoverMenuTrigger!: MatMenuTrigger;

  openOnMouseOver() {
    this.clickHoverMenuTrigger.openMenu();
  }
}