import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.page.html',
  styleUrls: ['./warehouse.page.scss'],
})
export class WarehousePage implements OnInit {
  menuItems = [
    {
      name: 'Trang chủ',
      icon: 'assets/main/home.svg',
      route: '/home',
    },
    {
      name: 'Nhập kho',
      icon: 'assets/main/nhap_kho.svg',
      route: '/warehouse',
    },
    {
      name: 'Xuất kho',
      icon: 'assets/main/xuat_kho.svg',
      route: '/bear',
    },
    {
      name: 'Tra cứu',
      icon: 'assets/main/tra_cuu.svg',
      route: '/report',
    },
    {
      name: 'Danh sách',
      icon: 'assets/main/danh_sach.svg',
      route: '/settings',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
