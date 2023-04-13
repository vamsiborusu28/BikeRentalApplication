import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Config } from 'src/app/config';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-customer-dashboard-content',
  templateUrl: './customer-dashboard-content.component.html',
  styleUrls: ['./customer-dashboard-content.component.css']
})
export class CustomerDashboardContentComponent implements OnInit {

  bikeId!: '';
  bike!: Config['BikeObj'];
  bikess!:Config['BikeObj'][];
  id: any;
  page : number=1;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private renterService: ServicesService) { }

  ngOnInit() {
    this.bike= new Config().BikeObj;

    this.id = this.route.snapshot.params['id'];
    this.renterService.getCustomerBike().subscribe(data => {
        console.log(data)
        this.bikess= data;
      }, error => console.log(error));

      // id:Number;
      // this.id = this.route.snapshot.params['id'];
    
      // this.renterService.getBikeById(this.id).subscribe(data => {
      //     console.log(data)
      //     this.bike= data;
      //   }, error => console.log(error));
  }

  searchedValue!:any;


  goto(id:any){
    
    this.router.navigate(['customer/bikeDetails',id]);
  }

}
