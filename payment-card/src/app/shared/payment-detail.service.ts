import { Injectable } from '@angular/core';
import {PaymentDetail} from './payment-detail.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  readonly baseUrl = 'http://localhost:58003/api/';
  formData: PaymentDetail;
  list: PaymentDetail[];

  constructor(private http: HttpClient) { }

  postPaymentDetail(formData: PaymentDetail): Observable<any> {
    return this.http.post(`${this.baseUrl}PaymentDetail`, formData);
  }
  updatePaymentDetail(formData: PaymentDetail): Observable<any> {
    return this.http.put(`${this.baseUrl}PaymentDetail/${formData.pmID}`, formData);
  }
  deletePaymentDetail(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}PaymentDetail/${id}`);
  }

  getListPaymentDetail(): any {
    return this.http.get(this.baseUrl + 'PaymentDetail');
  }
}
