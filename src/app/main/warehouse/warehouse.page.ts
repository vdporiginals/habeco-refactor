import { Component, OnInit } from '@angular/core';
import { ModalQRType } from 'src/app/models/modal-type.enum';

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
      route: null,
      type: ModalQRType.addWarehouse,
    },
    {
      name: 'Xuất kho',
      icon: 'assets/main/xuat_kho.svg',
      route: null,
      type: ModalQRType.exportWarehouse,
    },
    {
      name: 'Tra cứu',
      icon: 'assets/main/tra_cuu.svg',
      route: null,
      type: ModalQRType.searchWareHouse,
    },
    {
      name: 'Danh sách',
      icon: 'assets/main/danh_sach.svg',
      route: '/list',
      routeState: 'from-warehouse'
    },
  ];
  constructor() {}

  ngOnInit() {}
}
