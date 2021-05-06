import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent implements OnInit {
  @Input() listItem;
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [ListCardComponent],
  imports: [IonicModule, RouterModule, CommonModule],
  exports: [ListCardComponent],
})
export class ListCardComponentModule {}
