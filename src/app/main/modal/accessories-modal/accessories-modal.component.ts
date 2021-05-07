import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-accessories-modal',
  templateUrl: './accessories-modal.component.html',
  styleUrls: ['./accessories-modal.component.scss'],
})
export class AccessoriesModalComponent implements OnInit {
  value: any;
  data = {
    title: 'Ống van Spears A-System',
    list: [
      {
        value: 'Thân Van',
      },
      {
        value: 'Thân Van',
      },
      {
        value: 'Gioăng đỉnh',
      },
      {
        value: 'Đĩa đệm',
      },
      {
        value: 'Lò xo',
      },
      {
        value: 'Ống van',
      },
    ],
  };
  constructor(private modal: ModalController) {}

  ngOnInit() {}

  closeModal(ev?) {
    if (ev) {
      this.modal.dismiss({
        dismissed: true,
        data: ev,
      });
    } else {
      this.modal.dismiss();
    }
  }
}

@NgModule({
  declarations: [AccessoriesModalComponent],
  imports: [
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  exports: [AccessoriesModalComponent],
})
export class AccessoriesModalComponentModule {}
