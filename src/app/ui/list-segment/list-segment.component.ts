import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnInit,
  Output,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-list-segment',
  templateUrl: './list-segment.component.html',
  styleUrls: ['./list-segment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListSegmentComponent implements OnInit {
  @Input() listSeg;
  @Input() currentSegment;
  @Output() segmentChange = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  segmentChanged(ev) {
    this.segmentChange.emit(ev.detail.value);
  }
}

@NgModule({
  declarations: [ListSegmentComponent],
  imports: [IonicModule, RouterModule, CommonModule],
  exports: [ListSegmentComponent],
})
export class ListSegmentComponentModule {}
