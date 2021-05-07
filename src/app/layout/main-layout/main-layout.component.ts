import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  NgModule,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent implements OnInit {
  @Input() menuItems;
  @Input() noScroll = false;
  @ContentChild('item', { static: false }) listMenu!: TemplateRef<any>;
  @ContentChild('login', { static: false }) loginTemp!: TemplateRef<any>;
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [IonicModule, CommonModule],
  exports: [MainLayoutComponent],
})
export class MainLayoutComponentModule {}
