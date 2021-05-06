import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  NgModule,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { BackButtonComponentModule } from 'src/app/ui/back-button/back-button.component';
import { BaseFilterComponentModule } from 'src/app/ui/base-filter/base-filter.component';
import { ListSegmentComponentModule } from 'src/app/ui/list-segment/list-segment.component';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  switchMap,
} from 'rxjs/operators';

@Component({
  selector: 'app-base-list-layout',
  templateUrl: './base-list-layout.component.html',
  styleUrls: ['./base-list-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseListLayoutComponent implements OnInit {
  @Input() listItemClient = [];
  @Input() searchParams = 'name';
  @Input() listSegment;
  @Input() defaultHref;
  @Input() headerTitle;
  @Input() fromMaintain;
  @Input() fromWarehouse;
  @Input() fromList;
  @Input() currentSegment;
  @Output() filterResult = new EventEmitter();
  @Output() segmentSelect = new EventEmitter();

  @Output() public searchItemsClient: Observable<
    any | unknown
  > = this.search$().pipe(
    distinctUntilChanged(),
    debounceTime(700),
    switchMap((val) => {
      console.log(val);

      //   this.params[this.searchParams] = val;
      const searchText = this.nonAccentVietnamese(val);
      return this.listItemClient.filter((a) =>
        this.nonAccentVietnamese(a[this.searchParams])
          .toLowerCase()
          .includes(searchText)
      );
    })
  );

  // @Output() public searchItemsServer: Observable<
  //   ReadonlyArray<unknown>
  // > = this.search$().pipe(
  //   distinctUntilChanged(),
  //   debounceTime(this.debounceTime),
  //   switchMap((val) => {
  //     this.params[this.searchParams] = val;
  //     return this.http.get<ReadonlyArray<unknown>>(this.searchUrl, {
  //       params: this.params,
  //     });
  //   })
  // );

  @ContentChild('item', { static: false }) listCard!: TemplateRef<any>;
  @ContentChild('detail', { static: false }) detailCard!: TemplateRef<any>;
  @ContentChild('filter', { static: false }) baseFilter!: TemplateRef<any>;
  public textSearch: FormControl;

  constructor() {}

  ngOnInit() {}

  private search$(): Observable<string> {
    this.textSearch = new FormControl('');

    return this.textSearch.valueChanges;
  }

  private nonAccentVietnamese(str: string): string {
    str = str.toLowerCase();
    //     We can also use this instead of from line 11 to line 17
    str = str.replace(
      /\u00E0|\u00E1|\u1EA1|\u1EA3|\u00E3|\u00E2|\u1EA7|\u1EA5|\u1EAD|\u1EA9|\u1EAB|\u0103|\u1EB1|\u1EAF|\u1EB7|\u1EB3|\u1EB5/g,
      'a'
    );
    str = str.replace(
      /\u00E8|\u00E9|\u1EB9|\u1EBB|\u1EBD|\u00EA|\u1EC1|\u1EBF|\u1EC7|\u1EC3|\u1EC5/g,
      'e'
    );
    str = str.replace(/\u00EC|\u00ED|\u1ECB|\u1EC9|\u0129/g, 'i');
    str = str.replace(
      /\u00F2|\u00F3|\u1ECD|\u1ECF|\u00F5|\u00F4|\u1ED3|\u1ED1|\u1ED9|\u1ED5|\u1ED7|\u01A1|\u1EDD|\u1EDB|\u1EE3|\u1EDF|\u1EE1/g,
      'o'
    );
    str = str.replace(
      /\u00F9|\u00FA|\u1EE5|\u1EE7|\u0169|\u01B0|\u1EEB|\u1EE9|\u1EF1|\u1EED|\u1EEF/g,
      'u'
    );
    str = str.replace(/\u1EF3|\u00FD|\u1EF5|\u1EF7|\u1EF9/g, 'y');
    str = str.replace(/\u0111/g, 'd');
    // str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    // str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    // str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    // str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    // str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    // str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    // str = str.replace(/đ/g, 'd');
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư
    return str;
  }
}

@NgModule({
  declarations: [BaseListLayoutComponent],
  imports: [
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ListSegmentComponentModule,
    CommonModule,
    BackButtonComponentModule,
    BaseFilterComponentModule,
  ],
  exports: [BaseListLayoutComponent],
})
export class BaseListLayoutComponentModule {}
