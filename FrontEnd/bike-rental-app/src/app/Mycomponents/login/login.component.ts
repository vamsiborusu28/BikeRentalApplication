import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Config } from 'src/app/config';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  Login:Config["Login"]=new Config().Login;
  userRole:Config["userRole"]=new Config().userRole;
  
  errorMessage = 'Invalid Credentials';
  successMessage!: string;
  invalidLogin = false;
  loginSuccess = false;
  status!:string;
  userId!:number;
  userName!:string;
  active!:string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService:AuthService) { }
  
  ngOnInit(): void {
    this.userRole.userType = 'renter';
  }
  

  handleLogin(){
    // console.log(this.Login);
    // console.log(this.userRole);
    if(this.userRole.userType === 'renter'){
      this.authService.isRenterLogin(this.Login).subscribe((response)=>{
        // console.log("After login",this.Login);
        // console.log("response=",response);
        this.status=JSON.parse(JSON.stringify(response)).status;
        this.active=JSON.parse(JSON.stringify(response)).active;
          if(this.status==="Success" && this.active==="true"){
            this.invalidLogin=false;
            this.loginSuccess=true;
            this.successMessage='Login Successful.';
            this.userId=JSON.parse(JSON.stringify(response)).userId;
            this.userName=JSON.parse(JSON.stringify(response)).username;
            localStorage.setItem("userId",JSON.stringify(this.userId));
            localStorage.setItem("userName",JSON.stringify(this.userName));
            localStorage.setItem("Email",JSON.stringify(this.Login.email));
            localStorage.setItem("Role",JSON.stringify(this.userRole.userType));
            setTimeout(()=>this.router.navigate(['renter']),1000);
          }
          else if(this.status==="Success" && this.active==="false"){
            alert("Admin disabled your account!!!")
          }
          else{
            this.invalidLogin=true;
            this.loginSuccess=false;
            this.router.navigate(['']);
          }
          
      });
    }
    else if(this.userRole.userType === 'admin'){
      this.authService.isAdminLogin(this.Login).subscribe((response)=>{
        // console.log("After login",this.Login);
        console.log("response=",response);
        // console.log(JSON.parse(JSON.stringify(response)).userId);
        this.status=JSON.parse(JSON.stringify(response)).status;
          if(this.status==="Success"){
            this.invalidLogin=false;
            this.loginSuccess=true;
            this.successMessage='Login Successful.';
            this.userId=JSON.parse(JSON.stringify(response)).userId;
            this.userName=JSON.parse(JSON.stringify(response)).username;
            localStorage.setItem("userId",JSON.stringify(this.userId));
            localStorage.setItem("userName",JSON.stringify(this.userName));
            localStorage.setItem("Email",JSON.stringify(this.Login.email));
            setTimeout(()=>this.router.navigate(['admin']),1000);
          }else{
            this.invalidLogin=true;
            this.loginSuccess=false;
            this.router.navigate(['']);
          }
          
      });
    }
    else if(this.userRole.userType === 'customer'){
      this.authService.isCustomerLogin(this.Login).subscribe(response => {
        // console.log(response);
        this.status=JSON.parse(JSON.stringify(response)).status;
        this.active=JSON.parse(JSON.stringify(response)).active;
          if(this.status==="Success" && this.active==="true"){
            this.invalidLogin=false;
            this.loginSuccess=true;
            this.successMessage='Login Successful.';
            this.userId=JSON.parse(JSON.stringify(response)).userId;
            this.userName=JSON.parse(JSON.stringify(response)).username;
            localStorage.setItem("userId",JSON.stringify(this.userId));
            localStorage.setItem("userName",JSON.stringify(this.userName));
            localStorage.setItem("Email",JSON.stringify(this.Login.email));
            localStorage.setItem("Role",JSON.stringify(this.userRole.userType));
            setTimeout(()=>this.router.navigate(['customer/dashboard']),1000);
          }
          else if(this.status==="Success" && this.active==="false"){
            alert("Admin disabled your account!!!")
          }
          else{
            this.invalidLogin=true;
            this.loginSuccess=false;
            this.router.navigate(['']);
          }
      });
    }
    
  }

}
