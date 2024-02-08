import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public collapse = false
  public menu = ''
  public navBar = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'));;

  constructor(){}

  public varMenu() {
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
