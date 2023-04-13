import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
} 
@Component({
  selector: 'app-renter-dashboard',
  templateUrl: './renter-dashboard.component.html',
  styleUrls: ['./renter-dashboard.component.css']
})
export class RenterDashboardComponent implements OnInit {
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
