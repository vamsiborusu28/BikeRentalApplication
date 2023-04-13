import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from 'src/app/config';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-bike-data',
  templateUrl: './bike-data.component.html',
  styleUrls: ['./bike-data.component.css']
})
export class BikeDataComponent implements OnInit {

  id!: number;
  bike!: Config['BikeObj'];
  booking:Config['BookingObj']=new Config().BookingObj;
  startdate:any;
  dated:any;
  datef:any;
  enddate:any;
  calculatedamount:any;
  error:any;
  price: any;
  valid=false;
  constructor(private route: ActivatedRoute,private router: Router,private renterService: ServicesService) { 
  }

  ngOnInit() {
    this.bike= new Config().BikeObj;

    this.id = this.route.snapshot.params['id'];
    
    this.renterService.getBikeById(this.id).subscribe(data => {
        console.log(data)
        this.bike= data;
        this.price=JSON.parse(JSON.stringify(data)).rentAmount;
        console.log(this.price);
      }, error => console.log(error));
     
  }
  
  diff(){
  let date1 = new Date(this.startdate);
  let date2 = new Date(this.enddate);
  this. calculatedamount = (Math.floor((Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) - Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate()) ) /(1000 * 60 * 60 * 24)))*(+this.price);
  this.valid=true; 
  console.log("subracted days are  " + this. calculatedamount);

  this.booking.bookingDate=this.startdate;
  this.booking.endDate=this.enddate;
  this.booking.totalAmount=this. calculatedamount;
  this.booking.renterName=this.bike.ownerName;
  this.booking.brandName=this.bike.brandName;
  this.booking.modelName=this.bike.modelName;
  this.booking.bikeId=this.bike.id;
  
// this.booking.renterId=this.bike.id;
  }

  paymentNavigation(){
    console.log(this.booking);
   
    this.renterService.setValue(this.booking);
    //console.log(this.renterService.getValue().subscribe());
    this.router.navigate(['customer/payment']);
  }

  Back(){
    this.router.navigate(['customer/dashboard']);
  }
}
