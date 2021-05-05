import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintain',
  templateUrl: './maintain.page.html',
  styleUrls: ['./maintain.page.scss'],
})
export class MaintainPage implements OnInit {
  menuItems = [
    {
      name: 'Trang chủ',
      icon: 'assets/main/home.svg',
      route: '/home',
    },
    {
      name: 'Nhập bảo dưỡng',
      icon: 'assets/main/nhap_bao_duong.svg',
      route: '/warehouse',
    },
    {
      name: 'Thêm linh kiện',
      icon: 'assets/main/them_linh_kien.svg',
      route: '/bear',
    },
    {
      name: 'Xuất bảo dưỡng',
      icon: 'assets/main/xuat_bao_duong.svg',
      route: '/maintain',
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
