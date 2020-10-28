import { Component, OnInit } from '@angular/core';
import {PaymentDetailService} from '../../shared/payment-detail.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {
  data: PaymentDetailService;

  constructor(private service: PaymentDetailService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  onSubmit(form: NgForm): void {
    console.log(form.value);
    if (form.value.pMID === 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  resetForm(form?: NgForm): void {
    if (form != null) {
      form.reset();
    }
    this.service.formData = {
      pmID: 0,
      cardOwnerName: '',
      cardNumber: '',
      expirationDate: '',
      cvv: ''
    };
    this.data = this.service;
  }
  insertRecord(form: NgForm): void {
    this.service.postPaymentDetail(form.value).subscribe(res => {
        console.log(res);
        this.resetForm(form);
        this.toastr.success('Sumbitted successfully', 'Payment Detail Register');
        this.service.getListPaymentDetail();
      },
      err => {
        console.log(err);
      });
  }
  updateRecord(form: NgForm): void {
    this.service.updatePaymentDetail(form.value).subscribe(res => {
        console.log(res);
        this.resetForm(form);
        this.toastr.info('Updated successfully', 'Payment Detail Register');
        this.service.getListPaymentDetail();
      },
      err => {
        console.log(err);
      });
  }

}
