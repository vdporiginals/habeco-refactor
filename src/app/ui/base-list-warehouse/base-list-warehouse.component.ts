import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListCardComponentModule } from '../list-card/list-card.component';

@Component({
  selector: 'app-base-list-warehouse',
  templateUrl: './base-list-warehouse.component.html',
  styleUrls: ['./base-list-warehouse.component.scss'],
})
export class BaseListWarehouseComponent implements OnInit {
  @Input() listCard;
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [BaseListWarehouseComponent],
  imports: [IonicModule, RouterModule, ListCardComponentModule, CommonModule],
  exports: [BaseListWarehouseComponent],
})
export class BaseListWarehouseComponentModule {}
