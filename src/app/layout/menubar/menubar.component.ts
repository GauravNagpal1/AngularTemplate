import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit, OnChanges {
  @Input() openSideNavBar: boolean = true;
  @ViewChild('sideNavBar') sideNavBar: any;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.openSideNavBar && this.sideNavBar) {
      if (changes.openSideNavBar.currentValue == true) {
        this.sideNavBar.open();
      } else {
        this.sideNavBar.close();
      }
    }
  }

  ngOnInit(): void {
  }

}
