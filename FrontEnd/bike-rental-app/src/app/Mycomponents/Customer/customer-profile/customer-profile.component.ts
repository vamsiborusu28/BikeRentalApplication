import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from 'src/app/config';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  id=JSON.parse(localStorage.getItem('userId')!);
  customer:Config['CustomerObj']=new Config().CustomerObj;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private Service: ServicesService) { }
  
  ngOnInit(): void {
   console.log(this.id)
    this.Service.getCustomerById(this.id).subscribe(data=>{
      this.customer=data;
    },error=>console.log(error));
  }
  editProfile(id:any){
      this.router.navigate(['customer/editProfile',this.id]);
  }
 
  goto(){
    this.router.navigate(['customer/dashboard']);
  }

  updatePassword(id:any){
    this.router.navigate(['customer/updatePassword',this.id]);
  }
}
