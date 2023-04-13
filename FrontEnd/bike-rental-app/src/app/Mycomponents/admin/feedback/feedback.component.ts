import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from 'src/app/config';
import { ServicesService } from '../../services/services.service';
declare var $:any;
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackObj:Config["Comments"][];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service:ServicesService) { }

  ngOnInit(): void {
    this.service.getComment().subscribe(data=>{
      // console.log(data);
      this.feedbackObj=data;
      $(document).ready(function(){
        $('#FeedbackTable').DataTable({
          lengthMenu: [5, 10, 20, 50, 100]
        });
      });
    })
  }

 

}
