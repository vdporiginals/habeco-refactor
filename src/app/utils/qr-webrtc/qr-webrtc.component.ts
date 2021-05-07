/* eslint-disable @typescript-eslint/naming-convention */
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  NgModule,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import jsQR from 'jsqr';

import { Plugins, PermissionType } from '@capacitor/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { BackButtonComponentModule } from 'src/app/ui/back-button/back-button.component';
import { Subject } from 'rxjs';
import { ModalQRType } from 'src/app/models/modal-type.enum';
import { AccessoriesAddModalComponent } from 'src/app/main/modal/accessories-add-modal/accessories-add-modal.component';
import { DetailModalComponent } from 'src/app/main/modal/detail-modal/detail-modal.component';
import { InputCodeModalComponent } from 'src/app/main/modal/input-code-modal/input-code-modal.component';
import { AlertService } from 'src/app/services/alert.service';
const { Permissions, Camera } = Plugins;
@Component({
  selector: 'app-qr-webrtc',
  templateUrl: './qr-webrtc.component.html',
  styleUrls: ['./qr-webrtc.component.scss'],
})
export class QrWebrtcComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() type: ModalQRType;
  @ViewChild('canvas') canvasElement: ElementRef;
  height = 200;
  width = 200;
  canvas;
  video = this.document.createElement('video');
  currentCode = new Subject();
  currentCode$ = this.currentCode.asObservable();
  constructor(
    @Inject(DOCUMENT) private document,
    private alertService: AlertService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.reqPer();
    this.video.width = 200;
    this.video.height = 200;
  }

  ngAfterViewInit() {
    this.canvasElement.nativeElement.width = 200;
    this.canvasElement.nativeElement.height = 200;
    this.canvas = this.canvasElement.nativeElement.getContext('2d');
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'environment' } })
      .then((stream) => {
        this.video.srcObject = stream;

        this.video.setAttribute('playsinline', 'true'); // required to tell iOS safari we don't want fullscreen
        this.video.play();
        requestAnimationFrame(this.tick.bind(this));
      });
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.tick.bind(this));
    this.video.pause();
    this.video.srcObject = null;
    this.video = null;
  }

  async reqPer() {
    const permissionCamera = await Permissions.query({
      name: PermissionType.Camera,
    });
    const permissionMicrophone = await Permissions.query({
      name: PermissionType.Microphone,
    });

    if (
      permissionCamera.state !== 'granted' &&
      permissionMicrophone.state !== 'granted'
    ) {
      console.error(
        'Web-RTC-Cam: You might need to handle permissions on your device with Capacitor Plugins which prompt and grant these rights.'
      );
    }
  }

  drawLine(begin, end, color, lineWidth = 4) {
    this.canvas.beginPath();
    this.canvas.moveTo(begin.x, begin.y);
    this.canvas.lineTo(end.x, end.y);
    this.canvas.lineWidth = lineWidth;
    this.canvas.strokeStyle = color;
    this.canvas.stroke();
  }

  tick() {
    console.log();
    let data;
    // loadingMessage.innerText = '⌛ Loading video...';
    if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
      // loadingMessage.hidden = true;
      this.canvasElement.nativeElement.hidden = false;
      // outputContainer.hidden = false;

      this.canvasElement.nativeElement.height = this.height;
      this.canvasElement.nativeElement.width = this.width;
      this.canvas.drawImage(
        this.video,
        0,
        0,
        this.canvasElement.nativeElement.width,
        this.canvasElement.nativeElement.height
      );
      const imageData = this.canvas.getImageData(
        0,
        0,
        this.canvasElement.nativeElement.width,
        this.canvasElement.nativeElement.height
      );

      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert',
      });
      this.drawLine({ x: 0, y: 0 }, { x: 40, y: 0 }, '#00A050', 10);
      this.drawLine({ x: 0, y: 0 }, { x: 0, y: 40 }, '#00A050', 10);

      this.drawLine(
        { x: this.width, y: 0 },
        { x: this.width - 40, y: 0 },
        '#00A050',
        10
      );
      this.drawLine(
        { x: this.width, y: 0 },
        { x: this.width, y: 40 },
        '#00A050',
        10
      );

      this.drawLine(
        { x: 0, y: this.height },
        { x: 0, y: this.height - 40 },
        '#00A050',
        10
      );
      this.drawLine(
        { x: 0, y: this.height },
        { x: 40, y: this.height },
        '#00A050',
        10
      );

      this.drawLine(
        { x: this.width, y: this.height },
        { x: this.width - 40, y: this.height },
        '#00A050',
        10
      );
      this.drawLine(
        { x: this.width, y: this.height },
        { x: this.width, y: this.height - 40 },
        '#00A050',
        10
      );

      this.drawLine(
        { x: this.width / 2, y: this.height / 2 },
        { x: this.width / 2 + 20, y: this.height / 2 },
        '#00A050',
        2
      );
      this.drawLine(
        { x: this.width / 2, y: this.height / 2 },
        { x: this.width / 2, y: this.height / 2 + 20 },
        '#00A050',
        2
      );
      this.drawLine(
        { x: this.width / 2, y: this.height / 2 },
        { x: this.width / 2 - 20, y: this.height / 2 },
        '#00A050',
        2
      );
      this.drawLine(
        { x: this.width / 2, y: this.height / 2 },
        { x: this.width / 2, y: this.height / 2 - 20 },
        '#00A050',
        2
      );
      if (code) {
        this.drawLine(
          code.location.topLeftCorner,
          code.location.topRightCorner,
          '#FF3B58'
        );
        this.drawLine(
          code.location.topRightCorner,
          code.location.bottomRightCorner,
          '#FF3B58'
        );
        this.drawLine(
          code.location.bottomRightCorner,
          code.location.bottomLeftCorner,
          '#FF3B58'
        );
        this.drawLine(
          code.location.bottomLeftCorner,
          code.location.topLeftCorner,
          '#FF3B58'
        );
        console.log(code.data);
        if (code.data) {
          console.log(code.data);
          data = code.data;
        }
        // outputMessage.hidden = true;
        // outputData.parentElement.hidden = false;
        // outputData.innerText = code.data;
      } else {
        // outputMessage.hidden = false;
        // outputData.parentElement.hidden = true;
      }
    }
    if (data) {
      this.currentCode.next(data);
      if (this.type === ModalQRType.maintainAddAccess) {
        this.openAddAccessModal(data);
      }

      if (this.type === ModalQRType.searchMaintain) {
        this.openDetailModal(data, 'from-maintain', 1);
      }

      if (this.type === ModalQRType.searchWareHouse) {
        this.openDetailModal(data, 'from-warehouse');
      }

      if (this.type === ModalQRType.exportMaintain) {
        setTimeout(() => {
          this.alertService.presentSuccessAlert(
            'Thông báo',
            `${data} được xuất bảo dưỡng thành công!`
          );
        }, 3000);
      }

      if (this.type === ModalQRType.exportWarehouse) {
        setTimeout(() => {
          this.alertService.presentSuccessAlert(
            'Thông báo',
            `${data} được xuất kho thành công!`
          );
        }, 3000);
      }

      if (this.type === ModalQRType.addWarehouse) {
        setTimeout(() => {
          this.alertService.presentSuccessAlert(
            'Thông báo',
            `${data} được nhập kho thành công!`
          );
        }, 3000);
      }

      if (this.type === ModalQRType.exportWarehouse) {
        setTimeout(() => {
          this.alertService.presentSuccessAlert(
            'Thông báo',
            `${data} được xuất thành công!`
          );
        }, 3000);
      }
      return cancelAnimationFrame(this.tick.bind(this));
    } else {
      this.currentCode.next();
    }
    requestAnimationFrame(this.tick.bind(this));
  }

  async openDetailModal(data, from?, type = 2) {
    if (type === 2) {
      data.type = 2;
    }
    const modal = await this.modalController.create({
      component: DetailModalComponent,
      componentProps: {
        data: {
          headerVal: '215151561',
          headerLabel: 'Serial',
          contentLabel: 'Thời gian xuất kho',
          contentDate: '2020-03-11',
          modalData: '/detail/1',
          type: data.type,
        },
        from,
      },
    });

    await modal.present();
  }

  async openInputCodeModal() {
    const modal = await this.modalController.create({
      component: InputCodeModalComponent,
      cssClass: 'input-code-modal',
      backdropDismiss: true,
    });
    modal.onDidDismiss().then((res) => {
      console.log(res.data);
    });
    return await modal.present();
  }

  async openAddAccessModal(data) {
    const modal = await this.modalController.create({
      component: AccessoriesAddModalComponent,
      cssClass: 'modal-create-class',
      componentProps: {
        accessFormData: {
          accessories: data,
          numb: 1,
        },
      },
    });
    await modal.present();
  }

  closeModal() {
    this.modalController.dismiss();
  }
}

@NgModule({
  declarations: [QrWebrtcComponent],
  imports: [IonicModule, RouterModule, CommonModule],
  exports: [QrWebrtcComponent],
})
export class QrWebrtcComponentModule {}
