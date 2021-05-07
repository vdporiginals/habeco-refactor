/* eslint-disable eqeqeq */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
})
export class DetailModalComponent implements OnInit {
  @Input() data;
  @Input() from;
  detailCard = {
    goodsData: {
      headers: [
        {
          name: 'Tên hàng hóa',
          key: 'name',
        },
        {
          name: 'Serial',
          key: 'seri',
        },
      ],
      data: [
        {
          name: 'Vỏ keg',
          seri: '1321651123',
          date: '2021-04-15',
        },
      ],
    },
    infoData: {
      headers: [
        {
          name: 'Đơn vị xử lý',
          key: 'company',
        },
        {
          name: 'Người tạo',
          key: 'person',
        },
        {
          name: 'Thời gian tạo',
          key: 'date',
        },
      ],
      data: [
        {
          company: 'Phân xưởng 1',
          person: 'Phạm Văn Tuấn',
          date: '2021-04-15T23:59:59',
        },
      ],
    },
    accessoriesData: {
      headers: [
        {
          name: 'Linh kiện',
          key: 'access',
        },
        {
          name: 'Số lượng',
          key: 'numb',
        },
        {
          name: 'Thời gian',
          key: 'date',
        },
      ],
      data: [
        {
          access: 'Nắp van',
          numb: '01',
          date: '2021-04-15',
        },
        {
          access: 'Vỏ nắp',
          numb: '01',
          date: '2021-04-15',
        },
      ],
    },
    historyAction: {
      headers: [
        {
          name: 'Thời gian',
          key: 'time',
        },
        {
          name: 'Nhân viên',
          key: 'employee',
        },
        {
          name: 'Hành động',
          key: 'actions',
        },
      ],
      data: [
        {
          time: '2021-04-15',
          employee: 'Phạm văn Tuấn',
          actions: 'Đổi trạng thái',
        },
        {
          time: '2021-04-15',
          employee: 'Phạm văn Tuấn',
          actions: 'Đổi trạng thái',
        },
      ],
    },
    historyMaintain: {
      headers: [
        {
          name: 'Thời gian',
          key: 'time',
        },
        {
          name: 'Nhân viên',
          key: 'employee',
        },
      ],
      data: [
        {
          time: '2021-04-15',
          employee: 'Phạm văn Tuấn',
        },
        {
          time: '2021-04-15',
          employee: 'Phạm văn Tuấn',
        },
      ],
    },
  };
  apiCard;
  title;
  constructor() {}

  ngOnInit() {
    if (this.data.type == 1) {
      this.title = 'Thông tin bảo dưỡng';
    } else if (this.data.type == 2) {
      this.title = 'Thông tin xuất kho';
    } else {
      this.title = 'Thông tin nhập kho';
    }
  }
}
