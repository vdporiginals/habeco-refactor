import { Component, OnInit } from '@angular/core';
import { ModalType } from 'src/app/models/modal-type.enum';

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
      route: null,
      type: ModalType.addMaintain
    },
    {
      name: 'Thêm linh kiện',
      icon: 'assets/main/them_linh_kien.svg',
      route: null,
      type: ModalType.maintainAddAccess
    },
    {
      name: 'Xuất bảo dưỡng',
      icon: 'assets/main/xuat_bao_duong.svg',
      route: null,
      type: ModalType.exportMaintain
    },
    {
      name: 'Tra cứu',
      icon: 'assets/main/tra_cuu.svg',
      route: null,
      type: ModalType.searchMaintain
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
