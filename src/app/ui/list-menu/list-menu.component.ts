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
import { MenuCardComponentModule } from '../menu-card/menu-card.component';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListMenuComponent implements OnInit {
  @Input() menuList;
  constructor() {}

  ngOnInit() {}
}
@NgModule({
  declarations: [ListMenuComponent],
  imports: [IonicModule, MenuCardComponentModule, RouterModule, CommonModule],
  exports: [ListMenuComponent],
})
export class ListMenuComponentModule {}
