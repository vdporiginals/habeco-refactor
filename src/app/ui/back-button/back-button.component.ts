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

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackButtonComponent implements OnInit {
  @Input() defaultHref;
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [BackButtonComponent],
  imports: [IonicModule, RouterModule, CommonModule],
  exports: [BackButtonComponent],
})
export class BackButtonComponentModule {}
