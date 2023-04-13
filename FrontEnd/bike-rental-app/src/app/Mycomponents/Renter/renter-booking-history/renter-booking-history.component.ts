import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from 'src/app/config';
import { ServicesService } from '../../services/services.service';
declare var $:any;
@Component({
  selector: 'app-renter-booking-history',
  templateUrl: './renter-booking-history.component.html',
  styleUrls: ['./renter-booking-history.component.css'],
  providers: [DatePipe]
})
export class RenterBookingHistoryComponent implements OnInit {

  bookingObj!:Config['BookingObj'][];
  id=JSON.parse(localStorage.getItem('userId')!);
  earnings!:any;
  SearchValue:string;
  startdate:any;
  enddate:any;
  revenue: number=0.0;
  date:any = new Date();
  constructor(private renterService:ServicesService,private router:Router,
    private datepipe: DatePipe) {
      this.date=this.datepipe.transform(this.date, 'yyyy-MM-dd');
     }

  ngOnInit() {
    this.reloadData();
    this.renterService.getRenterBooking(this.id).subscribe(data =>{
      this.bookingObj=data;
      console.log(this.bookingObj);
      $(document).ready(function(){
        $('#bookingTable').DataTable({
          lengthMenu: [5, 10, 20, 50, 100],
          
        });
      });
    })
  }

  reloadData() {
    this.renterService.getRenterEarning(this.id).subscribe(earning=>this.earnings=earning);
  }

  revenueCalculator(){
    let date1 = new Date(this.startdate);
    let date2 = new Date(this.enddate);
    console.log(this.startdate+" "+this.enddate);
    this.renterService.calculateRenterRevenue(this.id,this.startdate,this.enddate).subscribe(revenuegenerated=>this.revenue=revenuegenerated);
    console.log(this.revenue)
  }

  
  forOngoing(bookingDate:string,returnDate:string) {
    if ((this.date >= bookingDate) && (this.date <= returnDate))
       return true;
     return false;
   }

   forCancel(bookingDate:string) {
    if (this.date < bookingDate) 
      return true;
    return false;
}

  forCompleted(returnDate:string) {
    if (this.date > returnDate)
      return true;
    return false;
  }

}
