import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-maintain-status-modal',
  templateUrl: './maintain-status-modal.component.html',
  styleUrls: ['./maintain-status-modal.component.scss'],
})
export class MaintainStatusModalComponent implements OnInit {
  @Input() model: any;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss(this.model);
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
