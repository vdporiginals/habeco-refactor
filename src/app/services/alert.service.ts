import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlertOptions } from '@ionic/core';
@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(public alertController: AlertController) {}

  async presentAlert(config: AlertOptions) {
    const alert = await this.alertController.create(config);
    await alert.present();
  }

  closeAlert() {
    this.alertController.dismiss();
  }

  async presentSuccessAlert(header, message) {
    const alert = await this.alertController.create({
      cssClass: 'alert-qr',
      header,
      // subHeader: 'Cám ơn bạn đã ủng hộ sản phẩm của chúng tôi !',
      message: `<h6>${message}<h6> `,
      mode: 'ios',
      buttons: ['Xác nhận'],
    });

    await alert.present().then(() => {
      setTimeout(() => {
        alert.dismiss();
      }, 5000);
    });
    return alert;
  }
}
