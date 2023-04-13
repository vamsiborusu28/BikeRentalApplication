import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from 'src/app/config';
import { ServicesService } from '../../services/services.service';
declare var $:any;
@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css']
})
export class AllCustomersComponent implements OnInit {

  public customerObj!:Config["CustomerObj"][];
  activeMessage="";
  active=true;
  activeStatus:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service:ServicesService) {}

  ngOnInit(): void {
    this.service.getAllCustomers().subscribe(response=>{
      // console.log(response);
      this.customerObj=response;
      // console.log(this.customerObj);
      $(document).ready(function(){
        $('#customerTable').DataTable({
          lengthMenu: [5, 10, 20, 50, 100]
        });
      });
    });
  }
  
  isActiveCustomer(id:any) {
    this.service.isActiveCustomer(id).subscribe(response=>{
      // console.log(response);
      if(JSON.parse(JSON.stringify(response)).isActive==='true'){
        this.activeMessage="Customer mark an active!!!"
        alert(this.activeMessage);
        window.location.reload();
           
      }else{
        this.activeMessage="Customer mark an inactive!!!"
        alert(this.activeMessage);
        window.location.reload();
      }
    });
  }

  
}
