import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests-items',
  templateUrl: './requests-items.component.html',
  styleUrls: ['./requests-items.component.css']
})
export class RequestsItemsComponent implements OnInit {

  newData: Array<any>;
  oldData: Array<any>;

  constructor() { 
    this.newData = [
      { id: '10001', requestDate: '22-02-2022', requestType: 'طلب طائرة', requestStatus:  'تحت المعالجة' },
      { id: '10080', requestDate: '27-02-2022', requestType: 'تحليل عينات', requestStatus:  'جديد' },
      { id: '12022', requestDate: '02-03-2022', requestType: 'توصيل نقطة شبكة', requestStatus:  'تحت المعالجة'},
      { id: '13023', requestDate: '06-02-2022', requestType: 'حجز مخيم', requestStatus:  'تحت المعالجة النهائية' }
  ];
  this.oldData = [
      { id: '10001', requestDate: '29-12-2021', requestType: 'طلب تأمين احبار', requestStatus:  'تم صرف الاحبار' },
      { id: '10080', requestDate: '27-01-2022', requestType: 'تحليل عينات', requestStatus:  'تم تسليم النتائج' },
      { id: '12022', requestDate: '15-01-2022', requestType: 'حجز مخيم', requestStatus:  'تم تأكيد الحجز'},
  ]
  }

  ngOnInit(): void {
  }

}
