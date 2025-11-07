import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProyectosComponent } from '../../components/proyectos/proyectos.component';
import { HabilidadesComponent } from '../../components/habilidades/habilidades.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProyectosComponent, HabilidadesComponent], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
  @ViewChild('email') email!: ElementRef;
  isCopied = false;
  emailText = 'jhelcysandoval@gmail.com';
  showAlert = false; 

  copyClipboard() {
    navigator.clipboard.writeText(this.emailText).then(() => {
      this.isCopied = true;
      this.showAlert = true; 

      setTimeout(() => {
        this.isCopied = false;
        this.showAlert = false; 
      }, 2000);
    });
  }
}
