import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetailCardComponentModule } from '../detail-card/detail-card.component';

@Component({
  selector: 'app-base-list-detail',
  templateUrl: './base-list-detail.component.html',
  styleUrls: ['./base-list-detail.component.scss'],
})
export class BaseListDetailComponent implements OnInit {
  @Input() detailCard;
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [BaseListDetailComponent],
  imports: [IonicModule, RouterModule, DetailCardComponentModule, CommonModule],
  exports: [BaseListDetailComponent],
})
export class BaseListDetailComponentModule {}
