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
import { DetailModalComponent } from 'src/app/main/modal/detail-modal/detail-modal.component';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListCardComponent implements OnInit {
  @Input() listItem;
  @Input() from;
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async openDetailModal(data) {
    console.log(data);

    const modal = await this.modalController.create({
      component: DetailModalComponent,
      componentProps: {
        data,
        from: this.from,
      },
    });

    await modal.present();
  }
}

@NgModule({
  declarations: [ListCardComponent],
  imports: [IonicModule, RouterModule, CommonModule],
  exports: [ListCardComponent],
})
export class ListCardComponentModule {}
