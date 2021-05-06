import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  listSegment = [
    {
      name: 'Bảo dưỡng',
      value: 1,
    },
    {
      name: 'Xuất kho',
      value: 2,
    },
    {
      name: 'Nhập kho',
      value: 3,
    },
  ];
  listCard = [];
  currentSegment = 1;
  apiCard = [
    {
      headerVal: '215151561',
      headerLabel: 'Serial',
      contentLabel: 'Thời gian xuất kho',
      contentDate: '2020-03-11',
      modalData: '/detail/1',
    },
    {
      headerVal: '215151561',
      headerLabel: 'Serial',
      contentLabel: 'Thời gian xuất kho',
      contentDate: '2020-03-11',
      modalData: '/detail/1',
    },
    {
      headerVal: '215151561',
      headerLabel: 'Serial',
      contentLabel: 'Thời gian xuất kho',
      contentDate: '2020-03-11',
      modalData: '/detail/1',
    },
    {
      headerVal: '215151561',
      headerLabel: 'Serial',
      contentLabel: 'Thời gian xuất kho',
      contentDate: '2020-03-11',
      modalData: '/detail/1',
    },
  ];
  from: string;
  constructor(private router: Router) {
    this.from = this.router.getCurrentNavigation().extras.state.from;
  }

  ngOnInit() {
    if (this.from === 'from-maintain') {
      this.currentSegment = 1;
    } else if (this.from === 'from-warehouse') {
      this.currentSegment = 2;
    }

    this.listCard = this.apiCard;
  }

  onSegmentChange(ev) {
    this.currentSegment = ev;
  }
}
