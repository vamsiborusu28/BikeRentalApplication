import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Config } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private baseUrl="http://localhost:8081";
  constructor(private httpClient: HttpClient) { }

  public shared = new Subject<Config['BookingObj']>();
  book:Config['BookingObj']=new Config().BookingObj;
  public getValue(): Observable<Config['BookingObj']> {
    return this.shared;
  }

  public setValue(value: Config['BookingObj']): void {
    console.log(value);
    this.book=value;
    this.shared.next(value);
    console.log(this.shared);
  }

  getAllCustomers():Observable<any>{
    return this.httpClient.get<Config["CustomerObj"][]>(`${this.baseUrl}/customers`);
  } 

  getAllRenters():Observable<any>{
    return this.httpClient.get<Config["RenterObj"][]>(`${this.baseUrl}/renters`);
  }

  getRenterBikes(id:any):Observable<any>{
    
    return this.httpClient.get<Config["BikeObj"][]>(`${this.baseUrl}/renters/${id}`);
  }

  isActiveRenter(id:any):Observable<any>{
    return this.httpClient.put(`${this.baseUrl}/renters/${id}`,id);
  }

  isActiveCustomer(id:any):Observable<any>{
    return this.httpClient.put(`${this.baseUrl}/customers/${id}`,id);
  }

  getAllBooking():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/bookings`);
  }

  getComment():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/feedback`);
  }

  getAdminEarning(id:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/adminEarnings/${id}`);
  }

  calculateAdminRevenue(startdate:Date,enddate:Date):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/adminRevenue/${startdate}/${enddate}`);
  }
  //============================================================renter services=====================================
  getBikeById(id:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/bike/${id}`);
  }
  addBike(id:number,data: any): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/bike/${id}`, data);
  }
  
  updateBike(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/bike/${id}`, value);
  }
  
  deleteBike(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/bike/${id}`);
  }
  
  getBike(id:any): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/renter/${id}`);
  }
  getRenterEarning(id:number): Observable<Object>{
    return this.httpClient.get(`${this.baseUrl}/renterEarning/${id}`);
  }

  getRenterById(id:any):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/renterDetail/${id}`);
  }

  updateProfile(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/renterProfile/${id}`, value);
  }

  addComment(data: any): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/comments`, data);
  }

  getRenterBooking(id:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/renterBookings/${id}`);
  }

  calculateRenterRevenue(id:number,startdate:Date,enddate:Date):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/renterRevenue/${id}/${startdate}/${enddate}`);
  }
//============================================================customer services=====================================
  getCustomerBike(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/customer`);
  }

  updateCustomerProfile(id:number ,customer: Config['CustomerObj']):Observable<Object>
 {
  console.log(customer);
  return this.httpClient.put(`${this.baseUrl}/customer/${id}`,customer);
 }

  getCustomerById(id:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/customer/${id}`);
  }

  validatePayment(cardDetails:Config['CardDetails']):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/payment`,cardDetails );
  }

  saveBookingHistory(id:number,booking:Config['BookingObj']):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/booking/${id}`,booking);
  }

  getCustomerBooking(id:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/customerBookings/${id}`);
  }

  deleteBookingId(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/booking/${id}`);
  }
}
