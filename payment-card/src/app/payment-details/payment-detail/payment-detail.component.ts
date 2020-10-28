import { Component, OnInit } from '@angular/core';
import {PaymentDetailService} from '../../shared/payment-detail.service';
import {PaymentDetail} from '../../shared/payment-detail.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {
  data: any;

  constructor(private service: PaymentDetailService) { }

  ngOnInit(): void {
    this.data = this.service;
  }
  resetForm(form: NgForm): any {
    form.reset();
  }

}
