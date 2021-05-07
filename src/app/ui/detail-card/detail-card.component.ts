import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  OnInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListCardComponentModule } from '../list-card/list-card.component';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailCardComponent implements OnInit {
  @Input() detailItem;
  @Input() type;
  constructor() {}

  ngOnInit() {
    console.log(this.detailItem);
  }
}
@NgModule({
  declarations: [DetailCardComponent],
  imports: [IonicModule, RouterModule, ListCardComponentModule, CommonModule],
  exports: [DetailCardComponent],
})
export class DetailCardComponentModule {}
