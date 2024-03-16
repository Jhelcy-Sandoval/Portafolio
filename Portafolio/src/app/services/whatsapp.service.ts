import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  private apiUrl = 'https://api.whatsapp.com/send';

  constructor(private http : HttpClient) { }

  buildContactUrl(message: string, phoneNumber: string): string {
    return `${this.apiUrl}?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  }
}
