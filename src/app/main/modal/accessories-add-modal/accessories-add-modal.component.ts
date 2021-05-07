import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { AccessoriesModalComponent } from '../accessories-modal/accessories-modal.component';

@Component({
  selector: 'app-accessories-add-modal',
  templateUrl: './accessories-add-modal.component.html',
  styleUrls: ['./accessories-add-modal.component.scss'],
})
export class AccessoriesAddModalComponent implements OnInit {
  @Input() accessFormData;
  accessForm = new FormGroup({
    accessories: new FormControl(''),
    numb: new FormControl(''),
  });
  binding;
  constructor(private modalController: ModalController) {}
  ngOnInit() {
    if (this.accessFormData) {
      this.accessForm
        .get('accessories')
        .setValue(this.accessFormData.accessories);
      this.binding = this.accessFormData.accessories;
      this.accessForm.get('numb').setValue(this.accessFormData.numb);
    }
  }
  dismiss() {
    this.modalController.dismiss();
  }
  closeModal() {
    this.modalController.dismiss();
  }

  async openAccessoriesModal() {
    const modal = await this.modalController.create({
      component: AccessoriesModalComponent,
      cssClass: 'modal-create-class',
    });
    modal.onDidDismiss().then((res) => {
      this.binding = res.data.data;

      this.accessForm.get('accessories').setValue(this.binding);
    });
    return await modal.present();
  }
}

@NgModule({
  declarations: [AccessoriesAddModalComponent],
  imports: [
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  exports: [AccessoriesAddModalComponent],
})
export class AccessoriesAddModalComponentModule {}
