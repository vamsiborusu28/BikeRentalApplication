import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Config } from 'src/app/config';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-customer-updatepassword',
  templateUrl: './customer-updatepassword.component.html',
  styleUrls: ['./customer-updatepassword.component.css']
})
export class CustomerUpdatepasswordComponent implements OnInit {
  customerObj= new Config().CustomerObj;
  oldPasswordObj= new Config().OldPasswordObj;

  id=JSON.parse(localStorage.getItem('userId')!);
  newPassword:any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService:AuthService,
    private customerservice: ServicesService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.customerservice.getCustomerById(this.id).subscribe(data=>{
       console.log(data)
       this.customerObj=data;
     },error=> console.log(error));
  }

  
  updateCustomerPassword(){
    this.authService.getCustomerOldPassword(this.id,this.oldPasswordObj).subscribe(data=>{
      console.log(data);
      if(data){
        alert('Old password matched...');
        this.customerObj.password=this.newPassword;
        this.authService.updateCustomerPassword(this.id,this.customerObj).subscribe(response => {
          console.log(response);
          alert('Password updated successfully...');
          this.router.navigate(['customer/dashboard']);
        },error=>alert('Password not updated successfully...'))
      }else{
        alert('Old password does not match...');
      }
    })
        
  }
}
