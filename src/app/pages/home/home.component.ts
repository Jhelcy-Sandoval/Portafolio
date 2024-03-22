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
  public copy = ''

  public copyClipboard (parrafo: HTMLParagraphElement) {
    const textoACopiar = parrafo.innerText
    navigator.clipboard.writeText(textoACopiar)
    .then(() => {
      console.log('Texto copiado al portapapeles: ' + textoACopiar);
    })
    .catch(err => {
      console.error('Error al copiar texto: ', err);
    });
  }
}
