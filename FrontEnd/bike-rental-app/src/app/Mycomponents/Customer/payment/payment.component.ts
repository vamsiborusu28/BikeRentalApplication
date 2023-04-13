import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from 'src/app/config';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  renterId!: number;
  id=JSON.parse(localStorage.getItem('userId')!);
  // customer:Customer;
   submitted = false;
   cardDetails:Config['CardDetails']=new Config().CardDetails;
   booking:Config['BookingObj']=new Config().BookingObj;
 
   constructor(private service:ServicesService ,
    private router: Router,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    
    this.booking=this.service.book;
    console.log(this.booking);
  }

  validateCredentials(){
    if(confirm('Are you sure that you want to confirm  the payment?')){
      console.log(this.cardDetails)
      this.service.validatePayment(this.cardDetails).subscribe(data => {
        console.log(this.cardDetails);
        alert("Payment successfull");
          this.service.saveBookingHistory(this.id,this.booking).subscribe(data=>{
          console.log(data);
         
        })
        this.goBack();
      },error =>alert("Payment unsuccessfull"));
    }
  }

  
  goBack(){
    this.router.navigate(['customer/dashboard']).then(() => {
      window.location.reload();
    });
  }
  cancelPayment(){
    this.router.navigate(['customer/dashboard'])
  }
}
