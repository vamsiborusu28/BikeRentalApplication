import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { Config } from 'src/app/config';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-add-bikes',
  templateUrl: './add-bikes.component.html',
  styleUrls: ['./add-bikes.component.css']
})
export class AddBikesComponent implements OnInit {

  bike:Config['BikeObj'] = new Config().BikeObj;
  base64code!:any;
  submitted = false;
  id=JSON.parse(localStorage.getItem('userId')!);
  constructor(private renterService:ServicesService ,
  private router: Router) { }
  

  ngOnInit() {
  }

save() {
  this.renterService.addBike(this.id,this.bike).subscribe(data => {
    console.log(data)
    console.log(this.id);
    this.goto();
  },error=>alert("Sorry bikes details are not added!"));

}
onSubmit() {
  this.submitted = true;
  this.save();    
}
goto() {
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
    // console.log(data)
    this.bike.bikeImage = data
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