import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from 'src/app/config';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-renter-dashboard-content',
  templateUrl: './renter-dashboard-content.component.html',
  styleUrls: ['./renter-dashboard-content.component.css']
})
export class RenterDashboardContentComponent implements OnInit {

  parentMessage:any;
  error:any;
  bike: any=[];
  bikes:Config['BikeObj']=new Config().BikeObj;
  renter:Config['RenterObj']=new Config().RenterObj;
  id=JSON.parse(localStorage.getItem('userId')!);
  earnings!:any;
  page : number=1;

  SearchValue:string;

  constructor(private renterService:ServicesService,private router:Router){}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
     this.renterService.getBike(this.id).subscribe(bikes=>this.bike=bikes);
     this.renterService.getRenterEarning(this.id).subscribe(earning=>this.earnings=earning);
  }

  deleteBike(id: any) {
    if(confirm('Are you sure to delete the Record?'))
    this.renterService.deleteBike(id)
      .subscribe(
        data => {
          console.log(data);
          alert('record deleted Successfully')
          this.reloadData();
        },error=>alert("Bike not found.."));
  }

  getBikeById(id: any){
    // console.log(id);
    this.router.navigate(['renter/bike/', id]);
  }

  updateBike(id: any){
    console.log(id);
    this.router.navigate(['renter/editBike/', id]);
  }

  
}