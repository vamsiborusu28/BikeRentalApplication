import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from 'src/app/config';
import { ServicesService } from '../../services/services.service';
import { DatePipe } from '@angular/common'
declare var $: any;
@Component({
  selector: 'app-customer-booking-history',
  templateUrl: './customer-booking-history.component.html',
  styleUrls: ['./customer-booking-history.component.css'],
  providers: [DatePipe]
})
export class CustomerBookingHistoryComponent implements OnInit {

  bookingObj!:Config['BookingObj'][];
  bikeObj !: Config['BikeObj'];
  today = new Date();
  id=JSON.parse(localStorage.getItem('userId')!);
  date:any = new Date();

  constructor(private route: ActivatedRoute,private router: Router,
    private service:ServicesService,
    private datepipe: DatePipe) { 
      this.date=this.datepipe.transform(this.date, 'yyyy-MM-dd');
    
    }

  ngOnInit(): void {
    this.service.getCustomerBooking(this.id).subscribe(data =>{
      this.bookingObj=data;
      console.log(this.bookingObj);
      $(document).ready(function(){
        $('#bookingTable').DataTable({
          lengthMenu: [5, 10, 20, 50, 100],
          
        });
      });
    })
    console.log(this.date);
    
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

  cancelBike(id: any){
    if(confirm('Are you sure to cancel the Booking?'))
    this.service.deleteBookingId(id).subscribe(data => {
        console.log(data);
        alert('Booking cancelled Successfully');
        this.Back();
      },error=>alert("Cancellation unsuccessfull"));
   }

   Back(){
    this.router.navigate(['customer/booking']).then(() => {
      window.location.reload();
  });
}
}
