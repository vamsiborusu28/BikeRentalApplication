import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/config';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-admin-dashboard-content',
  templateUrl: './admin-dashboard-content.component.html',
  styleUrls: ['./admin-dashboard-content.component.css']
})
export class AdminDashboardContentComponent implements OnInit {
  public customerObj!:Config["CustomerObj"][];
  public renterObj!:Config['RenterObj'][];
  customerCount=0;
  renterCount=0;
  id=JSON.parse(localStorage.getItem('userId')!);
  earnings!:any;
  constructor(private service:ServicesService) { }

  ngOnInit(): void {
    this.service.getAllCustomers().subscribe(response=>{
      this.customerObj=response;
     this.customerCount=this.customerObj.length;
    });

    this.service.getAllRenters().subscribe(response=>{
      this.renterObj=response;
      this.renterCount=this.renterObj.length;
      
    });

    this.service.getAdminEarning(this.id).subscribe(response=>{
      this.earnings=response;
    })

  }
   
    
  

}
