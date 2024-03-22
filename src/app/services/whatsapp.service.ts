import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  private apiUrl = 'https://api.whatsapp.com/send';

  constructor() { }

  buildContactUrl(message: string, phoneNumber: string): string {
    return `${this.apiUrl}?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  }
}
