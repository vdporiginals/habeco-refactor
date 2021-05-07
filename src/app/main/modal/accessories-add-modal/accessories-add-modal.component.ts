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
  constructor(private modalController: ModalController) {}
  ngOnInit() {
    if (this.accessFormData) {
      this.accessForm
        .get('accessories')
        .setValue(this.accessFormData.accessories);
      this.accessForm.get('numb').setValue(this.accessFormData.numb);
    }
  }
  dismiss() {
    this.modalController.dismiss();
  }
  closeModal() {
    this.modalController.dismiss();
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
