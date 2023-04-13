import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from 'src/app/config';
import { ServicesService } from '../../services/services.service';
declare var $: any;
@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  bookingObj!:Config['BookingObj'][];
  startdate:any;
  enddate:any;
  revenue: number=0.0;
  constructor(private route: ActivatedRoute,private router: Router,
    private service:ServicesService) { }

  ngOnInit(): void {
    this.service.getAllBooking().subscribe(data =>{
      this.bookingObj=data;
      console.log(this.bookingObj);
      $(document).ready(function(){
        $('#bookingTable').DataTable({
          lengthMenu: [5, 10, 20, 50, 100]
        });
      });
    })
  }

  revenueCalculator(){
    let date1 = new Date(this.startdate);
    let date2 = new Date(this.enddate);
    // console.log(this.startdate+" "+this.enddate);
    this.service.calculateAdminRevenue(this.startdate,this.enddate).subscribe(revenuegenerated=>this.revenue=revenuegenerated);
    console.log(this.revenue)
  }

}
