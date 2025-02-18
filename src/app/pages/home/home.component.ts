import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProyectosComponent } from '../../components/proyectos/proyectos.component';
import { HabilidadesComponent } from '../../components/habilidades/habilidades.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProyectosComponent, HabilidadesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
  @ViewChild('email') email!: ElementRef;
  isCopied = false;
  emailText = 'jhelcysandoval@gmail.com';

  copyClipboard() {
    navigator.clipboard.writeText(this.emailText).then(() => {
      this.isCopied = true;
      console.log('good');
      setTimeout(() => {
        this.isCopied = false;
      }, 2000); 
    });
  }
}
 