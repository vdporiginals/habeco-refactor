import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  menuItems = [
    {
      name: 'Trang chủ',
      icon: 'assets/main/home.svg',
      route: '/home',
    },
    {
      name: 'Xuất nhập kho',
      icon: 'assets/main/warehouse.svg',
      route: '/warehouse',
    },
    {
      name: 'Chiết nạp',
      icon: 'assets/main/bear.svg',
      route: '/bear',
    },
    {
      name: 'Bảo dưỡng',
      icon: 'assets/main/maintain.svg',
      route: '/maintain',
    },
    {
      name: 'Báo cáo',
      icon: 'assets/main/report.svg',
      route: '/report',
    },
    {
      name: 'Cài đặt',
      icon: 'assets/main/settings.svg',
      route: '/settings',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
