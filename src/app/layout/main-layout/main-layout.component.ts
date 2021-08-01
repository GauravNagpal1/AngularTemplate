import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  isSideNavBarOpen: boolean = true;
  @ViewChild('sideNavBar') sideNavBar: any;

  setSideNavBarStatus(isNavBarOpen: boolean) {
    this.isSideNavBarOpen = isNavBarOpen;

    if (this.isSideNavBarOpen) {
      this.sideNavBar.open();
    } else {
      this.sideNavBar.close();
    }
  }

}
