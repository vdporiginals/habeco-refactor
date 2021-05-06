import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  OnInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { ModalQRType } from 'src/app/models/modal-type.enum';
import { QrWebrtcComponent } from 'src/app/utils/qr-webrtc/qr-webrtc.component';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuCardComponent implements OnInit {
  @Input() menu;
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async openQRModal(type: ModalQRType) {
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
