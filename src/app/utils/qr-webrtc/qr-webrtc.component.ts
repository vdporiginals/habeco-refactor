/* eslint-disable @typescript-eslint/naming-convention */
import {
  AfterViewInit,
  Component,
  ElementRef,
  NgModule,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import jsQR from 'jsqr';

import { Plugins, PermissionType } from '@capacitor/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { BackButtonComponentModule } from 'src/app/ui/back-button/back-button.component';
import { Subject } from 'rxjs';
const { Permissions, Camera } = Plugins;
@Component({
  selector: 'app-qr-webrtc',
  templateUrl: './qr-webrtc.component.html',
  styleUrls: ['./qr-webrtc.component.scss'],
})
export class QrWebrtcComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasElement: ElementRef;
  height = 180;
  width = 180;
  canvas;
  video = document.createElement('video');
  currentCode = new Subject();
  currentCode$ = this.currentCode.asObservable();
  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.reqPer();
    this.video.width = 180;
    this.video.height = 180;
  }

  ngAfterViewInit() {
    this.canvasElement.nativeElement.width = 180;
    this.canvasElement.nativeElement.height = 180;
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

      this.canvasElement.nativeElement.height = 180;
      this.canvasElement.nativeElement.width = 180;
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

      this.drawLine({ x: 180, y: 0 }, { x: 140, y: 0 }, '#00A050', 10);
      this.drawLine({ x: 180, y: 0 }, { x: 180, y: 40 }, '#00A050', 10);

      this.drawLine({ x: 0, y: 180 }, { x: 0, y: 140 }, '#00A050', 10);
      this.drawLine({ x: 0, y: 180 }, { x: 40, y: 180 }, '#00A050', 10);

      this.drawLine({ x: 180, y: 180 }, { x: 140, y: 180 }, '#00A050', 10);
      this.drawLine({ x: 180, y: 180 }, { x: 180, y: 140 }, '#00A050', 10);

      this.drawLine({ x: 90, y: 90 }, { x: 110, y: 90 }, '#00A050', 2);
      this.drawLine({ x: 90, y: 90 }, { x: 90, y: 110 }, '#00A050', 2);
      this.drawLine({ x: 90, y: 90 }, { x: 70, y: 90 }, '#00A050', 2);
      this.drawLine({ x: 90, y: 90 }, { x: 90, y: 70 }, '#00A050', 2);
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
      return cancelAnimationFrame(this.tick.bind(this));
    } else {
      this.currentCode.next();
    }
    requestAnimationFrame(this.tick.bind(this));
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
