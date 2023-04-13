import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from 'src/app/config';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-renter-profile',
  templateUrl: './renter-profile.component.html',
  styleUrls: ['./renter-profile.component.css']
})
export class RenterProfileComponent implements OnInit {
  id=JSON.parse(localStorage.getItem('userId')!);
  renter:Config['RenterObj']=new Config().RenterObj;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private renterService: ServicesService) { }
  
  ngOnInit(): void {
   console.log(this.id)
    this.renterService.getRenterById(this.id).subscribe(data=>{
      this.renter=data;
    },error=>alert("User not found.."));
  }
  editProfile(id:any){
      this.router.navigate(['renter/editProfile',this.id]);
  }
 
  goto(){
    this.router.navigate(['renter/dashboard']);
  }

  updateRenterPassword(id:any){
    this.router.navigate(['renter/updatePassword',this.id]);
  }
}