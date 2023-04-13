import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from 'src/app/config';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  id!: number;
  config:Config["Signup"]=new Config().Signup;
  renter:Config['RenterObj']=new Config().RenterObj;
  customer:Config['CustomerObj']=new Config().CustomerObj;
  profileLogo!: string;
  localItem=localStorage.getItem("Email");
  name=JSON.parse(localStorage.getItem('userName')!);
  role=JSON.parse(localStorage.getItem('Role')!);
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: ServicesService) { }

  ngOnInit(): void {
    console.log(this.role);
    this.id=JSON.parse(localStorage.getItem("userId")!);
    // console.log(this.id)
   
    if(this.role==='renter'){
      this.service.getRenterById(this.id).subscribe(data => {
        this.profileLogo=JSON.parse(JSON.stringify(data)).image;
        // window.location.reload();
      })
     
    }
    else if(this.role==='customer'){
      this.service.getCustomerById(this.id).subscribe(data => {
        this.profileLogo=JSON.parse(JSON.stringify(data)).image;
      })
     
    }
    else{
      this.profileLogo=this.config.image;
    }
  }

  logout(){
    if(this.localItem){
      localStorage.removeItem("Email");
      localStorage.removeItem("userId");
      localStorage.removeItem("userName");
      localStorage.removeItem("RenterBikes");
      this.router.navigate(['']);
    }
    
  }
}
