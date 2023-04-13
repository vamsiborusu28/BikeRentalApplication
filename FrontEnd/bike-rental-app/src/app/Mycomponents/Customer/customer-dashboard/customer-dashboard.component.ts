import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
} 
@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  isSideNavCollapsed=false;
  screenWidth=0;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  onToggleSideNav(data: SideNavToggle):void{
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed;
  }

}
