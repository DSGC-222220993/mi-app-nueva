import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html', 
  styleUrls: ['./contacto.css']
})
export class ContactoComponent {
  contacto = {
    email: '',
    message: ''
  };

  private readonly MOCK_API_URL = 'https://69dc7d8984f912a26403bee5.mockapi.io/messages';

  async enviarFormulario() {
    const validEmail = /.+@(gmail\.com|hotmail\.com|outlook\.com)/.test(this.contacto.email);
    
    if (!validEmail || this.contacto.message.length < 5) {
      alert('Por favor, revisa que el correo sea Gmail/Hotmail/Outlook y el mensaje tenga al menos 5 letras.');
      return;
    }

    const formData = {
      email: this.contacto.email,
      message: this.contacto.message,
      date: new Date().toISOString()
    };

    try {
      const response = await fetch(this.MOCK_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('¡Mensaje enviado con éxito!');
        this.contacto = { email: '', message: '' };
      } else {
        throw new Error('Error en la API');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al conectar con MockAPI.');
    }
  }
}