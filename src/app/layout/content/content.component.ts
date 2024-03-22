import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    RouterModule, 
    CommonModule, 
    NavbarComponent,
    FooterComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export default class ContentComponent {

}
