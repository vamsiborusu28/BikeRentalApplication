import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Config } from 'src/app/config';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-renter-updatepassword',
  templateUrl: './renter-updatepassword.component.html',
  styleUrls: ['./renter-updatepassword.component.css']
})
export class RenterUpdatepasswordComponent implements OnInit {

  RenterObj= new Config().RenterObj;
  oldPasswordObj= new Config().OldPasswordObj;

  id=JSON.parse(localStorage.getItem('userId')!);
  newPassword:any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService:AuthService,
    private service: ServicesService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.getRenterById(this.id).subscribe(data=>{
       console.log(data)
       this.RenterObj=data;
     },error=> console.log(error));
  }

  
  updateRenterPassword(){
    this.authService.getRenterOldPassword(this.id,this.oldPasswordObj).subscribe(data=>{
      console.log(data);
      if(data){
        alert('Old password matched...');
        this.RenterObj.password=this.newPassword;
        this.authService.updateRenterPassword(this.id,this.RenterObj).subscribe(response => {
          console.log(response);
          alert('Password updated successfully...');
          this.router.navigate(['renter/dashboard']);
        },error=>alert('Password not updated successfully...'))
      }else{
        alert('Old password does not match...');
      }
    })
        
  }
}
