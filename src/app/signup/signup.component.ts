import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SignupalertComponent } from '../signupalert/signupalert.component';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {



  // myformGroup= new FormGroup({


// fname :new FormControl(),
// pass: new FormControl()

public invalidcred=false;
public fbFormGroup=this.fb.group({

  fname : ['',Validators.required,],
  email : ['',Validators.required,Validators.pattern('[a-zA-Z0-9@]{5,30}')],
  
  pass : ['',Validators.required]
  
});




constructor(private fb:FormBuilder,private router :Router,private http: HttpClient,private modalService: NgbModal
  ){}



  
  async signup(){
    const data = this.fbFormGroup.value;
    console.log(data);
    const url = "http://localhost:3200/auth-user2";
    const result : any=await this.http.post(url, data).toPromise();
    console.log(result);
  
  if (result.opr){
   
    this.router.navigate(['signup']);this.invalidcred=true;this.fbFormGroup.reset();
   
  }
   

  else{   
   

    const url2 = "http://localhost:3200/addusers";
    const result=await this.http.post(url2, data).toPromise();
    console.log(result);
   this.router.navigate(['login']);
   this.fbFormGroup.reset();
   this.modalService.open(SignupalertComponent, { centered: true });
 
     
}


}

}





