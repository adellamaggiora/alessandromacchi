import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor() { }

  menuOpened: boolean;

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    setTimeout(() => {
      this.menuOpened = true;  
    }, 150);
    
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    this.menuOpened = false;
  } 

}
