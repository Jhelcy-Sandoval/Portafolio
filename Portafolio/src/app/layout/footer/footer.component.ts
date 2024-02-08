import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public footerBar = routes
  .map((route) => route.children ?? [])
  .flat()
  .filter((route) => route && route.path)
  .filter((route) => !route.path?.includes(':'));;
}
