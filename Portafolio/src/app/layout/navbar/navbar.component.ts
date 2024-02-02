import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  collapse = false
  menu = ''
  activeHome = false
  activeProyects = false
  activeAboutMe = false
  activeEducation = false
  activeCurriculum = false
  activeContact = false

  varMenu() {
    if (this.collapse === true) {
      this.menu = 'show';
    } else {
      this.menu = 'hide';
    }
    console.log(this.collapse, this.menu);
  }  
  
  isCollapse(){
    this.collapse = !this.collapse
    this.varMenu()
    console.log(this.collapse);
  }
}
