import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  OnInit,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackButtonComponent implements OnInit {
  @Input() defaultHref;
  @Input() isModal;
  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }

  backToHome() {
    this.router.navigate(['/home']).then(() => {
      setTimeout(() => {
        this.modalController.dismiss();
      }, 0);
      setTimeout(() => {
        this.modalController.dismiss();
      }, 500);
    });
  }
}

@NgModule({
  declarations: [BackButtonComponent],
  imports: [IonicModule, RouterModule, CommonModule],
  exports: [BackButtonComponent],
})
export class BackButtonComponentModule {}
