import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ForgotalertComponent } from '../forgotalert/forgotalert.component'

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})



export class ForgotComponent implements OnInit {


  public invalidcred=false;
  
public fbFormGroup=this.fb.group({

 
  email : ['',Validators.required],
  
  pass : ['',Validators.required]
  
});

  constructor(private fb:FormBuilder,private router :Router,private http: HttpClient,private modalService: NgbModal
    ){}

  ngOnInit(): void {
  }

  async submit() {


    const data = this.fbFormGroup.value;
    console.log(data);
    const url = "http://localhost:3200/auth-user2";
    const result : any=await this.http.post(url, data).toPromise();
    console.log(result);


    if(result.opr){
      



const url = "http://localhost:3200/updatedata";
const result:any=await this.http.post(url, data).toPromise();
console.log(result);
this.modalService.open(ForgotalertComponent,{ centered: true });
this.fbFormGroup.reset();
this.router.navigate(['login']);


    }
else{

  this.invalidcred=true;this.fbFormGroup.reset();
  
  
  }

    
  }
  


 
 
}
