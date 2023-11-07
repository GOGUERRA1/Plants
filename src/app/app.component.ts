import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public pages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Contacto', url: '/contacto', icon: 'mail' },
    { title: 'Nosotros', url: '/nosotros', icon: 'people' },
    { title: 'Productos', url: '/productos', icon: 'albums' },
    { title: 'Términos', url: '/terminos', icon: 'document-text' }
  ];


  constructor() {}
}
