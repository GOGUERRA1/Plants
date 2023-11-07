import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})

export class ContactoPage implements OnInit {

  nombre:string="";
  edad:number=0;
  bandera:boolean=true;
  apellido = "Jimenez";
  titulo: string ="";
  texto: string ="g.guerragaldames@gmail.com";

  constructor(private alertController: AlertController,private toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  revisar(){
    //this.presentAlert(this.titulo);
    this.presentToast('bottom',this.titulo);
  }

  redirigir(){
    let navigationExtras: NavigationExtras = {
      state: {
        tituloEnviado: this.titulo,
        textoEnviado: this.texto
      }
    }
    this.router.navigate(['/registrar'],navigationExtras);
  }

  async presentAlert(mensaje:string) {
    const alert = await this.alertController.create({
      header: 'Soy un Mensaje',
      message: mensaje,
      buttons: ['Confirmar'],
    });

    await alert.present();
  }


  async presentToast(position: 'top' | 'middle' | 'bottom',mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: position,
    });

    await toast.present();
  }
}
