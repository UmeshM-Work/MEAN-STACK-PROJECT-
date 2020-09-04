import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public invalidcred=false;

  public fbFormGroup=this.fb.group({

  
    email : ['',Validators.required],
    pass : ['',Validators.required]
  });
  
  
  constructor(private fb:FormBuilder,private router :Router,private http: HttpClient
    ){}
  
  ngOnInit(): void{}


  async login(){
    const data = this.fbFormGroup.value;
    console.log(data);
    const url = "http://localhost:3200/auth-user";
    const result : any=await this.http.post(url, data).toPromise();
    console.log(result);
  
  if (result.opr){sessionStorage.setItem( 'sid','true');this.router.navigate(['home']);}
  else{this.invalidcred=true;this.fbFormGroup.reset();}

  }
  
  
  
  }
