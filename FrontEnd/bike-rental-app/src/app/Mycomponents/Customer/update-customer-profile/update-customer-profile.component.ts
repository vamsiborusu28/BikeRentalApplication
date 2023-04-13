import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { Config } from 'src/app/config';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-update-customer-profile',
  templateUrl: './update-customer-profile.component.html',
  styleUrls: ['./update-customer-profile.component.css']
})
export class UpdateCustomerProfileComponent implements OnInit {

  id!: number;
  // customer:Customer;
   submitted = false;
   customer:Config['CustomerObj']=new Config().CustomerObj;
   constructor(private route: ActivatedRoute,
    private router: Router,
    private customerservice: ServicesService) { }  
    base64code!:any;
 
   ngOnInit(): void {
     // this.customer=new Customer();
     // this.submitted = false;
     this.id=this.route.snapshot.params['id'];
 
     this.customerservice.getCustomerById(this.id).subscribe(data=>{
       console.log(data)
       this.customer=data;
     },(error: any)=>console.log(error));
   }


   updateCustomerprofile(){
     console.log(this.customer);
     this.customerservice.updateCustomerProfile(this.id,this.customer).subscribe(data=>
       {
         alert("Updated Successfully !")
         this.goto();
       },error=>alert("Sorry details are not updated"));

   }
  goto(){
      this.router.navigate(['customer/profile']).then(() => {
        window.location.reload();
      });
    }

   onChange($event:Event ){
     const target = $event.target as HTMLInputElement;
     const file: File = (target.files as FileList)[0]; 
     this.convertToBase64(file);
   }
   
   convertToBase64(file:File){
     const observable = new Observable((subscriber: Subscriber<any>)=>{
         this.readFile(file,subscriber);
     });
   
     observable.subscribe((data) => {
       console.log(data)
       this.customer.image = data
       this.base64code = data
     });
   }
   
   readFile(file:File,subscriber:Subscriber<any>){
     const fileReader = new FileReader();
     fileReader.readAsDataURL(file);
   
     fileReader.onload=()=>{
       subscriber.next(fileReader.result);
       subscriber.complete();
     };
     fileReader.onerror=()=>{
       subscriber.error(fileReader.error);
       subscriber.complete();
     }
   }
}
