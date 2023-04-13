import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
} 

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit {
  isSideNavCollapsed=false;
  screenWidth=0;
  localItem=localStorage.getItem("Email");

  constructor(private route: ActivatedRoute,private router: Router,) { }

  ngOnInit(): void {
    if(!this.localItem){
      this.router.navigate(['']);
    }
  }

  onToggleSideNav(data: SideNavToggle):void{
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed;
  }
  
  logout(){
    if(this.localItem){
      localStorage.removeItem("Email");
      localStorage.removeItem("userId");
      localStorage.removeItem("userName");
      this.router.navigate(['']);
    }
    
  }

}
