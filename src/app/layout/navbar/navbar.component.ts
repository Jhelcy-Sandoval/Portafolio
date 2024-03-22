import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators  } from '@angular/forms';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // variables de la navegacion
  public collapse = false
  public menu = ''
  public navBar = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'));

  // variables del formulario de contacto
  public contacForm = new FormGroup({
    email: new FormControl('', Validators.required),
    name: new  FormControl('', Validators.required),
    chat: new FormControl('', Validators.required)
  })

  constructor (public whatsappService : WhatsappService ){}
  

  //funciones del formulario de contacto
  formFunctions() {
    // Lógica para construir el mensaje y generar la URL de contacto
    const message = `Nombre: ${this.contacForm.value.name}\nCorreo: ${this.contacForm.value.email}\nMensaje: ${this.contacForm.value.chat}`;
    const phoneNumber = '573222442856'; // Número de teléfono a quien se enviará el mensaje

    const contactUrl = this.whatsappService.buildContactUrl(message, phoneNumber);

    // Ahora `contactUrl` contiene la URL generada para el mensaje de WhatsApp
    // Puedes usar esta URL para abrir una nueva pestaña o ventana en el navegador
    window.open(contactUrl, '_blank');
  }

  // funciones del navbar
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
