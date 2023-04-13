import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Config } from 'src/app/config';
import { ServicesService } from '../../services/services.service';
declare var $: any;

@Component({
  selector: 'app-renter-details',
  templateUrl: './renter-details.component.html',
  styleUrls: ['./renter-details.component.css']
})
export class RenterDetailsComponent implements OnInit {

  public renterObj!:Config['RenterObj'][];
  public bikeObj!:Config['BikeObj'][];
  // renterActive!:Config['RenterObj'][];
  activeMessage="";

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service:ServicesService) {
      
     }

  ngOnInit(): void {
    this.service.getAllRenters().subscribe(response=>{
      this.renterObj=response;
      $(document).ready(function(){
        $('#renterTable').DataTable({
          lengthMenu: [5, 10, 20, 50, 100]
        });
      });
    })
    
  }
  
  isActiveRenter(id:any) {
    this.service.isActiveRenter(id).subscribe(response=>{
      // console.log(response);
      
      if(JSON.parse(JSON.stringify(response)).isActive==='true'){
        this.activeMessage="Renter mark an active!!!"
        alert(this.activeMessage);
        window.location.reload();
           
      }else{
        this.activeMessage="Renter mark an inactive!!!"
        alert(this.activeMessage);
        window.location.reload();
      }
    });
  }


      
  getRenterBikes(id:any){
    this.service.getRenterBikes(id).subscribe(response=>{
    // console.log(response);
    this.bikeObj=response;
    // console.log(this.bikeObj);
    localStorage.setItem('RenterBikes', JSON.stringify(this.bikeObj));
    this.router.navigate(['admin/dashboard/bikeDetails',id]);
    });
  }
  
}


