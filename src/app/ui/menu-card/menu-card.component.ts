import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss'],
})
export class MenuCardComponent implements OnInit {
  @Input() menu;
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [MenuCardComponent],
  imports: [IonicModule, RouterModule, CommonModule],
  exports: [MenuCardComponent],
})
export class MenuCardComponentModule {}
