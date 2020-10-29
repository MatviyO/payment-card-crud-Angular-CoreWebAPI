import {Component, OnInit} from '@angular/core';
import {PaymentDetailService} from '../../shared/payment-detail.service';
import {PaymentDetail} from '../../shared/payment-detail.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.css']
})
export class PaymentDetailListComponent implements OnInit {
  list: PaymentDetail[];

  constructor(private service: PaymentDetailService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.service.getListPaymentDetail()
      .toPromise()
      .then(res => this.list = res as PaymentDetail[]);
  }

  populateForm(pd: PaymentDetail): any {
    this.service.formData = Object.assign({}, pd);
    console.log(this.service.formData.pmID);

  }

  onDelete(id: number): void {
    console.log(id);
    if (confirm('Are you sure to delete  this record? ')) {
      this.service.deletePaymentDetail(id).subscribe(
        res => {
          console.log('sdfjsdflsdjkfsd');
          this.service.getListPaymentDetail();
          this.toastr.warning('Deleted successfully', 'Payment Detail Register');
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
