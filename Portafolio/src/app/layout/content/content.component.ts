import { Component } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { ProyectsComponent } from '../../pages/proyects/proyects.component';
import { AboutMeComponent } from '../../pages/about-me/about-me.component';
import { EducationComponent } from '../../pages/education/education.component';
import { ContactComponent } from '../../pages/contact/contact.component';
import { CurriculumComponent } from '../../pages/curriculum/curriculum.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    HomeComponent, 
    ProyectsComponent, 
    AboutMeComponent, 
    EducationComponent, 
    ContactComponent, 
    CurriculumComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
