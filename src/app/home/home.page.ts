import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  username: string;
  password: string;

  constructor() { 
    this.username = '';
    this.password = '';
  }

  login() {
    // Aquí implementarías la lógica para validar las credenciales
    console.log('Username:', this.username, 'Password:', this.password);
  }
}