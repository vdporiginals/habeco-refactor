import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-input-code-modal',
  templateUrl: './input-code-modal.component.html',
  styleUrls: ['./input-code-modal.component.scss'],
})
export class InputCodeModalComponent implements OnInit {
  codeInput;
  constructor(private modalController: ModalController) {}

  ngOnInit(): void {}

  closeModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  checkCode() {
    this.modalController.dismiss({
      dismissed: true,
      codeInput: this.codeInput,
    });
  }
}

@NgModule({
  declarations: [InputCodeModalComponent],
  imports: [IonicModule, RouterModule, FormsModule, CommonModule],
  exports: [InputCodeModalComponent],
})
export class InputCodeModalComponentModule {}
