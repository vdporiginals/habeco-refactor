/* eslint-disable @typescript-eslint/naming-convention */
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import jsQR from 'jsqr';

import { Plugins, PermissionType } from '@capacitor/core';
const { Permissions, Camera } = Plugins;
@Component({
  selector: 'app-qr-webrtc',
  templateUrl: './qr-webrtc.component.html',
  styleUrls: ['./qr-webrtc.component.scss'],
})
export class QrWebrtcComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvasElement: ElementRef;
  height = 480;
  width = 480;
  canvas;
  video;
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.reqPer();
  }

  ngAfterViewInit() {
    this.canvas = this.canvasElement.nativeElement.getContext('2d');
    this.video = this.renderer.createElement('video');

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'environment' } })
      .then((stream) => {
        this.video.srcObject = stream;
        this.video.setAttribute('playsinline', true); // required to tell iOS safari we don't want fullscreen
        this.video.play();
        requestAnimationFrame(this.tick.bind(this));
      });
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

  drawLine(begin, end, color) {
    this.canvas.beginPath();
    this.canvas.moveTo(begin.x, begin.y);
    this.canvas.lineTo(end.x, end.y);
    this.canvas.lineWidth = 4;
    this.canvas.strokeStyle = color;
    this.canvas.stroke();
  }

  tick() {
    // loadingMessage.innerText = '⌛ Loading video...';
    if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
      // loadingMessage.hidden = true;
      this.canvasElement.nativeElement.hidden = false;
      // outputContainer.hidden = false;

      this.canvasElement.nativeElement.height = this.video.videoHeight;
      this.canvasElement.nativeElement.width = this.video.videoWidth;
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

        // outputMessage.hidden = true;
        // outputData.parentElement.hidden = false;
        // outputData.innerText = code.data;
      } else {
        // outputMessage.hidden = false;
        // outputData.parentElement.hidden = true;
      }
    }
    requestAnimationFrame(this.tick);
  }
}
