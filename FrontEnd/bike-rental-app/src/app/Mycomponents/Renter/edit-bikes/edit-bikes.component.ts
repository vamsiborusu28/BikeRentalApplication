import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { Config } from 'src/app/config';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-edit-bikes',
  templateUrl: './edit-bikes.component.html',
  styleUrls: ['./edit-bikes.component.css']
})
export class EditBikesComponent implements OnInit {

  id!: number;
  bikes:Config['BikeObj']=new Config().BikeObj;
  submitted = false;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private renterService: ServicesService) { }
  base64code!:any;
  ngOnInit(): void {
    // this.bikes=new Bikes();
    this.submitted = false;
    this.id=this.route.snapshot.params['id'];

    this.renterService.getBikeById(this.id).subscribe(data=>{
      console.log(data)
      this.bikes=data;
    },error=>alert("User not found...."));
    ;
  }
  editBike(){
    this.renterService.updateBike(this.id,this.bikes).subscribe(data=>{
      console.log(data);
      // this.bikes=new Bikes();
      this.goto();
    },error=>alert("Sorry details are not updated"));

  }
  onSubmit() {
    this.submitted = false;
    this.editBike();    
  }
goto(){
  this.router.navigate(['renter/dashboard']);
}



onChange($event:Event ){
  const target = $event.target as HTMLInputElement;
  const file: File = (target.files as FileList)[0]; 
  //console.log(file);
  this.convertToBase64(file);
}

convertToBase64(file:File){
  const observable = new Observable((subscriber: Subscriber<any>)=>{
      this.readFile(file,subscriber);
  });

  observable.subscribe((data) => {
    console.log(data)
    this.bikes.bikeImage = data
    this.base64code = data
  });
}

readFile(file:File,subscriber:Subscriber<any>){
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  fileReader.onload=()=>{
    subscriber.next(fileReader.result);
    subscriber.complete();
  };
  fileReader.onerror=()=>{
    subscriber.error(fileReader.error);
    subscriber.complete();
  }
}

}
