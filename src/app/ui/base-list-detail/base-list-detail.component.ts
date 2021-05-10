import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import {
  AccessoriesAddModalComponent,
  AccessoriesAddModalComponentModule,
} from 'src/app/main/modal/accessories-add-modal/accessories-add-modal.component';
import { DetailModalComponent } from 'src/app/main/modal/detail-modal/detail-modal.component';
import { DetailCardComponentModule } from '../detail-card/detail-card.component';

@Component({
  selector: 'app-base-list-detail',
  templateUrl: './base-list-detail.component.html',
  styleUrls: ['./base-list-detail.component.scss'],
})
export class BaseListDetailComponent implements OnInit {
  @Input() detailCard;
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async openAddAccessories() {
    const modal = await this.modalController.create({
      component: AccessoriesAddModalComponent,
      cssClass: 'modal-create-class',
    });
    modal.onDidDismiss().then((a) => {
      if (a.data === 'go') {
        this.openDetailModal(a, 'from-maintain', 1);
      }
    });
    await modal.present();
  }

  async openDetailModal(data, from?, type = 2) {
    // if (type === 2) {
    //   data.type = 2;
    // }
    const modal = await this.modalController.create({
      component: DetailModalComponent,
      componentProps: {
        data: {
          headerVal: '215151561',
          headerLabel: 'Serial',
          contentLabel: 'Thời gian xuất kho',
          contentDate: '2020-03-11',
          modalData: '/detail/1',
          type,
        },
        from,
      },
    });

    await modal.present();
  }
}

@NgModule({
  declarations: [BaseListDetailComponent],
  imports: [
    IonicModule,
    RouterModule,
    AccessoriesAddModalComponentModule,
    DetailCardComponentModule,
    CommonModule,
  ],
  exports: [BaseListDetailComponent],
})
export class BaseListDetailComponentModule {}
