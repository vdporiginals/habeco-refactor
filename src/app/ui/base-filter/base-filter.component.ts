import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-base-filter',
  templateUrl: './base-filter.component.html',
  styleUrls: ['./base-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseFilterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [BaseFilterComponent],
  imports: [IonicModule, RouterModule, CommonModule],
  exports: [BaseFilterComponent],
})
export class BaseFilterComponentModule {}
