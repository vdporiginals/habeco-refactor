import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { ModalType } from 'src/app/models/modal-type.enum';
import { QrWebrtcComponent } from 'src/app/utils/qr-webrtc/qr-webrtc.component';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss'],
})
export class MenuCardComponent implements OnInit {
  @Input() menu;
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async openQRModal(type: ModalType) {
    const modal = await this.modalController.create({
      component: QrWebrtcComponent,
      componentProps: {
        type,
      },
    });
    await modal.present();
  }
}

@NgModule({
  declarations: [MenuCardComponent],
  imports: [IonicModule, RouterModule, CommonModule],
  exports: [MenuCardComponent],
})
export class MenuCardComponentModule {}
