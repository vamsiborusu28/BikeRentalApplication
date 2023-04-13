import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from 'src/app/config';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-customer-comments',
  templateUrl: './customer-comments.component.html',
  styleUrls: ['./customer-comments.component.css']
})
export class CustomerCommentsComponent implements OnInit {

  comment:Config['Comments'] = new Config().Comments;
  submitted = false;
  id=JSON.parse(localStorage.getItem('userId')!);
  constructor(private Service:ServicesService , private router: Router) { }
  

  ngOnInit() {
  }

save() {
  this.Service.addComment(this.comment).subscribe(data => {
    console.log(data)
    this.goto();
  }, error=>alert("Sorry comments not added..."));
}
onSubmit() {
  this.submitted = true;
  this.save();  
  
    
}
goto() {
  this.router.navigate(['customer/dashboard']);
}

}
