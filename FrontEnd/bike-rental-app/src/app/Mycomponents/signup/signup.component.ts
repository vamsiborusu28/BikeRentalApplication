import { Component, Input, OnInit } from '@angular/core';
import { Config } from 'src/app/config';
import { AuthService } from 'src/app/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Signup:Config["Signup"]=new Config().Signup;
  registerSuccess = false;
  invalidRegister = false;
  successMessage!: string;
  errorMessage!: string;
  helperMessage!:string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService:AuthService) { }

  ngOnInit(): void {
    
    this.helperMessage="#Note : \nButton won't be work until you fill the form correctly.......";
    // setTimeout(()=>alert(this.helperMessage),3000);
  }
  
  handleSignup(): void {
    // console.log("Gender : ",this.Signup.gender);
    // console.log("Role : ",this.Signup.userRole);
    
    if(this.Signup.userRole==='Renter') {
      this.authService.renterSingnup(this.Signup).subscribe(response=>{
        // console.log(response);
        if(response){
          this.registerSuccess = true;
          this.invalidRegister=false;
          this.successMessage = "Register done successfully!!!";
          setTimeout(()=>this.router.navigate(['']),1000);
        }
        else if(response===null){
          alert("Email already exist!!!");
        }
        else{
          this.invalidRegister=true;
          
        }
      });
    }
    else if(this.Signup.userRole==='Customer'){
      this.authService.customerSignup(this.Signup).subscribe(response => {
        // console.log(response);
        if(response){
          this.registerSuccess = true;
          this.invalidRegister=false;
          this.successMessage = "Register done successfully!!!";
          setTimeout(()=>this.router.navigate(['']),1000);
        }
        else if(response===null){
          alert("Email already exist!!!");
        }
        else{
          this.invalidRegister=true;
        }
      });
    }
    
  }
}
